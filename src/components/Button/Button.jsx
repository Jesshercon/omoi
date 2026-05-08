import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const ButtonVariant = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Quaternary: "quaternary",
  Ghost: "ghost",
};

export const Button = ({
  className,
  children,
  variant = ButtonVariant.Primary,
  isTopRounded,
  inverse,
  ...restProps
}) => {
  const isVariantPrimary = variant === ButtonVariant.Primary;
  const classes = twMerge(
    "h-10 px-4 w-54 leading-none max-w-full cursor-pointer text-sm md:text-base font-Lora",
    classNames({
      "bg-mermaid-blues text-white rounded-xl": isVariantPrimary,
      "bg-transparent border border-mermaid-blues rounded-xl":
        isVariantPrimary && inverse,
      "bg-prism-pink text-mosque rounded-xl":
        variant == ButtonVariant.Secondary,
    }),
    className,
  );
  return (
    <button {...restProps} className={classes}>
      {children}
    </button>
  );
};
