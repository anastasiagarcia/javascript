// OPERATORS:
// EQUALITY OP
// UNARY OP
// LOGICAL OP
// RELATIONAL OP
// CONDITIONAL OP
// ASSIGNMENT OP
// OPERATOR PRECENDENCE 

// EQUALITY OPERATORS

// if (var1 == var2) { }
// if var1 equal var2 the code will execute
// javascript is going to attempt to convert these 
// variables to be the same type. if you had a
// number and a string it would try to convert the number
// to a string to make the comparison.

// if (var1 === var2) { } 
// the type have to be equal as well as the values 
// for this to be true (strict equality)

// if (var1 != var2) { }
// if (var1 !== var2) { }
// any quality operetaros 
// those who would be not equal to and not double equal
// Not equals (!=) will try to convert the types to be the same 
// and not equal equal (!==)is not identically equal to;
// that wont do any type conversion types var1 and var2
// must be the same
// if (var1 !== var2) { }

// console.log(1 == 1); //true
// console.log(1 === true); //false

// let id = 123;
// console.log(id === "123"); //false, because "123" is a string not number

// let id = 123;
// console.log(id == "123"); //is true because it converts string to number

// let id = 123;
// console.log(id != "123"); //will shall false because they are equal 
//(!= means not equal)

// let id = 123;
// console.log(id !== "123"); //will show true , because they are not equal


// UNERY OPERATORS
//THESE OP OPERATE ON A SINGLE VALUE OR VARIABLE.

//double plus sign (++) increments a variable
//so if var1 was = to 5, after this executes var1 would be
//=to 6 //double minus (--) is decrement operator
//(++var1); (var++); (--var1);(var1--);

// let year = 1967;
// console.log(++year); //will show 1967+1 (1968)
// console.log(--year); //wish show 1967-1 (1966)

// console.log(year++); //will show the same year 1967 but will add +1 for future
// console.log(year); //it will show 1968 previous 1 added

// console.log(-year); //makes the number negative
//if from the beginning the number eas negative (-year) would make it positive

// let year = "1967";
// // console.log(typeof (year)); //it is tring
// console.log(typeof (+year)); //(+)sign make it number


//LOGICAL (BOOLEAN) OPERATORS

// if (var1 > 5 && var2 < 100) { } //means strickly and 
// if (var1 > 5 || var2 < 100) { } //or , not srickt either one expression or both
// if (var1 > 5 || var2 < 100 && var3 === 5) { } //will proceed && first
// if ((var1 > 5 || var2 < 100) && var3 === 5) { } // will proceed or and then &&

// var1 && var2
// var1 || var2
// !var1  this will convert var1 into a Boolean value, either true or false
//and then flip it. So if var1 is valid object, that results in true, but the 
// not symbol (!) will make this expression false

//**Examples **//

// if (5 === 5 || 6 === 7) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }

// Didnt understand it propertly...\/\/\/\/
// let userSettings = { name: "Joe" };
// let defaultSettings = { name: 'Default' };

// console.log(userSettings && defaultSettings);


// console.log(!true); //it will print false


//RELATIONAL OPERATORS
// > greater than;
// < less than;
//>= greater than-or0equal-to;
//<= less-than-or-equal-to

// "Zoo" < "alphabet";
//all of the upper caracter are considered less
// than all of the lowercase characters. it's compared by ASCII value
//uppercases come before lowercases, and if all ar lowercases then it
//it just checking by a b c d ....which comes first
// let s1 = "Zoo";
// let s2 = "alphabet";

// if (s1 < s2) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }


//CONDITIONAL OPERATOR

//can be used in place of an if statment.
//has fiew differetn symbols:
//var result = (foo >5) ? true : false;

// console.log((5 > 4) ? "yes" : "no"); //will show yes


//ASSIGNMENT OPERATORS
//LIKE +

// var1 += 10;
// var1 -= 10;
// var1 /= 10;
// var1 *= 10;
// var1 %= 10;
// var1 <<= 1; //shift left operator, it'll take var1 and shift its
// //bits to the left by 1 bit. this many works with integers ot bit fields 
// //and it is not very common.
// var1 >>= 1; //to shift the bits to the right;
// var1 >>>= 1; //to shift the bit right, but to keep the sign;
//this mean var1 equals (=) var1 + 10 it
//simple adds 10 to var1
//the same with all other stuff, % remainder operator 

//**Examples**//

// let year = 1964;
// year %= 10; //if divided by 10, it is 196,4 (so 4 remains) 
// console.log(year); //will show 4, what remains after (,)coma

// let year = 1964;
// year <<= 10; //as Fernando explained : 2 to the power of 10 and then multiply that with 1964 (binary stuff)
// console.log(year);
//  let year = 1964;
//  year >>= 1; //thats equivalent to dividing it by 2//

//**OPERATOR PRECEDENCE **//

//refers to the order in which operators het executed 
//and it is the source of many many bugs!!!
//Check it at MDM web docs (mozilla)

