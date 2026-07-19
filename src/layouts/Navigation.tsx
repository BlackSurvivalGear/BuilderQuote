import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Container } from '../components/SectionTitle';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigate
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bgDark/80 backdrop-blur-md border-b border-borderDark/60 py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            {!logoError ? (
              <img
                src={`${import.meta.env.BASE_URL}assets/logo.png`}
                alt="BuilderQuoteAI Logo"
                onError={() => setLogoError(true)}
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain brightness-100 transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-black text-xs font-mono">
                BQ
              </div>
            )}
            <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-primary transition-colors">
              BuilderQuote<span className="text-accent">AI</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-white ${
                    isActive ? 'text-primary' : 'text-textSecondary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right Button Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-white ${
                  isActive ? 'text-primary' : 'text-textSecondary'
                }`
              }
            >
              Login
            </NavLink>
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowRight className="h-3.5 w-3.5" />}
              onClick={() => setIsOpen(false)}
            >
              <Link to="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textSecondary hover:text-white focus:outline-none p-1.5 rounded-lg border border-borderDark/60 bg-cardDark/50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-bgDark/95 backdrop-blur-xl border-b border-borderDark/60 shadow-xl py-6 px-4 animate-fade-in-down z-40 max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-semibold py-2 px-4 rounded-lg transition-colors ${
                    isActive
                      ? 'text-primary bg-primary/5 border-l-2 border-primary'
                      : 'text-textSecondary hover:text-white hover:bg-white/5'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="h-[1px] bg-borderDark/50 my-2" />
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-base font-semibold py-2 px-4 rounded-lg transition-colors ${
                  isActive
                    ? 'text-primary bg-primary/5'
                    : 'text-textSecondary hover:text-white hover:bg-white/5'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
            <div className="px-4 pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<ArrowRight className="h-4 w-4" />}
                onClick={() => setIsOpen(false)}
              >
                <Link to="/register" className="w-full text-center">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navigation;
