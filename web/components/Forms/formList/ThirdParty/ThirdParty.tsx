import React, { useMemo } from 'react';
import fbIcon from '../../../../assets/fb.png';
import githubIcon from '../../../../assets/github.png';
import googleIcon from '../../../../assets/google.png';
import './style.scss';

const iconUrls = [
  fbIcon,
  googleIcon,
  githubIcon,
];

function ThirdParty() {
  const buttons = useMemo(() => iconUrls.map((url: string, key: number) => (
    <button key={key} className="third-party__button">
      <img src={url} className="third-party__icon" />
    </button>
  )), []);

  return (
    <div className="form__wrapper third-party">
      {buttons}
    </div>
  );
}

export default ThirdParty;
