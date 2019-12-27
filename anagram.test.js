const { isAnagram, anagramCheck } = require("./anagram");

test("Ensure bad anagram check function is defined", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("Ensure better anagram check function is defined, too", () => {
  expect(typeof anagramCheck).toEqual("function");
});

// isAnagram tests
test("Silent is an anagram of Listen", () => {
  expect(isAnagram("Silent", "Listen")).toBeTruthy();
});

test("Hello is NOT an anagram of Aloha", () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});

// AnagramCheck tests
test("Dormitory is an anagram of dirty room###", () => {
  expect(anagramCheck("Dormitory", "dirty room###")).toBeTruthy();
});

test("William is NOT an anagram of Billie", () => {
  expect(anagramCheck("William", "Billie")).toBeFalsy();
});
