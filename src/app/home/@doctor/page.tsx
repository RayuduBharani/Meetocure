"use client"

import React from 'react';
import { Calendar, Clock, User, Info, Home, BarChart2, Calendar as CalendarIcon, Grid, UserCircle } from 'lucide-react';
import CarouselComponent from '../@user/carousal';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProfileCircle } from 'iconsax-react';
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function HomeDoctor() {
  // Sample appointment data
  const appointments = [
    {
      date: "June 13, 2025",
      time: "10.00 AM",
      patientName: "Nithin Sai",
      age: 22,
      gender: "Male"
    },
    {
      date: "June 13, 2025",
      time: "10.00 AM",
      patientName: "Nithin Sai",
      age: 22,
      gender: "Male"
    },
    {
      date: "June 13, 2025",
      time: "10.00 AM",
      patientName: "Nithin Sai",
      age: 22,
      gender: "Male"
    },
    {
      date: "June 13, 2025",
      time: "10.00 AM",
      patientName: "Nithin Sai",
      age: 22,
      gender: "Male"
    }
  ];

  // Stats data
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig


  return (
    <div className="w-full min-h-screen">
      <div className="w-full px-4 py-2">
        <CarouselComponent />

        {/* Today's Appointments */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-primary">Today Appointments</h3>
            <Link href="#" className="text-blue-600 text-sm">See All</Link>
          </div>

          {/* Appointment cards */}
          <div className="space-y-4 flex gap-5 flex-wrap-reverse w-auto h-fit">
            {appointments.map((appointment, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1 min-w-80">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-semibold">{appointment.date}</span>
                  <Clock className="w-4 h-4 ml-4" />
                  <span className="text-sm font-semibold">{appointment.time}</span>
                </div>
                <div className="mb-2">
                  <p className="font-bold">Patient Name : {appointment.patientName}</p>
                </div>
                <div className="flex items-center gap-7 text-gray-500 mb-4">
                  <div className="flex items-center text-sm">
                    <Info className="w-4 h-4 mr-1" />
                    <span>Age : {appointment.age}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ProfileCircle size={18} color="#0a4d68" variant={"Bold"} />
                    <span>Gender : {appointment.gender}</span>
                  </div>
                </div>
                <div className="flex gap-3 w-full">
                  <Button variant={"outline"}>Cancel</Button>
                  <Button>View</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-6 mb-20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-primary">Quick Stats</h3>
            <Link href="#" className="text-blue-600 text-sm">See All</Link>
          </div>

          <div className='flex gap-4 flex-wrap w-full'>
            <ChartContainer config={chartConfig} className="max-h-[250px] w-[45%]">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>

            <ChartContainer config={chartConfig} className="max-h-[250px] w-[50%]">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>

    </div>
  );
}