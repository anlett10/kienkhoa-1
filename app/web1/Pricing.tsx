import type { Product } from "@/types/Product";
import { Ping } from "@/ui/Ping";
import { ProductEstimatedArrival } from "@/ui/ProductEstimatedArrival";
import { ProductLowStockWarning } from "@/ui/ProductLowStockWarning";
import { ProductPrice } from "@/ui/ProductPrice";
import { ProductSplitPayments } from "@/ui/ProductSplitPayments";
import { ProductUsedPrice } from "@/ui/ProductUsedPrice";
import { dinero, type DineroSnapshot } from "dinero.js";
import { Suspense } from "react";
import { AddToCart } from "./AddToCart";
import { delay } from "./delay";

const shimmer = `relative overflow-hidden rounded-xl before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function LoadingDots() {
  return (
    <div className="text-sm">
      <span className="space-x-0.5">
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full">
          &bull;
        </span>
      </span>
    </div>
  );
}
export function PricingSkeleton() {
  return (
    <div
      className={`h-[161px] space-y-4 rounded-lg bg-slate-600 ${shimmer}`}
    ></div>
  );
}
export async function Pricing({
  product,
  cartCount,
}: {
  product: Product;
  cartCount: number;
}) {
  const price = dinero(product.price as DineroSnapshot<number>);

  // Normally you would fetch data here
  await delay(500);

  return (
    <div className="space-y-4 rounded-lg bg-slate-600 p-3">
      <ProductPrice price={price} discount={product.discount} />
      <ProductSplitPayments price={price} />
      {product.usedPrice ? (
        <ProductUsedPrice usedPrice={product.usedPrice} />
      ) : null}
      <div className="relative">
        <div className="absolute top-1 -left-4">
          <Ping />
        </div>
      </div>
      <Suspense fallback={<LoadingDots />}>
        <ProductEstimatedArrival leadTime={product.leadTime} hasDeliveryTime />
        {product.stock <= 1 ? (
          <ProductLowStockWarning stock={product.stock} />
        ) : null}
      </Suspense>
      <div className="space-y-2">
        <AddToCart initialCartCount={Number(cartCount)} />
      </div>
    </div>
  );
}
