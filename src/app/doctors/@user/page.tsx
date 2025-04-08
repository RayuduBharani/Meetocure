"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function UserDoctors() {
    const [selectedSpecialty, setSelectedSpecialty] = useState('All');

    const specialties = ['All', 'General', 'Cardiologist', 'Dentist', 'Dermatologist', 'Neurologist', 'Gastroenterologist'];
    const doctorsList = [
        {
            id: 1,
            name: "Dr. David Patel",
            specialty: "Cardiologist",
            location: "Vijayawada",
            rating: 5.0,
            reviews: 58,
            image: "https://www.figma.com/file/yxG6werMrZ27vIVjbRcCe4/image/69b6aef797af3aa904c2599dd76230d670030dc2"
        },
        {
            id: 2,
            name: "Dr. Siva Narayana",
            specialty: "Gastroenterologist",
            location: "Vijayawada",
            rating: 5.0,
            reviews: 58,
            image: "https://www.figma.com/file/yxG6werMrZ27vIVjbRcCe4/image/69b6aef797af3aa904c2599dd76230d670030dc2"
        },
        {
            id: 3,
            name: "Dr. Srinivas",
            specialty: "Dermatologist",
            location: "Vijayawada",
            rating: 5.0,
            reviews: 58,
            image: "https://www.figma.com/file/yxG6werMrZ27vIVjbRcCe4/image/69b6aef797af3aa904c2599dd76230d670030dc2"
        },
        {
            id: 4,
            name: "Dr. Kamala",
            specialty: "Neurologist",
            location: "Vijayawada",
            rating: 5.0,
            reviews: 58,
            image: "https://www.figma.com/file/yxG6werMrZ27vIVjbRcCe4/image/69b6aef797af3aa904c2599dd76230d670030dc2"
        },
    ];

    const filteredDoctors = selectedSpecialty === 'All'
        ? doctorsList
        : doctorsList.filter(doctor => doctor.specialty === selectedSpecialty);

    return (
        <div className="container px-4 py-6">
            <div className="mb-6">
                <form className="relative mb-6 w-full flex items-center gap-4">
                    <div className="relative flex-1">
                        <Input
                            className="pl-10 pr-4 py-2 w-full"
                            placeholder="Search Doctors..."
                        />
                        <svg
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </div>
                    <Button>Search</Button>
                </form>

                <div className="flex gap-2 pb-2 mb-4 flex-wrap w-full">
                    {specialties.map(specialty => (
                        <Button
                            key={specialty}
                            variant={selectedSpecialty === specialty ? "default" : "outline"}
                            className={`rounded-full ${selectedSpecialty === specialty ? 'bg-primary' : ''}`}
                            onClick={() => setSelectedSpecialty(specialty)}
                        >
                            {specialty}
                        </Button>
                    ))}
                </div>

                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-semibold">{filteredDoctors.length} found{" "}{selectedSpecialty !== 'All' ? ` in ${selectedSpecialty}` : ''}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredDoctors.length > 0 ? filteredDoctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden h-40"
                        >
                            <div className="flex h-full">
                                <div className="w-32 h-full overflow-hidden p-2">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-full h-full rounded-md object-cover object-center"
                                    />
                                </div>

                                <div className="flex-1 p-3 flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-semibold text-base">{doctor.name}</h3>
                                        <Button
                                            variant="ghost"
                                            className="p-0 h-6 w-6 focus:outline-none"
                                        >
                                            <Heart
                                                className="text-red-500 fill-red-500"
                                                size={16}
                                            />
                                        </Button>
                                    </div>

                                    <Separator className="my-1" />

                                    <p className="font-medium text-primary text-sm mb-1">{doctor.specialty}</p>

                                    <div className="flex items-center text-gray-500 mb-1">
                                        <MapPin size={12} className="mr-1" />
                                        <span className="text-xs">{doctor.location}</span>
                                    </div>

                                    <div className="flex items-center mt-auto">
                                        <span className="font-medium text-gray-900 mr-1 text-sm">{doctor.rating}</span>
                                        <div className="flex mr-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={12}
                                                    className="text-yellow-400 fill-yellow-400"
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-500">({doctor.reviews} Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : 
                    <div>
                        <p>Not found</p>
                    </div>}
                </div>
            </div>
        </div>
    );
}