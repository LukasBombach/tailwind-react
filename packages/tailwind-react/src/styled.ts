import { createElement } from "react";
import { getHtmlProps } from "./filterProps";

import type { ReactElement, ReactNode } from "react";

export type TagName = keyof JSX.IntrinsicElements;
export type ClassNamesFn<P extends {}> = (props: P) => string;
export type StyledFn = typeof styled;

export type SFCProps<T extends TagName, P extends {}> = P &
  JSX.IntrinsicElements[T] & {
    children?: ReactNode | undefined;
    className?: string;
  };

export interface SFC<T extends TagName, P extends {}> {
  (props: SFCProps<T, P>): ReactElement<any, any> | null;
  displayName: string;
}

export function styled<T extends TagName, P extends {}>(tagName: T, classNames: ClassNamesFn<P>): SFC<T, P> {
  const component: SFC<T, P> = props => {
    const htmlProps = getHtmlProps(props);
    htmlProps.className = [props.className, classNames(props)].join(" ");
    return createElement(tagName, htmlProps, props.children);
  };

  component.displayName = tagName;

  return component;
}
