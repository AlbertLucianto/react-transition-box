import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { hot } from 'react-hot-loader';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import TransitioningContainer from '../../../src/TransitioningContainer';
import ForkTag from '../ForkTag';
import imgUrls from './images';
import './style.scss';

const TIMEOUT = {
  enter: 500,
  exit: 250,
};
const TRANSITION_DURATION = 600;

function App() {
  const [num, setNumber] = useState(0);
  const { length } = imgUrls;
  const goPrevious = useCallback(() => setNumber(num - 1), [num]);
  const goNext = useCallback(() => setNumber(num + 1), [num]);
  const imgIndex = ((num % length) + length) % length;

  return (
    <>
      <h1 className="title">
        <div className="title--small">React</div>
        Transitioning Container
      </h1>
      <div className="app">
        <TransitioningContainer duration={TRANSITION_DURATION}>
          <TransitionGroup className="app__image-container">
            <CSSTransition
              key={imgIndex}
              timeout={TIMEOUT}
              classNames="fade"
            >
              <img src={imgUrls[imgIndex]} className="app__image" />
            </CSSTransition>
          </TransitionGroup>
        </TransitioningContainer>
        <div className="button__container">
          <button
            onClick={goPrevious}
            type="button"
            className="button--previous"
          >
            Previous
          </button>
          <button
            onClick={goNext}
            type="button"
            className="button--next"
          >
            Next
          </button>
        </div>
      </div>
      <ForkTag />
    </>
  );
}

export default hot(module)(App);
