import { describe, it, expect } from 'vitest';
import skinTone from '../index.ts';
import emojis from './RGI_Emoji.json';

// https://unicode.org/Public/emoji/15.1/emoji-sequences.txt

describe('skinTone tests for various emojis', () => {
  it(`Nothing to do with 🧁`, () => {
    expect(skinTone('🧁', 'dark')).toBe('🧁');
  });

  it(`🧑🏿‍🤝‍🧑🏿 dark skin tone to 🧑🏻‍🤝‍🧑🏻 light skin tone`, () => {
    expect(skinTone('🧑🏿‍🤝‍🧑🏿', 'light')).toBe('🧑🏻‍🤝‍🧑🏻');
  });

  it(`🧑🏿‍🤝‍🧑🏿 dark skin tone to 🧑‍🤝‍🧑 none skin tone`, () => {
    expect(skinTone('🧑🏿‍🤝‍🧑🏿', 'none')).toBe('🧑‍🤝‍🧑');
  });

  it(`🧑🏿‍🤝‍🧑🏿 dark skin tone to 🧑🏿‍🤝‍🧑🏿 undefined skin tone`, () => {
    expect(skinTone('🧑🏿‍🤝‍🧑🏿', undefined)).toBe('🧑🏿‍🤝‍🧑🏿');
  });

  it(`🧑🏻‍✈️ light skin tone to 🧑🏿‍✈️ dark skin tone`, () => {
    expect(skinTone('🧑🏻‍✈️', 'dark')).toBe('🧑🏿‍✈️');
  });

  it(`🏋🏽‍♀️ medium skin tone to 🏋🏽‍♀️ undefined skin tone`, () => {
    expect(skinTone('🏋🏽‍♀️', undefined)).toBe('🏋🏽‍♀️');
  });

  it(`🏋🏽‍♀️ argument = "" is 🏋🏽‍♀️`, () => {
    expect(skinTone('🏋🏽‍♀️', '')).toBe('🏋🏽‍♀️');
  });

  emojis.forEach((item) => {
    it(`Should apply light skin tone to ${item.light}`, () => {
      expect(skinTone(item.emoji, 'light')).toBe(item.light);
    });
  });

  emojis.forEach((item) => {
    it(`Should apply medium light skin tone to ${item.mediumLight}`, () => {
      expect(skinTone(item.emoji, 'mediumLight')).toBe(item.mediumLight);
    });
  });

  emojis.forEach((item) => {
    it(`Should apply medium light skin tone to ${item.medium}`, () => {
      expect(skinTone(item.emoji, 'medium')).toBe(item.medium);
    });
  });

  emojis.forEach((item) => {
    it(`Should apply medium dark skin tone to ${item.mediumDark}`, () => {
      expect(skinTone(item.emoji, 'mediumDark')).toBe(item.mediumDark);
    });
  });

  emojis.forEach((item) => {
    it(`Should apply dark skin tone to ${item.dark}`, () => {
      expect(skinTone(item.emoji, 'dark')).toBe(item.dark);
    });
  });

  emojis.forEach((item) => {
    const applyEmoji = skinTone(item.emoji, 'light');
    it(`Should apply none/remove skin tone to light skin tone emoji ${applyEmoji} => ${item.emoji}`, () => {
      expect(skinTone(applyEmoji, 'none')).toBe(item.emoji);
    });
  });

  emojis.forEach((item) => {
    const applyEmoji = skinTone(item.emoji, 'mediumLight');
    it(`Should apply none/remove skin tone to medium light skin tone emoji ${applyEmoji} => ${item.emoji}`, () => {
      expect(skinTone(applyEmoji, 'none')).toBe(item.emoji);
    });
  });

  emojis.forEach((item) => {
    const applyEmoji = skinTone(item.emoji, 'medium');
    it(`Should apply none/remove skin tone to medium skin tone emoji ${applyEmoji} => ${item.emoji}`, () => {
      expect(skinTone(applyEmoji, 'none')).toBe(item.emoji);
    });
  });

  emojis.forEach((item) => {
    const applyEmoji = skinTone(item.emoji, 'mediumDark');
    it(`Should apply none/remove skin tone to medium dark skin tone emoji ${applyEmoji} => ${item.emoji}`, () => {
      expect(skinTone(applyEmoji, 'none')).toBe(item.emoji);
    });
  });

  emojis.forEach((item) => {
    const applyEmoji = skinTone(item.emoji, 'dark');
    it(`Should apply none/remove skin tone to dark skin tone emoji ${applyEmoji} => ${item.emoji}`, () => {
      expect(skinTone(applyEmoji, 'none')).toBe(item.emoji);
    });
  });
});
