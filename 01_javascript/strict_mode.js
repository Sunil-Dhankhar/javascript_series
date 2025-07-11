/* ******************** JavaScript Use Strict ************************* */

// "use strict"; Defines that JavaScript code should be executed in "strict mode".

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// For Example => With Strict Mode, you can not use undeclared variables.You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.


// @@@@@@@@@@@   Declaring Strict Mode   @@@@@@@@@@@@@@

// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode)
// we use various scope for various example for understand the casses related with use strict but you assume these are on global bases not on block scope bases. i will also mention on
// that each scope assume like global or block or functional 

 /* // assume it as global scope 
    "use strict";
    xy = 55; // This will cause an error because xy variable is not declared
*/

/*// // assume this is  global scope
    "use strict";
    myfunction();//function is called before its declared called hoist feature of javascript and run..

    function myfunction(){//function is declared
        yt = 60; // This will cause an error because yt is not declared and strict mode applied as globally
    }
*/

/* // treat as functional scope
    xp = "windows xp";       // This will not cause an error.
    myanotherFunction();

    function myanotherFunction() { //declare a new function as a hoist function
        "use strict"; // strict mode declared in function and this mode is applicable only inthis function block and its not affected outside the function.
        vista = "windows vista";   // This will cause an error, because the vista variable not declared, so in strict mode you cant use variable without use.
    }
*/

//i have investigate the strict mode here with or without the scope and found that whan i applied it into the block scope then it not work and javascript and node compiler ignore this.. but when i applied outside the block then it fully working.
// so in study with examples i understand that the strict mode not working in local block...its support as global or inside the function..
// a diagram i have mentioned a diagram in below for understand that where strict mode work and where not.

 /* 
    +-----------------------------------------+
    |           JavaScript Contexts           |
    +----------------------+------------------+
    |   Context Type       |  "use strict"    |
    |----------------------+------------------|
    | Block Scope ({})     | ❌ Does NOT work |
    | Global Scope (file)  | ✅ Works         |
    | Function Scope       | ✅ Works         |
    | Eval Code            | ✅ Works         |
    | ES6 Module (default) | ✅ Always strict |
    | Class Body           | ✅ Always strict |
    +----------------------+------------------+
*/



/*  // variable x (object) is not defined or declared.
    "use strict";
    x = {p1:10, p2:20};   //without declare an object are also not allowed in strict mode
*/


/* //Delete of an unqualified identifier in strict mode.
    "use strict";
    let xp = 3.14; // declare variable 
    delete xp;   // This will cause an error because delete a variable in strict mode is prohibted and not allowed.
 */

/* //Delete of an unqualified identifier in strict mode.
    "use strict";
    function funx(p1, p2) {};
    delete funx; // This will cause an error because delete a function in strict mode is also prohibted and not allowed.     
 */

/* // Duplicate parameter name not allowed in this context
    "use strict";
    function x(p1, p1) {};   // This will cause an error because here we create a duplicate argument in function and in the strict mode this is not alowed
*/

/* // Octal literals are not allowed in strict mode. (0-7 or 8 bit are octal numbers)
    "use strict";
    let x = [010,0100,01000]; // octal Numbers are not allowed in strict mode
    let y = 010; // Octal numbers not allowed in strict mode
    let z = 10;
 */

/*  Octal escape characters are not allowed:  Octal escape sequences are not allowed in strict mode. 
    "use strict";
    let x = "\010";  // This will cause an error, because x variable have a escaped octal number and in strict mode they are not allowed.
*/

    //Writing to a read-only property is not allowed:
/* 
    // Cannot assign to read only property variable('x') of object 
    "use strict";
    const obj = {}; // declare a variable that have an object value with empty property 
    Object.defineProperty(obj, "x", {value:0, writable:false}); // define new property and assign value to property as 0 and after that make it only readable, that cant be modified. 
    obj.x = 3.14;  //This will cause Error because the strict mode is on and the object writable property is false and javascript rule says that only readonly property not allowed in strict mode
    console.log(obj.x); print the object property value.. without strict mode it print 0 and cannot update value with 3.14 because its only readable not writable 
*/

/* // The word eval cannot be used as a variable:

    "use strict";
    let eval = 3.14;  // This will cause an error, because eval keyword is belongs to a javascript predefined function and javascript strict mode cant provide permission to use this keyword as variable.
*/

/* // The word arguments cannot be used as a variable:

    "use strict";
    let arguments = 3.14;    // This will cause an error, because arguments is also a reserved keyword and strict mode cant provide permission to use this keyword in your script, specially when strict mode is Active. 
*/

