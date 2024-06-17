import { clsx } from "clsx";
import { Loader } from "@/components";
import { FC, forwardRef } from "react";
import { useButtonStyles } from "./useButtonStyles";
import { ButtonInterface } from "./Button.interface";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const Button: FC<ButtonInterface> = forwardRef<HTMLButtonElement, ButtonInterface>(
  (props: ButtonInterface, ref) => {
    const { children, loading = false, onClick, className, disabled = false, type = "button", ...restProps } = props;

    const buttonStyles = useButtonStyles(props);
    const combinedClassName = clsx(buttonStyles, className);

    return (
      <button
        disabled={loading || disabled}
        className={combinedClassName}
        onClick={onClick}
        type={type}
        {...restProps}
        ref={ref}
      >
        {loading && <Loader />}
        {!loading && <span className="order-3">{children}</span>}
      </button>
    );
  },
);

Button.displayName = "Button";
