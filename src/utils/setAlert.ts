import { StateSetter } from '@/data/typography/types';
/**
 * @param setState
 * @param duration
 */
export const setAlert = (setState: StateSetter<boolean>, duration: number = 3000) => {
  setState(true);
  setTimeout(() => {
    setState(false);
  }, duration);
};
