import { styled } from "./styled";

import type { Props, ClassNamesFn, SFC, TagName, StyledFn } from "./styled";

export type TagsApi = {
  [T in TagName]: <P extends Props>(classNames: ClassNamesFn<P>) => SFC<P>;
};

const tagsApiHandler: ProxyHandler<StyledFn> = {
  get:
    (_, tagName: TagName) =>
    <P extends Props>(classNames: ClassNamesFn<P>): SFC<P> =>
      styled(tagName, classNames),
};

export const tagsApi = new Proxy(styled, tagsApiHandler) as StyledFn & TagsApi;
