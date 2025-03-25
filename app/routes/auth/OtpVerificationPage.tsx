import { ArrowLeft } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { useState } from "react";

interface LocationState {
  mobileNumber?: string;
}

const OtpVerificationPage: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const { mobileNumber } = (location.state || {}) as LocationState;

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      // Simulate OTP verification (e.g., API call)
      setTimeout(() => {
        alert("OTP Verified Successfully!");
        navigate("/home");
      }, 1000);
    }
  };

  return (
    <div className="max-w-sm w-full p-4 bg-white text-center min-h-dvh flex flex-col gap-6 sm:rounded-xl">
      <Link className="self-start" to="/next-login">
        <Button variant="link">
          <ArrowLeft />
        </Button>
      </Link>
      <div className="flex text-center flex-col gap-2">
        <h1 className="font-semibold text-xl text-primary">Verify OTP</h1>
        <p className="text-sm text-primary">
          Enter the 6-digit code sent to {mobileNumber || "your number"}.
        </p>
      </div>
      <form className="flex flex-col gap-2" onSubmit={handleVerifyOtp}>
        <Label className="text-sm text-muted-foreground" htmlFor="otp">
          OTP Code
        </Label>
        <Input
          className="border-muted-foreground text-sm placeholder:text-sm placeholder:text-muted-foreground h-[2.8rem]"
          id="otp"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setOtp(e.target.value.replace(/\D/g, ""))
          }
          maxLength={6}
          type="text"
        />
        <Button
          className={`h-[2.8rem] rounded-full my-3 ${
            otp.length === 6 ? "bg-primary text-primary-foreground" : "bg-muted text-white cursor-not-allowed"
          }`}
          type="submit"
          disabled={otp.length !== 6}
        >
          Verify OTP
        </Button>
      </form>
    </div>
  );
};

export default OtpVerificationPage;