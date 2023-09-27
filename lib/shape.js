//shape object
class Shape {
    constructor() {
        this.logoColor = "";
        this.text = "";
        this.textColor = ""
    }

    setColor(logoColor) {
        this.logoColor = logoColor;
    }

    setText(text){
        this,text = text;
    }

    setTextColor(textColor){
    this.textColor = textColor;
    }

    Render() {
        const shapeRender = this.render();
        const textElement = `<text x="150" y="100" font-size="50" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text>`;
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n${shapeRender}\n${textElement}</svg>`;
      }
}
module.exports = Shape;
