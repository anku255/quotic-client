import { filter, omit, path, pick } from "ramda";
import queryString from "query-string";

export const accessDeepObject = (arr: string, obj: unknown) => path(Array.isArray(arr) ? arr : arr.split("."), obj);

export const ArrayMaybe = (arr: any) => arr || [];
export const ObjectMaybe = (obj: unknown) => obj || {};
export const StringMaybe = (str: unknown) => str || "";

export const pickWrapper = (keys: string[], object: unknown) => pick(keys, object);
export const omitWrapper = (keys: string[], object: unknown) => omit(keys, object);
export const isNotEmptyArray = (x: unknown) => Array.isArray(x) && x.length > 0;
export const isNotEmptyObject = (obj: any) =>
  !!obj && Object.keys(obj).length > 0 && Object.values(obj).some((x) => x !== null && x !== "");
export const removeNonTrueValuesFromObject = (obj: any) => filter(Boolean, obj);

export const stringifyQueryParams = (qp: { [key: string]: string }, url = "") => {
  if (!isNotEmptyObject(qp)) return "";
  return url.includes("?") ? `&${queryString.stringify(qp)}` : `?${queryString.stringify(qp)}`;
};
