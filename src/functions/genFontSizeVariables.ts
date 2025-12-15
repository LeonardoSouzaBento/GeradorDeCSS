import { sizes } from '@/data/variables';
import { ScaledList } from '@/data/types';
import { removeExcessZerosAndToFix } from './removeExcessZeros';

export function genFontSizeVariables(
  scaledList: ScaledList[],
  returnType: 'css' | 'tw' = 'tw'
): string {
  const itemsWithVar = sizes.filter((item) => item.var);

  const variables = itemsWithVar
    .map(({ tagName, var: varName, ratio}) => {
      const value = scaledList.find((scaleItem) => tagName === scaleItem.tagName);
      return ` ${varName}: ${removeExcessZerosAndToFix(ratio || value.minSize)}em;`;
    })
    .join('\n');

  if (returnType === 'tw') {
    return `@theme {\n${variables}\n}`;
  } else {
    return `:root {\n${variables}\n}`;
  }
}
