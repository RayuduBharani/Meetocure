import React from 'react';
import { MapPin, Star, Heart, Clock, Building } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselComponent from './carousal';
import Categories from './categories';
import { Separator } from '@/components/ui/separator';

export default function Patient() {
  const doctors = [
    {
      name: "Dr. David Patel",
      specialty: "Cardiologist",
      location: "Cardiology Center, USA",
      rating: 5.0,
      reviews: 58,
      image: "https://www.figma.com/file/yxG6werMrZ27vIVjbRcCe4/image/cd28fb297105142c69959a420689d6b2cd9ec395"
    },
    {
      name: "Dr. Sarah Johnson",
      specialty: "Neurologist",
      location: "Brain Care Center, USA",
      rating: 4.9,
      reviews: 42,
      image: "https://s3-alpha-sig.figma.com/img/86b5/e652/0800f3ee36c944ded270e36c1763aaed?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L7yr7vHg8HJUa9cKlfhdhn8jJY508C64FJzjfRomlQk7EDGUQ5vy~NBNUJiUz0yV4mtJmofVw8KvToMxtsgXcEzDGdTGqbiDFetgvlOJRcEr9MDJdqcbL5jCMdvUtJbaHCS8bu8na1BaFUNKBOGiSI4jd5J051PQegRDrJYMGst-fhu9O0UnaDIHitRMnKv9MzPPlKsdVnNhBSVZWkOC9i6pof1XH0W9pF9tLa~1ngewGnZcHSAug6vi4yUlv3ROetp9gJGAnbwwc13OTYzM7AdboRFTmXwSmts3cxqHfsWUrmmhlwp9tn7BPwJQur1~HSPDROMPZpMbW3PNDkf-lQ__"
    },
    {
      name: "Dr. Michael Lee",
      specialty: "Pulmonologist",
      location: "Lung Health Clinic, USA",
      rating: 4.8,
      reviews: 36,
      image: "https://s3-alpha-sig.figma.com/img/6e76/389f/b8c80d0899c8c8ea2b2d81ea6e01642f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HvoyLo30HGtj6OSbZR-SZ8Y0lNnEbaCT--MDkBbRyb2pbOvMmIfJTuHjf2dIDj6bUkkrzPXfZYgzd-3djac7tVj1x6G~2lPF-nmvdB0XkBatq4YSFiNZRTocOMmhGwo0HmKMpvkK5esiX~viO4F-00loSXK2HJSzYw5ZXWuotsntig-lvJEGU92wu5aH0H9p1aFSqC1A1wtCQMs~c6wpj54Osmy7bdz6FFB5QKMCO~i-jHaRc5cullxGRi0bd6fbjzKs9lZVfE~bimvYDSofP46GdqsGjWIgr9cpGarD97KiLu9SsHYVOJORfDehS5WKTJ~~3rDDcKw4e5~4xHElrg__"
    },
    {
      name: "Dr. Emily Wilson",
      specialty: "Dentist",
      location: "Smile Dental Clinic, USA",
      rating: 4.7,
      reviews: 29,
      image: "https://s3-alpha-sig.figma.com/img/cd07/5bf3/109ec8b485f9355c2ceb7f853b8ae466?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tf6d39e7fMUHutsUkj4jZuXHKXt2X0qhisuIVF2GOHZNvFykjHBVPpG-NCML3kn2gbhD4L39Mng0BYcew6SrnpDsPBRdUXuTXT8frOdD46HhcNKdDdge9l-kL8EwT3HHncDIUdGYhFFLJ4fzyISdUSNCAJ07leTnSLxgS9ptmrlEKi~DDWu4~Ggt9soOd4XF2IqmrFwYHtFzLrVtYGJTjVgtXPALE0OnXR4ynWygZ2mhDXe9XhRP91VhuIFnCNrJPBceEbwa0lg1qauRzrLMbV7WK49ZOSt0jYJwWb1oajuxHMDluvrihpmG1ya42tp4xhxA7lMQLt7xDjyH7GZHbw__"
    },
    {
      name: "Dr. David Patel",
      specialty: "Cardiologist",
      location: "Cardiology Center, USA",
      rating: 5.0,
      reviews: 58,
      image: "https://www.figma.com/file/yxG6werMrZ27vIVjbRcCe4/image/cd28fb297105142c69959a420689d6b2cd9ec395"
    },
    {
      name: "Dr. Sarah Johnson",
      specialty: "Neurologist",
      location: "Brain Care Center, USA",
      rating: 4.9,
      reviews: 42,
      image: "https://s3-alpha-sig.figma.com/img/86b5/e652/0800f3ee36c944ded270e36c1763aaed?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L7yr7vHg8HJUa9cKlfhdhn8jJY508C64FJzjfRomlQk7EDGUQ5vy~NBNUJiUz0yV4mtJmofVw8KvToMxtsgXcEzDGdTGqbiDFetgvlOJRcEr9MDJdqcbL5jCMdvUtJbaHCS8bu8na1BaFUNKBOGiSI4jd5J051PQegRDrJYMGst-fhu9O0UnaDIHitRMnKv9MzPPlKsdVnNhBSVZWkOC9i6pof1XH0W9pF9tLa~1ngewGnZcHSAug6vi4yUlv3ROetp9gJGAnbwwc13OTYzM7AdboRFTmXwSmts3cxqHfsWUrmmhlwp9tn7BPwJQur1~HSPDROMPZpMbW3PNDkf-lQ__"
    },
    {
      name: "Dr. Michael Lee",
      specialty: "Pulmonologist",
      location: "Lung Health Clinic, USA",
      rating: 4.8,
      reviews: 36,
      image: "https://s3-alpha-sig.figma.com/img/6e76/389f/b8c80d0899c8c8ea2b2d81ea6e01642f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HvoyLo30HGtj6OSbZR-SZ8Y0lNnEbaCT--MDkBbRyb2pbOvMmIfJTuHjf2dIDj6bUkkrzPXfZYgzd-3djac7tVj1x6G~2lPF-nmvdB0XkBatq4YSFiNZRTocOMmhGwo0HmKMpvkK5esiX~viO4F-00loSXK2HJSzYw5ZXWuotsntig-lvJEGU92wu5aH0H9p1aFSqC1A1wtCQMs~c6wpj54Osmy7bdz6FFB5QKMCO~i-jHaRc5cullxGRi0bd6fbjzKs9lZVfE~bimvYDSofP46GdqsGjWIgr9cpGarD97KiLu9SsHYVOJORfDehS5WKTJ~~3rDDcKw4e5~4xHElrg__"
    },
    {
      name: "Dr. Emily Wilson",
      specialty: "Dentist",
      location: "Smile Dental Clinic, USA",
      rating: 4.7,
      reviews: 29,
      image: "https://s3-alpha-sig.figma.com/img/cd07/5bf3/109ec8b485f9355c2ceb7f853b8ae466?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tf6d39e7fMUHutsUkj4jZuXHKXt2X0qhisuIVF2GOHZNvFykjHBVPpG-NCML3kn2gbhD4L39Mng0BYcew6SrnpDsPBRdUXuTXT8frOdD46HhcNKdDdge9l-kL8EwT3HHncDIUdGYhFFLJ4fzyISdUSNCAJ07leTnSLxgS9ptmrlEKi~DDWu4~Ggt9soOd4XF2IqmrFwYHtFzLrVtYGJTjVgtXPALE0OnXR4ynWygZ2mhDXe9XhRP91VhuIFnCNrJPBceEbwa0lg1qauRzrLMbV7WK49ZOSt0jYJwWb1oajuxHMDluvrihpmG1ya42tp4xhxA7lMQLt7xDjyH7GZHbw__"
    }
  ];

  const hospitals = [
    {
      name: "Sunrise Health Clinic",
      location: "Cardiology Center, USA",
      rating: 5.0,
      reviews: 58,
      distance: "2.5 km",
      time: "40min",
      type: "Hospital",
      image: "https://s3-alpha-sig.figma.com/img/9f50/e360/edb80c5d0e9f43d9cc9e7c48030fa945?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V4pax5E0D4aZKE-TDcYyb320a8jPNLWh38E2foYzVcTEtHUn8ly2S5LnoctYed1mshQONHJV4lHcNc8GlX2tuI4im~D6xGYnf2FirfssIeiMViwCjG0BvZXK4XGbCPCvoc89v5ge8Er1WTsn-jdJtgAtYE8HiDW4t1bJkvYiehQ6Se7US~FQpfezaz7GErfaZ3atqSDyUhDikIUdAXiwRS5YJV~d4IHC-XP5GWL3c7Kd2GvNSUdSZ3OvLAbJYVeliCBQ9~LycjHNv96ahTUznnpm82CFiKCZF5p45SPnwqTTiaJZFPOQOHUtwAv9BZpc-RJ4W98~qzrNjEcZr~z7TA__"
    },
    {
      name: "City Medical Center",
      location: "Downtown, USA",
      rating: 4.8,
      reviews: 42,
      distance: "3.7 km",
      time: "55min",
      type: "Hospital",
      image: "https://s3-alpha-sig.figma.com/img/9f50/e360/edb80c5d0e9f43d9cc9e7c48030fa945?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V4pax5E0D4aZKE-TDcYyb320a8jPNLWh38E2foYzVcTEtHUn8ly2S5LnoctYed1mshQONHJV4lHcNc8GlX2tuI4im~D6xGYnf2FirfssIeiMViwCjG0BvZXK4XGbCPCvoc89v5ge8Er1WTsn-jdJtgAtYE8HiDW4t1bJkvYiehQ6Se7US~FQpfezaz7GErfaZ3atqSDyUhDikIUdAXiwRS5YJV~d4IHC-XP5GWL3c7Kd2GvNSUdSZ3OvLAbJYVeliCBQ9~LycjHNv96ahTUznnpm82CFiKCZF5p45SPnwqTTiaJZFPOQOHUtwAv9BZpc-RJ4W98~qzrNjEcZr~z7TA__"
    },
    {
      name: "Wellness Care Institute",
      location: "Westside, USA",
      rating: 4.9,
      reviews: 47,
      distance: "5.2 km",
      time: "65min",
      type: "Hospital",
      image: "https://s3-alpha-sig.figma.com/img/9f50/e360/edb80c5d0e9f43d9cc9e7c48030fa945?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V4pax5E0D4aZKE-TDcYyb320a8jPNLWh38E2foYzVcTEtHUn8ly2S5LnoctYed1mshQONHJV4lHcNc8GlX2tuI4im~D6xGYnf2FirfssIeiMViwCjG0BvZXK4XGbCPCvoc89v5ge8Er1WTsn-jdJtgAtYE8HiDW4t1bJkvYiehQ6Se7US~FQpfezaz7GErfaZ3atqSDyUhDikIUdAXiwRS5YJV~d4IHC-XP5GWL3c7Kd2GvNSUdSZ3OvLAbJYVeliCBQ9~LycjHNv96ahTUznnpm82CFiKCZF5p45SPnwqTTiaJZFPOQOHUtwAv9BZpc-RJ4W98~qzrNjEcZr~z7TA__"
    },
    {
      name: "Regional Medical Center",
      location: "Eastside, USA",
      rating: 4.7,
      reviews: 39,
      distance: "4.3 km",
      time: "50min",
      type: "Hospital",
      image: "https://s3-alpha-sig.figma.com/img/9f50/e360/edb80c5d0e9f43d9cc9e7c48030fa945?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V4pax5E0D4aZKE-TDcYyb320a8jPNLWh38E2foYzVcTEtHUn8ly2S5LnoctYed1mshQONHJV4lHcNc8GlX2tuI4im~D6xGYnf2FirfssIeiMViwCjG0BvZXK4XGbCPCvoc89v5ge8Er1WTsn-jdJtgAtYE8HiDW4t1bJkvYiehQ6Se7US~FQpfezaz7GErfaZ3atqSDyUhDikIUdAXiwRS5YJV~d4IHC-XP5GWL3c7Kd2GvNSUdSZ3OvLAbJYVeliCBQ9~LycjHNv96ahTUznnpm82CFiKCZF5p45SPnwqTTiaJZFPOQOHUtwAv9BZpc-RJ4W98~qzrNjEcZr~z7TA__"
    },
    {
      name: "Sunrise Health Clinic",
      location: "Cardiology Center, USA",
      rating: 5.0,
      reviews: 58,
      distance: "2.5 km",
      time: "40min",
      type: "Hospital",
      image: "https://s3-alpha-sig.figma.com/img/9f50/e360/edb80c5d0e9f43d9cc9e7c48030fa945?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V4pax5E0D4aZKE-TDcYyb320a8jPNLWh38E2foYzVcTEtHUn8ly2S5LnoctYed1mshQONHJV4lHcNc8GlX2tuI4im~D6xGYnf2FirfssIeiMViwCjG0BvZXK4XGbCPCvoc89v5ge8Er1WTsn-jdJtgAtYE8HiDW4t1bJkvYiehQ6Se7US~FQpfezaz7GErfaZ3atqSDyUhDikIUdAXiwRS5YJV~d4IHC-XP5GWL3c7Kd2GvNSUdSZ3OvLAbJYVeliCBQ9~LycjHNv96ahTUznnpm82CFiKCZF5p45SPnwqTTiaJZFPOQOHUtwAv9BZpc-RJ4W98~qzrNjEcZr~z7TA__"
    },
    {
      name: "City Medical Center",
      location: "Downtown, USA",
      rating: 4.8,
      reviews: 42,
      distance: "3.7 km",
      time: "55min",
      type: "Hospital",
      image: "https://s3-alpha-sig.figma.com/img/9f50/e360/edb80c5d0e9f43d9cc9e7c48030fa945?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V4pax5E0D4aZKE-TDcYyb320a8jPNLWh38E2foYzVcTEtHUn8ly2S5LnoctYed1mshQONHJV4lHcNc8GlX2tuI4im~D6xGYnf2FirfssIeiMViwCjG0BvZXK4XGbCPCvoc89v5ge8Er1WTsn-jdJtgAtYE8HiDW4t1bJkvYiehQ6Se7US~FQpfezaz7GErfaZ3atqSDyUhDikIUdAXiwRS5YJV~d4IHC-XP5GWL3c7Kd2GvNSUdSZ3OvLAbJYVeliCBQ9~LycjHNv96ahTUznnpm82CFiKCZF5p45SPnwqTTiaJZFPOQOHUtwAv9BZpc-RJ4W98~qzrNjEcZr~z7TA__"
    },
    {
      name: "Wellness Care Institute",
      location: "Westside, USA",
      rating: 4.9,
      reviews: 47,
      distance: "5.2 km",
      time: "65min",
      type: "Hospital",
      image: "https://s3-alpha-sig.figma.com/img/9f50/e360/edb80c5d0e9f43d9cc9e7c48030fa945?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V4pax5E0D4aZKE-TDcYyb320a8jPNLWh38E2foYzVcTEtHUn8ly2S5LnoctYed1mshQONHJV4lHcNc8GlX2tuI4im~D6xGYnf2FirfssIeiMViwCjG0BvZXK4XGbCPCvoc89v5ge8Er1WTsn-jdJtgAtYE8HiDW4t1bJkvYiehQ6Se7US~FQpfezaz7GErfaZ3atqSDyUhDikIUdAXiwRS5YJV~d4IHC-XP5GWL3c7Kd2GvNSUdSZ3OvLAbJYVeliCBQ9~LycjHNv96ahTUznnpm82CFiKCZF5p45SPnwqTTiaJZFPOQOHUtwAv9BZpc-RJ4W98~qzrNjEcZr~z7TA__"
    },
    {
      name: "Regional Medical Center",
      location: "Eastside, USA",
      rating: 4.7,
      reviews: 39,
      distance: "4.3 km",
      time: "50min",
      type: "Hospital",
      image: "https://s3-alpha-sig.figma.com/img/9f50/e360/edb80c5d0e9f43d9cc9e7c48030fa945?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V4pax5E0D4aZKE-TDcYyb320a8jPNLWh38E2foYzVcTEtHUn8ly2S5LnoctYed1mshQONHJV4lHcNc8GlX2tuI4im~D6xGYnf2FirfssIeiMViwCjG0BvZXK4XGbCPCvoc89v5ge8Er1WTsn-jdJtgAtYE8HiDW4t1bJkvYiehQ6Se7US~FQpfezaz7GErfaZ3atqSDyUhDikIUdAXiwRS5YJV~d4IHC-XP5GWL3c7Kd2GvNSUdSZ3OvLAbJYVeliCBQ9~LycjHNv96ahTUznnpm82CFiKCZF5p45SPnwqTTiaJZFPOQOHUtwAv9BZpc-RJ4W98~qzrNjEcZr~z7TA__"
    }
  ];

  return (
    <div className='px-2 py-2 w-full h-auto'>
      <CarouselComponent />
      <Categories />

      {/* Nearby Doctors */}
      <div className="w-auto mt-5">
        <Carousel>
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold text-lg">Nearby Doctors</h1>
            <div className="flex gap-2">
              <CarouselPrevious className="static h-8 w-8 translate-x-0 translate-y-0" />
              <CarouselNext className="static h-8 w-8 translate-x-0 translate-y-0" />
            </div>
          </div>

          <CarouselContent>
            {doctors.map((doctor, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4  ">
                <div className="relative bg-white rounded-xl shadow-sm border-2 overflow-hidden h-full">
                  <div className="absolute top-4 right-4 z-10">
                    <div className="p-2 bg-primary bg-opacity-60 rounded-full">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{doctor.name}</h2>
                    <p className="text-blue-600 text-sm font-medium">{doctor.specialty}</p>
                    <div className="flex items-center mt-2">
                      <MapPin size={16} className="text-gray-400" />
                      <p className="text-sm text-gray-500 ml-1">{doctor.location}</p>
                    </div>
                    <Separator className='my-3'/>
                    <div className="flex items-center mt-3">
                      <p className="text-gray-700 font-medium">{doctor.rating.toFixed(1)}</p>
                      <div className="flex text-yellow-400 ml-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 ml-2">({doctor.reviews} Reviews)</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Hospitals Carousel */}
      <div className="w-full mt-5">
        <Carousel className="w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-lg">Nearby Hospitals</h1>
          <div className="flex gap-2">
            <CarouselPrevious className="static h-8 w-8 translate-x-0 translate-y-0" />
            <CarouselNext className="static h-8 w-8 translate-x-0 translate-y-0" />
          </div>
        </div>

          <CarouselContent>
            {hospitals.map((hospital, index) => (
              <CarouselItem key={index} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4  ">
                <div className="relative bg-white border-2 rounded-xl shadow-sm overflow-hidden h-full">
                  <div className="absolute top-4 right-4 z-10">
                    <div className="p-2 bg-primary bg-opacity-60 rounded-full">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={hospital.image} 
                      alt={hospital.name} 
                      className="w-full h-40 object-cover"
                    />
                    
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-primary">{hospital.name}</h2>
                    <div className="flex items-center mt-2">
                      <MapPin size={16} className="text-gray-400" />
                      <p className="text-sm text-gray-500 ml-1">{hospital.location}</p>
                    </div>

                    <div className="flex items-center mt-2">
                      <p className="text-primary font-medium">{hospital.rating.toFixed(1)}</p>
                      <div className="flex text-yellow-400 ml-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 ml-2">({hospital.reviews} Reviews)</p>
                    </div>
                    <Separator className='my-3'/>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <Clock size={16} className="text-gray-400" />
                        <p className="text-sm text-gray-500 ml-1">{hospital.distance}/{hospital.time}</p>
                      </div>
                      <div className="flex items-center">
                        <Building size={16} className="text-gray-400" />
                        <p className="text-sm text-gray-500 ml-1">{hospital.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}