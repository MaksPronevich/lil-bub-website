import { CSSProperties } from "react";

const colors = [
  "#0CF22F",
  "#44E1F2",
  "#FE6600",
  "#D7F205",
  "#2DB2A5",
  "#5259D9",
  "#F25749",
  "#F2359D",
  "#9163F2",
  "#F2D43D",
];

type UseColorTheme = {
  themeColor: string;
  themeStyles: CSSProperties;
};

export const useColorTheme = (): UseColorTheme => {
  const themeColor = colors[Math.floor(Math.random() * colors.length)];
  const themeStyles: CSSProperties = {
    background: `linear-gradient(to bottom, ${themeColor}, #ffffff)`,
  };

  return { themeColor, themeStyles };
};
