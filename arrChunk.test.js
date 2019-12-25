const chunkTest = require("./arrChunk");

// test that function exists
test("chunkArray function exists", () => {
  expect(chunkTest).toBeDefined();
});

test("Chunk an array of 10 values, with length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkResult = chunkTest(numbers, len);

  expect(chunkResult).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
  ]);
});

test("Chunk an array of 3 values, with length of 1", () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkResult = chunkTest(numbers, len);

  expect(chunkResult).toEqual([[1], [2], [3]]);
});
