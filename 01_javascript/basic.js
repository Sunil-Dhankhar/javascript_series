    // Variables are Containers for Storing Data
    // JavaScript Variables can be declared in 4 ways:
    //{
    // Automatically
    // Using var
    // Using let
    // Using const
    // }
    // Variables declared with let have Block Scope
    // Variables declared with let must be Declared before use
    // Variables declared with let cannot be Redeclared in the same scope

    // Variables defined with const cannot be Redeclared
    // Variables defined with const cannot be Reassigned
    // Variables defined with const have Block Scope

    // Javascript Operators
    // The Assignment Operator = assigns values
    // The Addition Operator + adds values
    // The Multiplication Operator * multiplies values
    // The Comparison Operator > compares values
    
    // JavaScript Data Types
    // # call by value Datatypes :-
    // String
    // Number
    // Bigint
    // Boolean
    // Undefined
    // Null
    // Symbol
    // # Call by Referance Datatypes
    // Object
    // Built-in object types can be:
    // objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.


   

    
    const accountID = "123456";
    name = "";// name is declared as null property
    if(!name) // check name is recived as null...if null then condition is true 
    {
        var name = "John David"; // initilize new modren variable name store name value / property temparary
        var city = "New York City" // initilize new varible with old var variable city having city value / property temprary
        console.log(name); //print the variable property with its value
    }
    if(city)
    {
    console.log(city); // print the variable property with its value
    var city = "Maxico"; // reassign or reinitilize city ( var ) variable with new value that overwrite its old value if exist
    console.log(city); //print again varible with its value
    let name = "David Williams"; // initilize new varible with its value
    console.log(name); // print variable with its value that user have provide
    console.log(accountID)
    }
/* comman Arithmatic Operations */
    let x = "100";
    let y = "10";
    let e = 5;
    let d = 45;

    let z = x / y;  // Works → 10
    let a = x * y;  // Works → 1000
    let b = x - y;  // Works → 90
    let c = x + y + d + e;  // Not as expected → "10010455"


    console.log(z + "  " + a + "  " + b + "  " + c);

/*  NOTATION :- Above written in this script we investigate that the var property scope is wide but this is not trustable.. becouse it 
                Overrite the its old value with new value and create conflict during exicution.. 
                            suppose if we have more then 2 or more file having same varible then it overwriting its value and distroye the working of script..
                in modren javascript, we have a new type of varible known as LET / let. this is not overwrite the variable, once it initilize and we assign a value to it,
                then we cant assign this new value in that scope till scope not end... its working in only Block scope..out side the block scope it not working 
                
                in this script we see in first if scope we have delare let name as with a value, and its working in this scope if i declare the same name with same varible type 
                out side the scope so it not allowed to reassign the varible again becouse its already declared, 
                        but when i tried to redclare with same name same variable type with differnt value in new scope, then it allow it to reassigne the variable  with new or same value,
                because its have a different block scope or new block scope, and its access is only in this scope, if we want to assigne  againe same varible with new value then we use it only
                in new Block Scope. 

                and one more thing Once const variable declared this cant change....in scope, out the scope it not modified...its special varible type that cant change if declared.

                now we see here that in artihmatic opration every numaric operator behaviour is changed, when it try divison, multipication, subtraction with two string have numaric value,
                performing numaric  operation very well, but when it try to sum it then the behaviour of method is changed.
                   thats happened becouse in javascript (+) operator is performing two type of jobs like sum and concatinate,
                   .1 =>    if it found both values in Numaric then it provide sum of both values.
                   .2 =>    if it found both values as String then it concatinate the both values like as a one string.
                   .3 =>    suppose one value is numaric and one value of it have string then it concatinate the both values, not provide the some, 
                            for sum this required each value is numaric, not a string. 

                Thanks for visit here..

*/ 


/* javascript objects  */

/* Notation about objects :- in javascript if we found values in {---} that means this is javascript object. */
 // we initilizing an object student with keys and its values...
