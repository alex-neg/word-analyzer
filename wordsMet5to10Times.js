function wordsMet5to10Times(text) {
  const words = text.split(/\s+/);
  const uniqueWords = [];
  const wordCount = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let found = false;

    for (let j = 0; j < uniqueWords.length; j++) {
      if (uniqueWords[j] === word) {
        wordCount[j]++;
        found = true;
        break;
      }
    }

    if (!found) {
      uniqueWords.push(word);
      wordCount.push(1);
    }
  }

  const filteredWords = [];
  for (let i = 0; i < uniqueWords.length; i++) {
    if (wordCount[i] >= 5 && wordCount[i] <= 10) {
      filteredWords.push(uniqueWords[i]);
    }
  }

  return filteredWords;
}

let input = `apple banana orange apple banana orange apple banana orange apple
banana orange apple banana orange kiwi mango papaya peach grape
kiwi mango papaya peach grape kiwi mango papaya peach grape
kiwi mango papaya peach grape kiwi mango papaya peach grape
kiwi mango papaya peach grape kiwi mango papaya peach grape
kiwi mango papaya peach grape kiwi mango papaya peach grape
kiwi mango papaya peach grape`;

console.log(
  `The words that appear 5 to 10 times from the given text input: ${wordsMet5to10Times(
    input
  )}`
);
