import Link from "next/link";
import { Sparkles } from "lucide-react";

import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-2xl shadow-xl dark:bg-background/90">
      <div className="absolute inset-0 bg-gradient-to-r from-background/0 via-background/60 to-background/0 dark:from-background/0 dark:via-background/40 dark:to-background/0" />
      <div className="relative flex items-center justify-between py-1">
        <div className="flex items-center pl-8">
          <Link className="flex items-center text-md font-semibold hover:text-primary transition-all duration-300 hover:scale-105" href="/">
            {/* Logo Icon */}
            <div className="relative mr-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 blur-md opacity-40 -z-10" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">Kien Khoa</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <MainNav />
        </div>
        <div className="flex items-center pr-8">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
