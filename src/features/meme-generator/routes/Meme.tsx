import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { animationConfig } from "@/config";
import { useParams } from "react-router-dom";
import { useThemeContext } from "@/providers";
import { Footer, Header, LinkButton } from "@/components";

export const Meme: FC = () => {
  const { show } = animationConfig;
  const { themeStyles } = useThemeContext();
  const { siteId, memeId } = useParams();

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
        <section className="flex items-center justify-center px-4 pb-[50px] pt-[160px] sm:min-h-screen sm:px-6 lg:py-[180px]">
          <div className="exclude-class flex w-full max-w-[600px] flex-col gap-4 p-4 lg:p-6">
            <div className="relative w-full pb-[100%]">
              <img
                src={`https://i.ibb.co/${siteId}/${memeId}.png`}
                className="absolute h-full w-full object-cover"
                alt="Meme"
              />
            </div>
            <LinkButton
              className="block w-full flex-auto sm:w-auto"
              href="/meme-generator"
              appearance="ghost"
              linkType="link"
            >
              Meme generator
            </LinkButton>
          </div>
        </section>
      </main>
      <Footer />
      <div className="fixed left-0 top-0 h-full w-full" style={themeStyles} />
    </motion.div>
  );
};