/* // The with statement is not allowed:

    "use strict";
    with (Math){x = cos(2)}; // This will cause an error,because with is also a Reserved methode or keyword and strict mode cant provide the permission to user for use this keyword into the script.
*/
/*  // For security reasons, eval() is not allowed to create variables in the scope from which it was called.
    // In strict mode, a variable can not be used before it is declared:

    "use strict";
    eval ("x = 2"); // assigning a undefined variable in eval function. but strict mode not provide the permission specially undeclared variable that use the undeclared variable 
    alert (x);      // This will cause an error, because x variable is undeclared yet and strict mode rule is say that before declare a variable you cant use this 
*/

 /* // In strict mode, eval() can not declare a variable using the var keyword:

    "use strict";
    eval ("var x = 2"); // declaring the var variable inside eval function. but eval function have own local scope and if you have defined a variable inside the eval function then you cant use that variable from outside the eval function
                        //  or if you want to access that variable outside from the eval function then you must declare it before eval function, then you use that variable easly.  
    console.log(x);    // This will cause an error, because x variable is undefined here and where it defined that have local scope so out side from the local scope you cant access that variable.

        Global Scope (Strict Mode)
    │
    ├── eval("var x = 2")
    │     └── x is defined HERE (inside eval's local scope)
    │
    └── console.log(x) ❌ Error: x is not defined outside eval
*/  

/* eval() can not declare a variable using the let keyword:

    eval ("let x = 2"); or eval ("const x = 2");  // declaring variable as let or const keywords but they both have local scope, here not matter strict mode applied or not..they have block scope and outside the block scope we cant access it
    alert (x);          // This will cause an error because  let and const keywords belongs to block scope property and if declared into the block scope then from out side the block scope javascript not allowed to access them.. its against the rule.
                        //  and eval function have own local scope
*/

/*  // The this keyword in functions behaves differently in strict mode.
    // The this keyword refers to the object that called the function.
    // If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):

    "use strict";
    function myFunction() {
    console.log(this); // will print "undefined" because no one object is declared and in strict mode if object is not defined then it not to be convert as global object, its convert into undefined and its datatype is also as undefined 
    }
    //   myFunction(); //without define the object 
    //   myFunction.call({name:"Virat Kohli"}); // with define the object // with this it pass the object proerties along with values..and inside that function user can use it accordingly requirement.  
*/

/* @@@@@@@@@@@@ Future Proof!  @@@@@@@@@@@@@@@@@
    
    Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

    These are Reserved keyword that you cant use inside the strict mode as a variable:

        implements
        interface
        let
        package
        private
        protected
        public
        static
        yield

    "use strict";
    let public = 1500;  // This will cause a SyntaxError: Unexpected strict mode reserved word
                        // Reason: You've used a JavaScript **reserved keyword** as a variable name.
                        // In strict mode, this is not allowed because:
                        // It creates confusion for the JavaScript engine — whether to treat it as a variable or a keyword.
                        // Reserved words have special meaning in JavaScript (like `let`, `class`, `package`, etc.).
                        // Strict mode strictly prevents the use of such reserved keywords as variable names to avoid conflicts and unexpected behavior.


*/


/* @@@@@@@@@@@@@@@@@@@@@@@ JavaScript this Keyword  @@@@@@@@@@@@@@@@@@@@@@@

    What is this?

    In JavaScript, the this keyword refers to an object.
    The this keyword refers to different objects depending on how it is used:

    Like :-
    // In an object method, this refers to the object.
    // Alone, this refers to the global object.
    // In a function, this refers to the global object.
    // In a function, in strict mode, this is undefined.
    // In an event, this refers to the element that received the event.
    // Methods like call(), apply(), and bind() can refer this to any object.


*/
 // An Example with an object

 const person = {
                firstName: "John", // declare a new property as a string and add a value
                lastName: "Doe", // declare a new property as a string and add a value
                id: 5566,//declare a property as id with numaric data type
                fullName : function() { // declare a function inside a object
                    return this.firstName + " " + this.lastName; // this keyword refere to the object and its value with help of object keys
                }
};

console.log(person.fullName()); // print the object properties values that is refered by this keyword inside the fullName function

//an Example with create as global object or Alone object 

let names = this;//declare a new variable with this object property that is null 

console.log(names); // print the declare variable as object and here this kewword is known as global object because its declared as globally

// an Example with strict mode 

    function myfunc()// declare a function 
    {
        "use strict"; //strict mode is ON under or inside the functional scope means the strict mode affect only this function
        //console.log(this);
        //return this.toUpperCase();
        return  this; //return undefined because this keyword is alone and not refere to any object so technically we say that alone this object converts to global object and its type converts into undefined
    }
    //console.log(myfunc.apply("virat kohli"));
    console.log(myfunc()); // undefined 

