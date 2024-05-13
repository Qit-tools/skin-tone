import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'index.ts',
  output: {
    file: 'dist/esnext/index.js',
    format: 'module',
    sourcemap: true,
    name: 'skinTone',
  },
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        'packageName': pkg.name,
        'packageVersion': pkg.version,
        'packageLicense': pkg.license,
      },
    }),
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.esnext.json',
    }),
  ],
};
