const {Circle, Rectangle, Triangle} = require("./shapes")

describe('Triangle', () => {
  test('Triangle should render a triangle with the specified color', () => {
      const shape = new Triangle();
      const color =('red')
      shape.shapeColor(color);
      expect(shape.render()).toEqual(`<polygon points="150,50 200,135 100,135" x="0" y="150" style="fill: ${color}" />`);
    });
});

describe('Rectangle', () => {
  test('rectangle should render a rectangle with the specified color', () => {
      const shape = new Rectangle();
      const color =('orange')
      shape.shapeColor(color);
      expect(shape.render()).toEqual(`<rect x="0" y="50"  width="300" height="100" style="fill: ${color}" />`);
    });
});

describe('Circle', () => {
  test('Circle should render a circle with the specified color', () => {
      const shape = new Circle();
      const color =('orange')
      shape.shapeColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="40" style="fill: ${color}" />`);
    });
});
