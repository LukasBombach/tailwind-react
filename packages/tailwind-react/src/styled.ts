import { createElement } from "react";
import { getHtmlProps } from "./filterProps";

import type { ReactElement, ReactNode } from "react";

type TagName = keyof JSX.IntrinsicElements;
type Props = Record<string, unknown>;
type ClassNamesFn<P extends Props> = (props: P) => string;

type PropsWithChildrenAndClassName<P extends Props> = P & {
  children?: ReactNode | undefined;
  className?: string;
};

interface SFC<P extends Props> {
  (props: PropsWithChildrenAndClassName<P>): ReactElement<P, any> | null;
  displayName: string;
}

export function styled<T extends TagName, P extends Props>(tagName: T, classNames: ClassNamesFn<P>): SFC<P> {
  const component: SFC<P> = props => {
    const htmlProps = getHtmlProps(props);
    htmlProps.className = [props.className, classNames(props)].join(" ");
    return createElement(tagName, props, props.children);
  };

  component.displayName = tagName;

  return component;
}
