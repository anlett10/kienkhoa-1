import { ProductCurrencySymbol } from "@/ui/ProductCurrencySymbol";
import { toUnit, type Dinero } from "dinero.js";

export const ProductDeal = ({
  price: priceRaw,
  discount: discountRaw,
}: {
  price: Dinero<number>;
  discount: {
    amount: Dinero<number>;
  };
}) => {
  const discount = toUnit(discountRaw.amount);
  const price = toUnit(priceRaw);
  const percent = Math.round(100 - (discount / price) * 100);

  return (
    <div className="flex space-x-1.5">
      <div className="text-lg font-bold leading-snug text-primary">
        -{percent}%
      </div>
      <div className="flex">
        <div className="text-sm leading-snug text-foreground">
          <ProductCurrencySymbol dinero={discountRaw.amount} />
        </div>
        <div className="text-lg font-bold leading-snug text-foreground">
          {discount}
        </div>
      </div>
      <div className="text-sm leading-snug text-muted-foreground line-through">
        <ProductCurrencySymbol dinero={priceRaw} />
        {price}
      </div>
    </div>
  );
};
