"use client";

import React, { useState } from 'react';
import { ChevronRight, PenLine, Bell, Wallet, MessageSquare, Settings, LifeBuoy, FileText, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Nutan Sai Nandam",
    phone: "+91 8639068288",
    avatar: "https://s3-alpha-sig.figma.com/img/2ce2/5608/ef3a819f709acd7e36cbd62ca067e29e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iwsJ5KKO0L~CU1cR4UizxuGPpbD7mJTPlkPtKUBwbqZdsGUuSLy84BXWwTTUrT4NNC559GhprX~7CKxh-jUqrlz1ZUkXfGM34yEPLrE-Dzeg1Hb2jbHPQFpFg-aRJeJG2yJeMX5wRUElXX7NDfTVikzdk1~xBaD7e4kypH06SfHHUeF-UVhwHycrszv60RxFEqP4sVGBnWQIP2EzaDbb0IqO89qyANvSTU0UgyqQBV2FfsavT3DOVtmvrRl0hkffC8-no9APFUoatxtlH3-4yg7IPeuEHNDVPJgILDFqnoRPULO~MF11oj~6J5PXAuJX3-0eYiZlhdXLdyaC9sWP1w__"
  });

  const menuItems = [
    { icon: <PenLine size={20} />, label: "Edit Profile", href: "/profile/edit" },
    { icon: <Bell size={20} />, label: "Notifications", href: "/notifications" },
    { icon: <Wallet size={20} />, label: "Wallet", href: "/wallet" },
    { icon: <MessageSquare size={20} />, label: "Chat with AI", href: "/chat" },
    { icon: <Settings size={20} />, label: "Settings", href: "/settings" },
    { icon: <LifeBuoy size={20} />, label: "Help and Support", href: "/help" },
    { icon: <FileText size={20} />, label: "Terms and Conditions", href: "/terms" },
    { icon: <LogOut size={20} />, label: "Log Out", href: "/" },
  ];

  return (
    <div className="max-w-md mx-auto overflow-hidden">
      {/* Profile Header */}
      <div className="flex flex-col items-center py-2">
        <div className="relative mb-4">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          <Button size={"icon"} className="absolute bottom-0 right-0 bg-teal-600 rounded-full text-white shadow-sm hover:bg-teal-700 transition-colors" asChild>
            <Link href={"/profile/edit"}><PenLine size={13} /></Link>
          </Button>
        </div>
        <h2 className="text-lg font-semibold text-primary">{user.name}</h2>
        <p className="text-sm text-gray-500 mt-1">{user.phone}</p>
      </div>

      {/* Menu Items */}
      <div className='p-2'>
        {menuItems.map((item, index) => (
          <Button
            asChild
            variant={"ghost"}
            key={index}
            className="w-full flex items-center justify-between p-6"
          >
            <Link href={item.href}>
              <div className="flex items-center">
                <span className="text-primary mr-4">{item.icon}</span>
                <span className="text-gray-700 text-sm">{item.label}</span>
              </div>
              {index < menuItems.length - 1 && <ChevronRight size={16} className="text-gray-400" />}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}