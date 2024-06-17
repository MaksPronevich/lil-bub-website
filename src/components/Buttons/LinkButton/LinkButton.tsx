import { clsx } from "clsx";
import { FC, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useButtonStyles } from "../Button/useButtonStyles";
import { LinkButtonInterface } from "./LinkButton.interface";

export const LinkButton: FC<LinkButtonInterface> = forwardRef<HTMLAnchorElement, LinkButtonInterface>((props, ref) => {
  const { children, linkType = "externalLink", openInNewTab, href, className, ...restProps } = props;

  const buttonStyles = useButtonStyles(props);
  const combinedClassName = clsx(buttonStyles, className);

  if (linkType === "link") {
    return (
      <Link className={combinedClassName} {...restProps} to={href} ref={ref}>
        <span className="order-3">{children}</span>
      </Link>
    );
  }

  return (
    <a
      target={openInNewTab ? "_blank" : "_self"}
      className={combinedClassName}
      rel="noreferrer"
      {...restProps}
      href={href}
      ref={ref}
    >
      <span className="order-3">{children}</span>
    </a>
  );
});

LinkButton.displayName = "LinkButton";
