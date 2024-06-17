import { ReactNode, ForwardedRef, MouseEventHandler } from "react";

export interface BaseButtonInterface {
  icon?: string;
  size?: "md" | "lg";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  width?: "auto" | "full";
  appearance?: "primary" | "ghost";
}

export interface ButtonInterface extends BaseButtonInterface {
  active?: boolean;
  loading?: boolean;
  ref?: ForwardedRef<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "reset" | "submit" | undefined;
}
