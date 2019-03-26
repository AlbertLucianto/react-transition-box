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

interface ITransitionBoxProps {
  children: JSX.Element[]|JSX.Element|string;
  timingFunction?: string;
  duration: number;
  [props: string]: any;
}

/**
 * React component for easily transitioning your container size based on children 🎁
 *
 * HTML Element normally does not have a resize listener.
 * So, it uses `HTMLObjectElement` for listening to your component resize.
 *
 * @param {ITransitionBoxProps} props
 */
function TransitionBox({
  children,
  duration,
  timingFunction,
  style: propStyle,
  ...restProps
}: ITransitionBoxProps) {
  const ref = useRef<HTMLObjectElement>(null);
  const [style, setStyle] = useState({});
  const containerStyle = useMemo(
    () => createContainerStyle(duration, timingFunction),
    [duration, timingFunction],
  );

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

export default TransitionBox;
