
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Workflows = () => {
  return (
    <section className="py-8 section-fade delay-800">
      <div className="container">
        <h2 className="text-3xl font-display font-bold mb-2 text-restaurant-tertiary">Key Workflows</h2>
        <p className="mb-6 text-muted-foreground">Essential processes in the restaurant management system</p>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium text-restaurant-primary">Customer Registration & Login</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li><span className="font-medium">Registration</span>: Customer provides name, email, and password</li>
                      <li><span className="font-medium">Validation</span>: System validates email format and password strength</li>
                      <li><span className="font-medium">Account Creation</span>: System hashes password and creates customer record</li>
                      <li><span className="font-medium">Confirmation</span>: Email sent to verify account</li>
                      <li><span className="font-medium">Login</span>: Customer enters email and password</li>
                      <li><span className="font-medium">Authentication</span>: System verifies credentials and creates session</li>
                      <li><span className="font-medium">Profile Access</span>: Customer can view/edit profile and access order history</li>
                    </ol>
                    <div className="bg-muted p-3 rounded-md mt-4">
                      <p className="text-sm italic">Authentication uses secure hashing (bcrypt) and JWT tokens for session management. Optional social login integration available.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium text-restaurant-primary">Order Placement & Processing</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li><span className="font-medium">Menu Browsing</span>: Customer views menu filtered by category</li>
                      <li><span className="font-medium">Item Selection</span>: Customer adds items to cart, specifies quantity and special instructions</li>
                      <li><span className="font-medium">Order Type</span>: Customer selects dine-in, takeaway, or delivery</li>
                      <li><span className="font-medium">Cart Review</span>: Customer reviews items, quantities, and total price</li>
                      <li><span className="font-medium">Order Submission</span>: Customer submits order and selects payment method</li>
                      <li><span className="font-medium">Order Confirmation</span>: System generates order ID and sends confirmation</li>
                      <li><span className="font-medium">Kitchen Notification</span>: Order appears in kitchen display system</li>
                      <li><span className="font-medium">Order Preparation</span>: Kitchen staff updates order status as items are prepared</li>
                      <li><span className="font-medium">Order Completion</span>: Staff marks order as ready for pickup/delivery or served</li>
                      <li><span className="font-medium">Customer Notification</span>: Customer receives updates on order status</li>
                    </ol>
                    <div className="bg-muted p-3 rounded-md mt-4">
                      <p className="text-sm italic">For dine-in orders, the system can link to table management. For delivery orders, integration with delivery services is possible.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium text-restaurant-primary">Table Reservation</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li><span className="font-medium">Date & Time Selection</span>: Customer selects desired reservation date and time</li>
                      <li><span className="font-medium">Party Size</span>: Customer indicates number of guests</li>
                      <li><span className="font-medium">Table Availability</span>: System checks availability of appropriate tables</li>
                      <li><span className="font-medium">Table Assignment</span>: System assigns suitable table or suggests alternatives</li>
                      <li><span className="font-medium">Customer Details</span>: Customer provides contact information (or uses account details)</li>
                      <li><span className="font-medium">Special Requests</span>: Customer adds notes for special occasions or seating preferences</li>
                      <li><span className="font-medium">Confirmation</span>: System confirms reservation and sends confirmation email/SMS</li>
                      <li><span className="font-medium">Reminder</span>: System sends reminder before reservation time</li>
                      <li><span className="font-medium">Check-in</span>: Staff marks reservation as seated upon arrival</li>
                      <li><span className="font-medium">Completion</span>: Staff marks table as available after guests leave</li>
                    </ol>
                    <div className="bg-muted p-3 rounded-md mt-4">
                      <p className="text-sm italic">System includes deposit handling for peak times and automatic reminders to reduce no-shows.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium text-restaurant-primary">Payment Processing</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li><span className="font-medium">Payment Initiation</span>: System calculates total including tax and optional tip</li>
                      <li><span className="font-medium">Payment Method Selection</span>: Customer selects payment method (credit card, mobile payment, cash)</li>
                      <li><span className="font-medium">Payment Processing</span>: For electronic payments, system securely processes transaction</li>
                      <li><span className="font-medium">Transaction Verification</span>: System confirms payment with payment provider</li>
                      <li><span className="font-medium">Order Status Update</span>: System marks order as paid upon successful payment</li>
                      <li><span className="font-medium">Receipt Generation</span>: System generates digital receipt for customer</li>
                      <li><span className="font-medium">Reporting</span>: Transaction details recorded for financial reporting</li>
                    </ol>
                    <div className="bg-muted p-3 rounded-md mt-4">
                      <p className="text-sm italic">All payment processing uses PCI-compliant secure methods. System supports split payments and gift cards.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium text-restaurant-primary">Inventory Management</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li><span className="font-medium">Ingredient Tracking</span>: System maintains current stock levels of all ingredients</li>
                      <li><span className="font-medium">Recipe Association</span>: Menu items linked to required ingredients and quantities</li>
                      <li><span className="font-medium">Automatic Deduction</span>: When orders are placed, ingredients are deducted from inventory</li>
                      <li><span className="font-medium">Low Stock Alerts</span>: System generates notifications when inventory reaches threshold</li>
                      <li><span className="font-medium">Purchasing</span>: Automated purchase orders generated for low stock items</li>
                      <li><span className="font-medium">Receiving</span>: Staff records newly received inventory items</li>
                      <li><span className="font-medium">Waste Tracking</span>: Recording of expired or wasted inventory</li>
                      <li><span className="font-medium">Reports</span>: Cost analysis and usage patterns for management review</li>
                    </ol>
                    <div className="bg-muted p-3 rounded-md mt-4">
                      <p className="text-sm italic">Advanced analytics for inventory optimization and wastage reduction. Optional barcode scanning functionality for easy receiving and tracking.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Workflows;
