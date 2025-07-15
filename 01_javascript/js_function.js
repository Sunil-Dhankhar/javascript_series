// @@@@@@@@@@@@   Functions   @@@@@@@@@@@@@@@@@

/* In JavaScript (and most other programming languages), a function is a block of code designed to perform a specific task. Functions are reusable — you can define a function once and call it multiple times throughout your program, which promotes code reusability and reduces repetition.

A function may take parameters (also called arguments) to produce dynamic results based on the input values. Functions help keep code organized, modular, and easier to debug. They also improve performance by reducing redundancy and avoiding unnecessarily long scripts.

Using functions makes your code cleaner, more maintainable, and more efficient — especially in large applications.

*/
// A small Example of function 

function fun1(){ // declare a function here with name fun1
    console.log("Welcome to the EroSteps Pvt. ltd"); //run the internal script when function is called// here print a msg when function is called
} // function end

fun1(); // call the function

// @@@  The Function() Constructor  @@@@

// Functions can also be defined with a built-in JavaScript function constructor called Function().
// in simple terms, this is a inbuilt feature of javascript that create a new dynamic function that takes body of the function and arguments all are in form of String and permorm it.

        // an example of  Function() constructor
        const myfun1 = new Function("return 'How\\'s the Josh'"); // returns How's the Josh.
        const myfun = new Function( "a", "b" , "return a * b"); // declare a new function as object called as function() constructor and execute the internal written script. here this function received two arguments and then after thay multiply with each other and after that return the result.
        console.log(myfun1()); // calling the function and got result as string from return// How's the Josh 
        console.log(typeof myfun); // returns the type of its as a Function.
        console.log(myfun(15,25)); // 375 //here we call the function and pass the arguments or param or parameters and after we received the result according to the function script


//  @@@@@@   Function Hoisting   @@@@@@

// Function hoisting is a feature in JavaScript that allows you to call a function before it is defined in the code.
//  During the compilation phase, function declarations are moved (or "hoisted") to the top of their scope.

// Example:

console.log(Callit(a = 45, b = 105)); // Output: 150 — calling the function before it's defined

function Callit(x, y) // Function is defined after it's called
{
    return x + y; // Returns the sum of both arguments
} // End of the function


// @@@@@@@@@@  javascript Self-Invoking Functions @@@@@@@@@@@

// the javascript Self-Invoking Functions are those function that not need to differnt call statement for execute the script.'
// the self- invoked function are call itself automatically.
// the self invoked function is denoted in last with (), for call itself.
// A self-invoking expression is invoked (started) automatically, without being called.

// @@@@@@@@@@@@@@ Function Rest Parameter @@@@@@@@@@@@@@@@@

// parameters are known as arguments that is passed to function when it call..parameters are maybe string, number array , object etc.
// rest parameter is a that parameter have multiple values like array..in state forword word you say that its a real array

function fun2(...arg)
{
    let sum = 0;
    for(let x of arg )
    {
        sum += x;
    } return sum;
}
let vals = fun2(1,2,3,4,5,6,7,8);
console.log(vals)

// @@@@@@  JavaScript Function Invocation @@@@@@

// a function is not excute when it define, it  execute when its called and the calling technique is known as invoked or invoked function.

// a normal function  is known as javascript invoking function which define and call the function..


// @@@@@@@@  window.fun_name(arguments); @@@@@@@@@@@

    // This is a feature of JavaScript: you can make a function globally accessible.
    // When a function is defined in the global scope, it becomes a part of the 'window' object in the browser.
    // By using 'window.myFun()', you can call the function globally from anywhere in the window context.

    /* for example =>
        function myFun(a,b){
            return a+b;
        }
            console.log(myFun(10 + 20)); // 30 — It returns the sum of both arguments.
            console.log(window.myFun(10 + 20)); // This works the same, as 'myFun' is globally attached to the window object.   
           
        */
    // this works in windows browser and html but when you use in node.js then this is not compatible with this. so you identically write in node in below written format

    global.myfun = function(a,b){ // creating a global function for javascript that work as globally
            return a*b; // returns the result after multiplication
    }
    console.log(global.myfun(15,15)); // call the global function 
    console.log(myfun(15,15)); //this is calling like this also in simplest way

    // function as object with example
 
         let vari = { //declare a variable as an object
                name : "sumit jhattha", // object Properties
                prof : "enginer", // object Properties
                occu : "salaried employee", // object Properties
                detail: function(sandy) // object Properties with declaration of a function inside the object property
                { // start a functional scope 
                    let n = "" ;
                    n = (sandy == undefined || sandy == "")? this.name : sandy;
                    let x = n +" is a "+ this.occu; // return object properties with this reference variable.
                   return  x;//.name+" is a "+ this.occu; // return object properties with this reference variable.
                } // end of functional scope
            }

          console.log(vari.detail("sandeep marwaha")); // print the object values related with property defined function as a output.
          console.log(vari.detail()); // print the object values related with its internal declared function
          console.log(vari); // print the all object values

// An example of invoking a function with the constructor

        function myfun2(xyz, abc) {
            // Declare a function with two arguments

            let x = "";
            this.name = xyz; // Assign the first argument to a property 'name' of the constructed object
            this.prof = abc; // Assign the second argument to a property 'prof' of the constructed object
            return x = this.name + " " + this.prof; // Returns a string combining name and profession
        }

        let brk = new myfun2("Jorawar Singh", "Electrical Engineer"); 
        // Create a new object using the 'myfun2' constructor, passing values dynamically

        console.log(brk.name, brk.prof); 
        // Print the values of 'name' and 'prof' properties of the created object

        console.log(myfun2("Guru", "Randhawa")); 
        // Call the function without 'new'. This will return the combined string but not create an object

// @@@@@@ Method Reuse @@@@@@

// With the call() method, you can invoke a function with a specific 'this' value.
// The call() method is a predefined JavaScript method used to call a function 
// with an object as its context (i.e., setting the 'this' keyword inside the function).
// It allows you to use a method from one object on another object.
// The call() method can be used to share methods between multiple objects
// by explicitly setting the 'this' reference to a desired object.
let person = { // Declare an object named 'person'
    detail: function() { // Define a method called 'detail' inside the object
        return this.name + " is a " + this.prof; // Return a string using properties from the current context (this)
    } // End of method scope
}

let person1 = { // Declare a new object 'person1'
    name: "Sudhir Gulia", // Define a property 'name' with a string value
    prof: "Advocate" // Define a property 'prof' with a string value
} // End of object scope

let person2 = { // Declare another object 'person2'
    name: "Nikhil Chauhan", // Define a property 'name' with a string value
    prof: "Medical Representative" // Define a property 'prof' with a string value
} // End of object scope

console.log(person.detail.call(person1)); // Call the 'detail' method with 'person1' as 'this'
console.log(person.detail.call(person2)); // Call the 'detail' method with 'person2' as 'this'

console.log(person.detail.apply(person2)); // Call the 'detail' method using apply(), passing 'person2' as 'this'
console.log(person.detail.apply(person1)); // Call the 'detail' method using apply(), passing 'person1' as 'this'

// Using bind() to create new functions with permanently bound 'this' values
let boundDetail1 = person.detail.bind(person1); // Create a bound function where 'this' refers to 'person1'
let boundDetail2 = person.detail.bind(person2); // Create a bound function where 'this' refers to 'person2'

console.log(boundDetail1()); // Output: "Sudhir Gulia is a Advocate"
console.log(boundDetail2()); // Output: "Nikhil Chauhan is a Medical Representative"

