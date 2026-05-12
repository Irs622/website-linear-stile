import { cn } from "@/lib/utils";
import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body-lg" | "body" | "body-sm" | "caption" | "eyebrow";
  as?: "p" | "span" | "div";
}

export const Text = ({
  variant = "body",
  as: Component = "p",
  className,
  children,
  ...props
}: TextProps) => {
  const variants = {
    "body-lg": "text-body-lg",
    body: "text-body",
    "body-sm": "text-body-sm",
    caption: "text-caption",
    eyebrow: "text-eyebrow",
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
