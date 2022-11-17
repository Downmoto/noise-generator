const { hasher, prng } = require("./externals");

class Noise {
  // https://en.wikipedia.org/wiki/Perlin_noise
  // https://joeiddon.github.io/projects/javascript/perlin.html
  constructor(seed) {
    this.gradients = {};

    if (seed) {
      let s = hasher(seed.toString());
      this.rand = prng(s[0], s[1], s[2], s[3]);
    } else {
      this.rand = Math.random;
    }
  }

  #randomGradient() {
    let theta = this.rand() * 2 * Math.PI;
    return { x: Math.cos(theta), y: Math.sin(theta) };
  }

  #interpolate(a0, a1, w) {
    if (0.0 > w) return a0;
    if (1.0 < w) return a1;

    return (a1 - a0) * ((w * (w * 6.0 - 15.0) + 10.0) * w * w * w) + a0;
  }

  #dotGridGradient(ix, iy, x, y) {
    let gradient = this.#randomGradient()
    let dx = x - ix;
    let dy = y - iy;

    if (this.gradients[[ix, iy]]) {
      gradient = this.gradients[[ix, iy]];
    } else {
      this.gradients[[ix, iy]] = gradient;
    }

    return dx * gradient.x + dy * gradient.y;
  }

  perlin(x, y) {
    let x0 = Math.floor(x);
    let x1 = x0 + 1;
    let y0 = Math.floor(y);
    let y1 = y0 + 1;

    let sx = x - x0;
    let sy = y - y0;

    let n0, n1, ix0, ix1, value;

    n0 = this.#dotGridGradient(x0, y0, x, y);
    n1 = this.#dotGridGradient(x1, y0, x, y);
    ix0 = this.#interpolate(n0, n1, sx);

    n0 = this.#dotGridGradient(x0, y1, x, y);
    n1 = this.#dotGridGradient(x1, y1, x, y);
    ix1 = this.#interpolate(n0, n1, sx);

    value = this.#interpolate(ix0, ix1, sy);
    return value * 0.5 + 0.5;
  }

  static() {
    return this.rand();
  }
}

module.exports = Noise;