let student = { name : "Rohanpreet", 
                class : "BA",
                rollNo : 123456,
                institution : "DAV IT Collage"
};

let t = student;//here we create a mirror of student object that is refrence of student object..with the help of referance variable we make changes into the object values according to the its object keyes outside the object. 
t.class = "PHD";// here we change the student class value outside the object
console.log(student["class"]); // this method is used to print the object value like student class; 
console.log(student["name"]);//this method is used to get specific value of an object
console.log( student.class);//this method is also used to get specific value of an object .. both method provide same output...written type is different but working is same

/* ---------  Comman operations ------*/


let p = 123;
let g = "'"+p+"'";

console.log(typeof g);
console.log(g);
console.log(typeof p.toString());
console.log(p.toString());


/* 
/////////// Operator Precedence ///////////// 
     
    // when you have multiple operator in a condition then which operator perform or run first and which operator is run after that and so on...this is all decided by Operator Precedence.
    // suppose   you have a basic condition like 25 + 75 * 3 = ? now here question is arrais that whic operator perform first + or *, 
    // in this example we know that * operator have Higher Precedence  or priorty on + operator so firstly run the condition like 75 *3 = 225 then 225 + 25 = 250
    // one thing is important if this condition is like (25 + 75) * 3 = ? this then its output definatly changed becouse now higher Precedence have () Parentheses  and inside the () code or script run first then after 2nd higher priorty operator perform the operation
    // like (25 + 75) * 3 = 300 how lets see (25 + 75) = 100 * 3  = 300;
    // like 100 / 50 * 3 = ? lets see 100 / 50 = 2 * 3 = 6


    Precedence Rank	        Operator(s)	        Description 
        (Priority)
       
        1 (Highest)	            ()	            Parentheses — Parentheses are evaluated first.
        2	                    . []            ()	Property access, array index, function call
        3	                    new	            Object // for create a new object
        4	                    ++ --	        Post increment/decrement
        5	                ! + - typeof	    Unary operators, NOT, type check, etc.
        6	                    **	            Exponentiation (2 ** 3 = 8)
        7	                    * / %	        Multiply, divide, modulus
        8	                    + -	            Addition, subtraction
        9	                 << >> >>>	        Bitwise shift
        10	                 < > <= >=	        Comparison operators
        11	                == != === !==	    Equality check
        12	                    &	            Bitwise AND
        13	                    ^	            Bitwise XOR
        14	                `   	`
        15	                    &&	            Logical AND
        16	                    `	
        17	                    ? :	            Ternary operator
        18	                = += -= etc.	    Assignment operators
        19 (Lowest)	            ,	            Comma operator — multiple expressions together
*/

/* #####################  JavaScript Scope  ########################## 

    The javascript have three types of Scope 
    1. Global Scope
    2. Functional Scope (Local Scope)
    3. Block Scope

    Block Scope { ----- } => inside defined variables into the block have access inside block only. you cant use or access inside defind variables from outside the block   (let , const)
    Functional Scope : function  function_name(argument if have){-----} => inside the function scope defind variable also have access only inside the function. you cant access those variable from outside the function  
    Global Scope : global scope is always global and access from any where like inside or outside the block or functional scope.. but condition is that it declare as global 
                    Variables declared Globally (outside any function) have Global Scope.

    ***** Automatically Global ***
    If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
    const, let, var  name = ""; // this is global variable ...outside the blocks and access anywhere inside the file known as global variable or global scope variable
    { //this is block
    </> // access name variable here according to the requirement
        ---------------------------
        -------------
        -------------------------
      </>
    }
    here is an important example that remove your confusion related global scope or variable that would be undefined...then that variable known as which type or category.     
*/

// +++++++++++++++ Global Scope ++++++++++++++++++++
{ //start block
    names = "google.com"; //add value into the undefined variable 
}//close  block
{
    console.log(names); // global variable //print the undefined variable value, technically its not declared any where so we access this variable any where like this example into another block because its a global variable
}

