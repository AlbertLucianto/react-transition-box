import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import ts from 'typescript';

import pkg from '../package.json';

export default {
  external: ['react'],
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.main,
      format: 'umd',
      globals: {
        react: 'React',
      },
      name: 'transition-box',
    },
  ],
  plugins: [
    typescript({
      cacheRoot: './tmp',
      clean: true,
      rollupCommonJSResolveHack: true,
      typescript: ts,
    }),
    resolve({
      browser: true,
      extensions: ['.ts', '.tsx', '.json'],
      jsnext: true,
      main: true,
    }),
    cjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'useEffect',
          'useMemo',
          'useRef',
          'useState',
        ],
      },
    }),
    replace({
      'VERSION': JSON.stringify(pkg.version),
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  watch: {
    include: 'src/**',
  },
};
