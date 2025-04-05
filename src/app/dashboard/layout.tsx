import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const DashboardLayout = async ({
  children,
  admin,
  doctor,
  user,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  doctor: React.ReactNode;
  user: React.ReactNode;
}) => {
  const role = (await auth())?.user.role
  const dashboardContent = (() => {
    switch (role) {
      case "ADMIN":
        return admin;
      case "DOCTOR":
        return doctor;
      case "PATIENT":
        return user;
      default:
        return redirect("/login");
    }
  })
  return <div>DashboardLayout
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">{children}</div>
      <footer className="bg-gray-800 text-white p-4">
        <p>Dashboard Footer</p>
      </footer>
    </div>
    {dashboardContent()}
  </div>;
};

export default DashboardLayout;
