import React, {
  useCallback,
  useState,
} from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import TransitionBox from '../../../src/TransitionBox';
import FormList from './formList';
import './style.scss';

const TIMEOUT = {
  enter: 500,
  exit: 250,
};
const TRANSITION_DURATION = 200;

function Forms() {
  const [step, setStep] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const { length } = FormList;
  const goPrevious = useCallback(() => {
    setStep(step - 1);
    setIsForward(false);
  }, [step]);
  const goNext = useCallback(() => {
    setStep(step + 1);
    setIsForward(true);
  }, [step]);
  const idx = ((step % length) + length) % length;
  const Form = FormList[idx];

  return (
    <div className="forms">
      <TransitionBox duration={TRANSITION_DURATION}>
        <TransitionGroup className="forms__form-container">
          <CSSTransition
            key={idx}
            timeout={TIMEOUT}
            classNames={`forms__form--${isForward ? 'forward' : 'backward'}`}
          >
            <Form />
          </CSSTransition>
        </TransitionGroup>
      </TransitionBox>
      <div className="forms__button__container">
        <button
          onClick={goPrevious}
          type="button"
          className="forms__button--previous"
        >
          Previous
        </button>
        <button
          onClick={goNext}
          type="button"
          className="forms__button--next"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Forms;
