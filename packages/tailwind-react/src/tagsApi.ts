import { styled } from "./styled";

import type { Props, ClassNamesFn, SFC, TagName, StyledFn } from "./styled";

export type TagsApi = {
  [T in TagName]: <P extends Props>(classNames: ClassNamesFn<P>) => SFC<T, P>;
};

const tagsApiHandler: ProxyHandler<StyledFn> = {
  get: <T extends TagName>(_: StyledFn, tagName: T) => {
    return <P extends Props>(classNames: ClassNamesFn<P>): SFC<T, P> => styled(tagName, classNames);
  },
};

export const tagsApi = new Proxy(styled, tagsApiHandler) as StyledFn & TagsApi;
