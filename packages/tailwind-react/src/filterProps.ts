type Props = Record<string, unknown>;

const htmlAttrs =
  /accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|autoComplete|autoPlay|capture|challenge|checked|cite|className|cols|colSpan|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|high|href|hrefLang|id|inputMode|kind|label|lang|list|loading|loop|low|max|maxLength|media|method|min|minLength|multiple|muted|name|noValidate|open|optimum|pattern|placeholder|poster|radioGroup|readOnly|required|reversed|role|rows|rowSpan|sandbox|scope|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|tabIndex|target|title|translate|type|useMap|value|wrap/;

// todo benchmark implementation
// todo check if this implementation does not inject any shims
export const getHtmlProps = <P extends Props>(props: P): Props => {
  const entries = Object.entries(props);
  const htmlEntries = entries.filter(([propName]) => htmlAttrs.test(propName));
  return Object.fromEntries(htmlEntries);
};
