import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/img/logo.png";
import logoDecor from "@/assets/img/logo-decor.png";

export const Header: FC = () => {
  return (
    <header className="absolute left-0 top-0 z-40 w-full py-4 lg:py-6">
      <div className="mx-auto flex max-w-[1748px] justify-center px-6 lg:justify-start">
        <Link className="exclude-class inline-flex items-center gap-5 outline-none" to="/">
          <div className="relative">
            <img
              className="h-[108px] w-[108px] animate-spin-slow lg:h-[128px] lg:w-[128px]"
              src={logoDecor}
              alt="Lil BUB"
            />
            <img className="absolute left-1/2 top-0 w-[80%] -translate-x-1/2" alt="Lil BUB" src={logo} />
          </div>
          <span className="hidden text-5xl font-bold lg:inline-flex">LIL BUB</span>
        </Link>
      </div>
    </header>
  );
};
