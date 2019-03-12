import resolve from 'rollup-plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import ts from 'typescript';

const pkg = require('../package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.main,
      format: 'umd',
      name: 'transitioning-container',
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [
    typescript({
      typescript: ts,
      cacheRoot: './tmp',
      rollupCommonJSResolveHack: true,
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.ts', '.tsx', '.json'],
    }),
    cjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement'],
      },
    }),
    replace({
      VERSION: JSON.stringify(pkg.version),
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  external: ['react'],
  watch: {
    include: 'src/**',
  },
};