// this keyword with in the function 
function myFunct() { //declare the function
    return this;  //return this object value if this refer to any object other wise it become a global object
}
console.log(myFunct()); // print the internal script result on execute the function internal script

//Event handler with this keyword

//let glob = <button onclick="this.style.color='red'; this.style.fontSize='24px';">Click Me</button> // with this example on a button click a function is run and handel events like change color and change font size


// object method binding

//object binding is most important concept of the javascript that whan a object declared and inside the object properties a function is declare and in that function this keyword refers that full object and its property when this function call..called as object binding

const student = { //declare a varibale as an object
  firstName  : "John",//define or assign the values to object properties
  lastName   : "Doe",// assign value to object property
  id     : 5566, // assign value to object property
  myfuns : function()//define a new function inside the 
  {
    return this.firstName + " " + this.lastName+ " " + this.id; // bind the object with its refered object properties and returns the this object with refered object property and values

  }, //end function
  myFunction : function() { // new function declared inside the object proerty
    let st = "how the josh";//define a new variable as a string
    this.josh = st;//declared variable converts as a current object property
    return this;// returns full object with this keyword as a reference
  },// close this function

};

console.log(student.myfuns());//print the first declared function including itd object refernce or object properties or object values
console.log(student.myFunction());// print the second mentiond function with its object properties and values.


// Explicit Function Binding method
    // that  binding method that forcefully set a value to object ... with help of call(),apply(),bind() methods that refers function objects directly

// a basic example of this method relaed with explicit binding method

    console.log(myfun.call("virat kohli")); //calling the myfun forcfully with call() function and forcefully set viratkohli value into its reference varible known as this.
    function myfun()//declaring the function 
    {
        return this.toUpperCase();// this variable getting the value from calling method and then convert it into upper case and then retun the value to callback function
    }
// one another example of explicit function binding method

    const person1 = {// declaring the object with variable name person1
        fullName: function() {//declaring the property and then embedding a function inside it.
            return this.firstName + " " + this.lastName; // return the reffence value of the object..means this keyword accessing the refered object values or properties and then return to the calling method or function
        }// close or end of function
    }

    const person2 = { // declaring the object with variable name person2
    firstName:"John", // declaring object properties with string value
    lastName: "Smith", // declaring object properties with string value
    }

    let xg = person1.fullName.call(person2); // initlizing the xg variable and then getting the all values of object function called as object explicit function binding system that call the object with method forcfully

    console.log(xg); // print the object proprties that are stored in this variable

    // in this example you see what happend, lets explain that we create a object and then create a function inside the object property and then return this object with another object properties that are refered by another function by forcfully
    // after that you see another object is created and this object have ony properties and values 
    // after that we see first object with its internal function call the 2nd object forcefully with help of call method...person1.fullName.call(person2); this call object 2 properties inside the object 1 forcfully with refernce object this.
    // now in last we print the object properties that are stored in the xg variables.

//  Function Borrowing or Borrow method

     const person3 = {// declaring the object with variable name person3
        firstName:"Virat", // declaring object properties with string value
        lastName: "Kohli", // declaring object properties with string value
        fullName: function() {//declaring the property and then embedding a function inside it.
            return this.firstName + " " + this.lastName; // return the reffence value of the object..means this keyword accessing the refered object values or properties and then return to the calling method or function
        }// close or end of function
    }

    const person4 = { // declaring the object with variable name person4
    firstName:"Rohit", // declaring object properties with string value
    lastName: "Sharma", // declaring object properties with string value
    }

    let xn = person3.fullName.bind(person4);
    // This line creates a new function 'xn' by binding 'fullName' method of 'person3' to 'person4'.
    // This is called explicit function binding, where the method is bound to a specific object 
    // so that 'this' inside the function refers to 'person4' when the function is called.

    console.log(person3.fullName.bind(person4)());  
    // Calls the 'fullName' method of 'person3' with 'person4' explicitly bound as 'this',
    // and immediately invokes it to print the properties of 'person4'.

    // Alternative version using a stored reference:
    console.log(xn());  
    // Calls the bound function 'xn', which was previously bound to 'person4',
    // and prints the properties of 'person4' using the 'fullName' method.


    /* 
                    This Precedence
            To determine which object this refers to; use the following precedence of order.

            Precedence	Object
            1	bind()
            2	apply() and call()
            3	Object method
            4	Global scope
            Is this in a function being called using bind()?

            Is this in a function being called using apply()?

            Is this in a function being called using call()?

            Is this in an object function (method)?

            Is this in a function in the global scope.
            
    */


















