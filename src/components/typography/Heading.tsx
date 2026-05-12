import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "display-xl" | "display-lg" | "display-md" | "headline" | "card-title" | "subhead";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({
  variant = "headline",
  as: Component = "h2",
  className,
  children,
  ...props
}: HeadingProps) => {
  const variants = {
    "display-xl": "text-display-xl",
    "display-lg": "text-display-lg",
    "display-md": "text-display-md",
    headline: "text-headline",
    "card-title": "text-card-title",
    subhead: "text-subhead",
  };

  return (
    <Component
      className={cn(variants[variant], "text-foreground", className)}
      {...props}
    >
      {children}
    </Component>
  );
};
