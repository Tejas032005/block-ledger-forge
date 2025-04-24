
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectOverview = () => {
  return (
    <section className="py-8 section-fade">
      <div className="container">
        <h2 className="text-3xl font-display font-bold mb-2 text-restaurant-tertiary">Project Overview</h2>
        <p className="mb-6 text-muted-foreground">Restaurant Management System - Project Documentation</p>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Project Description</CardTitle>
            <CardDescription>A comprehensive system for managing restaurant operations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              RestoDB is a complete restaurant management solution designed to streamline all aspects of restaurant operations.
              From customer interactions to kitchen management and administrative functions, this system provides an integrated
              approach to enhance efficiency, improve customer experience, and boost business performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-semibold mb-2">Primary Objectives</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Streamline order management across dine-in, takeaway, and delivery</li>
                  <li>Enhance customer engagement and satisfaction</li>
                  <li>Optimize kitchen operations and resource management</li>
                  <li>Provide comprehensive insights for business decisions</li>
                  <li>Ensure secure handling of user data and payments</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-semibold mb-2">Key Benefits</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Reduced operational errors and improved efficiency</li>
                  <li>Enhanced customer loyalty through personalized experiences</li>
                  <li>Improved table turnover and resource utilization</li>
                  <li>Reduced food waste and cost optimization</li>
                  <li>Data-driven decision making for menu optimization</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2 flex-wrap">
              <Badge className="bg-restaurant-primary">Restaurant Management</Badge>
              <Badge className="bg-restaurant-secondary text-black">Customer Engagement</Badge>
              <Badge className="bg-restaurant-tertiary">Database System</Badge>
              <Badge variant="outline">Order Processing</Badge>
              <Badge variant="outline">Table Reservation</Badge>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default ProjectOverview;
