/* function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Draw");
    },
  };
}

const circle = createCircle(2);
console.log(circle);
*/

// same code will be constructed via
// constructor

function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const another = new Circle(23);
console.log(another);
