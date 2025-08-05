"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useCartCount } from "./CartCountContext";

export function AddToCart({ initialCartCount }: { initialCartCount: number }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [, setOptimisticCartCount] = useCartCount();

  const addToCart = () => {
    setOptimisticCartCount(initialCartCount + 1);

    // update the cart count cookie
    document.cookie = `_cart_count=${initialCartCount + 1}; path=/; max-age=${
      60 * 60 * 24 * 30
    }};`;

    // Normally you would also send a request to the server to add the item
    // to the current users cart
    // await fetch(`https://api.acme.com/...`);

    // Use a transition and isPending to create inline loading UI
    startTransition(() => {
      setOptimisticCartCount(null);

      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();

      // We're working on more fine-grained data mutation and revalidation:
      // https://beta.nextjs.org/docs/data-fetching/mutating
    });
  };

  return (
    <button
      className="relative w-full items-center space-x-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:bg-primary/50 disabled:text-primary-foreground/70 transition-all duration-200 shadow-md hover:shadow-lg"
      onClick={addToCart}
      disabled={isPending}
    >
      <span className="flex items-center justify-center">
        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
        Add to Cart
      </span>
      {isPending ? (
        <div className="absolute right-3 top-1/2 -translate-y-1/2" role="status">
          <div
            className="
          h-4 w-4 animate-spin rounded-full border-[2px] border-primary-foreground/30 border-r-primary-foreground"
          />
          <span className="sr-only">Loading...</span>
        </div>
      ) : null}
    </button>
  );
}
