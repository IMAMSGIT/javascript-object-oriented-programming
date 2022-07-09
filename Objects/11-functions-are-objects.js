function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

// works as same as new
// to create a new object
const circle = Circle.call({}, 1);
console.log(circle);

const circle1 = new Circle(1);
console.log(circle1);

// apply method also works as
// call but have to pass
// an array as second argument
