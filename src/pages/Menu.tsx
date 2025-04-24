
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const menuCategories = [
  "Appetizers",
  "Main Courses",
  "Desserts",
  "Beverages",
  "Specials"
];

const menuItems = [
  {
    id: 1,
    name: "Garlic Bread",
    description: "Freshly baked bread with garlic butter and herbs",
    price: 6.99,
    category: "Appetizers",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: ["vegetarian"]
  },
  {
    id: 2,
    name: "Bruschetta",
    description: "Grilled bread topped with tomatoes, fresh basil, and olive oil",
    price: 8.99,
    category: "Appetizers",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: ["vegetarian"]
  },
  {
    id: 3,
    name: "Spaghetti Bolognese",
    description: "Classic pasta with rich meat sauce and parmesan",
    price: 14.99,
    category: "Main Courses",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: []
  },
  {
    id: 4,
    name: "Margherita Pizza",
    description: "Traditional pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    category: "Main Courses",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: ["vegetarian"]
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
    price: 7.99,
    category: "Desserts",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: ["vegetarian"]
  },
  {
    id: 6,
    name: "House Wine",
    description: "Glass of our house red or white wine",
    price: 8.99,
    category: "Beverages",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: ["vegetarian"]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Appetizers");
  const [cart, setCart] = useState<Array<{id: number, name: string, price: number, quantity: number}>>([]);
  
  const addToCart = (item: {id: number, name: string, price: number}) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-display font-bold">Menu</h1>
        <Button variant="outline" className="flex items-center gap-2">
          Cart ({totalItems}) <span className="font-bold">${totalAmount.toFixed(2)}</span>
        </Button>
      </div>
      
      <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="mb-6 flex overflow-x-auto pb-2 w-full">
          {menuCategories.map(category => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="min-w-max"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {menuCategories.map(category => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{item.name}</CardTitle>
                      <div className="text-lg font-bold text-restaurant-primary">${item.price.toFixed(2)}</div>
                    </div>
                    {item.dietary.length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {item.dietary.includes("vegetarian") && (
                          <Badge variant="outline" className="text-green-600 border-green-600">Vegetarian</Badge>
                        )}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-restaurant-primary hover:bg-restaurant-primary/90"
                      onClick={() => addToCart({id: item.id, name: item.name, price: item.price})}
                    >
                      Add to Order
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Menu;
