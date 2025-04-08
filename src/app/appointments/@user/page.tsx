import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Heart } from 'lucide-react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Location } from 'iconsax-react'

const appointments = [
  {
    id: 1,
    doctorName: "Dr. Srinivas",
    specialty: "Dermatologist",
    location: "Vijayawada",
    date: "June 10, 2025",
    time: "11:30 AM",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    doctorName: "Dr. Srinivas",
    specialty: "Dermatologist",
    location: "Vijayawada",
    date: "June 10, 2025",
    time: "11:30 AM",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    doctorName: "Dr. Kamala",
    specialty: "Neurologist",
    location: "Vijayawada",
    date: "June 3, 2025",
    time: "12:00 PM",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    doctorName: "Dr. Reddy",
    specialty: "Cardiologist",
    location: "Vijayawada",
    date: "May 28, 2025",
    time: "2:30 PM",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
  }
]

export default function AppointmentComponent() {
  return (
    <div className='px-4 py-2'>
      <Tabs defaultValue="Upcomming" className='w-full'>
        <TabsList className="flex bg-gray-100 rounded-sm shadow-sm max-sm:w-full max-md:w-full">
          <TabsTrigger value="Upcomming">Upcomming</TabsTrigger>
          <TabsTrigger value="Completed">Completed</TabsTrigger>
          <TabsTrigger value="Cancled">Cancled</TabsTrigger>
        </TabsList>

        <TabsContent value="Upcomming" className='mt-4'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium">{appointment.date}</span>
                  <Clock className="h-4 w-4 text-primary ml-2" />
                  <span className="font-medium">{appointment.time}</span>
                </div>

                <div className="flex items-start gap-3">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage src={appointment.image} />
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold truncate">{appointment.doctorName}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600">{appointment.specialty}</p>
                    <p className="text-sm text-gray-500 truncate">{appointment.location}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1 text-sm">Canceled</Button>
                  <Button size="sm" className="flex-1 text-sm">Reschedule</Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="Completed" className='mt-4'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium">{appointment.date}</span>
                  <Clock className="h-4 w-4 text-primary ml-2" />
                  <span className="font-medium">{appointment.time}</span>
                </div>

                <div className="flex items-start gap-3">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage src={appointment.image} />
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold truncate">{appointment.doctorName}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600">{appointment.specialty}</p>
                    <p className="text-sm text-gray-500 truncate">{appointment.location}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1 text-sm">Add Review</Button>
                  <Button size="sm" className="flex-1 text-sm">Re-Book</Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="Cancled" className='mt-4'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium">{appointment.date}</span>
                  <Clock className="h-4 w-4 text-primary ml-2" />
                  <span className="font-medium">{appointment.time}</span>
                </div>

                <div className="flex items-start gap-3">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage src={appointment.image} />
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold truncate">{appointment.doctorName}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600">{appointment.specialty}</p>
                    <div className='flex gap-2 items-center'>
                      <Location variant='Bulk' color='currentColor' size={15} />
                      <p className="text-sm text-gray-500 truncate">{appointment.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1 text-sm">Reason</Button>
                  <Button size="sm" className="flex-1 text-sm">Re-Book</Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
