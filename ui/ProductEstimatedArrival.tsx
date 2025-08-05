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
    <div className="text-sm text-muted-foreground">
      Estimated arrival{" "}
      <strong className="font-bold text-foreground">
        {isTomorrow(date) ? "tomorrow, " : null}
        {format(date, "MMM d")}
      </strong>
      {hasDeliveryTime ? <> before 5pm</> : null}
    </div>
  );
};
