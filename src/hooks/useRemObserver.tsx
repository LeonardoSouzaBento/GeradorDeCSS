import { useEffect, useRef, useState } from "react";

export function useRemObserver() {
  const getRootFontSize = () =>
    parseFloat(getComputedStyle(document.documentElement).fontSize);

  const [rootFontSize, setRootFontSize] = useState<number>(16);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const value = getRootFontSize();
      setRootFontSize((prev) => (prev === value ? prev : value));
    };

    const onResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        update();
      }, 300);
    };

    // primeira leitura
    update();

    window.addEventListener("resize", onResize);

    const observer = new MutationObserver(onResize);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      window.removeEventListener("resize", onResize);
      observer.disconnect();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return Number(rootFontSize.toFixed(2));
}
