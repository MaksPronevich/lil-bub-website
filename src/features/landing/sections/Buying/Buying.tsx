import { FC } from "react";
import { motion } from "framer-motion";
import arrowImg from "../../assets/img/arrow.svg";
import { Paws } from "@/features/landing/components";
import catImg1 from "../../assets/img/cat-buy-01.png";
import catImg2 from "../../assets/img/cat-buy-02.png";
import catImg3 from "../../assets/img/cat-buy-03.png";
import { projectConfig, animationConfig } from "@/config";

export const Buying: FC = () => {
  const { show } = animationConfig;
  const { phantomDownloadLinkUrl } = projectConfig;

  return (
    <section className="relative z-30 py-[50px] lg:py-[150px]">
      <div className="exclude-class relative mx-auto max-w-[1748px] px-6">
        <motion.h2
          className="mb-[72px] text-center text-3xl font-bold md:text-6xl xl:text-7xl 3xl:text-[92px]/[100px]"
          viewport={{ amount: 0.2, once: true }}
          whileInView="visible"
          initial="hidden"
          variants={show}
          custom={1}
        >
          <span className="relative">
            How to Buy $BUB{" "}
            <img className="absolute -right-[20%] top-0 w-[15%] animate-bounce" src={arrowImg} alt="Arrow" />
          </span>
        </motion.h2>
        <motion.div
          className="mb-[72px] flex flex-col-reverse items-center justify-between gap-12 lg:flex-row"
          viewport={{ amount: 0.3, once: true }}
          whileInView="visible"
          initial="hidden"
          variants={show}
          custom={1}
        >
          <div className="rotate-[4deg]">
            <img src={catImg1} alt="Cat" />
          </div>
          <div className="max-w-[880px]">
            <h3 className="mb-6 text-3xl font-bold md:text-4xl xl:text-5xl 3xl:text-[56px]">
              1. Download and Install{" "}
              <a
                className="inline-block underline outline-none transition-transform hover:scale-90 focus:scale-90"
                href={phantomDownloadLinkUrl}
                rel="noreferrer"
                target="_blank"
              >
                Phantom
              </a>
            </h3>
            <div>
              <p>
                Phantom is a crypto wallet app used for storing and managing Solana tokens. After creating a wallet be
                sure to write down your recovery phrase on a piece of paper and store it somewhere safe.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mb-[72px] flex flex-col items-center justify-between gap-12 lg:flex-row"
          viewport={{ amount: 0.3, once: true }}
          whileInView="visible"
          initial="hidden"
          variants={show}
          custom={1}
        >
          <div className="w-full max-w-[880px]">
            <h3 className="mb-6 text-3xl font-bold md:text-4xl xl:text-5xl 3xl:text-[56px]">2.Purchase Solana</h3>
            <div>
              <p>
                From inside the{" "}
                <a
                  className="inline-block underline outline-none transition-transform hover:scale-90 focus:scale-90"
                  href={phantomDownloadLinkUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Phantom
                </a>{" "}
                app you can purchase Solana using Moonpay or other providers.
              </p>
            </div>
          </div>
          <div className="-rotate-[4deg]">
            <img src={catImg2} alt="Cat" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row"
          viewport={{ amount: 0.3, once: true }}
          whileInView="visible"
          initial="hidden"
          variants={show}
          custom={1}
        >
          <div className="rotate-[4deg]">
            <img src={catImg3} alt="Cat" />
          </div>
          <div className="max-w-[880px]">
            <h3 className="mb-6 text-3xl font-bold md:text-4xl xl:text-5xl 3xl:text-[56px]">3.Swap Your SOL for BUB</h3>
            <div>
              <p>
                Click the exchange button inside of the{" "}
                <a
                  className="inline-block underline outline-none transition-transform hover:scale-90 focus:scale-90"
                  href={phantomDownloadLinkUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Phantom
                </a>{" "}
                app, input our contract address (CA here when we have it), tap on review order then swap!
              </p>
            </div>
          </div>
        </motion.div>
        <Paws className="absolute left-[20%] top-[22%] hidden w-[50%] lg:block xl:top-[25%] 2xl:top-[29%] 2xl:w-[55%]" />
        <Paws
          className="absolute left-[20%] top-[55%] hidden w-[50%] lg:block xl:top-[58%] 2xl:top-[60%] 2xl:w-[55%]"
          variant="from-left"
        />
      </div>
    </section>
  );
};
