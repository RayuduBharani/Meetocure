/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { signIn } from "@/auth";
import { prisma } from "@/prisma";

type Role = "PATIENT" | "DOCTOR" | "ADMIN";

interface VerifyOtpResult {
  success: boolean;
  message: string;
  redirectTo?: string;
}

export async function verifyOtpAction(
  _prevState: any,
  formData: FormData
): Promise<VerifyOtpResult> {
  const phone = formData.get("phone")?.toString().trim() || "";
  const otp = formData.get("otp")?.toString().trim() || "";
  const roleInput = formData.get("role")?.toString().trim().toUpperCase();

  const allowedRoles: Role[] = ["PATIENT", "DOCTOR", "ADMIN"];
  const isValidPhone = /^\d{10}$/.test(phone);
  const isValidOtp = /^\d{6}$/.test(otp);
  const isValidRole = allowedRoles.includes(roleInput as Role);

  if (!isValidPhone || !isValidOtp || !isValidRole) {
    return { success: false, message: "Invalid input" };
  }

  const role = roleInput as Role;

  const otpEntry = await prisma.otp.findUnique({ where: { phone } });
  if (!otpEntry) return { success: false, message: "No OTP found" };
  if (otpEntry.expiresAt < new Date()) return { success: false, message: "OTP expired" };
  if (otpEntry.otp !== otp) return { success: false, message: "Incorrect OTP" };

  // Create user if not exists
  let user = await prisma.user.findUnique({ where: { phone } });
  if (!user) {
    user = await prisma.user.create({
      data: {
        phone,
        role,
        is_verified: false,
      },
    });
  }

  try {
    await signIn("credentials", {
      phone,
      otp,
      role,
      redirect: false,
    });
    return { success: true, message: 'Login Successful.', redirectTo: "/" };
  } catch (err) {
    console.error("SignIn error:", err);
    return { success: false, message: "Login failed" };
  }
}
