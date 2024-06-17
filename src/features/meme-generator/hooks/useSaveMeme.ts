import html2canvas from "html2canvas";
import { configuration, projectConfig } from "@/config";
import { useRef, useState, RefObject, useCallback } from "react";

type useSaveMeme = {
  elementRef: RefObject<HTMLDivElement>;
  isLoading: boolean;
  handleSaveMeme: () => void;
  handleShareMeme: () => void;
};

export const useSaveMeme = (): useSaveMeme => {
  const [isLoading, setIsLoading] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const { imgBBUrl, imgBBApiKey } = configuration;
  const { tweetText, twitterUserName } = projectConfig;

  const handleSaveMeme = useCallback(async () => {
    if (elementRef.current) {
      const canvas = await html2canvas(elementRef.current);
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "meme.png";
      link.click();
    }
  }, []);

  const handleShareMeme = useCallback(async () => {
    setIsLoading(true);
    if (elementRef.current) {
      const canvas = await html2canvas(elementRef.current);
      const dataUrl = canvas.toDataURL("image/png");
      const formData = new FormData();

      formData.append("image", dataUrl.split(",")[1]);

      try {
        const response = await fetch(`${imgBBUrl}?key=${imgBBApiKey}`, {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        if (result.success) {
          const imageUrl = result.data.url;
          const twitterImageMetaTags = document.querySelectorAll(".twitter-image");
          const twitterSiteMetaTags = document.querySelectorAll(".twitter-site");

          const match = imageUrl.match(/\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\.png$/);

          const firstPart = match[1];
          const secondPart = match[2];

          const pageUrl = `https://lil-bub-website.netlify.app/meme-generator/${firstPart}/${secondPart}`;

          if (twitterImageMetaTags.length > 0 && twitterSiteMetaTags.length > 0) {
            twitterImageMetaTags.forEach((twitterTag) => twitterTag.setAttribute("content", imageUrl));
            twitterSiteMetaTags.forEach((twitterTag) => twitterTag.setAttribute("content", pageUrl));
          }

          setTimeout(() => {
            const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(tweetText)}&via=${twitterUserName}`;

            window.open(twitterUrl, "_blank");
            setIsLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  }, []);

  return { elementRef, isLoading, handleSaveMeme, handleShareMeme };
};
