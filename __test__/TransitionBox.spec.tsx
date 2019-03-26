import React, { useMemo } from 'react';
import { create } from 'react-test-renderer';
import TransitionBox from '../src';

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
    <TransitionBox
      duration={100}
      timingFunction="ease"
      className="foo__container"
    >
      <div style={style} className="abc" />
    </TransitionBox>
  );
}

describe('TransitionBox', () => {
  test('should render correctly', async (done) => {
    const style = {
      height: 200,
      width: 100,
    };

    const addListenerMock = jest.fn();
    const removeListenerMock = jest.fn();

    const el = create(
      <Foo width={style.width} height={style.height} />,
      {
        createNodeMock(element: JSX.Element) {
          if (element.type === 'object') {
            return {
              contentDocument: {
                defaultView: {
                  addEventListener(type: string, fn: () => void) {
                    addListenerMock(type);
                  },
                  removeEventListener(type: string, fn: () => void) {
                    removeListenerMock(type);
                  },
                },
              },
              offsetHeight: style.height,
              offsetWidth: style.width,
            };
          }

          return null;
        },
      },
    );
    expect(el.toJSON()).toMatchSnapshot();
    expect(addListenerMock).not.toHaveBeenCalled();
    expect(removeListenerMock).not.toHaveBeenCalled();

    expect(removeListenerMock).not.toHaveBeenCalled();

    style.width = 150;
    style.height = 100;
    el.update(<Foo width={style.width} height={style.height} />);
    expect(el.toJSON()).toMatchSnapshot();

    await waitFor(120);
    expect(el.toJSON()).toMatchSnapshot();

    el.unmount();
    expect(removeListenerMock).toHaveBeenNthCalledWith(1, 'resize');

    done();
  });
});
