//CONSTRUCTOR FUNCTIONS
//PROTOTYPES
//EXPANDING OBJECTS USING PROTOTYPES
// JAVASCRIPT OBJECT NOTATION- JSON
//ARRAY ITERATION


//CONSTRUCTOR FUNCTIONS

//used to instantiate new objects. It looks a lot like a regular
//function, but it behaves very differently.


// function Car(id) {
//   this.carId = id;

// };
// let car = new Car(123);
// console.log(car.carId); //will give 123

// function Car(id) {
//   this.carId = id;
//   this.start = function () {
//     console.log('start:' + this.carId);
//   };

// }
// let car = new Car(123);
// car.start(); //will show start 123

// function Car(id) {
//   this.carId = id;
//   this.start = function () {
//     console.log('start:' + this.carId);
//   };

// }
// let vehicle = new Car(123);
// vehicle.start(); //will show start 123


//PROTOTYPES

//A prototype exists directly on car as a function.
//exapmle from above (car) 

// function Car(id) {
//   this.carId = id;
// }
// Car.prototype.start = function () {
//   console.log('start:' + this.carId);
// };

// let car = new Car(123);
// car.start(); //will show start 123

//it is very helpful whehn we need to write like bunch of stuff
//using just 1 function, so we dont need to copy and paste it

//EXPANDING OBJECTS USING PROTOTYPES\

//expend objects and give new functionality to all instances of
//an object. Polyfill
//polyfill typically use prototypes.

// String.prototype.hello = function () {
//   return this.toString() + " hello";
// };

// console.log("anastasia".hello());


// JAVASCRIPT OBJECT NOTATION- JSON

//to transmit JavaScript objects over the wire.
//Most often it would be sending or receiving a JS object to some
//API such as a RESTful API on the web. 

// let car = {
//   id: 123,
//   style: "convertible"
// };

// console.log(JSON.stringify(car));

//will show {"id":123,"style":"convertible"}

// let carIds = [
//   { carId: 123 },
//   { carId: 456 },
//   { carId: 789 }
// ];
// console.log(JSON.stringify(carIds));
// //will show [{"carId":123},{"carId":456},{"carId":789}]

//PARSING JSON

// let jsonIn =
//   `
//   [
//     { "carId": 123 }, 
//     { "carId": 456 },
//     { "carId": 789 }
//   ]
// `;
// let carIds = JSON.parse(jsonIn);
// console.log(carIds);

//the property name should be in quots!! "carId"
//to call it back to string we need to do next steps

// let carIds = JSON.parse(jsonIn);
// console.log(JSON.stringify(carIds));

//will show [{"carId":123},{"carId":456},{"carId":789}]