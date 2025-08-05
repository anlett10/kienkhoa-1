import { ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export const ExternalLink = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={clsx(
        "inline-flex space-x-2 rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white",
        className
      )}
    >
      <div>{children}</div>

      <ArrowRightIcon className="block w-4" />
    </a>
  );
};