let stud = "Ravinder"; //global varible defined outside from the block spaces 
{ //start a block
    console.log(stud.toUpperCase()); //print the accessed global variable inside the block scope
} //end of block
function glob(){ // declare the function and starting functional scope
    console.log(stud.toLowerCase());  //print the accessed global variable inside the functional block scope 
}//end of functional scope
glob(); // calling declared function


// ++++++++++++++++++++++++++  Block Scope  +++++++++++++++++++++++++

{//start a block scope
    let site = "google.com"; //declare and define a variable with a string value , if i would change this declaration key/keyword from let to var,then it treat as global variable like access inside or outside the block and also redefine the value again or modify the value as per requirement, but let and const not do like var.
    console.log(site); //print the defined variable value
 }// end of block scope

 //****  console.log(site); //print the block inside defined variable...// but there is getting an error like undefined variable

 function block() //declare or define the new function
 { //start functional scope
//****  console.log(site); //print the block inside defined variable...// but there is getting an error like undefined variable
 } // end of functional scope

 block(); //call the function for run the internal script 

 // **********************  functional Scope  ************************

 function scope(){ // Declare a New Function and Start the functional scope

    let superHeros  = ["Superman","Batman"];
    console.log([...superHeros]);
 }
 scope(); // call the function for run or execute the script that written inside the functional scope related with this function

 { //start the block scope
  //*****  console.log([...superHeros]); // want to print the functional defined variable, that defined inside the function, but getting error like superHeros (variable name) is not Defined
 }//end of block scope

 //******* console.log([...superHeros]);// want to print globally the functional defined variable, that defined inside the function, but getting error like superHeros (variable name) is not Defined





 /* @@@@@@@@@@@@@@@@@   JavaScript Hoisting   @@@@@@@@@@@@@@@@@@@
 
    Hoisting is JavaScript's default behavior of moving declarations to the top. In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.

    in simple terms var variable and  a function  is hoist before it declare  and stroed into the allocated memory of compiler.
    a function is store with its name and the body of the function.
    and a variable is  reserv the memory that allocated by the compiler but run time it returns output as undefined.
    
    in case  of let and const, you cant use or access these variable before its initialize or declare them. they both provide ReferenceError
 */ 
hoisted(); // run or execute function smoothly //call the function or Hoist the function before its declare
console.log(x1); // Undefined //print the variable or hoist the variable before its declare  

//console.log(x2);//cant print the value of x2 becouse the variable is not declared yet and you cant access this variable till its not declared befor its use
//console.log(x3);//cant print the value of x3 becouse the variable is not declared yet and you cant access this variable till its not declared befor its use
function hoisted(){ // initilizing or declaring the function
    console.log(" JavaScript Hoisting"); //print the matter inside console for testing purpose// script of the function that will be executed when function calling
} // end of the function
x1 = 45; // initilizing the variable value before declaring the variable
var x1; // declare the variable
//x2 = 90; // initilizing the variable value before declaring the variable // but not accessable because its undeclared yet
let x2; // declare the variable
const x3 = 60; // initilizing the variable value  with declaring the variable

// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.
// in simple terms we can say that the function and variable hoist are then possible when its not declared if they are already declared then hoist is not possible.
// requirement => it gives a freedome to user that you can run before the declare the variable  and the function. some time user write a code a by mistake before declare the variable or function so user can hoist thease function and varables


// some examples are 

var xt = 5; // Initialize xt with value
var yt = 7; // Initialize yt with value
console.log(xt + " " + yt); //5  7 // print the value of both //and these variable not hoist because they already declared and have value 


var xt = 5; // Initialize xt with value

console.log(xt + " " + yt); // 5  undefined // print the value of both variable and xt and yt both are hoisted. 
// because javascript treats variable as var xt; var yt; then xt =5; yt = 5; then hoist both variables 
yt = 7; // add a value to undefined variable 
var yt; // declare or initialize the variable.

