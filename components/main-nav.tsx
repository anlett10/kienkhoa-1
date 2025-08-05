"use client";

import { clsx } from "clsx";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Container } from "./container";
import { ExButton, IconWrapper } from "./button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = stored === 'dark' || (!stored && prefersDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

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

const MainNav = () => {
  return (
    <div className="hidden h-navigation-height md:flex items-center">
      <NavigationMenu className="relative z-10 flex items-center">
        <NavigationMenuList className="center m-0 flex list-none rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm p-1 shadow-lg border border-white/20 dark:border-white/10">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="group flex select-none items-center justify-between gap-2 rounded-lg px-4 py-2.5 text-[15px] font-medium leading-none text-foreground outline-none hover:bg-white/10 dark:hover:bg-white/5 focus:bg-white/10 dark:focus:bg-white/5 transition-all duration-200">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
              <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <li className="row-span-3 grid">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none 
                    flex-col justify-center items-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-center"
                      href="/"
                    >
                      {/* Logo Icon */}
                      <div className="relative mb-4">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 blur-md opacity-40 -z-10" />
                      </div>
                      <div className="mb-[7px] text-[18px] font-semibold leading-[1.2] text-white">
                        Kien Khoa
                      </div>
                      <p className="text-[14px] leading-[1.3] text-indigo-100">
                        Building SaaS products and offering expert consulting for businesses.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <div className="border-l border-indigo-200/20 pl-4">
                  <ListItem href="/web1" title="Web Design">
                    Professional website design for Businesses
                  </ListItem>
                </div>
                <div className="border-l border-indigo-200/20 pl-4">
                  <ListItem href="/products/2" title="Web & Mobile Projects">
                    Mobile/Web application development for Startups
                  </ListItem>
                </div>
                <div className="border-l border-indigo-200/20 pl-4">
                  <ListItem href="/products/1" title="SaaS Products">
                    Build SaaS products for B2C, B2B customers
                  </ListItem>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/products" className={navigationMenuTriggerStyle()}>
                Projects
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className="block select-none rounded-lg px-4 py-2.5 text-[15px] font-medium leading-none text-foreground no-underline outline-none hover:bg-white/10 dark:hover:bg-white/5 focus:bg-white/10 dark:focus:bg-white/5 transition-all duration-200"
              href="/tech"
            >
              Technology
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className="block select-none rounded-lg px-4 py-2.5 text-[15px] font-medium leading-none text-foreground no-underline outline-none hover:bg-white/10 dark:hover:bg-white/5 focus:bg-white/10 dark:focus:bg-white/5 transition-all duration-200"
              href="/about"
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-8 flex h-full items-center gap-4">
        <DarkModeToggle />
        <ExButton
          href="https://cal.com/kienkhoa/30min"
          className="hover:scale-105 transition-transform duration-200"
          variant="secondary"
          size="medium"
        >
          Contact us <IconWrapper>→</IconWrapper>
        </ExButton>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={clsx(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export { MainNav };
