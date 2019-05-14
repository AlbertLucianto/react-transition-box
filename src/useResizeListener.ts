import { useEffect } from 'react';

/**
 * Hook `useEffect` to listen to resize event and
 * clean up on ref changes or unmount.
 * Fallback to doing nothing if `HTMLObjectElement` does
 * not have `contentDocument` inside (e.g. in test env).
 *
 * @param {React.MutableRefObject<HTMLObjectElement>} ref
 * @param {React.Dispatch<object>} setStyle
 */
export default function useResizeListener(
  ref: React.MutableRefObject<HTMLObjectElement>,
  setStyle: React.Dispatch<object>,
) {
  return useEffect(() => {
    const el = ref.current;
    const onResize = () => {
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      setStyle({ width, height });
    };

    onResize();

    const target = el.contentDocument && el.contentDocument.defaultView;
    if (target) {
      target.addEventListener('resize', onResize);
    }

    return () => {
      if (target && typeof target.removeEventListener === 'function') {
        target.removeEventListener('resize', onResize);
      }
    };
  }, [ref.current && ref.current.contentDocument]);
}
