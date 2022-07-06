function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
console.log(Circle.name);

const Circle1 = new Function(
  "Radius",
  `this.radius = radius,
this.draw = function () {
console.log("Draw");
}
`
);

const circle = new Circle1(23);
console.log(circle);
