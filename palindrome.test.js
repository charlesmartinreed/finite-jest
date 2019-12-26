const palindromes = require("./palindrome");

test("Palindrome function has been defined", () => {
  expect(palindromes).toBeDefined();
});

test("Confirm that Anna is a palindrome", () => {
  expect(palindromes("Anna")).toBe(true);
});

test("Confirm that Milk is a palindrome", () => {
  expect(palindromes("Milk")).toBe(false);
});
