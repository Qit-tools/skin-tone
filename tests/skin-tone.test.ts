import { describe, it, expect } from 'vitest';
import applySkinTone from '../index.ts';
import emojis from './RGI_Emoji.json';

// https://unicode.org/Public/emoji/15.1/emoji-sequences.txt

describe('applySkinTone tests for various emojis', () => {
  it(`Nothing to do with 🧁`, () => {
    expect(applySkinTone('🧁', 'dark')).toBe('🧁');
  });

  it(`🧑🏿‍🤝‍🧑🏿 dark skin tone to 🧑🏻‍🤝‍🧑🏻 light skin tone`, () => {
    expect(applySkinTone('🧑🏿‍🤝‍🧑🏿', 'light')).toBe('🧑🏻‍🤝‍🧑🏻');
  });

  it(`🧑🏿‍🤝‍🧑🏿 dark skin tone to 🧑‍🤝‍🧑 none skin tone`, () => {
    expect(applySkinTone('🧑🏿‍🤝‍🧑🏿', 'none')).toBe('🧑‍🤝‍🧑');
  });

  it(`🧑🏿‍🤝‍🧑🏿 dark skin tone to 🧑🏿‍🤝‍🧑🏿 undefined skin tone`, () => {
    expect(applySkinTone('🧑🏿‍🤝‍🧑🏿', undefined)).toBe('🧑🏿‍🤝‍🧑🏿');
  });

  it(`🧑🏻‍✈️ light skin tone to 🧑🏿‍✈️ dark skin tone`, () => {
    expect(applySkinTone('🧑🏻‍✈️', 'dark')).toBe('🧑🏿‍✈️');
  });

  it(`🏋🏽‍♀️ medium skin tone to 🏋🏽‍♀️ undefined skin tone`, () => {
    expect(applySkinTone('🏋🏽‍♀️', undefined)).toBe('🏋🏽‍♀️');
  });

  it(`🏋🏽‍♀️ argument = "" is 🏋🏽‍♀️`, () => {
    expect(applySkinTone('🏋🏽‍♀️', '')).toBe('🏋🏽‍♀️');
  });

  emojis.forEach((item) => {
    it(`Should apply light skin tone to ${item.light}`, () => {
      expect(applySkinTone(item.emoji, 'light')).toBe(item.light);
    });
  });

  emojis.forEach((item) => {
    it(`Should apply medium light skin tone to ${item.mediumLight}`, () => {
      expect(applySkinTone(item.emoji, 'mediumLight')).toBe(item.mediumLight);
    });
  });

  emojis.forEach((item) => {
    it(`Should apply medium light skin tone to ${item.medium}`, () => {
      expect(applySkinTone(item.emoji, 'medium')).toBe(item.medium);
    });
  });

  emojis.forEach((item) => {
    it(`Should apply medium dark skin tone to ${item.mediumDark}`, () => {
      expect(applySkinTone(item.emoji, 'mediumDark')).toBe(item.mediumDark);
    });
  });

  emojis.forEach((item) => {
    it(`Should apply dark skin tone to ${item.dark}`, () => {
      expect(applySkinTone(item.emoji, 'dark')).toBe(item.dark);
    });
  });
});
