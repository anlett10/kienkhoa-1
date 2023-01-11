"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ExButton, IconWrapper, Button } from "./button";
import { Container } from "./container";
import { HamburgerIcon } from "./icons/hamburger";
import { Logo } from "./icons/logo";
import clsx from "clsx";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Kiến Khoa
        </Link>

        <div className="ml-auto flex h-full items-center">
          <div
            className={clsx(
              "transition-[visibility] md:visible",
              hamburgerMenuIsOpen ? "visible" : "invisible delay-500"
            )}
          >
            <nav
              className={clsx(
                "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
                hamburgerMenuIsOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[-100vw] opacity-0"
              )}
            >
              <div className="rounded-lg bg-slate-600 py-2">
                <ul
                  className={clsx(
                    "flex flex-col md:flex-row md:items-center [&_li]:my-1 [&_li]:mx-1 [&_li]:border-b [&_li]:border-none md:[&_li]:border-none",
                    "ease-in [&_a]:flex [&_a]:h-[2.6rem] [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-sm [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                    hamburgerMenuIsOpen && "[&_a]:translate-y-0"
                  )}
                >
                  <li>
                    <Button
                      href="/web-1"
                      variant="secondary"
                      className="translate-y-[-1rem] animate-fade-in opacity-0"
                      onClick={() => setHamburgerMenuIsOpen(false)}
                    >
                      Thiết kế web
                    </Button>
                  </li>
                  <li className="md:hidden lg:block">
                    <Button
                      href="#"
                      variant="secondary"
                      className="translate-y-[-1rem] animate-fade-in opacity-0"
                      onClick={() => setHamburgerMenuIsOpen(false)}
                    >
                      Ứng dụng web
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="/about"
                      variant="secondary"
                      className="translate-y-[-1rem] animate-fade-in opacity-0"
                      onClick={() => setHamburgerMenuIsOpen(false)}
                    >
                      Về chúng tôi
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="/contact"
                      variant="secondary"
                      className="translate-y-[-1rem] animate-fade-in opacity-0"
                      onClick={() => setHamburgerMenuIsOpen(false)}
                    >
                      Liên hệ
                    </Button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="ml-auto flex h-full items-center">
          <ExButton
            href="https://cal.com/kienkhoa/30min"
            className="translate-y-[-1rem] animate-fade-in opacity-0"
            variant="secondary"
            size="medium"
          >
            Contact us <IconWrapper>→</IconWrapper>
          </ExButton>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
