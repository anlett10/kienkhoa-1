export const ProductLowStockWarning = ({ stock }: { stock: number }) => {
  if (stock > 3) {
    return null;
  }

  if (stock === 0) {
    return <div className="text-sm text-vercel-cyan">Đã hết hàng</div>;
  }

  return (
    <div className="text-sm text-vercel-cyan">
      Chỉ còn {stock} máy trong kho
    </div>
  );
};
