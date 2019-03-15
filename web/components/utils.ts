export function proxyListeners(
  props: object,
  selector: (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => string = (e) => e.target.value,
) {
  const result = {};
  Object.entries(props).forEach(([propKey, prop]) => {
    if (/^on[A-Z]/.test(propKey) && prop instanceof Function) {
      result[propKey] = e => prop(selector(e), e);
    } else {
      result[propKey] = prop;
    }
  });

  return result;
}
