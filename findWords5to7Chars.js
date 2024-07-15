function findWords5to7Characters(text) {
  const words = text.split(/\s+/);
  const filteredWords = words.filter(function (word) {
    return word.length >= 5 && word.length <= 7;
  });
  return filteredWords;
}

let input =
  "This is a test sentence with words of various lengths like apple, banana, orange, and kiwi.";

console.log(
  `Words of 5 to 7 character from the text input: ${findWords5to7Characters(
    input
  )}`
);
