import { useRef, useEffect, useCallback } from "react";
import useMountEffect from "@restart/hooks/useMountEffect";

export const usePawTrail = (): void => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const prevCoords = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useMountEffect(() => {
    const wrapper = document.createElement("div");
    wrapper.style.position = "fixed";
    wrapper.style.top = "0";
    wrapper.style.left = "0";
    wrapper.style.width = "100%";
    wrapper.style.height = "100%";
    wrapper.style.pointerEvents = "none";
    document.body.appendChild(wrapper);
    wrapperRef.current = wrapper;

    return (): void => {
      document.body.removeChild(wrapper);
    };
  });

  const handleMouseMove = useCallback((event: MouseEvent): void => {
    const currentX = event.clientX;
    const currentY = event.clientY;
    const { x: prevX, y: prevY } = prevCoords.current;

    if (prevX === null || prevY === null || Math.abs(currentX - prevX) > 40 || Math.abs(currentY - prevY) > 40) {
      const paw = document.createElement("div");
      paw.className = "paw";
      paw.style.position = "fixed";
      paw.style.left = `${currentX}px`;
      paw.style.top = `${currentY}px`;

      const angle = Math.atan2(currentY - (prevY || 0), currentX - (prevX || 0)) * (180 / Math.PI) + 90;
      paw.style.transform = `rotate(${angle}deg)`;

      if (wrapperRef.current) {
        wrapperRef.current.appendChild(paw);
      }
      prevCoords.current = { x: currentX, y: currentY };

      setTimeout(() => {
        paw.remove();
      }, 600);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return (): void => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);
};
