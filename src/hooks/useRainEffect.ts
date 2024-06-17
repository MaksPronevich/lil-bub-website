import { useRef, useEffect } from "react";

export const useRainEffect = (imageUrl = "", count = 20, duration = 2000, interval = 200): void => {
  const rainContainerRef = useRef(document.createElement("div"));
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    rainContainerRef.current.className = "rain-container";
    document.body.appendChild(rainContainerRef.current);

    const createRainDrop = (): void => {
      for (let i = 0; i < count; i++) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.className = "rain-image";
        img.style.left = `${Math.random() * window.innerWidth}px`;
        img.style.top = `-250px`;
        img.style.position = "absolute";
        img.style.transition = `all 2s ease-in`;
        rainContainerRef.current.appendChild(img);

        setTimeout(() => {
          img.style.transform = `translateY(${window.innerHeight + 500}px)`;
        }, i * 100);

        img.addEventListener("transitionend", () => {
          img.remove();
        });
      }
    };

    const createRain = (event: MouseEvent): void => {
      const clickedElement = event.target as HTMLElement;

      if (!clickedElement.closest(".exclude-class")) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }

        timerRef.current = window.setInterval(() => {
          createRainDrop();
        }, interval);

        setTimeout(() => {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        }, duration);
      }
    };

    document.body.addEventListener("click", createRain);

    return (): void => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      document.body.removeEventListener("click", createRain);
      document.body.removeChild(rainContainerRef.current);
    };
  }, [imageUrl, count, duration, interval]);
};
