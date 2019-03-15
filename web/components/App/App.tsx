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
        Transitioning Container
      </h1>
      <Images />
      <Forms />
      <ForkTag />
    </>
  );
}

export default hot(module)(App);
