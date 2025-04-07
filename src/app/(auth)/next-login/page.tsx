import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ClientForm from "./ClientForm";
import { Role } from "@prisma/client";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

type SearchParams = Promise<{role? : Role} >

export default async function NextLoginPage({searchParams} : {searchParams: SearchParams}) {
  const user = await auth();
  if (user) {
    redirect('/');
  }
  const {role} = await searchParams;
  if(!role) {
    redirect('/login');
  }
  return (
    <div className="max-w-sm border mx-auto w-full p-4 bg-white text-center min-h-dvh flex flex-col gap-6 sm:rounded-xl">
      <Link href="/login" className="self-start">
        <Button variant="link">
          <ArrowLeft />
        </Button>
      </Link>
      <Image src={'/logos/RoundLogo.svg'} alt="Round Logo" className="mx-auto" width={60} height={60} />
      <div className="flex text-center flex-col gap-2">
        <h1 className="font-semibold text-xl text-primary">Hi, Welcome!</h1>
        <p className="text-sm text-primary">
          Enter your Mobile Number, we will send you a verification code.
        </p>
      </div>
      <ClientForm role={role} />
    </div>
  );
}
