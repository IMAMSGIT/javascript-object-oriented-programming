// duplicating functions when there is different
// behavior in them is not useful
//  so we put them just one function
// as to create factory or constructor

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Draw");
    },
  };
}

const circle = createCircle(2);
console.log(circle);
