import { sizes } from "@/data/variables";

export const findKey = (varName: string) => sizes.find(item => item.var === varName)?.tagName;