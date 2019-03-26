<p align="center"><a href="https://albertlucianto.github.io/react-transition-box" target="_blank" rel="noopener noreferrer"><img width="800" src="./web/assets/react-transition-box-header.jpg" alt="React Transition Box"></a></p>

<p align="center">React component for easily transitioning your container size based on children 🎁
<br />
<br />
Implemented using <b>React Hooks</b> and make use of
<br />
<b>HTMLObjectElement</b> for listening to your component resize ↔️ ↕️ events</p>

<p align="center">
<a href="https://travis-ci.org/AlbertLucianto/react-transition-box"><img src="https://travis-ci.org/AlbertLucianto/react-transition-box.svg?branch=master" alt="Build Status"></a>
<a href="https://npmcharts.com/compare/react-transition-box?minimal=true"><img src="https://img.shields.io/npm/dm/react-transition-box.svg" alt="Downloads"></a>
<a href="https://npmcharts.com/compare/react-transition-box?minimal=true"><img src="https://img.shields.io/npm/dt/react-transition-box.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/react-transition-box"><img src="https://img.shields.io/npm/v/react-transition-box.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/react-transition-box"><img src="https://img.shields.io/npm/l/react-transition-box.svg" alt="License"></a>
<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)" alt="License"></a>
</p>

<p align="center"><a href="https://albertlucianto.github.io/react-transition-box" target="_blank" rel="noopener noreferrer"><img width="280" src="./web/assets/demo.gif" alt="React Transition Box"></a></p>

<h2 align="center">See working example <a href="https://albertlucianto.github.io/react-transition-box" target="_blank" rel="noopener noreferrer">here</a>.</h2>

## Installation

```bash
$ yarn add react-transition-box # or using npm
```

## Usage

```jsx
import React from 'react';
import TransitionBox from 'react-transition-box';
import LargeContent from './LargeContent';
import SmallContent from './SmallContent';

export default function App({ isLarge }) {
  return (
    <TransitionBox duration={500}>
      {isLarge ? <LargeContent /> : <SmallContent />}
    </TransitionBox>
  );
}
```

## API

&lt;TransitionBox> component accepts these following props:

Name         | Description | Type
-------------|-----------|-----------
`duration` | Transition duration in ms. | `number`
`timingFunction?` | Transition timing function. Default: `'ease'` | `string`
`children` | Its size changes will trigger the container transition. | `Node` or `string`
`...others` | Other valid attributes to be added to the root `div`. | `any`

## License

react-transition-box is available under the MIT License.
