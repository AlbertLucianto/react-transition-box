# Transitioning Container

<p align="center">
<a href="https://codecov.io/github/AlbertLucianto/transitioning-container?branch=master"><img src="https://img.shields.io/codecov/c/github/AlbertLucianto/transitioning-container/master.svg" alt="Coverage Status"></a>
<a href="https://travis-ci.org/AlbertLucianto/transitioning-container"><img src="https://travis-ci.org/AlbertLucianto/transitioning-container.svg?branch=master" alt="Build Status"></a>
<a href="https://npmcharts.com/compare/transitioning-container?minimal=true"><img src="https://img.shields.io/npm/dm/transitioning-container.svg" alt="Downloads"></a>
<a href="https://npmcharts.com/compare/transitioning-container?minimal=true"><img src="https://img.shields.io/npm/dt/transitioning-container.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/transitioning-container"><img src="https://img.shields.io/npm/v/transitioning-container.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/transitioning-container"><img src="https://img.shields.io/npm/l/transitioning-container.svg" alt="License"></a>
<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)" alt="License"></a>
</p>

## See working example [here](https://albertlucianto.github.io/transitioning-container).

## Installation

```bash
$ yarn add transitioning-container # or using npm
```

## Usage

```jsx
import TransitioningContainer from 'transitioning-container';
import Foo from './Foo';

export default function App() {
  <TransitioningContainer duration={500}>
    <Foo />
  </TransitioningContainer>
}
```

## API

&lt;TransitioningContainer> component accepts these following props:

Name         | Description | Type
-------------|-----------|-----------
`duration` | Transition duration ms. | `number`
`children` | Content, which is watched its size | `Node`
`...others` | Other valid `div` attributes. | `any`


## License

transitioning-container is available under the MIT License.
