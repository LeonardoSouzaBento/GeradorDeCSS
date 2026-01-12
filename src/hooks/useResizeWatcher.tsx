import type { StateSetter } from '@/data/typography/types';
import { useEffect, useRef } from 'react';

export function useResizeWatcher(setResizingCounter: StateSetter<number>) {
  const windowWidthInitialRef = useRef<number | null>(null);
  const resizeDowntime = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // o window acessado aqui não causa erro
    windowWidthInitialRef.current = window.innerWidth;

    function handleResize() {
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }

      resizeDowntime.current = setTimeout(() => {
        const widthOfWindow = window.innerWidth;

        if (
          windowWidthInitialRef.current !== null &&
          widthOfWindow !== windowWidthInitialRef.current
        ) {
          setResizingCounter((prev) => prev + 1);
          windowWidthInitialRef.current = widthOfWindow;
        }
      }, 500);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
    };
  }, [setResizingCounter]);
}
