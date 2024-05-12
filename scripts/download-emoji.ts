import axios from 'axios';
import fs from 'fs';

// Download all RGI Emoji Modifier Sequence for tests.

type EmojiData = {
  emoji: string;
  light: string;
  mediumLight: string;
  medium: string;
  mediumDark: string;
  dark: string;
};

async function fetchAndParseEmojiData(url: string): Promise<EmojiData[]> {
  const response = await axios.get(url);
  const rawData = response.data;
  const startIndex = rawData.indexOf('# RGI_Emoji_Modifier_Sequence');
  const relevantData = rawData.slice(startIndex).split('\n');

  const emojiMap: Record<string, EmojiData> = {};

  for (const line of relevantData) {
    if (!line.startsWith('#') && line.trim().length > 0) {
      const parts = line.split(';');
      const codes = parts[0].trim().split(' ');
      const description = parts[2]?.trim();
      const emojiMatch = description?.match(/\((.*?)\)/);

      if (emojiMatch && emojiMatch[1]) {
        const emojiCharacter = emojiMatch[1];
        const baseEmoji = String.fromCodePoint(parseInt(codes[0], 16));
        const skinToneModifier = codes[1];

        if (!emojiMap[baseEmoji]) {
          emojiMap[baseEmoji] = {
            emoji: baseEmoji,
            light: '',
            mediumLight: '',
            medium: '',
            mediumDark: '',
            dark: '',
          };
        }

        switch (skinToneModifier) {
          case '1F3FB':
            emojiMap[baseEmoji].light = emojiCharacter;
            break;
          case '1F3FC':
            emojiMap[baseEmoji].mediumLight = emojiCharacter;
            break;
          case '1F3FD':
            emojiMap[baseEmoji].medium = emojiCharacter;
            break;
          case '1F3FE':
            emojiMap[baseEmoji].mediumDark = emojiCharacter;
            break;
          case '1F3FF':
            emojiMap[baseEmoji].dark = emojiCharacter;
            break;
          default:
            break;
        }
      }
    }
  }

  return Object.values(emojiMap);
}

const emojiUrl = 'https://unicode.org/Public/emoji/15.1/emoji-sequences.txt';
fetchAndParseEmojiData(emojiUrl)
  .then((data) => {
    fs.writeFile('./tests/RGI_Emoji.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Successfully wrote emoji data to emoji.json');
      }
    });
  })
  .catch((error) => console.error('Error fetching or parsing emoji data:', error));
