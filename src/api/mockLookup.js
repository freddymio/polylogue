// 📁 src/api/mockLookup.js
export async function lookupMockFetch(query, sourceLang, targetLang) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        word: query,
        sourceLang,
        targetLang,
        translation: `${query} (mocked ${targetLang})`,
        examples: [
          `${query} used in a simple sentence.`,
          `Another example with ${query}.`
        ],
        related: ["mock1", "mock2"],
      });
    }, 600 + Math.random() * 400);
  });
}
