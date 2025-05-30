import { Suspense } from "react";
import LoginClient from "./LoginClient";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

// Server Component
export default async function LoginPage() {
  const user = await auth()
  if (user) {
    redirect('/')
  }
  const slides = [
    { key: "iphone1", src: "/phones/iphone1.png" },
    { key: "iphone2", src: "/phones/iphone2.png" },
    { key: "iphone3", src: "/phones/iphone3.png" },
    { key: "iphone4", src: "/phones/iphone4.png" },
  ];

  return (
    <div className="w-screen h-dvh flex bg-primary items-center justify-center">
      <div className="max-w-sm p-6 min-h-dvh flex flex-col justify-between gap-6 sm:rounded-xl relative">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginClient slides={slides} />
        </Suspense>
      </div>
    </div>
  );
}
