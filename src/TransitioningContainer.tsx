import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

interface ITransitioningContainerProps {
  children: JSX.Element|string;
  duration: number;
  [props: string]: any;
}

const objectStyle: React.CSSProperties = {
  display: 'block',
  height: '100%',
  left: 0,
  opacity: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: -1,
};

const innerStyle: React.CSSProperties = {
  height: 'fit-content',
  position: 'relative',
  width: 'fit-content',
};

const createContainerStyle = (duration: number): React.CSSProperties => ({
  transition: 'width .2s ease, height .2s ease',
});

function TransitioningContainer({
  children,
  duration,
  style: propStyle,
  restProps,
}: ITransitioningContainerProps) {
  const ref = useRef<HTMLObjectElement>(null);
  const [style, setStyle] = useState(null);
  const containerStyle = useMemo(() => createContainerStyle(duration), [duration]);

  const mergedStyle = useMemo(() => ({
    ...style,
    ...containerStyle,
    ...(propStyle || {}),
  }), [style, propStyle]);

  useEffect(() => {
    const el = ref.current;
    const onResize = () => {
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      setStyle({ width, height });
    };

    onResize();

    const target = el.contentDocument.defaultView;
    target.addEventListener('resize', onResize);

    return () => target.removeEventListener('resize', onResize);
  });

  return (
    <div style={mergedStyle} {...restProps}>
      <div style={innerStyle}>
        <object
          ref={ref}
          data="about:blank"
          aria-hidden={true}
          aria-label="resize-listener"
          style={objectStyle}
          tabIndex={-1}
        />
        {children}
      </div>
    </div>
  );
}

export default TransitioningContainer;
