
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const Security = () => {
  return (
    <section className="py-8 section-fade delay-800">
      <div className="container">
        <h2 className="text-3xl font-display font-bold mb-2 text-restaurant-tertiary">Security Considerations</h2>
        <p className="mb-6 text-muted-foreground">Protecting user data and ensuring secure transactions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>User Authentication & Authorization</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Password Security</strong>: Passwords stored using bcrypt hashing with salt</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>JWT Authentication</strong>: Secure token-based authentication with appropriate expiration</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Role-Based Access Control</strong>: Different permission levels for staff, managers, and customers</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Multi-factor Authentication</strong>: Optional 2FA for staff and admin accounts</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Account Lockout</strong>: Protection against brute force attacks with temporary lockouts</span>
                </li>
              </ul>
              
              <Alert className="mt-4">
                <AlertTitle>Security Best Practice</AlertTitle>
                <AlertDescription>
                  Implement account activity logs to track suspicious behavior and enable alerts for unusual activities.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Security</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>PCI DSS Compliance</strong>: Adherence to Payment Card Industry Data Security Standard</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Tokenization</strong>: Card details replaced with tokens to prevent exposure</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Third-Party Processing</strong>: Using established payment gateways (Stripe, PayPal)</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Secure Communication</strong>: All payment data transmitted over TLS/SSL</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Transaction Monitoring</strong>: Fraud detection for unusual payment patterns</span>
                </li>
              </ul>
              
              <Alert className="mt-4">
                <AlertTitle>Security Best Practice</AlertTitle>
                <AlertDescription>
                  Never store complete credit card numbers or CVV codes in the database. Use tokenization and compliant payment processors.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Encryption at Rest</strong>: Sensitive data encrypted in the database</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Data Minimization</strong>: Only collecting necessary personal information</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Privacy Controls</strong>: Allowing customers to manage their data preferences</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Retention Policies</strong>: Clear guidelines on how long data is stored</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Backup Procedures</strong>: Regular encrypted backups with restricted access</span>
                </li>
              </ul>
              
              <Alert className="mt-4">
                <AlertTitle>Security Best Practice</AlertTitle>
                <AlertDescription>
                  Implement GDPR compliance features including data export and "right to be forgotten" functionality for user data.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Application Security</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Input Validation</strong>: All user input validated to prevent injection attacks</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Prepared Statements</strong>: SQL injection prevention for database queries</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>XSS Protection</strong>: Output encoding to prevent cross-site scripting</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>CSRF Tokens</strong>: Protection against cross-site request forgery</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-restaurant-primary flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                  <span><strong>Rate Limiting</strong>: Protection against DDoS attacks and API abuse</span>
                </li>
              </ul>
              
              <Alert className="mt-4">
                <AlertTitle>Security Best Practice</AlertTitle>
                <AlertDescription>
                  Conduct regular security audits and vulnerability scanning to identify and address potential security issues.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Security;
