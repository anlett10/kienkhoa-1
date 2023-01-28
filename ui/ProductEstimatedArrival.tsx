import { add, format, isTomorrow } from "date-fns";

export const ProductEstimatedArrival = ({
  leadTime,
  hasDeliveryTime = false,
}: {
  leadTime: number;
  hasDeliveryTime?: boolean;
}) => {
  const date = add(new Date(), {
    days: leadTime,
  });

  return (
    <div className="text-sm text-gray-300">
      Nhận hàng{" "}
      <strong className="font-bold text-gray-100">
        {isTomorrow(date) ? "ngày mai, " : null}
        {format(date, "MMM d")}
      </strong>
      {hasDeliveryTime ? <> trước 5pm</> : null}
    </div>
  );
};
