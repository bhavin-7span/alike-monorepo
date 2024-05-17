// components/button.ts
import { cva } from "class-variance-authority";

export const text = cva([""], {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      "semi-bold": "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    weight: "regular",
    size: "base",
  },
});
