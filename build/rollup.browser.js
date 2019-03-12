import { minify } from 'uglify-es';
import { uglify } from 'rollup-plugin-uglify';
import base from './rollup.config';

const pkg = require('../package.json');

const config = Object.assign({}, base, {
  output: {
    file: pkg.unpkg,
    format: 'iife',
    exports: 'named',
    name: 'TransitioningContainer',
    globals: {
      react: 'React',
    },
  },
});

config.plugins.push(uglify({}, minify));

export default config;
