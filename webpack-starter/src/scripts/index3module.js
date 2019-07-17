// MODULE 3// FUNCTIONS AND SCOPE//

//FUNCTION AND BLOCK SCOPE
//IIFE'S
//CLOSURES
//TH THIS KEWWORD "THIS"
//CALL(), APPLY (), BIND ()
//ARROW FUNCTIONS
//DEFAULT PARAMETERS

//FUNCTION SCOPE
//VARIABLES THAT CAN BE ACCESSED WITH A FUNCTION OR NESTED
//FUNCTIONS AND IT IS  IMPORTANT TO KNOW
//THE LIFTIME OF THESE VARIABLES 

// function startCar(carId) {
//   let message = "Starting... ";
//   let startFn = function turnKey() {
//     let message = 'Override';
//   };
//   startFn();
//   console.log(message);
// }
// startCar(123);
//message should be inside the function and console.log to appear in the window//


//BLOCK SCOPE

//code block, thats code thats placed in between curly
//braces. So by block scope we are talking about the 
//liftime of variables as they exist within curly braces.
//That coul be for an if statement , a while loop, a for
//a for loop, or any set of curly braces other than a function.

// if (5 === 5) {
//   let message = "Equal";
// }

// console.log(message); //will give error because the message is not defined
//but if instead of LET you write VAR it will print your message
// let message = "Otside";
// if (5 === 5) {
//   let message = "Equal";
//   console.log(message);
// }
// console.log(message);

//if I use here var it will overwrite let and will give message 
//Ewual everywhere, so t is very importnat to use let to avoid 
//overwritting


//IIFE'S

// (function () {
//   console.log("in function");
// })
//   ();

// let app = (function () {
//   let carId = 123;
//   console.log("in function");
//   return {};
// })
//   ();
//to make it function we need ( ) and function inside ()
//(function(){
//.................;
//}) ();


//CLOSURES//

//NORMALLY when a function executes it runs through all its
// code and then completes. all of its variables go 
// out of scope  all of its functions go out of scope
// but sometimes we want that function and its 
//variable and nested functions to hang around
//and thats what a closure is.


// let app = (function () {
//   let carId = 123;
//   let getId = function () {
//     return carId;
//   };
//   return {
//     getId: getId
//   };
// })
//   ();
// console.log(app.getId());

// THE THIS KEYWORD

// this refers to an object, but it doesnt 
//refer to the function as an object itself.
//it is a special object called a context for the 
//function.

// let fn = function () {
//   console.log(this === window);
// };
// fn(); // will shoe true

// let o = {
//   carId: 123,
//   getId: function () {
//     return this.carId;
//   }
// };
// console.log(o.getId());


//CALL AND APPLY

//most of the time when you call a function
//you're going to specify the openning and 
//closing paretheses and place any arguments there, 
//but there are two different ways to call a function.
//1-use the call function
//2-use the apply function
//the main purpose of these two functions is to change
//the value of this.
//That's to change the object which is the 
//context of the function. And this is importnat for 
//object-orineted scenarios.
//example of "call" function
// let o = {
//   carId: 123,
//   getId: function () {
//     return this.carId;
//   }
// };
// let newCar = { carId: 456 };
// console.log(o.getId.call(newCar));

//example of "apply" finction
//the only difference is with apply you can pass arguments

// let o = {
//   carId: 123,
//   getId: function (prefix) {
//     return prefix + this.carId; //this refers to newCar
//   }
// };
// let newCar = { carId: 456 };
// console.log(o.getId.apply(newCar, ["ID: "]));


//BIND

//a function and it make a copy of that function and assigns 
// a new context, a value, that will be accessed by this.

// let o = {
//   carId: 123,
//   getId: function () {
//     return this.carId;
//   }
// };
// let newCar = { carId: 456 };
// let newFn = o.getId.bind(newCar); //bind copying the getId function and 
// //and then taking newCar and assigning it to this witih the function
// console.log(newFn());

//Call and Apply will nor make a cope of the function
//it will just call an existing function, changing this,
//but if i want a brand new function, which is a copy of an 
//existing function, i ise bind and pass it the value for this.


//ARROW FUNCTIONS (=>)

// let getId = () => 123; //empty braces mens there are no parametors to this function
// console.log(getId());

// let getId = prefix => prefix + 123;
// console.log(getId("ID:"));

// let getId = (prefix, suffix) => prefix + 123 + suffix;
// console.log(getId("ID:", "!"));


// let getId = (prefix, suffix) => {
//   return prefix + 123 + suffix; //we need return , becasue we are in curly braces
// };
// console.log(getId("ID:", "!"));

// let getId = () => 123; //we always need () even if there is nothing inside,
//we can use _ instead of ()

//ARROW FUNCTIONS DO NOT HAVE THEIR OWN "THIS" VALUE.
//"THIS" REFERS TO THE ENCLOSING CONTEXT.


//DEFAULT PARAMETERS

// let trackCar = function (carId, city = "NY") {
//   console.log(`Tracking ${carId} in ${city}.`);
// }; //it is important here to use back coma ` so when it sees
// //$ sign it will substitute carId with what is coming next

// console.log(trackCar(123));

// console.log(trackCar(123, "Chicago"));

