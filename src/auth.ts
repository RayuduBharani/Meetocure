import NextAuth, { DefaultSession, NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Role } from "@prisma/client";
import { Adapter, AdapterUser } from "next-auth/adapters";
import { prisma } from "@/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

type ExtendedUser = {
  id: string;
  phone: string;
  full_name?: string | null;
  role: Role;
};

declare module "next-auth/adapters" {
  interface AdapterUser {
    phone: string;
    full_name?: string | null;
    role: string;
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
      credentials: {
        phone: { label: "Phone Number", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        const { phone, otp } = credentials as { phone: string; otp: string };

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

          await prisma.otp.delete({ where: { phone } });
          const user = await prisma.user.findUnique({ where: { phone } });
          if (!user) {
            return null;
          }
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
    strategy : 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.phone = (user as AdapterUser).phone
        token.role = (user as AdapterUser).role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.phone = token.phone as string
        session.user.role = token.role as Role
      }
      return session
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
