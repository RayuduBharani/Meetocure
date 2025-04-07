import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import NavBar from "@/components/navbar/nav";
import Footer from "@/components/footer";

const HomeLayout = async ({
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
    const homeContent = (() => {
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
            {homeContent()}
            {/* <Footer/> */}
        </div>
    )
};

export default HomeLayout;
