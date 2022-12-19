import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";
import { CartCount } from "../../CartCount";
import { CartCountProvider } from "../../CartCountContext";

export const runtime = "experimental-edge";

export default function Layout({ children }: { children: React.ReactNode }) {
  const cartCount = Number(cookies().get("_cart_count")?.value || "0");

  return (
    <CartCountProvider initialCartCount={cartCount}>
      <div className="space-y-12 lg:space-y-16">
        <div className="flex items-center justify-between space-x-3 rounded-lg bg-gray-600 px-3 py-3 lg:px-5 lg:py-4">
          <div className="flex space-x-3">
            <div className="relative flex-1"></div>
          </div>

          <div className="flex shrink-0 space-x-5">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-600 text-white">
              <ShoppingCartIcon className="w-6 text-white" />
              <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-vercel-pink text-sm font-bold text-white">
                <CartCount />
              </div>
            </div>

            <Image
              src="/prince-akachi-LWkFHEGpleE-unsplash.jpg"
              className="rounded-full"
              width={40}
              height={40}
              alt="User"
            />
          </div>
        </div>

        <div>{children}</div>
      </div>
    </CartCountProvider>
  );
}
