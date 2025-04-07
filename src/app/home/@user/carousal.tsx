"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from '@/lib/items';

export default function CarouselComponent() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isHovering]);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div
            className="w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="relative h-40 sm:h-60 w-full overflow-hidden shadow-lg rounded-xl">

                <div
                    className="flex h-full w-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full h-full relative flex-shrink-0">
                            <div className="absolute inset-0 bg-black/30 z-10"></div>
                            <div className="relative w-full h-full">
                                <img
                                    src={slide.image}
                                    alt={`Slide ${slide.id}`}
                                    className="w-full h-full object-top object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="absolute top-1/2 left-4 -translate-y-1/2"
                    onClick={goToPrevSlide}
                    aria-label="Previous slide"
                >
                    <ChevronLeft />
                </Button>
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="absolute top-1/2 right-4 -translate-y-1/2"
                    onClick={goToNextSlide}
                    aria-label="Next slide"
                >
                    <ChevronRight />
                </Button>

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${index === activeIndex
                                ? "bg-primary scale-110"
                                : "bg-white "
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}