import { Pricing, PricingSkeleton } from "./Pricing";
import type { Product } from "@/types/Product";
import { ProductRating } from "@/ui/ProductRating";
import Image from "next/image";
import { Suspense } from "react";

export const SingleProduct = ({
  product,
  cartCount,
}: {
  product: Product;
  cartCount: string;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
      <div className="lg:col-span-1">
        <div className="space-y-4">
          <Image
            src={`/${product.image}`}
            className="hidden rounded-xl grayscale lg:block shadow-lg"
            alt={product.name}
            height={400}
            width={400}
          />

          <div className="flex gap-3">
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl lg:text-3xl font-semibold text-foreground">
            {product.name}
          </h1>

          <ProductRating rating={product.rating} />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium text-foreground">Product Description</h2>
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-8">
          <Suspense fallback={<PricingSkeleton />}>
            {/* @ts-expect-error Async Server Component */}
            <Pricing product={product} cartCount={cartCount} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
