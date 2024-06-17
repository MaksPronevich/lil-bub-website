import { FC } from "react";
import { AppRoutes } from "@/routes";
import { AppProvider } from "@/providers";
import rainImage from "@/assets/img/bub.png";
import { usePawTrail, useRainEffect } from "@/hooks";

export const App: FC = () => {
  usePawTrail();
  useRainEffect(rainImage, 20, 200, 100);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
