import { genScaledList } from './genScaledList';
import { genFontVariables } from './genFontVariables';
import { scaleFontForBody } from './scaleFontForBody';
import { genTagsWithVars } from './genTagsWithVars';

export function returnCSS(minSizeBody: number, maxSizeBody: number, scaleValue: number): string {
  const scaledList = genScaledList(minSizeBody, maxSizeBody, scaleValue);

  const fontSizeVariables = genFontVariables(scaledList, 'css');
  const bodyStyles = `body {\n ${scaleFontForBody(minSizeBody, maxSizeBody, 'css')}`;
  const tagsWithVars = genTagsWithVars(scaledList, 'css');

  return `${fontSizeVariables}\n\n${bodyStyles}\n\n${tagsWithVars
    .map(({ tagName, varName: value }) => `${tagName} {${value}}`)
    .join('\n\n')}`;
}
