function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const another = new Circle(23);
console.log(another);
console.log(another.constructor);

let x = new String();
x = "It is a String";
console.log(x);
