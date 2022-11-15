const noise = require("./index");

test("should generate a 2D array of size x:5 y:6; all values = 0", () => {
  expect(noise.generate2DZeroArray(5, 6)).toStrictEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
});

// test('should generate noise based on set seed', () => {
//     expect(1).tobe(1)
// })