import React, {
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  createContainerStyle,
  innerStyle,
  objectStyle,
} from './styles';
import useResizeListener from './useResizeListener';

interface ITransitioningContainerProps {
  children: JSX.Element|string;
  duration: number;
  [props: string]: any;
}

function TransitioningContainer({
  children,
  duration,
  style: propStyle,
  ...restProps
}: ITransitioningContainerProps) {
  const ref = useRef<HTMLObjectElement>(null);
  const [style, setStyle] = useState({});
  const containerStyle = useMemo(() => createContainerStyle(duration), [duration]);

  const mergedStyle = useMemo(() => ({
    ...style,
    ...containerStyle,
    ...(propStyle || {}),
  }), [style, propStyle]);

  useResizeListener(ref, setStyle);

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
          type="text/html"
        />
        {children}
      </div>
    </div>
  );
}

export default TransitioningContainer;
