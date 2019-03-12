import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import './style.scss';

interface ITransitioningContainerProps {
  children: JSX.Element|string;
}

function TransitioningContainer({ children }: ITransitioningContainerProps) {
  const ref: React.Ref<HTMLDivElement> = useRef(null);
  const [style, setStyle] = useState(null);

  useEffect(() => {
    const onResizeSetStyle = (e: UIEvent) => {
      const { width, height } = (e.target as HTMLDivElement).getBoundingClientRect();
      setStyle({ width, height });
    };

    ref.current.addEventListener('resize', onResizeSetStyle);
    return ref.current.removeEventListener('resize', onResizeSetStyle);
  }, [ref]);

  return (
    <div style={style}>
      <div ref={ref} className="transitioning-container__inner">
        {children}
      </div>
    </div>
  );
}

export default TransitioningContainer;
