const Noise = require("./index");

test("should create identical gradients with set seeds", () => {
  let seeds = [
    "apples",
    "oranges",
    "bananas",
    "pizza",
    "burger",
    "spiderman",
    12345,
    123456,
    2345,
    23456,
  ];

  let choice = seeds[Math.floor(Math.random() * seeds.length)];

  let noise1 = new Noise(choice);
  let noise2 = new Noise(choice);

  const GRID = 4;

  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
        noise1.perlin(x, y)
        noise2.perlin(x, y)
    }
  }

  expect(noise1.gradients).toStrictEqual(noise2.gradients);
});


test('should create 2 random gradients with no set seed', () => {
    let noise1 = new Noise();
    let noise2 = new Noise();

    const GRID = 4;

    for (let y = 0; y < GRID; y++) {
      for (let x = 0; x < GRID; x++) {
        noise1.perlin(x, y);
        noise2.perlin(x, y);
      }
    }

    expect(noise1.gradients).not.toStrictEqual(noise2.gradients);
})