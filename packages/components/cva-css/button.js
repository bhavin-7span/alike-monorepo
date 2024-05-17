import { cva } from "class-variance-authority";

export const button = cva(
  // default class will applied on every button
  ["font-medium group  rounded-full  flex items-center justify-center"],
  {
    variants: {
      color: {
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
          "hover:text-grey-500",
          "hover:bg-grey-600",
        ],
        black: ["bg-black"],
      },
      size: {
        sm: ["text-base", "px-4", "h-12", "gap-1"],
        md: ["text-base", "px-6", "h-14", "gap-2"],
      },
      theme: {
        solid: ["text-white"],
        outlined: ["bg-opacity-0", "border", "hover:text-white"],
        link: ["bg-transparent", "hover:bg-transparent", "border-none"],
        muted: [""],
      },
      shape: {
        rounded: ["w-fit"],
        circler: [""],
      },
    },
    compoundVariants: [
      // Making button circle in type circle with common padding on X & Y axis
      {
        color: ["primary", "secondary", "grey", "black"],
        shape: "circle",
        size: "sm",
        class: "p-0 w-12",
      },
      {
        color: ["primary", "secondary", "grey", "black"],
        shape: "circle",
        size: "md",
        class: "p-0 w-14",
      },

      // Adding click active effect for all button variants
      {
        color: ["primary", "secondary", "grey", "black"],
        theme: ["solid", "outlined", "muted"],
        class: "active:bg-opacity-80",
      },

      // text-white for 3 button & theme type
      {
        color: ["primary", "secondary", "grey"],
        theme: ["solid", "outlined"],
        class: "hover:text-white",
      },

      //PRIMARY BUTTON - Outlined, Muted
      {
        color: "primary",
        theme: "outlined",
        class: "hover:bg-primary-500 border-primary-500",
      },
      {
        color: "primary",
        theme: "muted",
        class: "bg-primary-50 hover:bg-primary-100",
      },

      //SECONDARY BUTTON - Outlined, Muted
      {
        color: "secondary",
        theme: "outlined",
        class: "hover:bg-secondary-500 border-secondary-500",
      },
      {
        color: "secondary",
        theme: "muted",
        class: "bg-secondary-50 hover:bg-secondary-100",
      },

      //GREY BUTTON - Outlined, Muted
      {
        color: "grey",
        theme: "outlined",
        class: "hover:bg-grey-500 border-grey-200",
      },
      {
        color: "grey",
        theme: "muted",
        class: "bg-grey-100 hover:bg-grey-200",
      },

      //BLACK BUTTON - Outlined, Muted
      {
        color: "black",
        theme: "outlined",
        class: "border-black hover:bg-black hover:text-white",
      },
      {
        color: "black",
        theme: "muted",
        class: "bg-grey-100 text-black hover:bg-grey-200 hover:text-black",
      },
    ],

    // Default class variation.
    defaultVariants: {
      color: "primary",
      size: "md",
      theme: "solid",
      shape: "rounded",
    },
  }
);

export const counter = cva(
  ["font-medium rounded-full flex items-center justify-center"],
  {
    variants: {
      color: {
        primary: [
          "bg-primary-500",
          "group-hover:text-primary-500 text-primary-500",
        ],
        secondary: [
          "bg-secondary-500",
          "group-hover:text-secondary-500",
          "text-secondary-500",
        ],
        grey: ["bg-grey-500", "group-hover:text-grey-500", "text-grey-500"],
        black: ["bg-black", "group-hover:text-black", "text-black"],
      },
      size: {
        sm: ["text-sm", "h-5", "p-1", "min-w-5"],
        md: ["text-base", "h-6", "min-w-6", "p-2"],
      },
      theme: {
        solid: ["bg-white"],
        outlined: [""],
        link: [""],
        muted: [""],
      },
      shape: {
        rounded: [""],
        circler: [""],
      },
    },
    compoundVariants: [
      {
        color: ["primary", "secondary", "grey", "black"],
        theme: ["solid"],
        class: "bg-white",
      },
      {
        color: ["primary", "secondary", "grey", "black"],
        theme: ["outlined", "muted"],
        class: "text-white",
      },
      {
        color: ["primary", "secondary", "grey", "black"],
        theme: ["muted"],
        class: "group-hover:text-white",
      },
      {
        color: ["primary", "secondary", "grey", "black"],
        theme: ["outlined"],
        class: "group-hover:bg-white",
      },
      {
        color: ["primary", "secondary", "grey", "black"],
        theme: ["link"],
        class: "bg-opacity-0",
      },
    ],

    // Default class variation.
    defaultVariants: {
      color: "primary",
      size: "md",
      theme: "solid",
      shape: "rounded",
    },
  }
);
