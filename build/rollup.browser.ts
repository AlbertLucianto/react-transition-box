import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import base from './rollup.config.ts';

import pkg from '../package.json';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    file: pkg.unpkg,
    format: 'iife',
    globals: {
      react: 'React',
    },
    name: 'TransitioningContainer',
  },
});

config.plugins.push(uglify({}, minify));

export default config;
