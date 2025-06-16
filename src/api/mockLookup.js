// 📁 src/api/mockLookup.js

const idioms = {
  'break a leg': {
    word: 'Break a leg',
    translation: 'Bonne chance !',
    usage: 'Used to wish someone good luck before a performance.',
    type: 'idiom',
    partOfSpeech: 'phrase',
    example: "You're going on stage? Break a leg!",
    related: ['good luck', 'performance'],
  },
  'raining cats and dogs': {
    word: 'Raining cats and dogs',
    translation: 'Il pleut des cordes.',
    usage: 'Used to describe heavy rainfall in an exaggerated way.',
    type: 'idiom',
    partOfSpeech: 'phrase',
    example: "Don't forget your umbrella — it's raining cats and dogs!",
    related: ['heavy rain', 'weather'],
  },
};

export async function lookupMockFetch(query, sourceLang, targetLang) {
  const normalized = query.toLowerCase().trim();

  return new Promise((resolve) => {
    setTimeout(() => {
      if (idioms[normalized]) {
        resolve({
          ...idioms[normalized],
          sourceLang,
          targetLang,
        });
      } else {
        resolve({
          word: query,
          translation: `${query} (mocked ${targetLang})`,
          sourceLang,
          targetLang,
          partOfSpeech: 'noun',
          example: `${query} used in a sentence.`,
          related: ['mock1', 'mock2'],
        });
      }
    }, 600 + Math.random() * 400);
  });
}
