import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";
import { CartCount } from "../../CartCount";
import { CartCountProvider } from "../../CartCountContext";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cartCount = Number((await cookies()).get("_cart_count")?.value || "0");

  return (
    <CartCountProvider initialCartCount={cartCount}>
      <div className="space-y-12 lg:space-y-16">
        <div className="pt-8">
          <div className="flex items-center justify-between space-x-3 rounded-xl bg-card border border-border px-4 py-4 lg:px-6 lg:py-5 shadow-lg">
            <div className="flex space-x-3">
              <div className="relative flex-1"></div>
            </div>

            <div className="flex shrink-0 space-x-5">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted hover:bg-accent transition-colors duration-200">
                <ShoppingCartIcon className="w-6 text-foreground" />
                <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  <CartCount />
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/prince-akachi-LWkFHEGpleE-unsplash.jpg"
                  className="rounded-full border-2 border-border hover:border-primary/50 transition-colors duration-200"
                  width={40}
                  height={40}
                  alt="User"
                />
              </div>
            </div>
          </div>
        </div>

        <div>{children}</div>
      </div>
    </CartCountProvider>
  );
}
