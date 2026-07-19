import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '../components/SectionTitle';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/' },
    { name: 'Terms of Service', path: '/' },
    { name: 'SLA Agreement', path: '/' },
    { name: 'Security Policy', path: '/' },
  ];

  const contactInfo = [
    { icon: <Mail className="h-4 w-4 text-accent" />, text: 'support@builderquoteai.com' },
    { icon: <Phone className="h-4 w-4 text-accent" />, text: '+1 (800) 555-BQAI' },
    { icon: <MapPin className="h-4 w-4 text-accent" />, text: 'Silicon Valley, California' },
  ];

  return (
    <footer className="bg-bgDark border-t border-borderDark/60 pt-16 pb-8 text-left relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

          {/* Column 1: Logo & Mission Statement */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              {!logoError ? (
                <img
                  src={`${import.meta.env.BASE_URL}assets/logo.png`}
                  alt="BuilderQuoteAI Logo"
                  onError={() => setLogoError(true)}
                  className="h-10 w-10 object-contain brightness-100 transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-black text-xs font-mono">
                  BQ
                </div>
              )}
              <span className="text-xl font-extrabold text-white tracking-tight">
                BuilderQuote<span className="text-accent">AI</span>
              </span>
            </Link>
            <p className="text-sm text-textSecondary mb-6 leading-relaxed max-w-sm">
              BuilderQuoteAI is an advanced AI-powered construction estimating platform that analyzes complex PDFs/Excel Bills of Quantities and delivers hyper-accurate quotes in seconds.
            </p>
            {/* Social Icons (using inline premium brand SVGs) */}
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-cardDark border border-borderDark/80 text-textSecondary hover:text-accent hover:border-accent/40 transition-all" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-cardDark border border-borderDark/80 text-textSecondary hover:text-accent hover:border-accent/40 transition-all" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-cardDark border border-borderDark/80 text-textSecondary hover:text-accent hover:border-accent/40 transition-all" aria-label="Github">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-cardDark border border-borderDark/80 text-textSecondary hover:text-accent hover:border-accent/40 transition-all" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-textSecondary hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-textSecondary hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Office</h4>
            <ul className="space-y-3.5">
              {contactInfo.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-textSecondary">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright statement */}
        <div className="border-t border-borderDark/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-textSecondary text-center sm:text-left">
            &copy; {currentYear} BuilderQuoteAI Inc. All rights reserved. Built for professional construction estimates.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-xs text-textSecondary hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-xs text-textSecondary hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
