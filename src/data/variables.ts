import { SizeHierarchy, Scale, CssValues } from "@/data/types";

/* C:/Users/souza/Desktop/repositorios-publicos/typografic-scale-generator/src/ui */

export const sizes: SizeHierarchy[] = [
  { tagName: ".smaller-text", pow: -2, var: "--text-xs" },
  { tagName: ".small-text, label", pow: -1, var: "--text-sm" },
  { tagName: ".normal-text", pow: 0, var: "--text-base" },
  { tagName: ".large-text", pow: 1, var: "--text-lg" },

  { tagName: "h6", pow: 1, var: "--text-h6" },
  { tagName: "h5", pow: 2, var: "--text-h5" },
  { tagName: "h4", pow: 3, var: "--text-h4" },
  { tagName: "h3", pow: 4, var: "--text-h3" },
  { tagName: "h2", pow: 5, var: "--text-h2" },
  { tagName: "h1", pow: 6, var: "--text-h1" },
  { tagName: ".big-h1", pow: 7, var: "--text-big-h1" },

  { tagName: "button", ratio: 1, var: "--text-button" },
  { tagName: ".small-button", ratio: 0.90, var: "--text-sm-button" },
  { tagName: ".large-button", ratio: 1.10, var: "--text-lg-button" },
];

export const buttonSizes: Record<string, string> = Object.fromEntries(
  sizes
    .filter((item) => item.ratio)
    .map((item) => {
      return [item.tagName, `${item.ratio}em`];
    })
    .filter(Boolean) as [string, string][]
);

/* variaveis para corpo */
export const textClassSizes: Record<string, string> = Object.fromEntries(
  sizes
    .filter((item) => item.var)
    .map((item) => {
      const className = item.var!.replace("--", "");
      return [item.tagName, className];
    })
);

export const defaultCssValues: CssValues[] = sizes.map((item) => {
  return {
    tagName: item.tagName,
    value: "",
  };
});

/* variaveis para botões */

export const fixedButtonSizes: Record<string, string> = {
  button: `text-[${buttonSizes.button}]`,
  ".small-button": `text-[${buttonSizes[".small-button"]}]`,
  ".large-button": `text-[${buttonSizes[".large-button"]}]`,
};

export const cssFixedButtonSizes: Record<string, string> = {
  button: `font-size: ${buttonSizes.button}`,
  ".small-button": `font-size: ${buttonSizes[".small-button"]}`,
  ".large-button": `font-size: ${buttonSizes[".large-button"]}`,
};

/* escalas */
export const scales: Scale[] = [
  { name: "minor-second", value: 1.067 },
  { name: "major-second", value: 1.125 },
  { name: "minor-third", value: 1.2 },
  { name: "major-third", value: 1.25 },
  { name: "perfect-fourth", value: 1.333 },
  { name: "augmented-fourth", value: 1.414 },
  { name: "perfect-fifth", value: 1.5 },
  { name: "golden-ratio", value: 1.618 },
];
