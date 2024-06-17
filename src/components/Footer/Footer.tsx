import { FC } from "react";
import { motion } from "framer-motion";
import { projectConfig, animationConfig } from "@/config";

export const Footer: FC = () => {
  const { footerSocials } = projectConfig;
  const { show } = animationConfig;

  return (
    <motion.footer
      viewport={{ amount: 0.5, once: true }}
      whileInView="visible"
      initial="hidden"
      className="py-8"
      variants={show}
      custom={1}
    >
      <div className="relative z-20 mx-auto flex max-w-[1748px] justify-center px-6">
        <div className="exclude-class flex flex-col items-center gap-3">
          <span className="text-center font-bold lg:text-lg">Join the LIL BUB Community</span>
          <ul className="flex flex-wrap justify-center gap-y-2 divide-x">
            {footerSocials.map((social, index) => (
              <li key={index}>
                <a
                  className="relative mx-4 text-sm outline-none after:absolute after:left-0 after:mt-0 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full focus:after:w-full lg:text-base"
                  href={social.linkUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};
