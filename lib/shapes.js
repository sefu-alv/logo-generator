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
      return `<circle cx="50" cy="50" r="40" style="fill: ${this.color}" />`;
    }
  }
  
  class Rectangle extends Shapes {
    render() {
      return `<rect width="300" height="100" style="fill: ${this.color}" />`;
    }
  }
  
  class Triangle extends Shapes {
    render() {
      return `<polygon points="200,10 250,190 160,210" style="fill: ${this.color}" />`;
    }
  }
  
//   exporting the needed classes
  module.exports = { Circle, Rectangle, Triangle };
  