/// <reference types="vite-plugin-svgr/client" />
import { ArrowLeft, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import RoundLogo from "app/src/assets/RoundLogo.svg?react";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
} from "~/components/ui/alert-dialog";
import Logo from "app/src/assets/logo.svg?react";

const NextLoginPage: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const isValid: boolean = mobileNumber.length === 10 && /^\d{10}$/.test(mobileNumber);
  const navigate = useNavigate();

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setShowPopup(true);
      // Simulate sending OTP (e.g., API call)
      setTimeout(() => {
        setShowPopup(false);
        navigate("/otp-verification", { state: { mobileNumber } });
      }, 2000);
    }
  };

  return (
    <div className="max-w-sm w-full p-4 bg-white text-center min-h-dvh flex flex-col gap-6 sm:rounded-xl">
      <Link className="self-start" to="/login">
        <Button variant="link">
          <ArrowLeft />
        </Button>
      </Link>
      <RoundLogo className="mx-auto" />
      <div className="flex text-center flex-col gap-2">
        <h1 className="font-semibold text-xl text-primary">Hi, Welcome!</h1>
        <p className="text-sm text-primary">
          Enter your Mobile Number, we will send you a verification code.
        </p>
      </div>
      <form className="flex flex-col gap-2" onSubmit={handleSendCode}>
        <Label className="text-sm text-muted-foreground" htmlFor="mobile-number">
          Mobile Number
        </Label>
        <div className="relative flex items-center">
          <Phone className="absolute left-3 h-5 w-5 text-muted-foreground" />
          <Input
            className="border-muted-foreground text-sm placeholder:text-sm placeholder:text-muted-foreground h-[2.8rem] pl-10"
            id="mobile-number"
            placeholder="Enter your Mobile Number"
            value={mobileNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMobileNumber(e.target.value.replace(/\D/g, ""))
            }
            maxLength={10}
            type="tel"
          />
        </div>
        <Button
          className={`h-[2.8rem] rounded-full my-3 ${
            isValid ? "bg-primary text-primary-foreground" : "bg-muted text-white cursor-not-allowed"
          }`}
          type="submit"
          disabled={!isValid}
        >
          Send Code
        </Button>
      </form>

      {/* Popup for Sending OTP */}
      <AlertDialog open={showPopup}>
        <AlertDialogContent className="flex flex-col gap-4 items-center justify-center">
          <Logo className="w-24 h-24" />
          <p className="text-primary text-nowrap font-semibold">Sending OTP...</p>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default NextLoginPage;