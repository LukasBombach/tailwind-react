import { createElement } from "react";

import type { FC } from "react";

type Props = Record<string, unknown>;
type TagName = keyof JSX.IntrinsicElements;
type NativeProps<T extends TagName> = JSX.IntrinsicElements[T] & { className?: string };

type Styles<T extends TagName, P extends Props = {}> = string | ((props: NativeProps<T> & P) => string);

type SFC<T extends TagName, P extends Props = {}, S extends Styles<T, P> = string> = FC<
  S extends string ? NativeProps<T> : NativeProps<T> & P
>;

type TaggedStyleApi = {
  [T in TagName]: <P extends Props = {}, S extends Styles<T, P> = string>(styles: S) => SFC<T, P, S>;
};

const htmlProps =
  /accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|autoComplete|autoPlay|capture|challenge|checked|cite|className|cols|colSpan|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|high|href|hrefLang|id|inputMode|kind|label|lang|list|loading|loop|low|max|maxLength|media|method|min|minLength|multiple|muted|name|noValidate|open|optimum|pattern|placeholder|poster|radioGroup|readOnly|required|reversed|role|rows|rowSpan|sandbox|scope|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|tabIndex|target|title|translate|type|useMap|value|wrap/;

function styled<T extends TagName, P extends Props = {}, S extends Styles<T, P> = string>(
  tagName: T,
  styles: S
): SFC<T, P, S> {
  const StyledComponent: SFC<T, P, S> = props => {
    const tailwindClasses = typeof styles === "string" ? styles : styles(props as NativeProps<T> & P);
    const passedProps = Object.fromEntries(Object.entries(props).filter(([k]) => htmlProps.test(k)));
    passedProps.className = props.className ? `${props.className} ${tailwindClasses}` : tailwindClasses;
    return createElement(tagName, passedProps, props.children);
  };

  StyledComponent.displayName = tagName;

  return StyledComponent;
}

const taggedStyleApi = new Proxy(styled, {
  get:
    <T extends TagName, P extends Props>(_: typeof styled, tagName: T) =>
    (styles: Styles<T, P>) =>
      styled(tagName, styles as any),
}) as any as typeof styled & TaggedStyleApi;

export default taggedStyleApi;
