import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"
import Image from "next/image"
import OtpForm from "./VerifyClient"
import { auth } from "@/auth"
import ResendOtp from "./ResendOtp"

type Role = "ADMIN" | "DOCTOR" | "PATIENT"

type PageProps = {
  searchParams: Promise<{ phone?: string, role?: Role }>
}

export default async function VerifyOtpPage({ searchParams }: PageProps) {
  const user = await auth()
  if (user) {
    redirect("/")
  }
  const { phone, role } = await searchParams

  if (!phone) {
    redirect("/next-login")
  }
  const formatPhone = (phoneNumber: string) => {
    const digitsOnly = phoneNumber.replace(/\D/g, "")
    if (digitsOnly.length >= 10) {
      return digitsOnly.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
    }
    return phoneNumber
  }

  return (
    <div className="max-w-sm mx-auto border w-full p-4 bg-white text-center min-h-dvh flex flex-col gap-6 sm:rounded-xl">
      <Link href="/next-login" className="self-start">
        <Button variant="link">
          <ArrowLeft />
        </Button>
      </Link>

      <div className="flex justify-center items-center text-center flex-col gap-4">
        <Image src="/logos/Group.svg" alt="Group Logo" height={50} width={120} />
        <h1 className="font-semibold text-xl text-primary">Verify OTP</h1>
        <p className="text-sm text-primary">Enter the 6-digit code sent to +91 {formatPhone(phone)}.</p>
      </div>

      <OtpForm phone={phone} role = {role} />

      <div className="flex text-xs justify-center items-center w-full">
        <p>Didn&apos;t get the code?</p>
        <ResendOtp phone={phone} role={role as Role} />
      </div>
    </div>
  )
}

