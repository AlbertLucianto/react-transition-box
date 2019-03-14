import React from 'react';
import './style.scss';

function ForkTag() {
  return (
    <a
      className="fork-tag"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/AlbertLucianto/transitioning-container"
    >
      <img
        src="https://image.flaticon.com/icons/svg/25/25231.svg"
        className="github-icon"
        alt=""
      />
      <div className="fork-tag__description">Fork me</div>
    </a>
  );
}

export default ForkTag;
