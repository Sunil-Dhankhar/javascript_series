// @@@@@@@@@@@@@@@@  Arrow Function  @@@@@@@@@@@@@@@@@@@@
// arrow function is a smart and short version of declare and call the function in place of regular function. 
// with help of you arrow function can write small and short script of a function with in few lines
// some basic example are written in below

let ab = (a=20, b=80) =>{ return a+b;} // declare a varibale as a arrow function have arguments with define values and then return the sum of both arguments 
console.log(ab());// call the arrow function for get the result of the function

let ac = () => { return "Welcome to the erosteps";} // declare a variable as a arrow function  without any argument and return a simple string
console.log(ac());//call the arrow function

let ad = ero => "How we can help you " + ero; // declare the variable as a arrow function and here you see we not add any parentheses () and curly brackests {} and return the string using passed argument.

console.log(ad(ero ="!!")) // call the arrow function with passing arguments with value

let dc = (a,b) =>{ return a+b;} //define or declare a variable as arrow function have arguments and inside the function scope it returns the sum of passed arguments
console.log(dc(a=150, b=750)); // call the arrow declared function by passing the arguments with values.

// ---------------------------------------------
// Understanding 'this' in JavaScript Arrow Functions
// ---------------------------------------------

// (1) Arrow functions do NOT have their own 'this' context.
//     Instead, they inherit 'this' from the surrounding (lexical) scope.

// (2) In an object, if an arrow function is used directly as a method,
//     'this' will not refer to the object itself, but to the outer/global scope.

// (3) To access object properties using 'this' inside an arrow function,
//     you must define the arrow function INSIDE a regular function,
//     where 'this' correctly refers to the object.

// (4) In the example below, we define a regular function as an object method,
//     and inside that, we define an arrow function. The arrow function uses
//     'this' inherited from the regular function — which refers to the object.

// An Example of this object reference with regular function
let evt =  {  //creating an object with properties 
                names: "ero", // object property with value
                classes: "steps",// object property with value
                stud_info : function() { // object property and initilizing a function inside the key property
                                return this.names + "" + this.classes;// refernce of object and return the values of object 
                  
                }
            }
 console.log(evt.stud_info());// erosteps // call the object property with declared function and print the values of object

// Another Example of this object with arrow function...

let evts =  {  //declare a variable with object properties 
                names: "Min", // object properties with values
                classes: "Steps", //object properties with values
                stud_info : function() { //declare a function inside the key property
                   const use_this = () => {  //declare a arrow function inside the another function that depend on its parent function or object function.
                                return this.names + "" + this.classes; // return the object values with this reference object. 
                    }
                   return use_this(); // returns the arrow function
                }
            }
 console.log(evts.stud_info()); //MinSteps // call the evets object with its function property stud_info then own declared function.