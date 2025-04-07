import React from 'react'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Location } from "iconsax-react"
import Link from 'next/link'
import { adminComponents, doctorComponents, patientComponents } from '@/lib/items'
import { Button } from '../ui/button'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Navitems({ role }: { role: string }) {
    const userRole = role === "admin" ? adminComponents : role === "doctor" ? doctorComponents : patientComponents
    return (
        <div className='flex gap-1 items-center md:justify-between w-full'>
            {
                userRole.map((item, index) => {
                    return (
                        <NavigationMenu key={index} className='md:flex hidden'>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href={`/${item.href}`} className={navigationMenuTriggerStyle()}>
                                        {item.title}
                                    </Link>
                                    <NavigationMenuContent className="w-[300px]">
                                        <NavigationMenuIndicator className="right-0 top-0" />
                                        <NavigationMenuViewport className="w-full bg-white" />
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    )
                }
                )}
            <div className='flex items-center justify-between w-full'>
                <Sheet>
                    <SheetTrigger asChild className='md:hidden mr-2'>
                        <Button variant={"secondary"} className='flex items-center gap-1'>
                            <Location size={18} color="#000" variant="Bulk" />
                            <p className='text-[1rem]'>Hyderbad</p>
                        </Button>
                    </SheetTrigger>

                    <SheetTrigger asChild className='md:flex hidden'>
                        <Button variant={"outline"} className='flex items-center  gap-2'>
                            <Location size={16} color="#000" variant="Bulk" />
                            Hyderbad
                        </Button>
                    </SheetTrigger>

                    <SheetContent className='p-5'>
                        <SheetHeader>
                            <SheetTitle>Select Your Location</SheetTitle>
                            <SheetDescription>
                                Enter your location to personalize content.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="mt-4 space-y-4">
                            <Input placeholder="Enter location" />
                            <Button className='w-full'>Save</Button>
                        </div>
                    </SheetContent>
                </Sheet>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild className='hidden md:flex'>
                        <Avatar className='md:ml-4 cursor-pointer'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Notifications</DropdownMenuItem>
                        <DropdownMenuItem>Wallet</DropdownMenuItem>
                        <DropdownMenuItem>Messages</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
