import React from 'react';
import './style.scss';

// tslint:disable-next-line: max-line-length
const text = 'One day, while walking in the bamboo forest, an old, childless bamboo cutter called Taketori no Okina (竹取翁 "the Old Man who Harvests Bamboo") came across a mysterious, shining stalk of bamboo. After cutting it open, he found inside it an infant the size of his thumb. He rejoiced to find such a beautiful girl and took her home. He and his wife raised her as their own child and named her Kaguya-hime (かぐや姫 accurately, Nayotake no Kaguya-hime, "Shining princess of the supple bamboo"). Thereafter, Taketori no Okina found that whenever he cut down a stalk of bamboo, inside would be a small nugget of gold. Soon he became rich. Kaguya-hime grew from a small baby into a woman of ordinary size and extraordinary beauty. At first, Taketori no Okina tried to keep her away from outsiders, but over time the news of her beauty spread.';

function TnC() {
  return (
    <div className="form__wrapper tnc">
      <h2>Terms and Conditions</h2>
      <p>{text}</p>
    </div>
  );
}

export default TnC;
