import { useEffect, useRef, useState } from "react";

export function useDebounce(
  eventCounter: number,
  delay: number
) {
  const [canSet, setCanSet] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastEventRef = useRef(eventCounter);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    lastEventRef.current = eventCounter;

    timeoutRef.current = setTimeout(() => {
      if (lastEventRef.current === eventCounter) {
        setCanSet(prev => prev + 1);
      }
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [eventCounter, delay]);

  return canSet;
}
