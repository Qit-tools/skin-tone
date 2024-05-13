export type SkinTone = '' | 'none' | 'light' | 'mediumLight' | 'medium' | 'mediumDark' | 'dark';
/**
 * Change emoji skin tones effortlessly. 🧛🧛🏻🧛🏼🧛🏽🧛🏾🧛🏿
 * RGI Emoji Modifier Sequence.
 *
 * @param {string} emoji - The original emoji string.
 * @param {SkinTone} tone - The skin tone to apply. If empty, returns the original emoji.
 * @returns {string} The emoji string with skin tones applied where applicable.
 */
export default function skinTone(emoji: string, tone?: SkinTone): string;
