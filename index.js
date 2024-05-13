"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Change emoji skin tones effortlessly. 🧛🧛🏻🧛🏼🧛🏽🧛🏾🧛🏿
 * RGI Emoji Modifier Sequence.
 *
 * @param {string} emoji - The original emoji string.
 * @param {SkinTone} tone - The skin tone to apply. If empty, returns the original emoji.
 * @returns {string} The emoji string with skin tones applied where applicable.
 */
function skinTone(emoji, tone) {
    if (!tone) {
        return emoji;
    }
    const skinTonMap = {
        none: '',
        light: '\u{1F3FB}',
        mediumLight: '\u{1F3FC}',
        medium: '\u{1F3FD}',
        mediumDark: '\u{1F3FE}',
        dark: '\u{1F3FF}',
    };
    let zwj = '\u200D';
    // Hand Shake 🧑‍🤝‍🧑
    if (emoji.includes('\u200d\ud83e\udd1d\u200d')) {
        zwj = '\u200d\ud83e\udd1d\u200d';
    }
    const parts = emoji.split(zwj);
    const modifiedParts = parts.map((part) => {
        const basePart = part.replace(/\p{Emoji_Modifier}/gu, '');
        const hasVS16 = /\uFE0F/.test(basePart);
        if (/\p{Emoji_Modifier_Base}/u.test(basePart)) {
            return basePart.replace(/(\p{Extended_Pictographic}+)/u, `$1${skinTonMap[tone]}${hasVS16 ? '\u{FE0F}' : ''}`);
        }
        return part;
    });
    return modifiedParts.join(zwj);
}
exports.default = skinTone;
