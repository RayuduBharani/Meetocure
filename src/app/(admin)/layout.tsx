import React from 'react'

export default function adminLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="">
            {children}
            admin layout
        </div>
    )
}
