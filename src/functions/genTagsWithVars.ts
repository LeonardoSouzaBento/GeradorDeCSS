import { ScaledList } from '@/data/typography/types';
import { textClassSizes } from '@/data/typography/variables';
import { TagAndCssVar } from '@/data/typography/types';

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
