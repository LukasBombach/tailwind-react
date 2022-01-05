import { createElement } from "react";

import type { ReactElement, ReactNode, ReactHTML } from "react";

type TagName = keyof JSX.IntrinsicElements;

type Props = Record<string, unknown>;

type PropsWithChildrenAndClassName<P extends Props> = P & {
  children?: ReactNode | undefined;
  className?: string;
};

type GetClassNamesFn<P extends Props> = (props: P) => string;

interface SFC<P extends Props> {
  (props: PropsWithChildrenAndClassName<P>): ReactElement<P, any> | null;
  displayName: string;
}

export function styled<T extends TagName, P extends Props>(tagName: T, classNames: GetClassNamesFn<P>): SFC<P> {
  const component: SFC<P> = props => {
    return createElement(tagName, props, props.children);
  };

  component.displayName = tagName;

  return component;
}
