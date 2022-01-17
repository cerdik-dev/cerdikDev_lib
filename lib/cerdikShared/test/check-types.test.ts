import { test, assert } from "vitest";
import {
  isArr,
  isObj,
  isAsyncFn,
  isBool,
  isStr,
  isNull,
  isBigInt,
  isFn,
  isAsyncGenFn,
  isGenFn,
  isNum,
  isDate,
  isMap,
  isUndefined,
} from "../check-types";

test("types test", () => {
  /** test is array */
  assert(isArr([]));
  assert(!isArr({}));
  assert(!isArr(""));
  assert(!isArr(function () {}));
  assert(!isArr(async function () {}));
  assert(!isArr(async () => {}));
  assert(!isArr(null));
  assert(!isArr(undefined));
  assert(!isArr(12));
  assert(!isArr(12n));

  /** is number */
  assert(isNum(12));
  assert(!isNum(async function* () {}));
  assert(!isNum(async () => {}));
  assert(!isNum(async function () {}));
  assert(!isNum(() => {}));
  assert(!isNum(function () {}));
  assert(!isNum(true));
  assert(!isNum(false));
  assert(!isNum([]));
  assert(!isNum({}));
  assert(!isNum(""));
  assert(!isNum(null));
  assert(!isNum(undefined));

  /** test object */
  assert(isObj({}));
  assert(isObj(new Object()));
  assert(!isObj([]));
  assert(!isObj(""));
  assert(!isObj(function () {}));
  assert(!isObj(async function () {}));
  assert(!isObj(async () => {}));
  assert(!isObj(null));
  assert(!isObj(undefined));
  assert(!isObj(12));
  assert(!isObj(12n));

  /** is string */
  assert(isStr(""));
  assert(!isStr([]));
  assert(!isStr({}));
  assert(!isStr(function () {}));
  assert(!isStr(async function () {}));
  assert(!isStr(async () => {}));
  assert(!isStr(null));
  assert(!isStr(undefined));
  assert(!isStr(12));
  assert(!isStr(12n));

  /** isNullable */
  assert(isNull(null));
  assert(!isNull(undefined));
  assert(!isNull([]));
  assert(!isNull({}));
  assert(!isNull(""));
  assert(!isNull(function () {}));
  assert(!isNull(async function () {}));
  assert(!isNull(async () => {}));
  assert(!isNull(12));
  assert(!isNull(12n));

  //** is BigInt */
  assert(isBigInt(12n));
  assert(!isBigInt(undefined));
  assert(!isBigInt([]));
  assert(!isBigInt({}));
  assert(!isBigInt(""));
  assert(!isBigInt(function () {}));
  assert(!isBigInt(async function () {}));
  assert(!isBigInt(async () => {}));
  assert(!isBigInt(null));
  assert(!isBigInt(12));

  /** is async function */
  assert(isAsyncFn(async function () {}));
  assert(isAsyncFn(async () => {}));
  assert(!isAsyncFn([]));
  assert(!isAsyncFn({}));
  assert(!isAsyncFn(""));
  assert(!isAsyncFn(function () {}));
  assert(!isAsyncFn(null));
  assert(!isAsyncFn(12));
  assert(!isAsyncFn(undefined));
  assert(!isAsyncFn(true));
  assert(!isAsyncFn(false));

  /** is boolean */
  assert(isBool(true));
  assert(isBool(false));
  assert(!isBool(async function () {}));
  assert(!isBool(async () => {}));
  assert(!isBool([]));
  assert(!isBool({}));
  assert(!isBool(""));
  assert(!isBool(function () {}));
  assert(!isBool(null));
  assert(!isBool(12));
  assert(!isBool(undefined));

  /** is function */
  assert(isFn(() => {}));
  assert(isFn(function () {}));
  assert(!isFn(async () => {}));
  assert(!isFn(async function () {}));
  assert(!isFn(true));
  assert(!isFn(false));
  assert(!isFn([]));
  assert(!isFn({}));
  assert(!isFn(""));
  assert(!isFn(null));
  assert(!isFn(12));
  assert(!isFn(undefined));

  /** is async function */
  assert(isAsyncFn(async () => {}));
  assert(isAsyncFn(async function () {}));
  assert(!isAsyncFn(async function* () {}));
  assert(!isAsyncFn(() => {}));
  assert(!isAsyncFn(function () {}));
  assert(!isAsyncFn(true));
  assert(!isAsyncFn(false));
  assert(!isAsyncFn([]));
  assert(!isAsyncFn({}));
  assert(!isAsyncFn(""));
  assert(!isAsyncFn(null));
  assert(!isAsyncFn(12));
  assert(!isAsyncFn(undefined));

  /** is function genetator => not async */
  assert(isGenFn(function* () {}));
  assert(!isGenFn(async () => {}));
  assert(!isGenFn(async function () {}));
  assert(!isGenFn(() => {}));
  assert(!isGenFn(function () {}));
  assert(!isGenFn(true));
  assert(!isGenFn(false));
  assert(!isGenFn([]));
  assert(!isGenFn({}));
  assert(!isGenFn(""));
  assert(!isGenFn(null));
  assert(!isGenFn(12));
  assert(!isGenFn(undefined));

  /** is async function genetator */
  assert(isAsyncGenFn(async function* () {}));
  assert(!isAsyncGenFn(async () => {}));
  assert(!isAsyncGenFn(async function () {}));
  assert(!isAsyncGenFn(() => {}));
  assert(!isAsyncGenFn(function () {}));
  assert(!isAsyncGenFn(true));
  assert(!isAsyncGenFn(false));
  assert(!isAsyncGenFn([]));
  assert(!isAsyncGenFn({}));
  assert(!isAsyncGenFn(""));
  assert(!isAsyncGenFn(null));
  assert(!isAsyncGenFn(12));
  assert(!isAsyncGenFn(undefined));

  /** is date */
  assert(isDate(new Date()));
  assert(!isDate(async function* () {}));
  assert(!isDate(async () => {}));
  assert(!isDate(async function () {}));
  assert(!isDate(() => {}));
  assert(!isDate(function () {}));
  assert(!isDate(true));
  assert(!isDate(false));
  assert(!isDate([]));
  assert(!isDate({}));
  assert(!isDate(""));
  assert(!isDate(null));
  assert(!isDate(12));
  assert(!isDate(undefined));

  /** is Map */
  assert(isMap(new Map()));
  assert(!isMap(async function* () {}));
  assert(!isMap(async () => {}));
  assert(!isMap(async function () {}));
  assert(!isMap(() => {}));
  assert(!isMap(function () {}));
  assert(!isMap(true));
  assert(!isMap(false));
  assert(!isMap([]));
  assert(!isMap({}));
  assert(!isMap(""));
  assert(!isMap(null));
  assert(!isMap(12));
  assert(!isMap(undefined));

  /** is undefine */
  assert(isUndefined(undefined));
  assert(!isUndefined(new Map()));
  assert(!isUndefined(async function* () {}));
  assert(!isUndefined(async () => {}));
  assert(!isUndefined(async function () {}));
  assert(!isUndefined(() => {}));
  assert(!isUndefined(function () {}));
  assert(!isUndefined(true));
  assert(!isUndefined(false));
  assert(!isUndefined([]));
  assert(!isUndefined({}));
  assert(!isUndefined(""));
  assert(!isUndefined(null));
  assert(!isUndefined(12));
});
