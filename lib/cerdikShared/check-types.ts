const allTypesJS = [
  "object",
  "number",
  "map",
  "boolean",
  "string",
  "array",
  "null",
  "date",
  "bigint",
  "function",
  "asyncfunction",
  "set",
  "weakmap",
  "weakset",
  "asyncgeneratorfunction",
  "generatorfunction",
  "undefined",
] as const;

type ConstantAllType = typeof allTypesJS[number];

export function toTypeStr(value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

export const isStr = (v: unknown): v is string =>
  toTypeStr(v) === ("string" as ConstantAllType);

export const isNum = (v: unknown): v is number =>
  toTypeStr(v) === ("number" as ConstantAllType);

export const isBool = (v: unknown): v is boolean =>
  toTypeStr(v) === ("boolean" as ConstantAllType);

export const isMap = (v: unknown): v is typeof Map =>
  toTypeStr(v) === ("map" as ConstantAllType);

export const isObj = (v: unknown): v is Record<string, typeof v> =>
  toTypeStr(v) === ("object" as ConstantAllType);

export const isArr = (v: unknown): v is Array<typeof v> =>
  toTypeStr(v) === ("array" as ConstantAllType);

export const isNull = (v: unknown): v is null =>
  toTypeStr(v) === ("null" as ConstantAllType);

export const isDate = (v: unknown): v is Date =>
  toTypeStr(v) === ("date" as ConstantAllType);

export const isBigInt = (v: unknown): v is bigint =>
  toTypeStr(v) === ("bigint" as ConstantAllType);

export const isFn = (v: unknown): v is Function =>
  toTypeStr(v) === ("function" as ConstantAllType);

export const isAsyncFn = (v: unknown): v is Promise<Function> =>
  toTypeStr(v) === ("asyncfunction" as ConstantAllType);

export const isGenFn = (v: unknown): v is GeneratorFunction =>
  toTypeStr(v) === ("generatorfunction" as ConstantAllType);

export const isAsyncGenFn = (v: unknown): v is AsyncGeneratorFunction =>
  toTypeStr(v) === ("asyncgeneratorfunction" as ConstantAllType);

export const isUndefined = (v: unknown): v is undefined =>
  toTypeStr(v) === ("undefined" as ConstantAllType);
