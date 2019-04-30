//Utils Class model/s used to solve task
class Grid {
  constructor(gridHeight, gridWidth) {
    this.width = gridWidth;
    this.height = gridHeight;
  }

  numberOfRoute(x, y) {
    x = x ? x : 0;
    y = y ? y : 0;
    if (x >= this.width && y >= this.height) {
      return 1;
    } else {
      let routes = 0;
      if (x < this.width) {
        routes += this.numberOfRoute(x + 1, y);
      }
      if (y < this.height) {
        routes += this.numberOfRoute(x, y + 1);
      }
      return routes;
    }
  }
}

module.exports = Grid;