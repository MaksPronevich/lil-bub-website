import { FC } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { projectConfig } from "@/config";
import { animationConfig } from "@/config";
import catImg from "@/features/landing/assets/img/cat-01.png";
import catEyesImg from "@/features/landing/assets/img/cat-eyes.png";
import catNoseImg from "@/features/landing/assets/img/cat-nose.png";
import catPupilsImg from "@/features/landing/assets/img/cat-pupils.png";
import catTongueImg from "@/features/landing/assets/img/cat-tongue.png";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

export const Tokenomics: FC = () => {
  const { tokenAllocation } = projectConfig;
  const { show } = animationConfig;

  return (
    <section>
      <MouseParallaxContainer
        className="mx-auto flex max-w-[1748px] flex-col items-center justify-between gap-x-16 gap-y-6 px-6 py-[50px] lg:flex-row"
        globalFactorX={-0.1}
        globalFactorY={-0.1}
      >
        <motion.div
          className="exclude-class max-w-[660px]"
          viewport={{ amount: 0.5, once: true }}
          whileInView="visible"
          initial="hidden"
          variants={show}
          custom={1}
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl xl:text-6xl 3xl:text-7xl">Tokenomics</h2>
          <div>
            <div className="mb-3 flex flex-col">
              <span className="text-xl font-bold">Token Allocation:</span>
              <span>The total Supply of Lil BUB is</span>
            </div>
            <div className="text-2xl font-bold sm:text-3xl md:text-5xl">
              <CountUp end={tokenAllocation} enableScrollSpy scrollSpyOnce duration={4} />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="exclude-class relative max-w-[700px]"
          viewport={{ amount: 0.5, once: true }}
          whileInView="visible"
          initial="hidden"
          variants={show}
          custom={1}
        >
          <img className="relative z-10" src={catImg} alt="Cat" />
          <img className="absolute left-0 top-0 z-50" src={catEyesImg} alt="Cat eyes" />
          <MouseParallaxChild className="absolute left-0 top-0 z-50" factorY={0.17} factorX={0.19}>
            <img src={catPupilsImg} alt="Cat pupils" />
          </MouseParallaxChild>
          <img
            className="absolute left-0 top-0 z-50 animate-cat-tongue will-change-transform"
            src={catTongueImg}
            alt="Cat tongue"
          />
          <img className="absolute left-0 top-0 z-50" src={catNoseImg} alt="Cat nose" />
        </motion.div>
      </MouseParallaxContainer>
    </section>
  );
};
