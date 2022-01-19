import { styled } from "./styled";

import type { ClassNamesFn, SFC, TagName, StyledFn } from "./styled";

type FnApi<T extends TagName> = <P extends {}>(classNames: ClassNamesFn<P>) => SFC<T, P>;
type TemplateApi<T extends TagName> = <P extends {}>(classNames: TemplateStringsArray, ...expr: string[]) => SFC<T, P>;

function taggedFn<T extends TagName>(styled: StyledFn, tagName: T): FnApi<T>;
// <P extends {}>(classNames: ClassNamesFn<P>) => SFC<T, P>;

function taggedFn<T extends TagName>(styled: StyledFn, tagName: T): TemplateApi<T>;
// <P extends {}>(classNames: TemplateStringsArray, ...expr: string[]) => SFC<T, P>;

function taggedFn<T extends TagName>(styled: StyledFn, tagName: T) {
  return <P extends {}>(classNames: unknown, ...expr: string[]): SFC<T, P> => {
    if (isClassNamesFn(classNames)) {
      return styled(tagName, classNames);
    }

    if (isTemplateStringsArray(classNames)) {
      return styled(tagName, () => getClassNameFromTemplateStringsArray(classNames, ...expr));
    }
  };
}

function isClassNamesFn<P>(classNames: unknown): classNames is ClassNamesFn<P> {
  return typeof classNames === "function";
}

// We can assume that if an array is passed with ts, that array is a TemplateStringsArray
function isTemplateStringsArray(classNames: unknown): classNames is TemplateStringsArray {
  return Array.isArray(classNames);
}

function getClassNameFromTemplateStringsArray(classNames: TemplateStringsArray, ...expr: string[]) {
  return classNames.reduce((result, str, i) => `${result}${str}${expr[i] || ""}`, "");
}

export type TagsApi = {
  [T in TagName]: FnApi<T> | TemplateApi<T>;
};

const tagsApiHandler: ProxyHandler<StyledFn> = {
  get: taggedFn,
};

export const tagsApi = new Proxy(styled, tagsApiHandler) as StyledFn & TagsApi;
