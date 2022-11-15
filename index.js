


function generate2DZeroArray(xlength, ylength) {
  let arr = new Array(ylength);

  for (let i = 0; i < ylength; i++) {
    arr[i] = new Array(xlength).fill(0);
  }

  return arr;
}

function scatterMaxValueInArray(arr, maxValue, points) {
  var count = 0;

  while (count < points) {
    for (var y = 0; y < arr.length; y++) {
      for (var x = 0; x < arr[y].length; x++) {
        let rand = Math.floor(Math.random() * 100);

        if (rand <= 1) {
          if (arr[y][x] != maxValue) {
            arr[y][x] = maxValue;
            count++;
            if (count == points) return;
          }
        }
      }
    }
  }
}

function generateNoise(arr, iterations = 9) {
  if (iterations > 9) {
    iterations = 9;
  } else if (iterations < 1) {
    iterations = 1;
  }

  let offsetx = [0, 1, 1, 1, 0, -1, -1, -1];
  let offsety = [-1, -1, 0, 1, 1, 1, 0, -1];

  let points = Math.floor((arr.length * arr[0].length) / 10);
  scatterMaxValueInArray(arr, 1, points);

  for (let iter = 0; iter < iterations; iter++) {
    for (var y = 0; y < arr.length; y++) {
      for (var x = 0; x < arr[y].length; x++) {

        for (var i = 0; i < 8; i++) {
          let nx = x + offsetx[i];
          let ny = y + offsety[i];

          if (
            nx < 0 ||
            nx > arr[y].length - 1 ||
            ny < 0 ||
            ny > arr.length - 1
          ) {
            continue;
          }

          if (arr[y][x] > 0 && arr[ny][nx] < arr[y][x]) {
            arr[ny][nx] = arr[y][x] / 2
          }
        }
      }
    }
  }
}

let array = generate2DZeroArray(10, 10);
generateNoise(array, 1, 5);

array.forEach((v) => console.log(...v));

module.exports = {
  generate2DZeroArray,
  generateNoise,
};
