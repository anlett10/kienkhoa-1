import { Review } from "@/lib/data/reviews";
import { ProductRating } from "@/ui/ProductRating";

export const ProductReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="space-y-4 p-6 rounded-xl bg-card/50 dark:bg-card border border-border/50 dark:border-border hover:border-primary/50 transition-all duration-200">
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-semibold text-foreground">
              {review.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="text-sm font-medium text-foreground">{review.name}</div>
        </div>

        {review.rating ? <ProductRating rating={review.rating} /> : null}
      </div>

      <div className="text-sm text-muted-foreground leading-relaxed">{review.text}</div>
    </div>
  );
};
