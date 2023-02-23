import { ProductCurrencySymbol } from "@/ui/ProductCurrencySymbol";
import { allocate, toUnit, up, type Dinero } from "dinero.js";

export const ProductSplitPayments = ({ price }: { price: Dinero<number> }) => {
  // only offer split payments for more expensive items
  if (toUnit(price) < 150) {
    return null;
  }

  const [perMonth] = allocate(price, [1, 2]);
  return (
    <div className="text-sm text-gray-400">
      Hoặc <ProductCurrencySymbol dinero={price} />
      {toUnit(perMonth, { digits: 0, round: up })}/tháng trong 3 tháng
    </div>
  );
};
