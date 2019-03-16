export const objectStyle: React.CSSProperties = {
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

export const innerStyle: React.CSSProperties = {
  height: 'fit-content',
  position: 'relative',
  width: 'fit-content',
};

export const createContainerStyle = (
  duration: number,
  timingFunction: string = 'ease',
): React.CSSProperties => {
  const transition = `
    width ${duration}ms ${timingFunction},
    height ${duration}ms ${timingFunction}
  `;

  return {
    OTransition: transition,
    WebkitTransition: transition,
    transition,
  };
};
