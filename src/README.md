# Skin Tone

[![Test status](https://github.com/Qit-tools/skin-tone/workflows/Node.js%20CI/badge.svg)](https://github.com/Qit-tools/skin-tone/actions/workflows/node.js.yml)

Change emoji [skin tones](https://www.npmjs.com/package/__NAME__) effortlessly. 🧛🧛🏻🧛🏼🧛🏽🧛🏾🧛🏿 

## 👀 DEMO

- Example of using the library: [Random Emoji Generator](https://qit.tools/generators/random-emoji/)
- Pen: [Codepen](https://codepen.io/dejurin/pen/QWRwPXY)

## CDN

- [unpkg](https://unpkg.com/browse/__NAME__/)

## 🏗️ Install

### 🎉 NPM

```bash
npm i __NAME__
```

### 🧁 Bun

```bash
bun add __NAME__
```

### 🌟 PNPM

```bash
pnpm add __NAME__
```

### 🧶 Yarn

```bash
yarn add __NAME__
```

## 🎓 How to use

### NodeJS

```ts
// Import by default
import skinTone from "__NAME__";

console.log(skinTone("🧁", "dark")); // 🧁
console.log(skinTone("🧑🏿‍🤝‍🧑🏿", "light")); // 🧑🏻‍🤝‍🧑🏻
```

### Browser

```js
// https://unpkg.com/__NAME__@__VERSION__/dist/browser/latest.min.js

document.addEventListener("DOMContentLoaded", () => {
    console.log(skinTone("🧑🏻‍🤝‍🧑🏻", "dark"));
});
```

## API

`skinTone(emoji, tone)`

### emoji

**Type**: `string`

### tone

`type SkinTone = '' | 'none' | 'light' | 'mediumLight' | 'medium' | 'mediumDark' | 'dark'`

**Type**: `SkinTone | undefined`

### Skin tone to use for emoji.

- `none` None skin tone
- `light` light skin tone, fitzpatrick type-1–2
- `mediumLight` medium-light skin tone, fitzpatrick type-3
- `medium` medium skin tone, fitzpatrick type-4
- `mediumDark` medium-dark skin tone, fitzpatrick type-5
- `dark` dark skin tone, fitzpatrick type-6

## License

__LICENSE__

## Unicode License Agreement

https://www.unicode.org/license.html