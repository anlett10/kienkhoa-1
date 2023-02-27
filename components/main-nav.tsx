"use client";

import { clsx } from "clsx";
import React from "react";
import Link from "next/link";

import { Container } from "./container";
import { ExButton, IconWrapper } from "./button";
import { Logo } from "./icons/logo";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

const MainNav = () => {
  return (
    <Container className="hidden md:flex h-navigation-height">
      <Link className="flex items-center text-md" href="/">
        <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Kiến Khoa
      </Link>
      <NavigationMenu.Root className="relative z-10 flex flex-1 items-center justify-center">
        <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-indigo9 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-bold leading-none outline-none focus:shadow-[0_0_0_2px]">
              Dịch vụ{" "}
              <CaretDownIcon
                className="text-indigo9 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
              <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <li className="row-span-3 grid">
                  <NavigationMenu.Link asChild>
                    <a
                      className="focus:shadow-violet7 from-purple9 to-indigo9 flex 
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                      href="/"
                    >
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="#EEEFFC"
                        color="#EEEFFC"
                        aria-label="Linear Logotype"
                      >
                        <path
                          d="M0 840V0h1620v1680H0V840zm1517 804c19-9 46-33 61-52l27-35V163l-27-35c-54-71-20-68-768-68S96 57 42 128l-27 35v1394l27 35c54 71 18 68 766 68 604 0 678-2 709-16z"
                          transform="matrix(.1 0 0 -.1 0 64)"
                        ></path>
                      </svg>
                      <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                        Kiến Khoa
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        Tư vấn thiết kế phần mềm tốt nhất cho Doanh nghiệp
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>

                <ListItem href="/" title="Ứng dụng web">
                  Phát triển ứng dụng web cho Doanh nghiệp
                </ListItem>
                <ListItem href="/" title="Ứng dụng mobile">
                  Phát triển ứng dụng mobile trên iOS/Android
                </ListItem>
                <ListItem href="/" title="Ứng dụng Web3">
                  Phát triển smart contract trên blockchain Solana/Aptos/Sui
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-indigo9 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-bold leading-none outline-none focus:shadow-[0_0_0_2px]">
              Thiết kế web{" "}
              <CaretDownIcon
                className="text-indigo9 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem title="Trang mua sắm" href="/web1">
                  Thiết kế trang web chuyên về quản lý bán hàng
                </ListItem>
                <ListItem title="Trang tư vấn" href="/team">
                  Trang chuyên về dịch vụ tư vấn Luật, Doanh nghiệp, Đào tạo
                </ListItem>
                <ListItem title="Trang cá nhân" href="/">
                  Trang cá nhân dành cho chuyên gia, diễn giả
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="text-indigo9 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-bold leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href="/tech"
            >
              Công nghệ
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="text-indigo9 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-bold leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href="/about"
            >
              Về chúng tôi
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
          <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
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
    </Container>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, href, ...props }, forwardedRef) => {
  return (
    <li>
      <Link href={href} passHref legacyBehavior {...props}>
        <NavigationMenu.Link asChild>
          <a
            className={clsx(
              "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
              className
            )}
            {...props}
            ref={forwardedRef}
          >
            <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
              {title}
            </div>
            <p className="text-mauve11 leading-[1.4]">{children}</p>
          </a>
        </NavigationMenu.Link>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MainNav;
