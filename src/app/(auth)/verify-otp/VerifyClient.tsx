"use client";

import { memo, useActionState, useEffect } from "react";
import { verifyOtpAction } from "@/actions/verifyOtp";
import { toast } from "sonner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Role = "ADMIN" | "DOCTOR" | "PATIENT";

interface OtpFormProps {
  phone: string;
  role?: Role;
}

interface VerifyOtpState {
  success: boolean | null; // null indicates no submission yet
  message: string;
  redirectTo?: string;
}

// Memoized Submit Button
const SubmitButton = memo(({ isPending }: { isPending: boolean }) => (
  <Button
    type="submit"
    variant="primary"
    className="h-[2.8rem] rounded-full my-3 bg-primary w-full text-primary-foreground"
    disabled={isPending}
  >
    {isPending ? "Verifying..." : "Verify OTP"}
  </Button>
));
SubmitButton.displayName = "SubmitButton";

const OtpForm = ({ phone, role }: OtpFormProps) => {
  const router = useRouter();

  // Set initial state success as null so that it doesn't trigger a toast on mount.
  const [state, formAction, isPending] = useActionState<VerifyOtpState, FormData>(
    verifyOtpAction,
    {
      success: null,
      message: "",
      redirectTo: "",
    }
  );

  useEffect(() => {
    // Debug log to help you verify what state is coming from the server action.
    console.log("verifyOtpAction state:", state);
    
    if (state?.success === true && state.redirectTo && state.redirectTo !== "") {
      toast.success(state.message || "OTP verified successfully!");
      router.push(state.redirectTo);
    } else if (state?.success === false && state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="flex items-center flex-col gap-4">
      <input type="hidden" name="phone" value={phone} />
      <input type="hidden" name="role" value={role} />
      <InputOTP name="otp" maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <SubmitButton isPending={isPending} />
    </form>
  );
};
OtpForm.displayName = "OtpForm";

export default OtpForm;
