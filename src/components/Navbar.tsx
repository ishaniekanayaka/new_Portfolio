import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background blur effect
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide/show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if link is active
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-2xl border-b border-white/10' 
          : 'bg-black/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <Link 
              to="/" 
              className="group flex items-center space-x-2"
            >
              <div className="relative">
                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-400">
                  ISHA
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm -z-10"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group overflow-hidden ${
                  isActiveLink(item.path)
                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                
                {/* Active indicator */}
                {isActiveLink(item.path) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
                )}
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-400/10 to-purple-500/10 blur-sm"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 group"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  } group-hover:bg-blue-400`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  } group-hover:bg-purple-400`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  } group-hover:bg-pink-400`}
                ></span>
              </div>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 shadow-2xl">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative group block px-6 py-4 text-base font-medium transition-all duration-500 transform rounded-lg ${
                    isActiveLink(item.path)
                      ? 'text-white translate-x-2'
                      : 'text-gray-300 hover:text-white hover:translate-x-3'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? 'slideInLeft 0.6s ease-out forwards' : ''
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {item.name}
                    
                    {/* Icon for active item */}
                    {isActiveLink(item.path) && (
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                      </div>
                    )}
                    
                    {/* Arrow for hover effect */}
                    <div className={`transform transition-all duration-300 ${
                      isActiveLink(item.path) ? 'opacity-0' : 'opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </span>
                  
                  {/* Active state background with border */}
                  {isActiveLink(item.path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-lg border border-blue-400/30 backdrop-blur-sm">
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-r-full"></div>
                    </div>
                  )}
                  
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 border border-transparent group-hover:border-blue-400/20"></div>
                  
                  {/* Bottom underline effect */}
                  <div className={`absolute bottom-1 left-6 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ${
                    isActiveLink(item.path) 
                      ? 'w-1/2 opacity-100' 
                      : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                  }`}></div>
                  
                  {/* Animated dots for better visual feedback */}
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Mobile menu footer */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex justify-center space-x-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;