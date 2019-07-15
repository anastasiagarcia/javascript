// console.log("Hello World!!!!!!!!!!!");

// CONSTANTS
// IT CANT BE CHANGED, ONLY BE INITIALISED (CONST = 50)
// const pi = 3.14;

// if (true) {
//   let carId = 100;
// }
// console.log(carId);

// function sendCars(day, ...allCarId) {
//   allCarId.forEach(id => console.log(id));
// }

// sendCars('Monday', 1, 2, 3);


//DESTRUCTURING ARRAYS []

// let carIds = [1, 2, 5];
// let [car1, car2, car3] = carIds;
// console.log(car1, car2, car3);

// let carIds = [1, 2, 5];
// let car1, remainingCars;
// [car1, ...remainingCars] = carIds;
// console.log(car1, remainingCars);

// let carIds = [1, 2, 5];
// let remainingCars;
// [, ...remainingCars] = carIds;
// console.log(remainingCars);

// let carIds = [100, 200, 300];
// let car1, car2, theRest;
// [car1, car2, ...theRest] = carIds;

// console.log(car1, car2, theRest);



//DESTRUCTURING OBJECTS {}


// let car = { id: 5000, style: "convertible" };
// let { id, style } = car;
// console.log(id, style);

// let car = { id: 5000, style: 'convertible' };
// let id, style;
// ({ id, style } = car);

// console.log(id, style);

//SPREAD SYNTAX

// function startCars(car1, car2, car3) {
//   console.log(car1, car2, car3);
// }

// let carIds = [100, 300, 500];
// startCars(...carIds);

// function startCars(car1, car2, car3) {
//   console.log(car1, car2, car3);
// }

// let carCodes = "abc";
// startCars(...carCodes);

// function startCars(car1, car2, car3, ...rest) {
//   console.log(...rest);
// }

// let carCodes = [1, 2, 3, 4, 5, 6, 7];
// startCars(...carCodes);

// strings and arrays called iterables


// TYPE(OF) IS A BUILT-IN FUNCTION IN JS
// it helps us to find the type of a cariable
//constant or literal value.


// typeof (1);
// console.log(typeof (1)); //number

// typeof (true);
// console.log(typeof (true)); //boolean

// typeof ("hello");
// console.log(typeof ("hello")); //string

// console.log(typeof ({})); //object
// console.log(typeof (null)); //object
// console.log(typeof [3]); //object
// console.log(typeof (undefined)); //undefined 
// console.log(typeof (NaN)); //number



// COMON TYPE CONVERSION

//convert to string

// foo.toString();

//convert string to integer

// Number.parseInt('55'); //55 as a number

//convert string to number

// Number.parseFloat("55.99"); //55.99 as a number


// CONTROLLING LOOPS

// let i = 0;
// for (; i < 12; i++) {
//   if (i === 8) {
//     break;
//   }

// }
// console.log(i); // is 8


for (let i = 0; i < 4; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}