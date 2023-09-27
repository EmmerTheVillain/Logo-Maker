//triangle
const Shape = require('./shape');

class Triangle extends Shape {
    render() {
        const Points = "0,0 0,200 300,150"
        return `<polygon points="${points}" fill="${this.color}" />`;
    }
}
module.exports = Triangle;