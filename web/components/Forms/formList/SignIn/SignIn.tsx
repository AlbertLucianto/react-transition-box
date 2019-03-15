import React from 'react';
import LabelledInput from '../../../LabelledInput';

function SignIn() {
  return (
    <div className="form__wrapper">
      <h2>Sign In</h2>
      <LabelledInput id="sign-in-username" label="Username" />
      <LabelledInput id="sign-in-password" label="Password" type="password" />
    </div>
  );
}

export default SignIn;
