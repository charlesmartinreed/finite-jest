// THIS PARTICULAR IMPLEMTATION DOESN'T LEVERAGE THE SORT FUNCTION, BUT OBVIOUSLY THAT'D BE A MUCH CLEANER WAY OF DOING THIS...

const isAnagram = (firstWord, secondWord) => {
  const firstWordArr = [...firstWord.replace(/[^\w]/g, "").toLowerCase()];
  const secondWordArr = [...secondWord.replace(/[^\w]/g, "").toLowerCase()];

  for (letter of firstWordArr) {
    if (secondWordArr.indexOf(letter) === -1) {
      return false;
    }
  }

  return true;
};

// MUCH BETTER IMPLEMENTATION, courtesy of Brad Traversy... or probably just stackoverflow or whatever.
function prepWord(word) {
  return word
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

const anagramCheck = (wordA, wordB) => {
  return prepWord(wordA) === prepWord(wordB);
};

module.exports = { isAnagram, anagramCheck };
