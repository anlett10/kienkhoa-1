import { type IProduct } from "@/lib/data/products";
import { ProductBestSeller } from "@/ui/ProductBestSeller";
import { ProductEstimatedArrival } from "@/ui/ProductEstimatedArrival";
import { ProductLowStockWarning } from "@/ui/ProductLowStockWarning";
import { ProductPrice } from "@/ui/ProductPrice";
import { ProductRating } from "@/ui/ProductRating";
import { ProductUsedPrice } from "@/ui/ProductUsedPrice";
import { dinero, type DineroSnapshot } from "dinero.js";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({
  product,
  href,
}: {
  product: IProduct;
  href: string;
}) => {
  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <Link href={href} className="group block">
      <div className="space-y-3 p-4 rounded-xl bg-card/50 dark:bg-card border border-border/50 dark:border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
        <div className="relative">
          {product.isBestSeller ? (
            <div className="absolute top-2 left-2 z-10 flex">
              <ProductBestSeller />
            </div>
          ) : null}
          <Image
            src={`/${product.image}`}
            width={400}
            height={400}
            className="rounded-lg grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-300"
            alt={product.name}
            placeholder="blur"
            blurDataURL={product.imageBlur}
          />
        </div>

        <div className="space-y-2">
          <div className="truncate text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {product.name}
          </div>

          {product.rating ? <ProductRating rating={product.rating} /> : null}

          <ProductPrice price={price} discount={product.discount} />

          {/* <ProductSplitPayments price={price} /> */}

          {product.usedPrice ? (
            <ProductUsedPrice usedPrice={product.usedPrice} />
          ) : null}

          <ProductEstimatedArrival leadTime={product.leadTime} />

          {product.stock <= 1 ? (
            <ProductLowStockWarning stock={product.stock} />
          ) : null}
        </div>
      </div>
    </Link>
  );
};
