'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const navs = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`bg-background/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg bg-background/95' : ''}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="logo text-primary font-bold text-xl hover:text-secondary transition-colors">
          AI Blogger
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navs.map(nav => (
            <Link
              key={nav.href}
              href={nav.href}
              className={`nav-link font-semibold pb-1 border-b-2 transition-colors ${pathname === nav.href ? 'border-primary text-primary' : 'border-transparent text-text hover:text-primary'}`}
            >
              {nav.label}
            </Link>
          ))}
        </div>
        <button id="mobile-menu-button" className="md:hidden text-text">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </nav>
      <div id="mobile-menu" className="hidden md:hidden bg-dark">
        {navs.map(nav => (
          <Link key={nav.href} href={nav.href} className="block py-2 px-4 nav-link">{nav.label}</Link>
        ))}
      </div>
    </header>
  );
};

export default Header; 