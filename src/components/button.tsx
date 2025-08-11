import { tv, VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "flex items-center justify-center cursor-pointer transition group gap-1 bg-black text-white",
  variants: {
    variant: {
      primary: " rounded-md",
      secondary: "rounded-full",
    },
    size: {
      sm: "h-7 py-1 px-3",
      md: "h-10 py-2 px-8",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});

export const buttonTextVariants = tv({
  variants: {
    variant: {
      primary: "",
      secondary: "",
    },
    size: {
      sm: "text-sm",
      md: "text-xs tracking-wider",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {}

export function Button({
  variant,
  size,
  disabled,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, disabled })}
      {...rest}
    >
      <span className={buttonTextVariants({ variant, size })}>{children}</span>
    </button>
  );
}
