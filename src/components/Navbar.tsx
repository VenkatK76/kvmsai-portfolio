
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-navy/90"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-teal">
            {/* <span className="sr-only">Developer Portfolio</span>
            &lt;/&gt; */}
            <h3>{"{V}"}</h3>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-teal transition-colors dark:text-gray-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <Button
            variant="outline"
            className="hidden md:flex border-teal text-teal hover:bg-teal hover:text-white"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Resume
          </Button>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-navy shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-teal dark:text-gray-200"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="outline"
                className="w-full border-teal text-teal hover:bg-teal hover:text-white"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
