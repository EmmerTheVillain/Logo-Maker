//triangle
const Shape = require('./shape');

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    const points = `0,200 300,200 150,0`;
    return `<polygon points="${points}" fill="${this.color}" />`;
  }
}

module.exports = Triangle;