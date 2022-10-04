import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import postcssurl from 'postcss-url';
import includePaths from 'rollup-plugin-includepaths';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const regex = /\.\.\//gi;

export default {
  input: 'src/index.js',
  output: [{ file: 'index.js', format: 'cjs' }],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx'],
      preferBuiltins: false,
    }),
    commonjs({
      ignoreGlobal: true,
      include: /\/node_modules\//,
      namedExports: {
        react: Object.keys(require('react')),
        'react-is': Object.keys(require('react-is')),
      },
    }),
    json(),
    postcss({
      extract: ['index.css'],
      extensions: ['.scss', '.css'],
      modules: {
        generateScopedName: 'htco-[local]',
      },
      plugins: [
        postcssurl({
          url: (asset) => {
            if (asset.url.match('src')) {
              return asset.url;
            } else {
              return 'src/' + asset.url.replace(regex, '');
            }
          },
        }),
      ],
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/env', '@babel/preset-react'],
    }),
    includePaths({
      include: {},
      paths: ['src', 'src/components/'],
      external: [],
      extensions: ['.js', '.jsx', '.svg', '.css', '.scss', '.png'],
    }),
  ],
};
