import { clsx } from "clsx";
import { ButtonInterface } from "./Button.interface";
import { LinkButtonInterface } from "../LinkButton/LinkButton.interface";

export const useButtonStyles = (props: ButtonInterface | LinkButtonInterface): string => {
  const { appearance = "white", width = "auto", size = "lg", icon = "", disabled = false, className = "" } = props;
  const isButtonProps = "loading" in props;
  return clsx(
    "inline-flex items-center gap-2 px-10 justify-center before:order-2 before:text-[20px] whitespace-nowrap rounded-full font-bold outline-none hover:transition",
    appearance === "white" &&
      "bg-black text-white hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] focus:shadow-[0_0_15px_rgba(0,0,0,1)]",
    appearance === "ghost" && "border hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] focus:shadow-[0_0_15px_rgba(0,0,0,1)]",
    size === "md" && "h-12",
    size === "lg" && "h-14",
    width === "full" && "w-full",
    isButtonProps && !props.loading && icon && `_icon-${icon}`,
    (disabled || (isButtonProps && props.loading)) && "pointer-events-none select-none opacity-80",
    className,
  );
};
