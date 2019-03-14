import React, { useMemo } from 'react';
import { cleanup, render } from 'react-testing-library';
import TransitioningContainer from '../src';

afterEach(cleanup);

const waitFor = async (ms: number) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

interface IFooProps {
  width: number;
  height: number;
}

function Foo({ width, height }: IFooProps) {
  const style = useMemo(() => ({ width, height }), [width, height]);
  return (
    <TransitioningContainer
      duration={100}
      className="foo__container"
    >
      <div style={style} />
    </TransitioningContainer>
  );
}

describe('TransitioningContainer', () => {
  test('should render correctly', async (done) => {
    const container = render(<Foo
      width={100}
      height={200}
    />);

    const el: HTMLDivElement = container.baseElement.querySelector('.foo__container');
    expect(el.style.width).toBe('0px');
    expect(el.style.height).toBe('0px');

    await waitFor(100);
    expect(el.style.width).toBe(100);
    expect(el.style.height).toBe(200);

    container.rerender(<Foo
      width={150}
      height={100}
    />);

    expect(el.style.width).toBe(100);
    expect(el.style.height).toBe(200);

    await waitFor(100);
    expect(el.style.width).toBe(150);
    expect(el.style.height).toBe(100);

    done();
  });
});
