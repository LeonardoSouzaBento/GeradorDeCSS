import { CssValues, ScaledList } from "@/data/types";
import { fixedButtonSizes, sizes, textClassSizes } from "@/data/variables";
import { genScaledList } from "./genScaledList";
import { removeExcessZerosAndToFix } from "./removeExcessZeros";
import { genTextVariables } from "./genTextVariables";

/* ---------- Funções auxiliares ---------- */
export function genFontSizeScale(font640: number, font1280: number): string {
  const breakpoints: string[] = ["", "sm", "md", "lg", "xl", "2xl"];

  const calcFontSize = (index: number) => {
    // 0, 640, 768, 1024, 1280, 1536
    const proportions: number[] = [0, 0.5, 0.6, 0.8, 1, 1.2];
    const size = proportions[index] * (font1280 - font640) + font640;
    return removeExcessZerosAndToFix(size);
  };

  let result: string = "";

  breakpoints.forEach((item, index) => {
    let size: string;
    size = calcFontSize(index);

    result += `${item ? item + ":" : ""}text-[${size}rem] `;
  });

  return result.trim();
}

function buildTailwindCSSTable(scaledList: ScaledList[]): CssValues[] {
  return scaledList.map(({ tagName }) => {
    const textSize = textClassSizes[tagName];
    if (textSize) {
      return {
        tagName,
        value: textSize,
      };
    }
  });
}

/* ---------- Função principal ---------- */

export function scaleSizesAndReturn(
  minSizeBody: number,
  maxSizeBody: number,
  scaleValue: number
): string {
  const scaledList = genScaledList(minSizeBody, maxSizeBody, scaleValue);
  const bodyClass = `body {\n@apply ${genFontSizeScale(minSizeBody, maxSizeBody)};\n}`;
  const tailwindCSSTable = buildTailwindCSSTable(scaledList);
  const textVariables = genTextVariables(scaledList, "tw");
  const layerComponents = `@layer components {\n${bodyClass}\n\n${tailwindCSSTable
    .map(({ tagName, value }) => {
      return `${tagName} {@apply ${value};}`;
    })
    .join("\n\n")} \n}`;

  return `${textVariables}\n\n${layerComponents}`;
}
