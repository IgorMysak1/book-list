import { mixElementsArray } from "./mix-elements-array";

export const mixSymbolsString = (string: string): string => {
  const stringArray = string.split("");
  const mixedArray = mixElementsArray<string>(stringArray);
  return mixedArray.join("");
};
