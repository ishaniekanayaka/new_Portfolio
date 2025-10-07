import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll blur and background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActiveLink = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-500 ease-in-out
      ${scrolled
        ? 'bg-black shadow-2xl border-b border-white/10'
        : 'bg-black'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-2 relative z-50"
          >
            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-500 group-hover:scale-110 group-hover:from-pink-500 group-hover:to-blue-400">
              ISHA
            </span>
          </Link>

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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                {isActiveLink(item.path) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none transition-all duration-300 group"
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
        <div className="bg-black border-t border-white/10 shadow-2xl">
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
                    animation: isOpen
                      ? 'slideInLeft 0.6s ease-out forwards'
                      : '',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {isActiveLink(item.path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-lg border border-blue-400/30 backdrop-blur-sm"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Animations */}
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
      `}</style>
    </nav>
  );
};

export default Navbar;
