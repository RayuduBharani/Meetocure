import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import NavBar from "@/components/navbar/nav";

const DashboardLayout = async ({
  admin,
  doctor,
  user,
}: {
  admin: React.ReactNode;
  doctor: React.ReactNode;
  user: React.ReactNode;
}) => {
  const role = (await auth())?.user.role;
  if (!role) {
    redirect("/login");
  }
  return role === "ADMIN" ? admin : role === "DOCTOR" ? doctor : user;
};

export default DashboardLayout;
