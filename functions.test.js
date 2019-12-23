const functions = require("./functions");

// JEST TEST #1
test("Adds 2 + 2 to equal 4", () => {
  // actual function goes here, as well as the 'matcher' appended to the end of expect()
  expect(functions.add(2, 2)).toBe(4);
});
