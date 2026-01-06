import { ScaledList } from '@/data/typography/types';
import { sizes } from '@/data/typography/variables';
import { removeExcessZerosAndToFix } from '../removeExcessZeros';

export function genScaledList(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number
): ScaledList[] {
  return sizes.map((item) => {
    const factor = item.ratio !== undefined ? item.ratio : Math.pow(scaleValue, item.pow ?? 0);

    return {
      ...item,
      scale: Math.pow(scaleValue, item.pow ?? 0),
      minSize: Number(removeExcessZerosAndToFix(minSizeBody * factor)),
      maxSize: Number(removeExcessZerosAndToFix(maxSizeBody * factor)),
    };
  });
}
