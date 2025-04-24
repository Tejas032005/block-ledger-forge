
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const DatabaseSchema = () => {
  return (
    <section className="py-8 section-fade delay-400">
      <div className="container">
        <h2 className="text-3xl font-display font-bold mb-2 text-restaurant-tertiary">Database Schema</h2>
        <p className="mb-6 text-muted-foreground">Entities and relationships powering the restaurant system</p>
        
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>ER Diagram Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border p-4 rounded-md">
                <pre className="text-xs md:text-sm overflow-x-auto whitespace-pre-wrap">
{`+-------------+       +-------------+       +-------------+
|  Customers  |       |   Orders    |       |  Order_Items |
+-------------+       +-------------+       +-------------+
| PK: id      |------>| PK: id      |------>| PK: id      |
| name        |       | FK: customer|       | FK: order   |
| email       |       | order_type  |       | FK: menu    |
| phone       |       | status      |       | quantity    |
| address     |       | created_at  |       | notes       |
| password    |       | total       |       | price       |
+-------------+       +-------------+       +-------------+
                             |
                             |
                      +-------------+       +-------------+
                      |   Tables    |       |    Menu     |
                      +-------------+       +-------------+
                      | PK: id      |       | PK: id      |
                      | number      |       | name        |
                      | capacity    |       | description |
                      | status      |       | price       |
                      +-------------+       | category    |
                             |              | image       |
                             |              | availability|
                      +-------------+       +-------------+
                      |Reservations |               |
                      +-------------+               |
                      | PK: id      |               |
                      | FK: customer|               |
                      | FK: table   |               |
                      | date_time   |               |
                      | duration    |               |
                      | guests      |               |
                      | status      |               |
                      +-------------+               |
                                                   |
                                            +-------------+
                                            | Categories  |
                                            +-------------+
                                            | PK: id      |
                                            | name        |
                                            | description |
                                            +-------------+`}
                </pre>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tables Structure</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <h3 className="font-semibold text-restaurant-primary mb-3">Customers</h3>
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Column</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Constraints</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>PRIMARY KEY, AUTO_INCREMENT</TableCell>
                    <TableCell>Unique identifier for the customer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">name</TableCell>
                    <TableCell>VARCHAR(100)</TableCell>
                    <TableCell>NOT NULL</TableCell>
                    <TableCell>Customer's full name</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">email</TableCell>
                    <TableCell>VARCHAR(100)</TableCell>
                    <TableCell>UNIQUE, NOT NULL</TableCell>
                    <TableCell>Customer's email address</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">phone</TableCell>
                    <TableCell>VARCHAR(20)</TableCell>
                    <TableCell>NULL</TableCell>
                    <TableCell>Customer's phone number</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">address</TableCell>
                    <TableCell>VARCHAR(255)</TableCell>
                    <TableCell>NULL</TableCell>
                    <TableCell>Customer's delivery address</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">password</TableCell>
                    <TableCell>VARCHAR(255)</TableCell>
                    <TableCell>NOT NULL</TableCell>
                    <TableCell>Hashed password for authentication</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">created_at</TableCell>
                    <TableCell>TIMESTAMP</TableCell>
                    <TableCell>DEFAULT CURRENT_TIMESTAMP</TableCell>
                    <TableCell>Account creation timestamp</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <h3 className="font-semibold text-restaurant-primary mb-3">Menu</h3>
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Column</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Constraints</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>PRIMARY KEY, AUTO_INCREMENT</TableCell>
                    <TableCell>Unique identifier for the menu item</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">category_id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>FOREIGN KEY (Categories.id)</TableCell>
                    <TableCell>Reference to the category</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">name</TableCell>
                    <TableCell>VARCHAR(100)</TableCell>
                    <TableCell>NOT NULL</TableCell>
                    <TableCell>Name of the menu item</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">description</TableCell>
                    <TableCell>TEXT</TableCell>
                    <TableCell>NULL</TableCell>
                    <TableCell>Description of the menu item</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">price</TableCell>
                    <TableCell>DECIMAL(10,2)</TableCell>
                    <TableCell>NOT NULL</TableCell>
                    <TableCell>Price of the menu item</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">image</TableCell>
                    <TableCell>VARCHAR(255)</TableCell>
                    <TableCell>NULL</TableCell>
                    <TableCell>URL/path to the item's image</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">availability</TableCell>
                    <TableCell>BOOLEAN</TableCell>
                    <TableCell>DEFAULT TRUE</TableCell>
                    <TableCell>Whether the item is available</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <h3 className="font-semibold text-restaurant-primary mb-3">Orders</h3>
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Column</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Constraints</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>PRIMARY KEY, AUTO_INCREMENT</TableCell>
                    <TableCell>Unique identifier for the order</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">customer_id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>FOREIGN KEY (Customers.id), NULL</TableCell>
                    <TableCell>Reference to the customer (NULL for guest orders)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">order_type</TableCell>
                    <TableCell>ENUM</TableCell>
                    <TableCell>NOT NULL</TableCell>
                    <TableCell>'dine_in', 'takeaway', or 'delivery'</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">table_id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>FOREIGN KEY (Tables.id), NULL</TableCell>
                    <TableCell>Reference to the table (for dine-in orders)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">status</TableCell>
                    <TableCell>ENUM</TableCell>
                    <TableCell>NOT NULL</TableCell>
                    <TableCell>'pending', 'preparing', 'ready', 'delivered', 'completed', 'cancelled'</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">total</TableCell>
                    <TableCell>DECIMAL(10,2)</TableCell>
                    <TableCell>NOT NULL</TableCell>
                    <TableCell>Total amount of the order</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">created_at</TableCell>
                    <TableCell>TIMESTAMP</TableCell>
                    <TableCell>DEFAULT CURRENT_TIMESTAMP</TableCell>
                    <TableCell>Order creation timestamp</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <h3 className="font-semibold text-restaurant-primary mb-3">Order_Items</h3>
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Column</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Constraints</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>PRIMARY KEY, AUTO_INCREMENT</TableCell>
                    <TableCell>Unique identifier for the order item</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">order_id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>FOREIGN KEY (Orders.id)</TableCell>
                    <TableCell>Reference to the order</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">menu_id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>FOREIGN KEY (Menu.id)</TableCell>
                    <TableCell>Reference to the menu item</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">quantity</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>NOT NULL DEFAULT 1</TableCell>
                    <TableCell>Quantity of the item ordered</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">price</TableCell>
                    <TableCell>DECIMAL(10,2)</TableCell>
                    <TableCell>NOT NULL</TableCell>
                    <TableCell>Price at the time of order (per unit)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">notes</TableCell>
                    <TableCell>VARCHAR(255)</TableCell>
                    <TableCell>NULL</TableCell>
                    <TableCell>Special instructions for the item</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="font-semibold text-restaurant-primary mb-3">Reservations</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Column</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Constraints</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>PRIMARY KEY, AUTO_INCREMENT</TableCell>
                    <TableCell>Unique identifier for the reservation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">customer_id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>FOREIGN KEY (Customers.id)</TableCell>
                    <TableCell>Reference to the customer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">table_id</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>FOREIGN KEY (Tables.id)</TableCell>
                    <TableCell>Reference to the table</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">date_time</TableCell>
                    <TableCell>DATETIME</TableCell>
                    <TableCell>NOT NULL</TableCell>
                    <TableCell>Date and time of the reservation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">duration</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>NOT NULL DEFAULT 60</TableCell>
                    <TableCell>Duration in minutes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">guests</TableCell>
                    <TableCell>INT</TableCell>
                    <TableCell>NOT NULL</TableCell>
                    <TableCell>Number of guests</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">status</TableCell>
                    <TableCell>ENUM</TableCell>
                    <TableCell>NOT NULL</TableCell>
                    <TableCell>'confirmed', 'seated', 'completed', 'cancelled', 'no_show'</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DatabaseSchema;
