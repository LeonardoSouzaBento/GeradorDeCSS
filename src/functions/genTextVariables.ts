import { sizes } from "@/data/variables";
import { ScaledList } from "@/data/types";
import { removeExcessZerosAndToFix } from "./removeExcessZeros";

export function genTextVariables(
  scaledList: ScaledList[],
  returnType: "css" | "tw" = "tw"
): string {
  const itemsWithVar = sizes.filter((item) => item.var);

  const variables = itemsWithVar
    .map((item) => {
      const value = scaledList.find(
        (scaleItem) => item.tagName === scaleItem.tagName
      );
      return `${item.var}: ${removeExcessZerosAndToFix(value.minSize)}em;`;
    })
    .join("\n");

  if (returnType === "tw") {
    return `@theme {\n${variables}\n}`;
  } else {
    return `:root {\n${variables}\n}`;
  }
}
