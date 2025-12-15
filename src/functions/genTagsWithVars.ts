import { ScaledList } from '@/data/types';
import { textClassSizes } from '@/data/variables';
import { TagAndCssVar } from '@/data/types';

export function genTagsWithVars(
  scaledList: ScaledList[],
  returnType: 'css' | 'tw' = 'tw'
): TagAndCssVar[] {
  return scaledList.map(({ tagName }) => {
    const sizeVar = textClassSizes[tagName];
    if (sizeVar) {
      return {
        tagName,
        varName: returnType === 'css' ? `font-size: var(--${sizeVar});` : sizeVar,
      };
    }
  });
}
