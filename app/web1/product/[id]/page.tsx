import products from "@/lib/data/products";
import { cookies } from "next/headers";
import { Ping } from "@/ui/Ping";
import { Suspense } from "react";
import { SingleProduct } from "../../SingleProduct";
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from "../../RecommendedProducts";
import { Reviews, ReviewsSkeleton } from "../../Reviews";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  // Get the cart count from the users cookies and pass it to the client
  // AddToCart component
  const cartCount = (await cookies()).get("_cart_count")?.value || "0";
  const { id } = await params;

  const product = products.find((product) => {
    return product.id === id;
  })!;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="space-y-12 lg:space-y-16">
          <SingleProduct product={product} cartCount={cartCount} />

          <div className="relative">
            <div className="absolute top-2 -left-4">
              <Ping />
            </div>
          </div>

          <Suspense fallback={<RecommendedProductsSkeleton />}>
            <RecommendedProducts id={id} />
          </Suspense>

          <div className="relative">
            <div className="absolute top-2 -left-4">
              <Ping />
            </div>
          </div>

          <Suspense fallback={<ReviewsSkeleton />}>
            <Reviews />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
