import React, {
  useCallback,
  useState,
} from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import TransitionBox from '../../../src/TransitionBox';
import './style.scss';
import urls from './urls';

const TIMEOUT = {
  enter: 500,
  exit: 250,
};
const TRANSITION_DURATION = 200;

function Images() {
  const [num, setNumber] = useState(0);
  const { length } = urls;
  const goPrevious = useCallback(() => setNumber(num - 1), [num]);
  const goNext = useCallback(() => setNumber(num + 1), [num]);
  const imgIndex = ((num % length) + length) % length;

  return (
    <div className="images">
      <TransitionBox duration={TRANSITION_DURATION}>
        <TransitionGroup className="images__image-container">
          <CSSTransition
            key={imgIndex}
            timeout={TIMEOUT}
            classNames="images__image--fade"
          >
            <img src={urls[imgIndex]} className="images__image" />
          </CSSTransition>
        </TransitionGroup>
      </TransitionBox>
      <div className="images__button__container">
        <button
          onClick={goPrevious}
          type="button"
          className="images__button--previous"
        >
          Previous
        </button>
        <button
          onClick={goNext}
          type="button"
          className="images__button--next"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Images;
