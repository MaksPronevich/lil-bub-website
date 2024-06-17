import { BaseButtonInterface } from "../Button/Button.interface";

export interface LinkButtonInterface extends BaseButtonInterface {
  href: string;
  className?: string;
  onClick?: () => void;
  openInNewTab?: boolean;
  linkType?: "link" | "externalLink";
}
