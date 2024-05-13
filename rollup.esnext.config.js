import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import pkg from './package.json' assert { type: 'json' };
import fs from 'fs';
import path from 'path';

function customReplacer() {
  return {
    name: 'custom-dts-replacer', // Name the plugin
    writeBundle() {
      const file = path.join(process.cwd(), 'dist', 'esnext', 'index.d.ts');

      if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content
          .replace(/__NAME__/g, pkg.name)
          .replace(/__VERSION__/g, pkg.version)
          .replace(/__LICENSE__/g, pkg.license);

        fs.writeFileSync(file, content, 'utf8');
      }
    },
  };
}

export default {
  input: './src/index.ts',
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
        __NAME__: pkg.name,
        __VERSION__: pkg.version,
        __LICENSE__: pkg.license,
      },
    }),
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.esnext.json',
    }),
    customReplacer(),
  ],
};
