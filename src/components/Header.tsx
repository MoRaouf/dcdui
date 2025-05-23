
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

interface NavLinkProps {
  to: string;
  label: string;
  isActive?: boolean;
}

const NavLink = ({ to, label, isActive = false }: NavLinkProps) => {
  const baseClasses = "font-medium transition cursor-pointer";
  const activeClasses = "text-dcd-purple";
  const inactiveClasses = "text-charcoal hover:text-dcd-purple";
  
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <Link 
      to={to} 
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Get current path to determine active link
  const currentPath = location.pathname;
  
  return (
    <header id="header" className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={handleNavClick}>
            <div className="w-12 h-12 bg-dcd-purple rounded-lg flex items-center justify-center text-white">
              <span className="font-bold text-xl">DAMJ</span>
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-bold text-charcoal hidden md:block">Abu Dhabi Excellence Award</h1>
              <p className="text-sm text-dcd-purple hidden md:block">People of Determination Inclusion</p>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <NavLink to="/" label="Home" isActive={currentPath === '/'} />
          <NavLink to="/about" label="About" isActive={currentPath === '/about'} />
          <NavLink to="/categories" label="Categories" isActive={currentPath === '/categories'} />
          <NavLink to="/eligibility" label="Eligibility" isActive={currentPath === '/eligibility'} />
          <NavLink to="/apply" label="How to Apply" isActive={currentPath === '/apply'} />
          <NavLink to="/faq" label="FAQ" isActive={currentPath === '/faq'} />
        </nav>
        
        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <button className="px-3 py-1 border border-dcd-purple text-dcd-purple rounded-md text-sm font-medium hover:bg-dcd-purple hover:text-white transition">
            عربي
          </button>
          
          {/* Apply Now Button */}
          <Link 
            to="/apply" 
            className="hidden md:inline-block px-4 py-2 bg-dcd-purple text-white rounded-lg font-bold hover:bg-dcd-purple-dark transition cursor-pointer"
            onClick={handleNavClick}
          >
            Apply Now
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-charcoal" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            <Link to="/" onClick={handleNavClick} className={`py-2 ${currentPath === '/' ? 'text-dcd-purple' : 'text-charcoal hover:text-dcd-purple'} font-medium`}>Home</Link>
            <Link to="/about" onClick={handleNavClick} className={`py-2 ${currentPath === '/about' ? 'text-dcd-purple' : 'text-charcoal hover:text-dcd-purple'} font-medium`}>About</Link>
            <Link to="/categories" onClick={handleNavClick} className={`py-2 ${currentPath === '/categories' ? 'text-dcd-purple' : 'text-charcoal hover:text-dcd-purple'} font-medium`}>Categories</Link>
            <Link to="/eligibility" onClick={handleNavClick} className={`py-2 ${currentPath === '/eligibility' ? 'text-dcd-purple' : 'text-charcoal hover:text-dcd-purple'} font-medium`}>Eligibility</Link>
            <Link to="/apply" onClick={handleNavClick} className={`py-2 ${currentPath === '/apply' ? 'text-dcd-purple' : 'text-charcoal hover:text-dcd-purple'} font-medium`}>How to Apply</Link>
            <Link to="/faq" onClick={handleNavClick} className={`py-2 ${currentPath === '/faq' ? 'text-dcd-purple' : 'text-charcoal hover:text-dcd-purple'} font-medium`}>FAQ</Link>
            <Link to="/apply" onClick={handleNavClick} className="py-2 px-4 bg-dcd-purple text-white rounded-lg font-bold text-center mt-2">
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
