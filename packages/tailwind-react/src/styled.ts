import { createElement } from "react";
import { getHtmlProps } from "./filterProps";

import type { ReactElement, ReactNode } from "react";

export type TagName = keyof JSX.IntrinsicElements;
export type Props = Record<string, unknown>;
export type ClassNamesFn<P extends Props> = (props: P) => string;
export type StyledFn = typeof styled;

export type PropsWithChildrenAndClassName<P extends Props> = P & {
  children?: ReactNode | undefined;
  className?: string;
};

export interface SFC<P extends Props> {
  (props: PropsWithChildrenAndClassName<P>): ReactElement<any, any> | null;
  displayName: string;
}

export function styled<T extends TagName, P extends Props>(tagName: T, classNames: ClassNamesFn<P>): SFC<P> {
  const component: SFC<P> = props => {
    const htmlProps = getHtmlProps(props);
    htmlProps.className = [props.className, classNames(props)].join(" ");
    return createElement(tagName, htmlProps, props.children);
  };

  component.displayName = tagName;

  return component;
}
