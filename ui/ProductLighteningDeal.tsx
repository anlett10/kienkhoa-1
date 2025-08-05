import { ProductDeal } from "@/ui/ProductDeal";
import { add, formatDistanceToNow } from "date-fns";
import { type Dinero } from "dinero.js";

export const ProductLighteningDeal = ({
  price,
  discount,
}: {
  price: Dinero<number>;
  discount: {
    amount: Dinero<number>;
    expires?: number;
  };
}) => {
  const date = add(new Date(), { days: discount.expires });

  return (
    <>
      <div className="flex">
        <div className="rounded bg-destructive/10 dark:bg-destructive/20 px-2 py-1 text-xs text-destructive dark:text-destructive/90">
          Expires in {formatDistanceToNow(date)}
        </div>
      </div>

      <ProductDeal price={price} discount={discount} />
    </>
  );
};
