function findWordsWithAandU(text) {
  const words = text.split(/\s+/);

  const filteredWords = words.filter(function (word) {
    return word.includes("a") && word.includes("u");
  });

  return filteredWords;
}

const input = `
yes no spring winter autumn auburn aura audience auxiliary ambulance acute beautiful unusual
adequate aquarium argue author august manual unusual usual vacuum
casual neutral audience teacher
`;

console.log(
  `The words that contain 'a' and 'u' from the given text input: ${findWordsWithAandU(
    input
  )}`
);
