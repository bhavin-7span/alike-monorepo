import { cva } from "class-variance-authority";

export const formInput = cva(
  // default class will applied on every button
  ["flex", "items-center", "focus-within:border"],
  {
    variants: {
      color: {
        grey: ["bg-grey-100"],
      },
      size: {
        // input-px class css written in form-input.vue component.
        sm: ["text-base", "h-12", "input-px-4"],
        md: ["text-base", "h-14", "input-px-6"],
      },
      theme: {
        "outlined-light": [
          "border",
          "border-grey-600",
          "bg-transparent",
          "placeholder-grey-400",
          "focus-within:border-white",
          "focus-within:text-white",
          "text-grey-400",
          "focus-within:shadow-xs focus-within:shadow-grey-500",
        ],
        outlined: [
          "border",
          "border-grey-300",
          "bg-transparent",
          "placeholder-grey-400",
          "text-grey-500",
          "focus-within:text-black",
        ],
        muted: [
          "text-grey-500",
          "focus-within:text-black",
          "placeholder-grey-500",
          "focus-within:border-primary-500",
          "focus-within:bg-white",
          "focus-within:shadow-xs focus-within:shadow-primary-300",
        ],
      },
      shape: {
        rounded: ["rounded-full"],
        square: ["rounded-md"],
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
