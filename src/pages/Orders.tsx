
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

const orderStatuses = {
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  preparing: { label: 'Preparing', color: 'bg-blue-100 text-blue-800' },
  ready: { label: 'Ready', color: 'bg-green-100 text-green-800' },
  delivered: { label: 'Delivered', color: 'bg-purple-100 text-purple-800' },
  completed: { label: 'Completed', color: 'bg-gray-100 text-gray-800' },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-800' }
};

const orders = [
  {
    id: 1001,
    date: new Date('2025-04-24T12:30:00'),
    items: [
      { name: 'Spaghetti Bolognese', quantity: 2, price: 14.99 },
      { name: 'Garlic Bread', quantity: 1, price: 6.99 },
      { name: 'House Wine', quantity: 1, price: 8.99 }
    ],
    status: 'completed',
    total: 45.96,
    type: 'dine_in',
    table: 7
  },
  {
    id: 1002,
    date: new Date('2025-04-24T13:15:00'),
    items: [
      { name: 'Margherita Pizza', quantity: 1, price: 12.99 },
      { name: 'Tiramisu', quantity: 1, price: 7.99 }
    ],
    status: 'ready',
    total: 20.98,
    type: 'takeaway'
  },
  {
    id: 1003,
    date: new Date('2025-04-24T18:45:00'),
    items: [
      { name: 'Bruschetta', quantity: 1, price: 8.99 },
      { name: 'Margherita Pizza', quantity: 1, price: 12.99 },
      { name: 'Tiramisu', quantity: 2, price: 7.99 }
    ],
    status: 'preparing',
    total: 37.96,
    type: 'delivery',
    address: '123 Main St, Anytown'
  }
];

const Orders = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-display font-bold mb-6">Orders</h1>
      
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="active">Active Orders</TabsTrigger>
          <TabsTrigger value="history">Order History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="mt-0">
          <div className="space-y-6">
            {orders.filter(order => ['pending', 'preparing', 'ready'].includes(order.status)).map(order => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle>Order #{order.id}</CardTitle>
                      <CardDescription>
                        {format(order.date, "MMM d, yyyy 'at' h:mm a")}
                      </CardDescription>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge className={`${orderStatuses[order.status as keyof typeof orderStatuses].color}`}>
                        {orderStatuses[order.status as keyof typeof orderStatuses].label}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground mb-2">ORDER DETAILS</h3>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span>
                              {item.quantity}x {item.name}
                            </span>
                            <span className="font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t mt-3 pt-3 flex justify-between font-bold">
                        <span>Total</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground mb-2">ORDER TYPE</h3>
                      <p className="capitalize">{order.type.replace('_', ' ')}</p>
                      {order.type === 'dine_in' && (
                        <p className="text-sm text-muted-foreground">Table {order.table}</p>
                      )}
                      {order.type === 'delivery' && (
                        <p className="text-sm text-muted-foreground">{order.address}</p>
                      )}
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" className="mr-2">Track Order</Button>
                      <Button variant="outline">Contact Restaurant</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {orders.filter(order => ['pending', 'preparing', 'ready'].includes(order.status)).length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">You don't have any active orders.</p>
                <Button variant="link" className="mt-2">Browse the menu</Button>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="mt-0">
          <div className="space-y-6">
            {orders.filter(order => ['delivered', 'completed', 'cancelled'].includes(order.status)).map(order => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle>Order #{order.id}</CardTitle>
                      <CardDescription>
                        {format(order.date, "MMM d, yyyy 'at' h:mm a")}
                      </CardDescription>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge className={`${orderStatuses[order.status as keyof typeof orderStatuses].color}`}>
                        {orderStatuses[order.status as keyof typeof orderStatuses].label}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground mb-2">ORDER DETAILS</h3>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span>
                              {item.quantity}x {item.name}
                            </span>
                            <span className="font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t mt-3 pt-3 flex justify-between font-bold">
                        <span>Total</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" className="mr-2">Reorder</Button>
                      <Button variant="outline">View Receipt</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Orders;
