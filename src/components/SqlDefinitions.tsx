
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SqlDefinitions = () => {
  return (
    <section className="py-8 section-fade delay-600">
      <div className="container">
        <h2 className="text-3xl font-display font-bold mb-2 text-restaurant-tertiary">SQL Table Definitions</h2>
        <p className="mb-6 text-muted-foreground">SQL create table statements for the database</p>
        
        <Tabs defaultValue="customers">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="order_items">Order Items</TabsTrigger>
            <TabsTrigger value="reservations">Reservations</TabsTrigger>
          </TabsList>
          
          <Card>
            <TabsContent value="customers" className="mt-0">
              <CardHeader>
                <CardTitle>Customers Table</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <pre className="text-xs md:text-sm">
{`CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(20),
  address VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Add index for faster lookups
CREATE INDEX idx_customer_email ON customers(email);`}
                  </pre>
                </div>
              </CardContent>
            </TabsContent>
            
            <TabsContent value="menu" className="mt-0">
              <CardHeader>
                <CardTitle>Menu Table</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <pre className="text-xs md:text-sm">
{`CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255)
);

CREATE TABLE menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image VARCHAR(255),
  calories INT,
  dietary_flags VARCHAR(100),
  availability BOOLEAN DEFAULT TRUE,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- Add indexes for faster queries
CREATE INDEX idx_menu_category ON menu(category_id);
CREATE INDEX idx_menu_availability ON menu(availability);
CREATE INDEX idx_menu_featured ON menu(featured);`}
                  </pre>
                </div>
              </CardContent>
            </TabsContent>
            
            <TabsContent value="orders" className="mt-0">
              <CardHeader>
                <CardTitle>Orders Table</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <pre className="text-xs md:text-sm">
{`CREATE TABLE tables (
  id INT AUTO_INCREMENT PRIMARY KEY,
  number INT NOT NULL UNIQUE,
  capacity INT NOT NULL,
  status ENUM('available', 'occupied', 'reserved', 'maintenance') DEFAULT 'available'
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  order_type ENUM('dine_in', 'takeaway', 'delivery') NOT NULL,
  table_id INT,
  status ENUM('pending', 'preparing', 'ready', 'delivered', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
  total DECIMAL(10,2) NOT NULL,
  payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
  payment_method VARCHAR(50),
  notes TEXT,
  delivery_address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE SET NULL,
  FOREIGN KEY (table_id) REFERENCES tables(id) ON DELETE SET NULL
);

-- Add indexes for faster lookups
CREATE INDEX idx_order_customer ON orders(customer_id);
CREATE INDEX idx_order_status ON orders(status);
CREATE INDEX idx_order_created ON orders(created_at);`}
                  </pre>
                </div>
              </CardContent>
            </TabsContent>
            
            <TabsContent value="order_items" className="mt-0">
              <CardHeader>
                <CardTitle>Order Items Table</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <pre className="text-xs md:text-sm">
{`CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  menu_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  price DECIMAL(10,2) NOT NULL,
  notes VARCHAR(255),
  status ENUM('pending', 'preparing', 'ready', 'served', 'cancelled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (menu_id) REFERENCES menu(id) ON DELETE RESTRICT
);

-- Add indexes for faster joins
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_order_items_menu ON order_items(menu_id);`}
                  </pre>
                </div>
              </CardContent>
            </TabsContent>
            
            <TabsContent value="reservations" className="mt-0">
              <CardHeader>
                <CardTitle>Reservations Table</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <pre className="text-xs md:text-sm">
{`CREATE TABLE reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  table_id INT NOT NULL,
  date_time DATETIME NOT NULL,
  duration INT NOT NULL DEFAULT 60,
  guests INT NOT NULL,
  status ENUM('confirmed', 'seated', 'completed', 'cancelled', 'no_show') DEFAULT 'confirmed',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
  FOREIGN KEY (table_id) REFERENCES tables(id) ON DELETE RESTRICT
);

-- Add indexes for efficient reservation searches
CREATE INDEX idx_reservation_date ON reservations(date_time);
CREATE INDEX idx_reservation_customer ON reservations(customer_id);
CREATE INDEX idx_reservation_table ON reservations(table_id);
CREATE INDEX idx_reservation_status ON reservations(status);`}
                  </pre>
                </div>
              </CardContent>
            </TabsContent>
          </Card>
        </Tabs>
      </div>
    </section>
  );
};

export default SqlDefinitions;
