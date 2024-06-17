import { FC } from "react";
import pawImg from "@/assets/img/paw.svg";

export const Loader: FC = () => {
  return (
    <span className="inline-flex ">
      <img className="animate-paw-loader h-[20px] w-[20px] rotate-90" src={pawImg} alt="Paw" />
      <img className="animate-paw-loader-2 h-[20px] w-[20px] rotate-90" src={pawImg} alt="Paw" />
      <img className="animate-paw-loader-3 h-[20px] w-[20px] rotate-90" src={pawImg} alt="Paw" />
    </span>
  );
};
