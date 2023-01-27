import products from "#/lib/data/products";
import { ProductCard } from "#/ui/ProductCard";
import Slider from "./Slider";

export default async function Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-lg font-medium">Mẫu website bán hàng</h1>
        <div className="space-y-4">
          <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
            <li>Bộ sưu tập các mẫu hàng</li>
            <li>Danh mục hàng đang khuyến mãi</li>
          </ul>
        </div>
        <Slider />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="col-span-4 lg:col-span-1">
            <ProductCard
              product={product}
              href={`/web1/product/${product.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
