
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UserStories = () => {
  const [activeTab, setActiveTab] = useState("manager");
  
  return (
    <section className="py-8 section-fade delay-200">
      <div className="container">
        <h2 className="text-3xl font-display font-bold mb-2 text-restaurant-tertiary">User Stories</h2>
        <p className="mb-6 text-muted-foreground">Perspectives from different restaurant stakeholders</p>
        
        <Tabs defaultValue="manager" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="manager">Restaurant Manager</TabsTrigger>
            <TabsTrigger value="customer">Customer</TabsTrigger>
            <TabsTrigger value="chef">Chef</TabsTrigger>
          </TabsList>
          
          <TabsContent value="manager" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-primary mb-2">Menu Management</h3>
                    <p>"As a restaurant manager, I want to easily update menu items, prices, and availability so that customers always see accurate information."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-primary mb-2">Reservation Overview</h3>
                    <p>"As a restaurant manager, I want to view all upcoming reservations in a calendar format so that I can plan staffing and table arrangements accordingly."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-primary mb-2">Sales Reporting</h3>
                    <p>"As a restaurant manager, I want access to comprehensive sales reports so that I can analyze performance, identify trends, and make data-driven business decisions."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-primary mb-2">Staff Management</h3>
                    <p>"As a restaurant manager, I want to manage staff access levels and permissions so that employees can only access the parts of the system relevant to their roles."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-primary mb-2">Inventory Control</h3>
                    <p>"As a restaurant manager, I want to receive alerts when inventory items are running low so that I can reorder supplies before they run out."</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="customer" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-secondary mb-2">Account Management</h3>
                    <p>"As a customer, I want to create an account and save my preferences so that I can have a personalized dining experience."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-secondary mb-2">Menu Browsing</h3>
                    <p>"As a customer, I want to browse the menu with filtering options so that I can easily find dishes that match my dietary preferences."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-secondary mb-2">Table Reservation</h3>
                    <p>"As a customer, I want to reserve a table with specific seating preferences so that I can plan my dining experience in advance."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-secondary mb-2">Order Tracking</h3>
                    <p>"As a customer, I want to track the status of my delivery order so that I know when to expect my food."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-secondary mb-2">Payment Options</h3>
                    <p>"As a customer, I want multiple secure payment options so that I can choose my preferred payment method."</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="chef" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-tertiary mb-2">Order Queue</h3>
                    <p>"As a chef, I want to view incoming orders in a prioritized queue so that I can prepare meals in the correct order."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-tertiary mb-2">Order Details</h3>
                    <p>"As a chef, I want to see detailed order specifications and dietary requirements so that I can prepare dishes according to customer preferences."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-tertiary mb-2">Order Status Updates</h3>
                    <p>"As a chef, I want to easily update the status of orders (cooking, ready) so that servers and customers know when their food is ready."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-tertiary mb-2">Ingredient Check</h3>
                    <p>"As a chef, I want to quickly check ingredient availability so that I can inform management when supplies are running low."</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-restaurant-tertiary mb-2">Special Instructions</h3>
                    <p>"As a chef, I want to view special instructions prominently on each order so that I don't miss any customer requests."</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UserStories;
