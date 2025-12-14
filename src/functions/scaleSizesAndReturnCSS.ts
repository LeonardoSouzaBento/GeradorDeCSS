import { CssValues, ScaledList } from '@/data/types';
import {
  buttonSizes,
  cssFixedButtonSizes,
  fixedButtonSizes,
  sizes,
  textClassSizes,
} from '@/data/variables';
import { genScaledList } from './genScaledList';
import { removeExcessZerosAndToFix } from './removeExcessZeros';
import { genTextVariables } from './genTextVariables';

function scaleSizesForPureCSS(font640: number, font1280: number): string {
  const breakpoints = [
    { prefix: '', min: 0 },
    { prefix: 'sm', min: 640 },
    { prefix: 'md', min: 768 },
    { prefix: 'lg', min: 1024 },
    { prefix: 'xl', min: 1280 },
    { prefix: '2xl', min: 1536 },
  ];

  const proportions = [0, 0.5, 0.6, 0.8, 1, 1.2];

  let result = '';

  breakpoints.forEach((bp, index) => {
    const size = proportions[index] * (font1280 - font640) + font640;

    if (index === 0) {
      result += `font-size: ${removeExcessZerosAndToFix(size)}rem;\n}\n`;
    } else {
      result += `@media (min-width: ${bp.min}px) {\n body{font-size: ${removeExcessZerosAndToFix(size)}rem;}\n}\n`;
    }
  });

  return result.trim();
}

function buildCSSPureTable(scaledList: ScaledList[]): CssValues[] {
  const table: CssValues[] = [];

  scaledList.forEach(({ tagName }) => {
    const textSize = textClassSizes[tagName];
    if (textSize) {
      table.push({
        tagName,
        value: `font-size: var(--${textSize});`,
      });
    }
  });

  return table;
}

export function scaleSizesAndReturnCSS(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number
): string {
  const scaledList = genScaledList(minSizeBody, maxSizeBody, scaleValue);

  const textVariables = genTextVariables(scaledList, 'css');
  const bodyClass = `body {\n ${scaleSizesForPureCSS(minSizeBody, maxSizeBody)}`;
  const cssTable = buildCSSPureTable(scaledList);

  return `${textVariables}\n\n${bodyClass}\n\n${cssTable
    .map(({ tagName, value }) => `${tagName} {${value}}`)
    .join('\n\n')}`;
}
