import React from 'react';
import { hot } from 'react-hot-loader';
import ForkTag from '../ForkTag';
import Forms from '../Forms';
import Images from '../Images';
import './style.scss';

function App() {
  return (
    <>
      <h1 className="title">
        <div className="title--small">React</div>
        Transition Box
      </h1>
      <pre>yarn add react-transition-box</pre>
      <Images />
      <Forms />
      <ForkTag />
    </>
  );
}

export default hot(module)(App);
