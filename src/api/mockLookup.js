// 📁 src/api/mockLookup.js
// 🎭 Simulated async lookup API response for testing purposes

export default async function mockLookup(query, sourceLang, targetLang) {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  await delay(150);

  const examples = {
    "break a leg": {
      word: "Break a leg",
      translation: "Bonne chance !",
      tag: "idiom",
      type: "phrase",
      usage: "Used to wish someone good luck before a performance.",
      example: "You're going on stage? Break a leg!",
      related: ["good luck", "performance"],
    },
    "bite the hand that feeds you": {
      word: "Bite the hand that feeds you",
      translation: "Mordre la main qui vous nourrit",
      tag: "idiom",
      usage: "To harm or criticize someone you depend on.",
      example: "I wouldn't complain so much—don’t bite the hand that feeds you.",
      related: ["betrayal", "ingratitude"],
    },
    "barking up the wrong tree": {
      word: "Barking up the wrong tree",
      translation: "Faire fausse route",
      tag: "idiom",
      usage: "To pursue a mistaken or misguided course of action.",
      example: "If you think I'm the culprit, you're barking up the wrong tree.",
      related: ["mistake", "accusation"],
    },
  };

  const key = query.toLowerCase().trim();

  if (examples[key]) {
    return {
      ...examples[key],
      direction: `${sourceLang} ⇀ ${targetLang}`,
    };
  }

  return {
    word: query,
    translation: `${query} (mocked ${targetLang})`,
    tag: '', // should stay blank if unknown
    usage: '',
    example: '',
    related: [],
    direction: `${sourceLang} ⇀ ${targetLang}`,
  };
}
