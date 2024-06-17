import { FC } from "react";
import { motion } from "framer-motion";
import { animationConfig } from "@/config";
import catImg from "@/features/landing/assets/img/cat-02.png";
import catImg2 from "@/features/landing/assets/img/cat-02-2.png";
import catNoseImg from "@/features/landing/assets/img/cat-nose-02.png";
import catTongueImg from "@/features/landing/assets/img/cat-tongue-02.png";

export const Mission: FC = () => {
  const { show } = animationConfig;

  return (
    <section className="relative lg:min-h-screen">
      <div className="mx-auto flex max-w-[1748px] flex-col-reverse items-center gap-x-16 gap-y-20 px-6 py-[50px] lg:min-h-screen lg:flex-row">
        <motion.div
          viewport={{ amount: 0.5, once: true }}
          className="exclude-class relative"
          whileInView="visible"
          initial="hidden"
          variants={show}
          custom={1}
        >
          <img className="relative z-10" src={catImg} alt="Cat" />
          <img className="absolute left-0 top-0 z-20 animate-cat-sleep" src={catImg2} alt="Cat" />
          <img
            className="absolute left-0 top-0 z-30 animate-cat-tongue-2 will-change-transform"
            src={catTongueImg}
            alt="Cat tongue"
          />
          <img className="absolute left-0 top-0 z-40" src={catNoseImg} alt="Cat nose" />
        </motion.div>
        <motion.div
          className="exclude-class relative z-20 max-w-[660px]"
          viewport={{ amount: 0.5, once: true }}
          whileInView="visible"
          initial="hidden"
          variants={show}
          custom={1}
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl xl:text-6xl 3xl:text-7xl">Mission Statement</h2>
          <div className="text-justify text-sm lg:text-base">
            <p>
              The Solana Meme community now has a special mission: to provide a home for the most legendary cat ever
              known.
            </p>
            <br />
            <p>
              To prove the charitable power of the Solana community, for every Marketcap milestone 50M, 100M, 200M,
              500M, 1B, and 2B, Lil BUB will donate to animal shelters and sanctuaries that help save animal lives
              worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
