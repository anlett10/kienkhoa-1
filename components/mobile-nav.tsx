"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggle theme
  const toggleDarkMode = () => {
    setIsAnimating(true);
    const html = document.documentElement;
    const next = !isDark;
    html.classList.toggle('dark', next);
    setIsDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Init from localStorage or prefers-color-scheme
  useState(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = stored === 'dark' || (!stored && prefersDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
    setIsDark(shouldUseDark);
  });

  return (
    <div className="relative">
      <button
        onClick={toggleDarkMode}
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
        tabIndex={0}
        className={`
          relative inline-flex items-center w-11 h-6 rounded-full p-0
          bg-zinc-300 dark:bg-zinc-700
          border border-transparent
          transition-colors duration-300 ease-out
          appearance-none
          focus:outline-none focus:ring-0 focus:ring-offset-0
          hover:scale-[1.02] active:scale-[0.98]
        `}
        style={{
          WebkitTapHighlightColor: 'transparent',
          transition: 'all 300ms ease',
        }}
      >
        {/* Thumb */}
        <div
          className="w-5 h-5 bg-white dark:bg-zinc-100 rounded-full shadow-sm transform transition-all duration-300 ease-out relative"
          style={{
            transform: `translateX(${isDark ? '20px' : '0'}) ${isAnimating ? 'scale(0.95)' : 'scale(1)'}`,
          }}
        >
          {/* Icons (fade/rotate/scale) */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out"
            style={{
              opacity: isDark ? 0 : 1,
              transform: `rotate(${isDark ? '180deg' : '0'}) scale(${isDark ? 0 : 1})`,
              transition: 'all 200ms ease-out',
            }}
          >
            <svg className="w-3 h-3 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out"
            style={{
              opacity: isDark ? 1 : 0,
              transform: `rotate(${isDark ? 0 : -180}deg) scale(${isDark ? 1 : 0})`,
              transition: 'all 200ms ease-out',
            }}
          >
            <svg className="w-3 h-3 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-full items-center px-4 text-foreground hover:bg-white/10 dark:hover:bg-white/5 transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
        <div className="flex flex-col space-y-1">
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border border-border/50 shadow-lg rounded-b-lg z-50">
          <div className="px-4 py-2">
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="font-semibold text-foreground text-sm">Kien Khoa</span>
              </div>
              <DarkModeToggle />
            </div>
            
            <nav className="py-2">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tech"
                    className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li className="border-t border-border/50 pt-2 mt-2">
                  <Link
                    href="https://cal.com/kienkhoa/30min"
                    className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
