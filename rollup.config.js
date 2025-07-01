const path = require('path');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const babel = require('@rollup/plugin-babel').default;
const terser = require('@rollup/plugin-terser');
const dts = require('rollup-plugin-dts').default;

const packageJson = require('./package.json');

const input = 'src/index.ts';

module.exports = [
  {
    input,
    output: [
      {
        file: packageJson.main,
        format: 'umd',
        name: 'Veltix',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: false,
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: ['@babel/preset-react'],
        exclude: 'node_modules/**',
      }),
      terser(),
    ],
  },
  {
    input,
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]; 
