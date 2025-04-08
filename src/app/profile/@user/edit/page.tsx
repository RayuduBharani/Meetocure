"use client";

import React, { useState, ChangeEvent } from 'react';
import { User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Gender = "Male" | "Female" | "Other";

interface UserProfile {
  name: string;
  phone: string;
  avatar: string;
  dob: string;
  gender: Gender;
}

export default function EditProfileForm() {
  const [user, setUser] = useState<UserProfile>({
    name: "Bharani Rayudu",
    phone: "+91 70759243575",
    avatar: "https://s3-alpha-sig.figma.com/img/2ce2/5608/ef3a819f709acd7e36cbd62ca067e29e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iwsJ5KKO0L~CU1cR4UizxuGPpbD7mJTPlkPtKUBwbqZdsGUuSLy84BXWwTTUrT4NNC559GhprX~7CKxh-jUqrlz1ZUkXfGM34yEPLrE-Dzeg1Hb2jbHPQFpFg-aRJeJG2yJeMX5wRUElXX7NDfTVikzdk1~xBaD7e4kypH06SfHHUeF-UVhwHycrszv60RxFEqP4sVGBnWQIP2EzaDbb0IqO89qyANvSTU0UgyqQBV2FfsavT3DOVtmvrRl0hkffC8-no9APFUoatxtlH3-4yg7IPeuEHNDVPJgILDFqnoRPULO~MF11oj~6J5PXAuJX3-0eYiZlhdXLdyaC9sWP1w__",
    dob: "16/08/2005",
    gender: "Male",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const setGender = (gender: Gender) => {
    setUser((prev) => ({ ...prev, gender }));
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      {/* Profile Picture */}
      <div className="flex justify-center mb-3">
        <div className="relative">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-0 right-0 bg-primary rounded-full text-white shadow-sm hover:bg-teal-700"
          >
            <User size={16} />
          </Button>
        </div>
      </div>

      <h1 className="text-lg font-bold text-center text-primary mb-6">Edit</h1>

      {/* Form Fields */}
      <div className="space-y-5">
        <div>
          <Label htmlFor="fullName" className="text-primary">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-primary">Mobile Number</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="dob" className="text-primary">Date of Birth</Label>
          <div className="relative">
            <Input
              type="text"
              id="dob"
              name="dob"
              value={user.dob}
              onChange={handleChange}
              className="mt-1"
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          </div>
        </div>

        {/* Gender */}
        <div>
          <Label className="text-primary">Gender</Label>
          <div className="flex gap-2 mt-1">
            {["Male", "Female", "Other"].map((gender) => (
              <Button
                key={gender}
                type="button"
                variant={user.gender === gender ? "default" : "outline"}
                onClick={() => setGender(gender as Gender)}
                className={user.gender === gender ? "bg-primary" : ""}
              >
                {gender}
              </Button>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <Button
        variant={"primary"}
          className="w-full"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
