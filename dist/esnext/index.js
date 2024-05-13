/**
 * Apply skin tones to an emoji.
 * Visit us at: https://qit.tools
 *
 * 🪄 Qit.tools
 * @name @qit.tools/skin-tone
 * @version 0.5.0
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
        if (/\p{Emoji_Modifier_Base}/u.test(basePart)) {
            return basePart.replace(/(\p{Extended_Pictographic}+)(\uFE0F?)/u, `$1${skinTonMap[tone]}`);
        }
        return part;
    });
    return modifiedParts.join(zwj);
}

export { skinTone as default };
//# sourceMappingURL=index.js.map
