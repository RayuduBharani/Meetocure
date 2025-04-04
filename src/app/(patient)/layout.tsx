import React from 'react'

export default function PatientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            {children}
            patient layout
        </div>
    )
}
