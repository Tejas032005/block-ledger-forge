
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("py-6 border-b", className)}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-md bg-restaurant-primary flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">R</span>
            </div>
            <h1 className="text-2xl font-display font-bold">
              <span className="text-restaurant-primary">Resto</span>
              <span className="text-restaurant-tertiary">Manager</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-restaurant-tertiary/80">Restaurant Management System</p>
            <div className="h-8 w-8 rounded-full bg-restaurant-tertiary/10 flex items-center justify-center">
              <span className="text-restaurant-tertiary text-xs">v1.0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
