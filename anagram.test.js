const anagrams = require("./anagram");

test("Ensure Anagram method is defined", () => {
  expect(anagrams).toBeDefined();
});

test("Silent is an anagram of Listen", () => {
  expect(anagrams("Silent", "Listen")).toBe(true);
});

test("Billie is NOT an anagram of Listen", () => {
  expect(anagrams("Silent", "Billie")).toBe(false);
});
