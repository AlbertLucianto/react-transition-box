<p align="center"><a href="https://albertlucianto.github.io/react-transitioning-container" target="_blank" rel="noopener noreferrer"><img width="800" src="./web/assets/react-transitioning-container-header.jpg" alt="React Transitioning Container"></a></p>

<p align="center">React component for easily transitioning your container size based on children 🎁
<br />
<br />
Implemented using <b>React Hooks</b> and make use of
<br />
<b>HTMLObjectElement</b> for listening to your component resize ↔️ ↕️ events</p>

<p align="center">
<a href="https://travis-ci.org/AlbertLucianto/react-transitioning-container"><img src="https://travis-ci.org/AlbertLucianto/react-transitioning-container.svg?branch=master" alt="Build Status"></a>
<a href="https://npmcharts.com/compare/react-transitioning-container?minimal=true"><img src="https://img.shields.io/npm/dm/react-transitioning-container.svg" alt="Downloads"></a>
<a href="https://npmcharts.com/compare/react-transitioning-container?minimal=true"><img src="https://img.shields.io/npm/dt/react-transitioning-container.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/react-transitioning-container"><img src="https://img.shields.io/npm/v/react-transitioning-container.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/react-transitioning-container"><img src="https://img.shields.io/npm/l/react-transitioning-container.svg" alt="License"></a>
<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)" alt="License"></a>
</p>

<p align="center"><a href="https://albertlucianto.github.io/react-transitioning-container" target="_blank" rel="noopener noreferrer"><img width="280" src="./web/assets/demo.gif" alt="React Transitioning Container"></a></p>

<h2 align="center">See working example <a href="https://albertlucianto.github.io/react-transitioning-container" target="_blank" rel="noopener noreferrer">here</a>.</h2>

## Installation

```bash
$ yarn add react-transitioning-container # or using npm
```

## Usage

```jsx
import React from 'react';
import TransitioningContainer from 'react-transitioning-container';
import LargeContent from './LargeContent';
import SmallContent from './SmallContent';

export default function App({ isLarge }) {
  return (
    <TransitioningContainer duration={500}>
      {isLarge ? <LargeContent /> : <SmallContent />}
    </TransitioningContainer>
  );
}
```

## API

&lt;TransitioningContainer> component accepts these following props:

Name         | Description | Type
-------------|-----------|-----------
`duration` | Transition duration in ms. | `number`
`timingFunction?` | Transition timing function. Default: `'ease'` | `string`
`children` | Its size changes will trigger the container transition. | `Node` or `string`
`...others` | Other valid attributes to be added to the root `div`. | `any`

## License

react-transitioning-container is available under the MIT License.
