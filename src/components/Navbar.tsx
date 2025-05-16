import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-black shadow-lg' : 'bg-black'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text transition-all duration-300 hover:scale-105">ISHA</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link to="/" className="text-gray-300 px-2 py-1 rounded-md text-sm font-medium relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/projects" className="text-gray-300 px-2 py-1 rounded-md text-sm font-medium relative group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/contact" className="text-gray-300 px-2 py-1 rounded-md text-sm font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                  aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 relative">
                <span
                    className={`absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                        isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'
                    }`}
                ></span>
                  <span
                      className={`absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                          isOpen ? 'opacity-0' : 'translate-y-3'
                      }`}
                  ></span>
                  <span
                      className={`absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                          isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-5'
                      }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
            className={`md:hidden bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-60' : 'max-h-0'
            }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transform transition duration-200 hover:translate-x-2"
                onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
                to="/projects"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transform transition duration-200 hover:translate-x-2"
                onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transform transition duration-200 hover:translate-x-2"
                onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;