const reverseString = require("./reverseString");

// test to see if func exists
test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

// see if it reverses properly
test("String reverses properly", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String reverses properly, with Uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
