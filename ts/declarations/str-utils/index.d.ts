type StringProcessing = (value: string) => string;

declare module "str-utils" {
  export const strReverse: StringProcessing;
  export const strToLower: StringProcessing;
  export const strToUpper: StringProcessing;
  export const strRandomize: StringProcessing;
  export const strInvertCase: StringProcessing;
}

// used in TypeScript to provide type information for JavaScript code that doesn't have TypeScript annotations
