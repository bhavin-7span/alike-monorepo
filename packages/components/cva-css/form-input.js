import { cva } from "class-variance-authority";

export const formInput = cva(
  // default class will applied on every button
  [""],
  {
    variants: {
      color: {
        grey: ["bg-grey-100"],
      },
      size: {
        sm: ["text-base", "px-4", "h-12", "gap-1"],
        md: ["text-base", "px-6", "h-14", "gap-2"],
      },
      theme: {
        solid: ["text-white"],
        outlined: [""],
        link: [""],
        muted: [
          "focus-within:border",
          "focus-within:border-primary-500",
          "focus-within:bg-white",
        ],
      },
      shape: {
        rounded: ["rounded-full"],
        square: ["rounded"],
      },
    },
    compoundVariants: [
      // Making button circle in type circle with common padding on X & Y axis
      // {
      //   color: ["primary", "secondary", "grey", "black"],
      //   shape: "circle",
      //   size: "sm",
      //   class: "p-2",
      // },
    ],

    // Default class variation.
    defaultVariants: {
      color: "grey",
      size: "md",
      theme: "muted",
      shape: "rounded",
    },
  }
);
