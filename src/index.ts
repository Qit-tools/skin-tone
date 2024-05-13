export type SkinTone = '' | 'none' | 'light' | 'mediumLight' | 'medium' | 'mediumDark' | 'dark';

/**
 * Apply skin tones to an emoji.
 * Visit us at: https://qit.tools
 *
 * 🪄 Qit.tools
 * @name __NAME__
 * @version __VERSION__
 * @license __LICENSE__
 * @copyright Copyright (c) 2024 Qit.tools.
 * @see https://github.com/Qit-tools/skin-tone
 * @see https://www.npmjs.com/package/@qit.tools/skin-tone
 *
 * Change emoji skin tones effortlessly. 🧛🧛🏻🧛🏼🧛🏽🧛🏾🧛🏿
 * RGI Emoji Modifier Sequence.
 *
 * @param {string} emoji - The original emoji string.
 * @param {SkinTone} [tone] - The skin tone to apply. If undefined, returns the original emoji.
 * @returns {string} The emoji string with skin tones applied where applicable.
 */
export default function skinTone(emoji: string, tone?: SkinTone): string {
  const skinToneMap: Record<SkinTone, string> = {
    '': '',
    none: '',
    light: '\u{1F3FB}',
    mediumLight: '\u{1F3FC}',
    medium: '\u{1F3FD}',
    mediumDark: '\u{1F3FE}',
    dark: '\u{1F3FF}',
  };

  // If no tone or invalid tone is provided, return the original emoji
  if (!tone || !(tone in skinToneMap)) {
    return emoji;
  }

  const zwj = emoji.includes('\u200D\ud83E\udd1D\u200D') ? '\u200D\ud83E\udd1D\u200D' : '\u200D';

  const parts = emoji.split(zwj);
  const modifiedParts = parts.map((part) => {
    // Remove existing skin tone modifiers
    const basePart = part.replace(/[\u{1F3FB}-\u{1F3FF}]/gu, '');

    // If tone is 'none', return the base part without modifiers
    if (tone === 'none') {
      return basePart;
    }

    // Check if the base part is an Emoji Modifier Base
    if (/\p{Emoji_Modifier_Base}/u.test(basePart)) {
      return basePart + skinToneMap[tone];
    }
    return part;
  });

  return modifiedParts.join(zwj);
}
