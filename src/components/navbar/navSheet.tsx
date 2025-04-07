import React from 'react'
import { Button } from '../ui/button'
import { ArrowBigRightDash, Bell, MapPin, Menu, MessageSquare, User, Wallet } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { adminComponents, doctorComponents, patientComponents } from '@/lib/items'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Navsheet({ role, userName, userImage }: { role: string, userName?: string, userImage?: string }) {
    const userRole = role === "admin" ? adminComponents : role === "doctor" ? doctorComponents : patientComponents

    return (
        <div className='flex gap-0 items-center md:hidden'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={"outline"} size={"icon"} className='p-0'>
                        <Menu className='w-8 h-8' />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col p-0">

                    <div className="bg-blue-50 p-6 flex items-center gap-3 border-b">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/15 flex items-center justify-center">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">{userName || "Welcome"}</h3>
                            <p className="text-sm text-gray-500 capitalize">{role}</p>
                        </div>
                    </div>

                    <SheetHeader className="px-6 pt-6 pb-2">
                        <SheetTitle className="text-xl font-bold text-primary">Meetocure</SheetTitle>
                        <SheetDescription className="text-sm">
                            Healthcare platform dashboard
                        </SheetDescription>
                    </SheetHeader>

                    <div className="px-3 py-4 flex-1 overflow-auto">
                        <div className="flex flex-col gap-1">
                            {userRole.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="py-2.5 px-3 flex items-center gap-3 rounded-md hover:bg-blue-50 transition-colors"
                                >
                                    <ArrowBigRightDash/>
                                    <p className="font-medium">{link.name}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="px-6 py-3 border-t mt-auto">
                        <div className="flex items-center justify-around">

                            <Button variant="ghost" size="icon" className="relative">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </Button>
                            
                            <Button variant="ghost" size="icon" className="relative">
                                <MessageSquare className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                            </Button>
                            
                            <Button variant="ghost" size="icon">
                                <Wallet className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}