// value types
// Number, String, Boolean,
// Symbol, undefined,null

// reference types
// Object, Function, Array

let x = 12;
let y = x;
x = 10;
console.log(x);
console.log(y);

//they are stored separately
//as a primitive type

let a = { value: 30 };
let b = a;
x.value = 40;
console.log(a);
console.log(b);

// this doesn't change value for a
// and stored separately in memory

let obj = { vaule: 11 };
function refIncrease(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);

// if we try to change any objects
// value via function
// as it is a refrence type , it works
// but not for primitive type
