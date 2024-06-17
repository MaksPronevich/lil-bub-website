import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "@/providers";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeContextProvider>
  );
};
