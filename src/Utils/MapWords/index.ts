import {WordPair}  from '../../../types';

export function mapWords(words: string[][]): WordPair[] {
  const result: WordPair[] = [];

  for (const [word, translate] of words) {
    result.push({ word, translate: '' });
    result.push({ word: translate, translate: word });
  }

  return result;
}
