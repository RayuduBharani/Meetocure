import NextAuth, { DefaultSession, NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Role } from "@prisma/client";
import { Adapter } from "next-auth/adapters";
import { prisma } from '@/prisma';
import { PrismaAdapter } from "@auth/prisma-adapter";

type ExtendedUser = {
  id: string;
  phone: string;
  full_name?: string | null;
  role: Role;
};

declare module "next-auth/adapters" {
  interface AdapterUser {
    phone: string;           // Required phone field
    full_name?: string | null; // Optional full_name field
    role: string;            // Replace 'string' with your actual role type (e.g., Role enum)
  }
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser & DefaultSession["user"];
  }
}

const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialsProvider({
      id: "phone-otp",
      name: "Phone OTP",
      credentials: {
        phone: { label: "Phone Number", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        const { phone, otp } = credentials as { phone: string; otp?: string };

        // Step 1: Generate OTP when only phone is provided
        if (typeof otp === "undefined") {
          const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

          let user = await prisma.user.findUnique({ where: { phone } });
          if (!user) {
            user = await prisma.user.create({
              data: {
                phone,
                role: "PATIENT",
                is_verified: false,
              },
            });
          }

          await prisma.otp.upsert({
            where: { phone },
            update: {
              otp: generatedOtp,
              createdAt: new Date(),
              expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes expiration
            },
            create: {
              phone,
              otp: generatedOtp,
              expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes expiration
            },
          });

          return null; // Indicates authentication is incomplete, waiting for OTP
        }

        // Step 2: Verify OTP when both phone and OTP are provided
        if (phone && otp) {
          const storedOtp = await prisma.otp.findUnique({ where: { phone } });

          if (!storedOtp) {
            throw new Error("OTP not found");
          }

          if (storedOtp.expiresAt < new Date()) {
            throw new Error("OTP expired");
          }

          if (storedOtp.otp !== otp) {
            throw new Error("Invalid OTP");
          }

          // OTP is valid, clean up and verify user
          await prisma.otp.delete({ where: { phone } });
          const user = await prisma.user.update({
            where: { phone },
            data: { is_verified: true },
          });

          return {
            id: user.id,
            phone: user.phone,
            full_name: user.full_name,
            role: user.role,
          };
        }

        throw new Error("Invalid credentials");
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.phone = user.phone;
      session.user.full_name = user.full_name;
      session.user.role = user.role as Role;
      return session;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);