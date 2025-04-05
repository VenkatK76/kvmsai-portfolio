
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-gray-400 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-white">
              {/* <span className="sr-only">Developer Portfolio</span>
              &lt;/&gt; */}
              <h3>{"{V}"}</h3>
            </a>
          </div>

          <div className="text-sm">
            <p>
              &copy; {currentYear} Karanam Venkata Manikanta Sai. All rights
              reserved.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <a href="#home" className="text-gray-400 hover:text-teal">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-teal">
                About
              </a>
              <a href="#experience" className="text-gray-400 hover:text-teal">
                Experience
              </a>
              <a href="#projects" className="text-gray-400 hover:text-teal">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-teal">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
