class Shapes {
    constructor() {
      this.color = '';
    }
  
    shapeColor(color) {
      this.color = color;
    }
  }
//   all the folling classes extended from Shapes
  class Circle extends Shapes {
    render() {
      return `<circle cx="150" cy="100" r="40" style="fill: ${this.color}" />`;
    }
  }
  
  class Rectangle extends Shapes {
    render() {
      return `<rect x="0" y="50"  width="300" height="100" style="fill: ${this.color}" />`;
    }
  }
  
  class Triangle extends Shapes {
    render() {
      return `<polygon points="150,50 200,135 100,135" x="0" y="150" style="fill: ${this.color}" />`;
    }
  }
  
//   exporting the needed classes
  module.exports = { Circle, Rectangle, Triangle };
  