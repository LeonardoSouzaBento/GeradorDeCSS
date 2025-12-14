import { sizes } from "@/data/variables";
import { ScaledList } from "@/data/types";

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
      return `${item.var}: ${value.minSize}em;`;
    })
    .join("\n");

  if (returnType === "tw") {
    return `@theme {\n...\n${variables}\n...\n}`;
  } else {
    return `:root {\n...\n${variables}\n...\n}`;
  }
}
