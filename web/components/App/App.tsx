import React, {
  useEffect,
  useState,
} from 'react';
import { hot } from 'react-hot-loader';
import TransitioningContainer from '../../../src/TransitioningContainer';
import './style.scss';

function App() {
  const [style, setState] = useState({ width: 100, height: 200 });
  useEffect(() => {
    const itv = setInterval(() => {
      setState({
        height: style.width,
        width: style.height,
      });
    }, 1000);
    return () => clearInterval(itv);
  });

  return (
    <TransitioningContainer>
      <div className="test" style={style} />
    </TransitioningContainer>
  );
}

export default hot(module)(App);
