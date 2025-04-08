"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Clock, Heart, MapPin, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function HospitalsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    // Categories for hospitals
    const categories = ['All', 'Hospital', 'Clinic', 'Dentist Hosp'];
    
    // Hospitals data 
    const hospitalsList = [
        {
            id: 1,
            name: "Sunrise Health Hospital",
            category: "Hospital",
            location: "Vijayawada",
            distance: "2.5 km/40min",
            rating: 5.0,
            reviews: 58,
            image: "https://s3-alpha-sig.figma.com/img/0b53/b0b9/f213d7dbdf0e01693c868dd621270fcb?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GyYEaNim~pVJpQKmIdbhpROEi5vzSYEUzy0AgQgSNSKyjmhGKzS1FuCXp3eHi7uLOwsWVFKaUYCm0PNevzNRqlqMxZrDlfaIYZyA~HeBV13fgVcJgdSCYC15AU0CyEF~1GdjLmhL948I8IZN7vw2GcP5QI3NTcQO0Y49xESJNjmrkGQPPiDb2Kd4OdU8aM50INo-fXz-TSr0~8f1WbZJwshr~Us8QgZMqXd84cUlSM3OnOawMRixVd9GfSee8oTuXjPuyrYpDuPO0R3uORj-RShbqWEJJiSK6A8x9HD6dykCJPU8G3aByL2rY-lqmVaAfm9z6T6dRbGyVTnOJ16VaA__"
        },
        {
            id: 2,
            name: "Manipal Hospital",
            category: "Hospital",
            location: "Vijayawada",
            distance: "2.5 km/40min",
            rating: 5.0,
            reviews: 58,
            image: "https://s3-alpha-sig.figma.com/img/0b53/b0b9/f213d7dbdf0e01693c868dd621270fcb?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GyYEaNim~pVJpQKmIdbhpROEi5vzSYEUzy0AgQgSNSKyjmhGKzS1FuCXp3eHi7uLOwsWVFKaUYCm0PNevzNRqlqMxZrDlfaIYZyA~HeBV13fgVcJgdSCYC15AU0CyEF~1GdjLmhL948I8IZN7vw2GcP5QI3NTcQO0Y49xESJNjmrkGQPPiDb2Kd4OdU8aM50INo-fXz-TSr0~8f1WbZJwshr~Us8QgZMqXd84cUlSM3OnOawMRixVd9GfSee8oTuXjPuyrYpDuPO0R3uORj-RShbqWEJJiSK6A8x9HD6dykCJPU8G3aByL2rY-lqmVaAfm9z6T6dRbGyVTnOJ16VaA__"
        },
        {
            id: 3,
            name: "Kamineni Hospitals",
            category: "Hospital",
            location: "Vijayawada",
            distance: "2.5 km/40min",
            rating: 5.0,
            reviews: 58,
            image: "https://s3-alpha-sig.figma.com/img/0b53/b0b9/f213d7dbdf0e01693c868dd621270fcb?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GyYEaNim~pVJpQKmIdbhpROEi5vzSYEUzy0AgQgSNSKyjmhGKzS1FuCXp3eHi7uLOwsWVFKaUYCm0PNevzNRqlqMxZrDlfaIYZyA~HeBV13fgVcJgdSCYC15AU0CyEF~1GdjLmhL948I8IZN7vw2GcP5QI3NTcQO0Y49xESJNjmrkGQPPiDb2Kd4OdU8aM50INo-fXz-TSr0~8f1WbZJwshr~Us8QgZMqXd84cUlSM3OnOawMRixVd9GfSee8oTuXjPuyrYpDuPO0R3uORj-RShbqWEJJiSK6A8x9HD6dykCJPU8G3aByL2rY-lqmVaAfm9z6T6dRbGyVTnOJ16VaA__"
        },
        {
            id: 4,
            name: "Aayush Hospitals",
            category: "Hospital",
            location: "Vijayawada",
            distance: "2.5 km/40min",
            rating: 5.0,
            reviews: 58,
            image: "https://s3-alpha-sig.figma.com/img/0b53/b0b9/f213d7dbdf0e01693c868dd621270fcb?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GyYEaNim~pVJpQKmIdbhpROEi5vzSYEUzy0AgQgSNSKyjmhGKzS1FuCXp3eHi7uLOwsWVFKaUYCm0PNevzNRqlqMxZrDlfaIYZyA~HeBV13fgVcJgdSCYC15AU0CyEF~1GdjLmhL948I8IZN7vw2GcP5QI3NTcQO0Y49xESJNjmrkGQPPiDb2Kd4OdU8aM50INo-fXz-TSr0~8f1WbZJwshr~Us8QgZMqXd84cUlSM3OnOawMRixVd9GfSee8oTuXjPuyrYpDuPO0R3uORj-RShbqWEJJiSK6A8x9HD6dykCJPU8G3aByL2rY-lqmVaAfm9z6T6dRbGyVTnOJ16VaA__"
        },
    ];

    const filteredHospitals = selectedCategory === 'All'
        ? hospitalsList
        : hospitalsList.filter(hospital => hospital.category === selectedCategory);

    return (
        <div className="container px-4 py-6 bg-gray-50">
            <div className="mb-6">
                {/* Search form */}
                <form className="relative mb-6 w-full flex items-center gap-4">
                    <div className="relative flex-1">
                        <Input
                            className="pl-10 pr-4 py-2 w-full"
                            placeholder="Search Hospitals..."
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
                    {categories.map(category => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            className={`rounded-full ${selectedCategory === category ? 'bg-primary text-white' : 'bg-white border border-gray-300 text-gray-800'}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Results count and sorting */}
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-semibold text-gray-800">{filteredHospitals.length} founds</p>
                </div>

                {/* Hospitals List View */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredHospitals.length > 0 ? filteredHospitals.map((hospital) => (
                        <div
                            key={hospital.id}
                            className="bg-white rounded-lg shadow-sm overflow-hidden flex"
                        >
                            <div className="w-36 p-2">
                                <img
                                    src={hospital.image}
                                    alt={hospital.name}
                                    className="rounded-md w-full h-full object-cover object-center"
                                />
                            </div>

                            <div className="flex-1 p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-md text-primary">{hospital.name}</h3>
                                    <Button
                                        variant="ghost"
                                        className="h-8 w-8"
                                    >
                                        <Heart
                                            className="text-gray-400"
                                            size={20}
                                        />
                                    </Button>
                                </div>

                                <Separator className="my-2" />

                                <div className="flex items-center gap-6 mb-2">
                                    <div className="flex items-center text-gray-500">
                                        <Clock size={16} className="mr-1" />
                                        <p className="text-xs">{hospital.distance}</p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-500 mb-3">
                                    <MapPin size={16} className="mr-1" />
                                    <p className="text-xs">{hospital.location}</p>
                                </div>

                                <div className="flex items-center">
                                    <p className="font-medium text-foreground mr-2">{hospital.rating}</p>
                                    <div className="flex mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className="text-yellow-400 fill-yellow-400"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500">({hospital.reviews} Reviews)</p>
                                </div>
                            </div>
                        </div>
                    )) :
                        <div className="text-center py-8">
                            <p className="text-gray-500">No hospitals found</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}