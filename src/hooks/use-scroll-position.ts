"use client";

import { useEffect, useState } from "react";

export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const throttle = <T extends (...args: Parameters<T>) => ReturnType<T>>(
      callback: T,
      delay: number
    ) => {
      let lastCall = 0;

      return (...args: Parameters<T>): ReturnType<T> | undefined => {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return callback(...args);
      };
    };

    const handleScroll = throttle(() => {
      setScrollPosition(window.scrollY);
    }, 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
};
