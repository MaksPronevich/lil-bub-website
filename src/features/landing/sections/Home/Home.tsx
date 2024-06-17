import { FC } from "react";
import { clsx } from "clsx";
import { useCopyText } from "@/hooks";
import { projectConfig } from "@/config";
import { LinkButton } from "@/components";
import catImg from "@/features/landing/assets/img/cat-03.png";
import catNoseImg from "@/features/landing/assets/img/cat-nose-03.png";
import catTongueImg from "@/features/landing/assets/img/cat-tongue-03.png";

export const Home: FC = () => {
  const { address, byuLinkUrl, socials } = projectConfig;
  const { isNotificationVisible, copyHandler } = useCopyText();

  return (
    <section className="min-h-screen rounded-b-[60px]">
      <div className="mx-auto flex min-h-screen min-w-0 max-w-[1748px] flex-col items-center justify-between gap-x-16 px-6 lg:flex-row">
        <div className="exclude-class relative w-full min-w-0 max-w-[660px] pt-[200px] lg:w-auto lg:py-[200px]">
          <h1 className="mb-6 text-center text-5xl font-semibold md:text-6xl lg:text-left xl:text-7xl 3xl:text-[92px]/[100px]">
            Meet LIL BUB on Solana
          </h1>
          <div className="relative flex h-14 min-w-0 items-center gap-4 rounded-full border bg-white/10">
            <button
              className="_icon-copy inline-flex h-full w-14 shrink-0 items-center justify-center rounded-s-full bg-black text-white outline-none transition before:text-[24px] hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] focus:shadow-[0_0_15px_rgba(0,0,0,1)]"
              onClick={() => copyHandler(address)}
            />
            <div className="min-w-0 truncate pr-3 text-sm lg:text-base">{address}</div>
            {isNotificationVisible && (
              <div className="absolute left-0 top-14 z-10 rounded-full bg-white px-4 py-1 text-sm font-bold">
                Copied
              </div>
            )}
          </div>
          <p className="my-6 text-center text-sm lg:text-left lg:text-base">
            Meet LIL BUB, the adorable princess who captured hearts worldwide. Now setting her paws on Solana.
          </p>
          <LinkButton href={byuLinkUrl} className="mb-6" width="full" openInNewTab>
            Buy Here
          </LinkButton>
          <div className="flex flex-col-reverse flex-wrap items-center justify-center gap-6 sm:flex-row">
            <ul className="inline-flex gap-3">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    className={clsx(
                      "inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white outline-none transition before:text-[24px] hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] focus:shadow-[0_0_15px_rgba(0,0,0,1)]",
                      `_icon-${social.name}`,
                    )}
                    href={social.linkUrl}
                    rel="noreferrer"
                    target="_blank"
                  />
                </li>
              ))}
            </ul>
            <LinkButton
              className="w-full flex-auto sm:w-auto"
              href="/meme-generator"
              appearance="ghost"
              linkType="link"
            >
              Meme generator Here
            </LinkButton>
          </div>
        </div>
        <div className="exclude-class relative max-w-[740px]">
          <img className="relative z-10" src={catImg} alt="Cat" />
          <img
            className="absolute left-0 top-0 z-20 animate-cat-tongue-3 will-change-transform"
            src={catTongueImg}
            alt="Cat tongue"
          />
          <img className="absolute left-0 top-0 z-30" src={catNoseImg} alt="Cat nose" />
        </div>
      </div>
    </section>
  );
};
