import { useColorTheme } from "@/hooks";
import React, { FC, useContext, createContext, CSSProperties, PropsWithChildren } from "react";

type ContextType = {
  themeColor: string;
  themeStyles: CSSProperties;
};

const ThemeContext = createContext<ContextType>({
  themeColor: "",
  themeStyles: {},
});

ThemeContext.displayName = "ThemeContext";

const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { themeColor, themeStyles } = useColorTheme();

  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        themeStyles,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = (): ContextType => useContext(ThemeContext);

export { ThemeContext, useThemeContext, ThemeContextProvider };
