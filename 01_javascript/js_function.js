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



// @@@@@@@@@@@@@@@ callback function @@@@@@@@@@@@@@@@@@@@@@@@

// callback function, where one function has to wait for another function (like waiting for a file to load). known as callback function.
// simple function is  more easy as per callback function,but simple function is more lengthy if multiple condition exist, then you create differnt differnt condition or functions for each condition..
// here is major differnce between call back function and regular function.
// in callback function you, create a function for just 1 time and call it according to your condition as per requirement, with jsut a small modification in calling method and you got result 

// i have mentioned multiple example of it.

const myNumbers = [4, 1, -20, -7, 5, 9, -6]; // declare a array  with values

//  @@@@@@@@@@@@@@@@@@   with call back function 

let mynums = removeNeg(myNumbers, (x) => x >=0); // declare  a callback function (arrow function) inside the removeNeg function that means after call the removeNeg function call it call the callback function and check condition.  
console.log(mynums); // print the result of positive numbers that is filtered by callback function.

let news = removeNeg(myNumbers, (x) => x <=0);// call back function inside the main function.
console.log(news); //print negetive number

news1 = removeNeg(myNumbers, (x) => x % 2 == 0);// call back function inside the main function, who devision by 2 
console.log(news1); //print divisible by 2 numbers

function removeNeg(numbers, callback){  // with call back function
    const post = []; // declare a new array for positive number
    const neg = []; // declare a new array for negtive number
    for(const y of numbers) // start a for of loop start
    {   
       if(callback(y)) // check the value is negtive or positive. if value positive then return true else false
        {
            post.push(y);// insert the positive value into post array
        }
        else{
            neg.push(y);// insert the negtive value into neg array
        } 
    }
    return post; // return post array
    //return neg;
    
}

// @@@@@@@@@@@@@@@ without call back function
// simple but not reuseble for every condition..this works for one condition.. if we convert it as per multiple condition then it become to lengthy because each condition if fill inthe function and then check it again and again when it call..
//when it become lengthy then its working to slow as compare to callback function..
 
console.log(removeNegNum(myNumbers )); // call the regular function by passing the arguments as array values.

function removeNegNum(numbers) {// without call back function get negtive and positve number sepratly
    const post = []; // declare a new array for positive number
    const neg = []; //declare a new array for negtive number
    
    for(const y of numbers) // start a for loop for each element of array
    {    (y > 0)? post.push(y):neg.push(y); // check value positive or negtive if positive then put into post array else in negtive arr
    }
    
    return post;
    //return neg;
}
// here you see we get only positive numbers if we requires also negtive numbers then in regular function we call this function with different name and return the neg array from this script..its become to lengthy one by one for each condition
// above mentioned call back function section we define various example for get positive , negtive, divisibal by 2 numbers examples with just a littel changes in calling method and function is still same for each condition, just change calling method and got result according to calling method.

// #############          Asynchronous JavaScript    ##############

// that method of javascript that take time for execution, they not execute immediatly after preseted time called Asybchronous method.
// a simple and basic example of this is written in below

setTimeout(myFunctions, 3000); // this is working  in also node js environment // call the function after 3 seconds

function myFunctions() // declare a function
{
    console.log("Erosteps Pvt Ltd.");// print the string into console panel.
}

// another example of this method

console.log("start"); //print the string  when file is load

setTimeout(() => { //print the string after call the callback function in 3 seconds when the file is load
    console.log("Welcome to the Erosteps Pvt. ltd");
},3000); // this call the function once after the given time 

console.log("end");// print the string immidiatly when file is load


// another example of this method for a clock 

//setInterval(myfuns, 1000); // this is another method of javascript , this is used for call the function again and again after given time 

function myfuns() // declare the function
{
    const dats = new Date(); // declare the date object
    let vars = dats.getHours()+" : "+dats.getMinutes()+" : "+dats.getSeconds(); // create a string with concatinate the multiple objects values and add this into the new declared variable
    console.log( vars); // type of String // print the string value. (Digital clock ) // if run then it keep busy to terminal..by call the function again and again
}


// ##############   Javascript Promise Functions   ###################

// Another type of asynchronous function in JavaScript is the Promise function.
// A Promise is an object that allows you to delay the execution of a function, such as running it after a given time (e.g., 2 or 3 seconds).
// The Promise object represents the eventual completion (success) or failure (error) of an asynchronous operation.
// It is commonly used for tasks like fetching data or making API calls etc.
// A Promise has three states: Pending -> Fulfilled (Success) -> Rejected (Error).
// The Promise object holds the result of the operation (either success data or an error).
// After creating a Promise object, you can handle its result using the .then() and .catch() methods.
// If the Promise is fulfilled, the .then() method is called with the result.
// If the Promise is rejected, the .catch() method is called with the error.

// for example :->
    let names = "Khan"; // Declare a string variable with a string value.
    let nami = ""; // Declare an empty string variable.

    function meybe(names, times) { // Declare a function with arguments.
        return new Promise(function(resolve, reject) { // Create a Promise object with an internal function that takes two arguments: resolve and reject.
            setTimeout(() => { // Create an arrow function used as a callback, with a time delay.
                if (names != "") { // Check the condition: if the argument is not an empty string, then execute the block.
                    resolve("My name is " + names + " and I am a Teacher."); // Pass a success message to the resolve function.
                } else { // If the argument is an empty string, execute this block.
                    reject("Something went wrong."); // Pass an error message to the reject function.
                }
            }, times); // Execute this callback function after 4 seconds (4000 milliseconds).
        }); // End of the Promise object and its internal function.
    } // End of the main function.

    meybe(names,tm = 3500) //call the function with passing the arguments ( first belongs to name and another is belongs to the time in miliseconds)
    .then(data => console.log(data)) // Print the success message if the Promise is resolved.
    .catch(err => console.log(err)); // Print the error message if the Promise is rejected.

    meybe(nami, tm = 3900) //call the function with passing the arguments ( first belongs to name and another is belongs to the time in miliseconds)
    .then(data => console.log(data)) // Print the success message if the Promise is resolved.
    .catch(err => console.log(err)); // Print the error message if the Promise is rejected.

// @@@@@@@@@@@ JavaScript Async  @@@@@@@@@@@@@@@@

// `async` is a powerful JavaScript keyword that helps you write asynchronous code in a cleaner and more readable way.
// It allows you to create delayed or non-blocking functions without using callbacks, .then(), or .catch() directly.
// It is useful when you want to pause execution until the result of an asynchronous operation is received — like API calls, file reads, database access, or setTimeout delays.
// An `async` function always returns a Promise, even if you return a simple value.
// Inside an `async` function, you can use the `await` keyword to pause the function until a Promise is resolved or rejected.
// `await` can only be used inside an `async` function; using it outside will cause a syntax error.
// You can also use `try...catch` inside async functions for better error handling instead of chaining .catch().

// ann Example of Async function :=>

 async function calls() {
    // Define an asynchronous function to call the 'meybe' function.

    console.log("⏳ Please wait... " + names +" Sir"); // Inform the user that the process is starting.

    try {
        // Use try/catch to handle potential errors from the async function.

        const firsts = await meybe(names, 4500); // Await the first promise with valid input.
        console.log(firsts); // Log the successful result.

        const second = await meybe(nami, 4000); // Await the second promise which should fail.
        console.log(firsts, second); // If the second call somehow succeeds, log both results.

    } catch (error) {
        // Catch any rejected promises and log the error message.
        console.log(error);
    }
}

calls(); // Invoke the async function to run the code.