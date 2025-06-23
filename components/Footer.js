'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background text-subtext py-8 text-center relative">
      <button
        className="fixed bottom-8 right-8 z-50 bg-primary text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center hover:bg-secondary transition-all"
        style={{ fontSize: 24 }}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
      <div>
        &copy; {new Date().getFullYear()} AI Blogger. All rights reserved.
      </div>
      <div className="mt-2">
        <a href="https://github.com/huang-ai-blogger" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
        <span className="mx-2">|</span>
        <a href="/contact" className="text-primary hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer; 