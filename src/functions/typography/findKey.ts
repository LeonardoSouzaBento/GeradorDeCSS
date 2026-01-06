import { sizes } from '@/data/typography/variables';

export const findKey = (varName: string) => sizes.find((item) => item.var === varName)?.tagName;
