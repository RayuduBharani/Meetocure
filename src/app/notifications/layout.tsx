import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import NavBar from "@/components/navbar/nav";

const NotificationLayout = async ({
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
    const notificationContent = (() => {
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
    return (
        <div className="w-full h-dvh">
            <NavBar role={role as string} />
            {notificationContent()}
        </div>
    )
};

export default NotificationLayout;
