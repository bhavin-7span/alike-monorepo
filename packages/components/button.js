import { cva } from "class-variance-authority";

export const button = cva(
  ["font-medium rounded-full w-fit flex items-center justify-center"],
  {
    variants: {
      type: {
        primary: [
          "bg-primary-500",
          "text-primary-500",
          "hover:text-primary-600",
          "hover:bg-primary-600",
        ],
        secondary: [
          "bg-secondary-500",
          "text-secondary-500",
          "hover:text-secondary-600",
          "hover:bg-secondary-600",
        ],
        grey: [
          "bg-grey-500",
          "text-grey-500",
          "hover:text-grey-600",
          "hover:bg-grey-600",
        ],
        black: ["bg-black"],
      },
      size: {
        sm: ["text-sm", "py-2", "px-4", "gap-1"],
        md: ["text-base", "py-4", "px-6", "gap-2"],
      },
      theme: {
        solid: ["text-white"],
        outlined: ["bg-opacity-0", "border", "hover:text-white"],
        link: ["bg-transparent", "hover:bg-transparent", "border-none"],
        muted: [""],
      },
      shape: {
        rounded: [""],
        circler: [""],
      },
    },
    compoundVariants: [
      // Making button circle in type circle with common padding on X & Y axis
      {
        type: ["primary", "secondary", "grey", "black"],
        shape: "circle",
        size: "sm",
        class: "p-2",
      },
      {
        type: ["primary", "secondary", "grey", "black"],
        shape: "circle",
        size: "md",
        class: "p-4",
      },

      // Adding click active effect for all button variants
      {
        type: ["primary", "secondary", "grey", "black"],
        theme: ["solid", "outlined", "muted"],
        class: "active:bg-opacity-80",
      },

      // text-white for 3 button & theme type
      {
        type: ["primary", "secondary", "grey"],
        theme: ["solid", "outlined"],
        class: "hover:text-white",
      },

      //PRIMARY BUTTON - Outlined, Muted
      {
        type: "primary",
        theme: "outlined",
        class: "hover:bg-primary-500 border-primary-500",
      },
      {
        type: "primary",
        theme: "muted",
        class: "bg-primary-200 hover:bg-primary-300",
      },

      //SECONDARY BUTTON - Outlined, Muted
      {
        type: "secondary",
        theme: "outlined",
        class: "hover:bg-secondary-500 border-secondary-500",
      },
      {
        type: "secondary",
        theme: "muted",
        class: "bg-secondary-200 hover:bg-secondary-300",
      },

      //GREY BUTTON - Outlined, Muted
      {
        type: "grey",
        theme: "outlined",
        class: "hover:bg-grey-500 border-grey-500",
      },
      {
        type: "grey",
        theme: "muted",
        class: "bg-grey-200 hover:bg-grey-300",
      },

      //BLACK BUTTON - Outlined, Muted
      {
        type: "black",
        theme: "outlined",
        class: "border-black hover:bg-black hover:text-white",
      },
      {
        type: "black",
        theme: "muted",
        class: "bg-grey-300 text-grey-500 hover:bg-grey-400 hover:text-black",
      },
    ],
    defaultVariants: {
      type: "primary",
      size: "md",
      theme: "solid",
      shape: "rounded",
    },
  }
);
