import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import pkg from './package.json' assert { type: 'json' };

import fs from 'fs';
import path from 'path';

function customReplacer() {
  return {
    name: 'custom-readme-replacer', // Name the plugin
    writeBundle() {
      const file = path.join(process.cwd(), 'src',  'README.md');

      if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content
          .replace(/__NAME__/g, pkg.name)
          .replace(/__VERSION__/g, pkg.version)
          .replace(/__LICENSE__/g, pkg.license);

        fs.writeFileSync(path.join(process.cwd(), 'README.md'), content, 'utf8');
      }
    },
  };
}

export default {
  input: './src/index.ts',
  output: {
    file: 'dist/browser/latest.min.js',
    format: 'iife',
    sourcemap: true,
    name: 'skinTone',
  },
  plugins: [
    terser({
      compress: {
        drop_console: true, // Remove console statements
        drop_debugger: true, // Remove debugger statements
      },
    }),
    replace({
      preventAssignment: true,
      values: {
        '__NAME__': pkg.name,
        '__VERSION__': pkg.version,
        '__LICENSE__': pkg.license,
      },
    }),
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.browser.json',
    }),
    customReplacer(),
  ],
};
