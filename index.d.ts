export type SkinTone = '' | 'none' | 'light' | 'mediumLight' | 'medium' | 'mediumDark' | 'dark';
/**
 * Adds a skin tone to emoji. Designed for use with ZWJ to handle complex emoji sequences.
 *
 * @param {string} emoji - The original emoji string.
 * @param {SkinTone} tone - The skin tone to apply. If empty, returns the original emoji.
 * @returns {string} The emoji string with skin tones applied where applicable.
 */
export default function skinTone(emoji: string, tone?: SkinTone): string;
