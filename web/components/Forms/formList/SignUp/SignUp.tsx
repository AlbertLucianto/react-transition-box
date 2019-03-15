import React from 'react';
import LabelledInput from '../../../LabelledInput';

function SignUp() {
  return (
    <div className="form__wrapper">
      <h2>Sign Up</h2>
      <LabelledInput id="sign-up-username" label="Username" />
      <LabelledInput id="sign-up-password" label="Password" type="password" />
      <LabelledInput id="sign-up-confirm" label="Confirm password" type="password" />
    </div>
  );
}

export default SignUp;
