const isAnagram = (firstWord, secondWord) => {
  const firstWordArr = [...firstWord.toLowerCase()];

  if (firstWord.length !== secondWord.length) {
    return false;
  }

  for (letter of secondWord) {
    if (firstWordArr.indexOf(letter.toLowerCase()) === -1) {
      return false;
    }
  }

  console.log(`${secondWord} is an anagram of ${firstWord}`);
  return true;
};

module.exports = isAnagram;
