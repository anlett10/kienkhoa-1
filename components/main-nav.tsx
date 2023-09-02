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
    <Container className="hidden h-navigation-height md:flex">
      <Link className="flex items-center text-md" href="/">
        <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Kiến Khoa
      </Link>
      <NavigationMenu.Root className="relative z-10 flex flex-1 items-center justify-center">
        <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px] shadow-blackA7">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-semibold leading-none text-indigo9 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
              Dịch vụ{" "}
              <CaretDownIcon
                className="relative top-[1px] text-indigo9 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
              <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <li className="row-span-3 grid">
                  <NavigationMenu.Link asChild>
                    <a
                      className="flex h-full w-full select-none 
                    flex-col justify-end rounded-[6px] bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7"
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
                      <div className="mb-[7px] mt-4 text-[18px] font-semibold leading-[1.2] text-white">
                        Kiến Khoa
                      </div>
                      <p className="text-[14px] leading-[1.3] text-mauve8">
                        Tư vấn thiết kế phần mềm tốt nhất cho Doanh nghiệp
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>
                <div className="border-t border-indigo-500">
                  <ListItem href="/" title="Ứng dụng web">
                    Phát triển ứng dụng web cho Doanh nghiệp
                  </ListItem>
                </div>
                <div className="border-t border-indigo-500">
                  <ListItem href="/" title="Ứng dụng mobile">
                    Phát triển ứng dụng mobile trên iOS/Android
                  </ListItem>
                </div>
                <div className="border-t border-indigo-500">
                  <ListItem href="/" title="Ứng dụng Web3">
                    Phát triển smart contract trên blockchain Solana/Aptos/Sui
                  </ListItem>
                </div>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-semibold leading-none text-indigo9 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
              Thiết kế web{" "}
              <CaretDownIcon
                className="relative top-[1px] text-indigo9 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[350px] sm:grid-flow-col sm:grid-rows-3">
                <div className="border-t border-indigo-500">
                  <ListItem title="Trang mua sắm" href="/web1">
                    Thiết kế trang web chuyên về quản lý bán hàng
                  </ListItem>
                </div>
                <div className="border-t border-indigo-500">
                  <ListItem title="Trang tư vấn" href="/team">
                    Trang chuyên về dịch vụ tư vấn Luật, Doanh nghiệp, Đào tạo
                  </ListItem>
                </div>
                <div className="border-t border-indigo-500">
                  <ListItem title="Trang cá nhân" href="/">
                    Trang cá nhân dành cho chuyên gia, diễn giả
                  </ListItem>
                </div>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-semibold leading-none text-indigo9 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
              href="/tech"
            >
              Công nghệ
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-semibold leading-none text-indigo9 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
              Quy trình{" "}
              <CaretDownIcon
                className="relative top-[1px] text-indigo9 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[350px] sm:grid-flow-col sm:grid-rows-3">
                <div className="border-t border-indigo-500">
                  <ListItem title="Tìm hiểu" href="/">
                    Phân tích nhu cầu và mục tiêu của khách hàng
                  </ListItem>
                </div>
                <div className="border-t border-indigo-500">
                  <ListItem title="Phát triển" href="/">
                    Xây dựng một lộ trình toàn diện để thực hiện giải pháp
                  </ListItem>
                </div>
                <div className="border-t border-indigo-500">
                  <ListItem title="Bàn giao" href="/">
                    Đảm bảo ứng dụng vận hành tốt nhất khi ra mắt
                  </ListItem>
                </div>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-semibold leading-none text-indigo9 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
              href="/about"
            >
              Về chúng tôi
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="absolute left-0 top-full flex w-full justify-center perspective-[2000px]">
          <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
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
              "block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
              className
            )}
            {...props}
            ref={forwardedRef}
          >
            <div className="mb-[5px] font-semibold leading-[1.2] text-violet12">
              {title}
            </div>
            <p className="leading-[1.4] text-mauve11">{children}</p>
          </a>
        </NavigationMenu.Link>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MainNav;
