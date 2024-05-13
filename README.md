# Skin Tone

[![Test status](https://github.com/Qit-tools/skin-tone/workflows/Node.js%20CI/badge.svg)](https://github.com/Qit-tools/skin-tone/actions/workflows/node.js.yml)

Change emoji skin tones effortlessly. 🧛🧛🏻🧛🏼🧛🏽🧛🏾🧛🏿 

## 👀 DEMO

Example of using the library: [Random Emoji Generator](https://qit.tools/generators/random-emoji/)

## 🏗️ Install

### 🎉 NPM

```bash
npm install @qit.tools/skin-tone
```

### 🧁 Bun

```bash
bun add @qit.tools/skin-tone
```

### 🌟 PNPM

```bash
pnpm add @qit.tools/skin-tone
```

### 🧶 Yarn

```bash
yarn add @qit.tools/skin-tone
```

## 🎓 How to use

```ts
// Import by default
import skinTone from "@qit.tools/skin-tone";

console.log(skinTone("🧁", "dark")); // 🧁
console.log(skinTone("🧑🏿‍🤝‍🧑🏿", "light")); // 🧑🏻‍🤝‍🧑🏻
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

## Unicode License Agreement

https://www.unicode.org/license.html