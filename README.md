
# Noise-Generator

Create Perlin noise.




## Demo

Check out the *[demo](https://github.com/Downmoto/noise-generator/blob/main/demo.html)*


## Installation

To install Noise-Generator, run:

```bash
  npm install https://github.com/Downmoto/noise-generator
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Usage/Examples

Check demo for more detailed usage

```javascript
const Noise = require('noise-generator')

let noise = new Noise('apples'); // optional seed

const GRID = 4;

for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
        let value = noise.perlin(x, y)
    }
}
```

