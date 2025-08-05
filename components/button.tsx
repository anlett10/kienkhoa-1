import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";

interface ButtonProps
  extends VariantProps<typeof buttonClasses>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva("relative rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: [
        "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]",
        "[&_.icon-wrapper]:ml-2",
      ],
      secondary: [
        "text-foreground bg-white/10 dark:bg-white/5 border border-border/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200",
        "[&_.icon-wrapper]:bg-border [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2 [&_.icon-wrapper]:ml-2 [&_.icon-wrapper]:-mr-2",
      ],
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className="icon-wrapper">{children}</span>
);

export const Button = ({
  children,
  href,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <Link
      {...props}
      className={buttonClasses({ variant, size, className: props.className })}
      href={href}
    >
      {children}
    </Link>
  );
};

export const ExButton = ({
  children,
  href,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <Link
      {...props}
      className={buttonClasses({ variant, size, className: props.className })}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  );
};
