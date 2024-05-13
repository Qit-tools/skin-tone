import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'index.ts',
  output: {
    file: 'dist/browser/skin-tone.min.js',
    format: 'iife',
    sourcemap: true,
    name: 'skinTone',
  },
  plugins: [
    terser({
      compress: {
        drop_console: true, // Remove console statements
        drop_debugger: true, // Remove debugger statements
      }
    }),
    replace({
      preventAssignment: true,
      values: {
        '@packageName': pkg.name,
        '@packageVersion': pkg.version,
        '@packageLicense': pkg.license,
      },
    }),
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.browser.json',
    }),
  ],
};
