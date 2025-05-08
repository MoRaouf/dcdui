
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AccessibilityToolbar from './AccessibilityToolbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AccessibilityToolbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
