const functions = require("./functions");

// toBe matcher
test("Adds 2 + 2 to equal 4", () => {
  // actual function goes here, as well as the 'matcher' appended to the end of expect()
  expect(functions.add(2, 2)).toBe(4);
});

// not.toBe matcher
test("Adds 2 + 2 to NOT equal 5", () => {
  // actual function goes here, as well as the 'matcher' appended to the end of expect()
  expect(functions.add(2, 2)).not.toBe(5);
});

// while toBe looks for specific values, we can also check for null, undefined, defined, truthy, falsy...

// toBeNull matcher
test("Value should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy matcher
test("Value should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});
