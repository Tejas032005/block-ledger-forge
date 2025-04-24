
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("py-8 border-t", className)}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-8 w-8 rounded-md bg-restaurant-primary flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-display font-bold">
              <span className="text-restaurant-primary">Resto</span>
              <span className="text-restaurant-tertiary">Manager</span>
            </span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Restaurant Management Database Project Documentation
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
