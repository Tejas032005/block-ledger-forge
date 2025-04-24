
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

const myReservations = [
  {
    id: 1,
    date: new Date('2025-04-25T18:30:00'),
    guests: 4,
    status: 'confirmed',
    table: 12
  },
  {
    id: 2,
    date: new Date('2025-05-10T20:00:00'),
    guests: 2,
    status: 'confirmed',
    table: 7
  }
];

const Reservations = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | undefined>();
  const [guests, setGuests] = useState<string>("2");
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-display font-bold mb-6">Reservations</h1>
      
      <Tabs defaultValue="new" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="new">New Reservation</TabsTrigger>
          <TabsTrigger value="my">My Reservations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="new" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Book a Table</CardTitle>
              <CardDescription>Select your date, time, and party size</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label>Time</Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger className="w-full">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Select time" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map(slot => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Number of Guests</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="w-full">
                      <div className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Guest count" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {guestOptions.map(option => (
                        <SelectItem key={option} value={option.toString()}>
                          {option} {option === 1 ? 'person' : 'people'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Special Requests</Label>
                <Input placeholder="Any dietary requirements or special occasions?" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full md:w-auto bg-restaurant-primary hover:bg-restaurant-primary/90">
                Reserve Table
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="my" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Your Upcoming Reservations</CardTitle>
              <CardDescription>Manage your restaurant bookings</CardDescription>
            </CardHeader>
            <CardContent>
              {myReservations.length > 0 ? (
                <div className="space-y-4">
                  {myReservations.map(reservation => (
                    <div key={reservation.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{format(reservation.date, "EEEE, MMMM d, yyyy")}</h3>
                        <p className="text-sm text-muted-foreground">{format(reservation.date, "h:mm a")} • {reservation.guests} guests • Table {reservation.table}</p>
                      </div>
                      <div className="mt-2 md:mt-0 space-x-2">
                        <Button variant="outline" size="sm">Modify</Button>
                        <Button variant="destructive" size="sm">Cancel</Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">You don't have any upcoming reservations.</p>
                  <Button variant="link" className="mt-2">Book a table now</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reservations;
