import { cva } from "class-variance-authority";

export const popover = cva(
  // default class will applied on every button
  [
    "font-medium group  rounded-full w-fit outline-none flex items-center justify-center",
  ],
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
          "hover:text-grey-600",
          "hover:bg-grey-600",
        ],
        black: ["bg-black"],
      },
      size: {
        sm: ["text-sm", "py-2", "px-3", "gap-1"],
        md: ["text-base", "py-4", "px-5", "gap-2"],
      },
      theme: {
        solid: ["text-white"],
        outlined: [
          "bg-opacity-0",
          "border",
          "hover:bg-opacity-0",
          "border-grey-400",
        ],
        link: ["bg-transparent", "hover:bg-transparent", "border-none"],
        muted: [""],
      },
    },
    compoundVariants: [
      // Adding click active effect for all button variants
      {
        color: ["primary", "secondary", "grey", "black"],
        theme: ["solid", "muted"],
        class: "active:bg-opacity-80",
      },

      // text-white for 3 button & theme type
      {
        color: ["primary", "secondary", "grey"],
        theme: ["solid"],
        class: "hover:text-white",
      },

      //PRIMARY BUTTON - Outlined, Muted
      {
        color: "primary",
        theme: "outlined",
        class: "border-primary-500",
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
        class: "border-secondary-500",
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
        class: "border-grey-200",
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
        class: "hover:border-black",
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
          "group-hover:bg-primary-600",
          "text-primary-500",
        ],
        secondary: [
          "bg-secondary-500",
          "group-hover:bg-secondary-600",
          "text-secondary-500",
        ],
        grey: ["bg-grey-500", "group-hover:bg-grey-600", , "text-grey-500"],
        black: ["bg-black", "text-black"],
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
    },
    compoundVariants: [
      {
        color: ["primary", "secondary", "grey", "black"],
        theme: ["solid"],
        class: "bg-white group-hover:bg-white",
      },
      {
        color: ["primary", "secondary", "grey", "black"],
        theme: ["muted", "outlined"],
        class: "text-white",
      },
      {
        color: ["primary", "secondary", "grey", "black"],
        theme: ["muted"],
        class: "group-hover:text-white",
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
    },
  }
);
