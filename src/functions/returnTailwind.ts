import { genScaledList } from './genScaledList';
import { genTagsWithVars } from './genTagsWithVars';
import { genFontSizeVariables } from './genFontSizeVariables';
import { scaleFontForBody } from './scaleFontForBody';

/* ---------- Função principal ---------- */
export function returnTailwind(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number
): string {
  const scaledList = genScaledList(minSizeBody, maxSizeBody, scaleValue);
  const fontSizeVariables = genFontSizeVariables(scaledList, 'tw');

  const bodyClass = `@layer components {\nbody {\n@apply ${scaleFontForBody(minSizeBody, maxSizeBody)};\n}`;

  const tagsWithVars = `${genTagsWithVars(scaledList)
    .map(({ tagName, varName: value }) => {
      return `${tagName} {@apply ${value};}`;
    })
    .join('\n\n')}\n}`;

  return `${fontSizeVariables}\n\n${bodyClass}\n\n${tagsWithVars}`;
}
