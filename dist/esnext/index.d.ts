export type SkinTone = '' | 'none' | 'light' | 'mediumLight' | 'medium' | 'mediumDark' | 'dark';
/**
 * Apply skin tones to an emoji.
 * Visit us at: https://qit.tools
 *
 * 🪄 Qit.tools
 * @name @qit.tools/skin-tone
 * @version 0.6.2
 * @license MIT
 * @copyright Copyright (c) 2024 Qit.tools.
 * @see https://github.com/Qit-tools/skin-tone
 * @see https://www.npmjs.com/package/@qit.tools/skin-tone
 *
 * Change emoji skin tones effortlessly. 🧛🧛🏻🧛🏼🧛🏽🧛🏾🧛🏿
 * RGI Emoji Modifier Sequence.
 *
 * @param {string} emoji - The original emoji string.
 * @param {SkinTone} tone - The skin tone to apply. If empty, returns the original emoji.
 * @returns {string} The emoji string with skin tones applied where applicable.
 */
export default function skinTone(emoji: string, tone?: SkinTone): string;
