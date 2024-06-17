import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { Generator } from "../sections";
import { animationConfig } from "@/config";
import { Footer, Header } from "@/components";
import { useThemeContext } from "@/providers";

export const MemeGenerator: FC = () => {
  const { show } = animationConfig;
  const { themeStyles } = useThemeContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      viewport={{ once: true }}
      whileInView="visible"
      className="relative"
      initial="hidden"
      variants={show}
      custom={1.5}
    >
      <Header />
      <main className="relative z-20">
        <Generator />
      </main>
      <Footer />
      <div className="fixed left-0 top-0 h-full w-full" style={themeStyles} />
    </motion.div>
  );
};
