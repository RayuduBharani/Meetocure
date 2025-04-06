/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { prisma } from '@/prisma'

// Generate a 6-digit OTP
function generateOtpCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function sendVerificationCode(
  prevState: any,
  formData: FormData
): Promise<{ success: boolean; message: string; redirectTo?: string }> {
  const phone = formData.get("mobile-number")?.toString().replace(/\D/g, "") || "";
  const role = formData.get("role")?.toString().trim().toUpperCase();

  const allowedRoles = ["PATIENT", "DOCTOR", "ADMIN"];

  if (!phone || phone.length !== 10) {
    return { success: false, message: "Invalid phone number" };
  }

  if (!role || !allowedRoles.includes(role)) {
    return { success: false, message: "Invalid role selected" };
  }

  try {
    await prisma.otp.deleteMany({ where: { phone } });

    const otp = generateOtpCode();

    await prisma.otp.create({
      data: { phone, otp },
    });

    // TODO: Send SMS here (optional)

    return {
      success: true,
      message: "OTP sent successfully",
      redirectTo: `/verify-otp?phone=${phone}&role=${role}`,
    };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
}
