import AdminLayout from "./(admin)/layout";
import DoctorLayout from "./(doctor)/layout";
import PatientLayout from "./(patient)/layout";

import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  interface User {
    name: string;
    role: "admin" | "doctor" | "patient";
  }
  const user: User = {
    name: "Bharani",
    role: "patient"
  }
  return (
    <div>
      {
        user.role === "admin" ? (
          <AdminLayout>
            {children}
          </AdminLayout>
        ) : user.role === "doctor" ? (
          <div>
            <DoctorLayout>
              {children}
            </DoctorLayout>
          </div>
        ) : user.role === "patient" ? (
          <PatientLayout>
            {children}
          </PatientLayout>
        ) : null
      }
    </div>
  );
}
