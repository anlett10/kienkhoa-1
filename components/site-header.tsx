import Link from "next/link";

import MainNav from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <MainNav />
      <MobileNav />
    </header>
  );
}
