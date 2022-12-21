export const ProductLowStockWarning = ({ stock }: { stock: number }) => {
  if (stock > 3) {
    return null;
  }

  if (stock === 0) {
    return <div className="text-sm text-vercel-pink">Đã hết hàng</div>;
  }

  return (
    <div className="text-sm text-vercel-pink">
      Chỉ còn {stock} máy trong kho
    </div>
  );
};
