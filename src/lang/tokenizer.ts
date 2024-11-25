// Created by Atharv Hatwar
import { Token, TokenType } from './types';
import { KEYWORDS } from './keywords';

export function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  const lines = code.split('\n');

  for (const line of lines) {
    if (line.trim().startsWith('ignore kar bhava')) continue;

    let currentPosition = 0;
    const lineContent = line.trim();

    while (currentPosition < lineContent.length) {
      // Skip whitespace
      if (/\s/.test(lineContent[currentPosition])) {
        currentPosition++;
        continue;
      }

      // Check for keywords first
      let matched = false;
      for (const [keyword, type] of Object.entries(KEYWORDS)) {
        if (lineContent.slice(currentPosition).startsWith(keyword)) {
          tokens.push({ type, value: keyword });
          currentPosition += keyword.length;
          matched = true;
          break;
        }
      }

      if (matched) continue;

      // Handle string literals
      if (lineContent[currentPosition] === '"') {
        const endQuoteIndex = lineContent.indexOf('"', currentPosition + 1);
        if (endQuoteIndex !== -1) {
          tokens.push({
            type: 'STRING',
            value: lineContent.slice(currentPosition + 1, endQuoteIndex)
          });
          currentPosition = endQuoteIndex + 1;
          continue;
        }
      }

      // Handle numbers
      const numberMatch = /^\d+/.exec(lineContent.slice(currentPosition));
      if (numberMatch) {
        tokens.push({
          type: 'NUMBER',
          value: numberMatch[0]
        });
        currentPosition += numberMatch[0].length;
        continue;
      }

      // Handle identifiers
      const identifierMatch = /^[a-zA-Z_]\w*/.exec(lineContent.slice(currentPosition));
      if (identifierMatch) {
        tokens.push({
          type: 'IDENTIFIER',
          value: identifierMatch[0]
        });
        currentPosition += identifierMatch[0].length;
        continue;
      }

      // Skip unrecognized characters
      currentPosition++;
    }
  }

  return tokens;
}