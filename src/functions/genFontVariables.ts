import { sizes } from '@/data/variables';
import { ScaledList } from '@/data/types';
import { removeExcessZerosAndToFix } from './removeExcessZeros';

const fontVars =
  "/*font*/\n" +
  " --font-body: 'Sua Fonte Do Corpo';\n" +
  " --font-button: 'Sua Fonte De Botão';\n" +
  " --font-title: 'Sua Fonte Para Titulos';\n\n" +
  "/*font-sizes*/";

export function genFontVariables(
  scaledList: ScaledList[],
  returnType: 'css' | 'tw' = 'tw'
): string {
  const itemsWithVar = sizes.filter((item) => item.var);

  const fontSizeVars = itemsWithVar
    .map(({ tagName, var: varName, ratio }) => {
      const value = scaledList.find((scaleItem) => tagName === scaleItem.tagName);
      return ` ${varName}: ${removeExcessZerosAndToFix(ratio || value.minSize)}em;`;
    })
    .join('\n');
  const vars = `${fontVars}\n${fontSizeVars}`;

  if (returnType === 'tw') {
    return `@theme {\n${vars}\n}`;
  } else {
    return `:root {\n${vars}\n}`;
  }
}
