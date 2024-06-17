import { FC } from "react";
import { publicRoutes } from "./public";
import { useRoutes } from "react-router-dom";

export const AppRoutes: FC = () => {
  const routes = [...publicRoutes];

  const element = useRoutes(routes);

  return <>{element}</>;
};
