
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Calendar, User, Menu as MenuIcon } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-display font-bold mb-6">Restaurant Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-restaurant-tertiary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">152</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Reservations</CardTitle>
            <Calendar className="h-4 w-4 text-restaurant-tertiary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">Next 24 hours</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <User className="h-4 w-4 text-restaurant-tertiary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320</div>
            <p className="text-xs text-muted-foreground">+8.2% this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Menu Items</CardTitle>
            <MenuIcon className="h-4 w-4 text-restaurant-tertiary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64</div>
            <p className="text-xs text-muted-foreground">8 categories</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {[
                { id: 1005, customer: "Ankit Sharma", table: 5, items: 3, amount: 842.80, status: "Completed", time: "5 min ago" },
                { id: 1004, customer: "Shivam Kumar", table: 3, items: 2, amount: 649.00, status: "Preparing", time: "15 min ago" },
                { id: 1003, customer: "Nidhi Singh", table: 7, items: 4, amount: 1242.50, status: "Completed", time: "25 min ago" },
                { id: 1002, customer: "Honey Chaudhary", table: 2, items: 2, amount: 498.00, status: "Delivered", time: "35 min ago" },
                { id: 1001, customer: "Megha Anant", table: 6, items: 3, amount: 742.80, status: "Completed", time: "45 min ago" },
              ].map((order, index) => (
                <AccordionItem key={order.id} value={`order-${order.id}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between w-full pr-4">
                      <span>Order #{order.id}</span>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                        ${order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'Preparing' ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'}`}>
                        {order.status}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pl-4 text-sm">
                      <p><span className="font-medium">Customer:</span> {order.customer}</p>
                      <p><span className="font-medium">Table:</span> {order.table}</p>
                      <p><span className="font-medium">Items:</span> {order.items}</p>
                      <p><span className="font-medium">Amount:</span> ₹{order.amount}</p>
                      <p className="text-muted-foreground">{order.time}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Reservations</CardTitle>
            <CardDescription>Next reservations today</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {[
                { time: "12:30 PM", name: "Rajdeep Singh", guests: 4, table: 7 },
                { time: "1:00 PM", name: "Vaishnavi Patel", guests: 2, table: 12 },
                { time: "1:30 PM", name: "Ambika Sharma", guests: 6, table: 15 },
                { time: "2:00 PM", name: "Honey Chaudhary", guests: 3, table: 3 },
                { time: "5:30 PM", name: "Shivam Kumar", guests: 5, table: 9 },
              ].map((reservation, index) => (
                <AccordionItem key={index} value={`reservation-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between w-full pr-4">
                      <span>{reservation.name}</span>
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        {reservation.time}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pl-4 text-sm">
                      <p><span className="font-medium">Guests:</span> {reservation.guests}</p>
                      <p><span className="font-medium">Table:</span> {reservation.table}</p>
                      <p><span className="font-medium">Time:</span> {reservation.time}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
