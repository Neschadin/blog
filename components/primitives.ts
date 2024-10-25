import { tv } from "tailwind-variants";

export const postTitle = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      blue: "from-[#5EA2EF] to-[#0072F5]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: ["blue", "green", "pink"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const postText = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
