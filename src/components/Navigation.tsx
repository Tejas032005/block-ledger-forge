
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Menu, 
  Calendar,
  ShoppingCart,
  User,
  Settings 
} from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={cn("bg-white border-r h-full w-64 fixed left-0 top-24 shadow-sm", className)}>
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center p-2 rounded-lg hover:bg-muted text-restaurant-tertiary hover:text-restaurant-primary transition-colors">
              <Home className="mr-2 h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/menu" className="flex items-center p-2 rounded-lg hover:bg-muted text-restaurant-tertiary hover:text-restaurant-primary transition-colors">
              <Menu className="mr-2 h-5 w-5" />
              <span>Menu</span>
            </Link>
          </li>
          <li>
            <Link to="/reservations" className="flex items-center p-2 rounded-lg hover:bg-muted text-restaurant-tertiary hover:text-restaurant-primary transition-colors">
              <Calendar className="mr-2 h-5 w-5" />
              <span>Reservations</span>
            </Link>
          </li>
          <li>
            <Link to="/orders" className="flex items-center p-2 rounded-lg hover:bg-muted text-restaurant-tertiary hover:text-restaurant-primary transition-colors">
              <ShoppingCart className="mr-2 h-5 w-5" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center p-2 rounded-lg hover:bg-muted text-restaurant-tertiary hover:text-restaurant-primary transition-colors">
              <User className="mr-2 h-5 w-5" />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center p-2 rounded-lg hover:bg-muted text-restaurant-tertiary hover:text-restaurant-primary transition-colors">
              <Settings className="mr-2 h-5 w-5" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
