import products from "@/lib/data/products";
import { ProductCard } from "@/ui/ProductCard";
import Slider from "./Slider";

export default async function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8 space-y-16">
        <div className="pt-16">
          <Slider />
        </div>

        <div className="space-y-12">
          <div className="border-b border-border pb-4">
            <h2 className="text-2xl font-semibold text-foreground">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="group">
                <ProductCard
                  product={product}
                  href={`/web1/product/${product.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
