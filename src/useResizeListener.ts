import { useEffect } from 'react';

/**
 * 
 * @param ref 
 * @param setStyle 
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
  }, [ref]);
}
