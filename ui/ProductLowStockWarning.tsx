export const ProductLowStockWarning = ({
  stock,
}: {
  stock: number;
}) => {
  return (
    <div className="rounded bg-destructive/10 dark:bg-destructive/20 px-2 py-1 text-xs text-destructive dark:text-destructive/90">
      Only {stock} left in stock
    </div>
  );
};
