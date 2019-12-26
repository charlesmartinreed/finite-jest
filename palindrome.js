const isPalindrome = word => {
  let arrForward = [...word.toLowerCase()];

  let last = arrForward.length - 1;

  for (let i = 0; i < arrForward.length; i++) {
    if (arrForward[i] === arrForward[last]) {
      last--;
    } else {
      return false;
    }

    console.log(`${word} is a palindrome`);
    return true;
  }
};

module.exports = isPalindrome;
