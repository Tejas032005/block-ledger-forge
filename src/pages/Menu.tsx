
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { IndianRupee } from 'lucide-react';

const menuCategories = [
  "Starters",
  "Main Course",
  "Breads",
  "Rice & Biryani",
  "Desserts",
  "Beverages"
];

const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Marinated cottage cheese cubes grilled to perfection with Indian spices",
    price: 299,
    category: "Starters",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: ["vegetarian"]
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Tender chicken pieces in rich tomato and butter gravy",
    price: 399,
    category: "Main Course",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: []
  },
  {
    id: 3,
    name: "Dal Makhani",
    description: "Creamy black lentils simmered overnight with butter and spices",
    price: 249,
    category: "Main Course",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: ["vegetarian"]
  },
  {
    id: 4,
    name: "Garlic Naan",
    description: "Freshly baked bread with garlic and butter",
    price: 69,
    category: "Breads",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: ["vegetarian"]
  },
  {
    id: 5,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken and aromatic spices",
    price: 349,
    category: "Rice & Biryani",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: []
  },
  {
    id: 6,
    name: "Gulab Jamun",
    description: "Deep-fried milk solids soaked in sugar syrup",
    price: 149,
    category: "Desserts",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: ["vegetarian"]
  },
  {
    id: 7,
    name: "Masala Chai",
    description: "Traditional Indian spiced tea with milk",
    price: 49,
    category: "Beverages",
    image: "https://placehold.co/300x200",
    available: true,
    dietary: ["vegetarian"]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Starters");
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
        <h1 className="text-3xl font-display font-bold text-orange-600">Our Menu</h1>
        <Button variant="outline" className="flex items-center gap-2">
          Cart ({totalItems}) <IndianRupee className="h-4 w-4" />{totalAmount}
        </Button>
      </div>
      
      <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="mb-6 flex overflow-x-auto pb-2 w-full bg-orange-50">
          {menuCategories.map(category => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="min-w-max data-[state=active]:bg-orange-600 data-[state=active]:text-white"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {menuCategories.map(category => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <Card key={item.id} className="overflow-hidden border-orange-100 hover:border-orange-200 transition-colors">
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-orange-900">{item.name}</CardTitle>
                      <div className="flex items-center font-bold text-orange-600">
                        <IndianRupee className="h-4 w-4" />
                        {item.price}
                      </div>
                    </div>
                    {item.dietary.length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {item.dietary.includes("vegetarian") && (
                          <Badge variant="outline" className="text-green-600 border-green-600">Veg</Badge>
                        )}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
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

