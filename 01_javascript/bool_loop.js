/* JavaScript Booleans */
// The Boolean Data Type
// In JavaScript, a Boolean is a primitive data type that can only have one of two values : true or false.
// The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.
        // {
            // true and false are boolean data types
            // true and false are the only possible boolean values
            // true and false must be written in lowercase
            // true and false must be written without quotes
        //}
// Boolean Use Cases
    // {
        // yes or no
        // on or off
        // true or false
    // }


    let x = 5; 
    console.log(x==10); // check or verify x is equal to 10 if equal then return true else return false as boolearn

    /* Conditional Statement  */
    
    if(x > 10) // if else boolearn condition that check x is large then 10 then permorm this scope functionality
    {
        msg = x+" is bigger"
    }
    else // other wise run this scope script functionality..
    {
        msg = x + " is smaller"
    }
    console.log(msg);// print the scope functioinality based on the condition

    /*          Basic Notataion about Boolean
        // Boolean value of 0 (zero) is false
        // Boolean value of -0 (minus zero) is false
        // Boolean value of "" (empty string) is false
        // Boolean value of undefined is false
        // Boolean value of null is false
        // Boolean value of false is (you guessed it) false
        // Boolean value of NaN is false
    */

    { // starting new scope for create variable different from other 
        const x = new Boolean(false); //initializeing a new boolean object 
        const y = new Boolean(false); //initializeing again a new boolean object 
        const z = x;
        console.log( (x==y)); //comparing with print the comparisone result // the result is false..
        console.log(( z == x)); //again compare the two variable with object // this time result is true.
        // x == y :- false
        // x == y or x === y :- false , both varibles have same datatypes but x and y are both different objects, and these have also a different referance. so in javascrept when we test or compare two object then it is must that both object referance is same for compare.
        // z == x :- true  , because z and x are have same referance and object..and javascript rule says when a reffernce and object of two or more varible is same then they are in true condition.so this is in true condition
    }
    

    /*                  Comparison Operators 

            // ==	equal to
            // ===	equal value and equal type
            // !=	not equal
            // !==	not equal value or not equal type
            // >	greater than
            // <	less than
            // >=	greater than or equal to
            // <=	less than or equal to
    */

    /*                  Logical Operators 
            
            &&	and	(x < 10 && y > 1) is true
            ||	or	(x == 5 || y == 5) is false
            !	not	!(x == y) is true
    */

    /*                  Conditional (Ternary) Operator
    
            variablename = (condition) ? (true value) : (false value)  
            this is short version of if else statement first write condition then if condition true send true value else null after ? 
            
            Syntax :- condition ? true value : false value 
    */

        function ternary_function(vals) //initializing a function for small example of ternary operator 
        {
            var value = Number(vals);
            // variant A :- small Version of if else statement with help of ternary operator
            var result  =  (value < 1 || isNaN(value) || value == null)? "Somthing Wrong !! Please Try Again " : (value < 18) ? " you are Not Eligible for Participate in Car Race " : "You are Eligible for Car Racing..Have A fun....Enjoy your Ride." ;
            console.log(result);

            // Variant B :- full version of if else statement with minimal use of ternary operator

            /* if(value < 1 || isNaN(value) || value == null)
            {
                var msg = "Somthing Wrong !! Please Try Again ";
            }
            else 
            {
                var x = " you are Not Eligible for Participate in Car Race ";
                var y = "You are Eligible for Car Racing..Have A fun....Enjoy your Ride.";
                var msg = (value < 18) ? x : y ;
            } */
             //console.log(msg);   
        }
        // both varient of ternary and if else are accurate for script writing... but when you dont need to write large/hughe or lengthy code in your script then you can use ternary operator. 
        ternary_function(25); // callback function with value;

    /*                  Nullish Coalescing Operator (??)
            The ?? operator returns the first argument if it is not nullish (null or undefined).
            Otherwise it returns the second argument.

            a small example written in below related with Nullish Coalescing Operator
    */

        function null_coal(){ // initializing the function for nullish coalescing operator
            let groundcolor = null //declaring variable with null value
            let watercolor; //declaring variable with undefined value
            let seacolor = "Sea-Green"; //declaring a variable with value 
            let skycolor;// = "Blue"; // declaring a variable with value
            let result =  watercolor ?? groundcolor ?? skycolor ?? seacolor; //verify which varible have value.. if first varible have value then it ignore all remaining variable else go to second and again check same procedure if found then print with ignore remaining elements alse move on till it get not a value from a element or variable ..
            console.log(result); // print result
        }        

        null_coal(); // callback function for nullish coalesing operator

    /*              Optional Chaining Operator (?.) 
            // the optional chaining operator(?.) returns undefinde value if object have not that value...or  if an object is undefined or null (instead of throwing an error).     
            // an example written in below related with this operator.
    */

        function chain_opt() // function related with optional chaining operator 
        {
            const student = { class : "BA", type: "Arts", Roll_no: 12456 }; // declare a variable as a object
            console.log(student ?. name); //  checking here that given element is exist in object or not .. if exist then print it else provide result as undefined
        }

        chain_opt(); // call back function for optional chaining operator.

        
        

    /* Loops */
    
    //while loop
    let text = "";
    let i = 1;
    while(i <= x) {
        text += i;
        i++;
    }
    console.log(text);

// conditional statement :-> if else statements 
// switch case :-> switch choose case according to the condition
// for loop :-> run the loop or condition till condition become false...Loops can execute a block of code a number of times.
// for In loop :-> this loop run till object value is found. this returnkeys when it an array is plac in this loop. basically it works on index keys. this is used for mainly objects and arrays.in this method you must be create a iterable of object and then run the loop while got properties
// for of loop :-> this loop run till array value or string value is found, this is used for mainly arrays and string and other data types,but not directly on objects.in this method you must be create a iterable of object and then run the loop while got properties  
// forEach :-> run for each element of the loop till condition become false. this loop work on array..if you have an object then first you convert this array from object then after foreach work.
// while loop :-> while loop run when condition is true the it run till element exist in array or object .
// do while loop :-> do while is another part op looping section in this loop it runs or execute first then check condition is true or false..in simple terms we sya it run atleast one time even condition is false...becouse the loop run first and condition is test after that. so one time it run.  
// break :-> break stop the condition to run further where it place and after the condition true it break the chain of loop and stop the further execution.
// continue :-> this method is used for skip the special part of script where it placed...when condition is true where it place it move further execution with skip of that part of loop.
   
// an Example of For In Loop written in Below

{ //start a new scope for differentiate the variable or reduce variable name conflicts 
    const person = {fname:"Smith", lname:"Williams", age:27}; //declare a const variable with Object datatype and values;
    let txt = ""; // declare a variable with empty string value;
    let arrays = Object.entries(person);//converting the object into the array form along with keys and properties.
    for (let x in arrays) { // for In loop  start and now x is iterable of person object, means x represent the all value of persone object
    txt += arrays[x][0] + " "; // fetching one by one each value of persone object using its key(x) and store it txt variable.
    }
    console.log(txt);// print the txt varible with its Holding values
}

// an Example with foreach loop written in below

{ //start a new scope for differentiate the variable or reduce variable name conflicts 
   
    // Use **Object.entries()** when you need both key and value
    // Use **Object.values()** when you only need the values
    // Use **Object.keys()** when you only need the keys

    const person = {fname: "John", lname: "Doe", age: 25}; //declare constant varible person as object with its value 
    let txt = ""; // declare the variable with null value as a string
    let arrays = Object.entries(person);// convert the object as array with key and value 

    arrays.forEach(function([index , value ]) { // grab each value of object array with its key
    txt += value + " "; //store each value into the another variable for further operation.
    }); 
    console.log(txt);// print the txt varible with its Holding values
}

// an example of For of loop written in below 
{
	const cars = {model :"BMW", name :"x3", year:2006}; // declare a object with its value and properties
  	let arrays = Object.entries(cars); // convert the object into array with its keys and values, you can access only key or value  
  	let text = ""; //declare the variable as null value with string data type
  	for (let x of arrays) { //start for of loop , in which we grab all value and its key into the iteration variable (x) of arrays varible
    	text += x[1] + " "; // grab and store the value of each property of object that converted into the array form into the text varible, // x[0] for keys
  	}
    console.log(text); // print all values or keys that are stored into the text variable
}

/*   an example of Do-while loop  written in below */

{ // scope starts for create script differnt from each other and reduce the conflict variable names from each other becouse they are declared into the scope so they exist only in the scope..outside of the scope they are unknown and undeclared variables and if declared then start conflict with other variables
    const cars = {model :"BMW", name :"x3", year:2006}; // declare a object with its value and properties
    let arrays = Object.entries(cars);//convert the object with its property into array called object array...called as associative array
    let x = 0; // declare a variable with value 0
    let text = ""; // declare a empty string variable
    do{
        text += arrays[x][0] + " : " + arrays[x][1] + " \n"; //fetch and store the value of object array with its key value into the text variable that is declared before loop starts
        x++; // increment 1 each time when do condition is run
    }
    while(x < arrays.length)// run till when condition become true to false
    console.log(text); // print the output here related with do section script
}

/*       Javascript Sets     */

//an example of javascript set  written in below
const arr = [1, 2, 3, 3, 4, 2]; //declare a array with various values

const sets = new Set(arr); //create a set with convets of array values into sets .. with removeal of duplicate enteries

for(let sod of sets) // start for  ofloop for fetch each value of Set known a bucket of uniqe values 
{
    console.log(sod + " \n"); // print the each value of set from the set bucket
}

for(let i = 0; i < 11; ){ // start forLoop for add new Set elements 
    
    sets.add(i); // add new element into set 
    i++; // after add it increment +1 in i value
}
console.log(sets);
const sett = sets;
{
    var txt = "";
    for (let x of sett)
    {
        txt += x + 1 +"\n";
    }
    console.log(txt);
}
 console.log(sets.size);
// with this above mentioned example we see that like array, in set indexing is not matter, Set is based on uniqueness and values, not position what is the value if uniqe then add if duplicate then remove duplicate value .
 
let pt; //declare variable without the value called undefined variable
console.log(sets.add( pt = "saab")); // define value into the previous declared variable and then add it into the set after that print this.

console.log(typeof sets ); //get type of variable that we have declared or this variable belongs to which data-type. 
console.log(sets instanceof Array); // false // when you want to know the prototype (parent, refered object,class,array etc) of a variable ...means this varible belongs to which datatype. this provide result in boolean value(true or false).
console.log(sets instanceof Object);// true
console.log(sets instanceof Set); // true
console.log(sets instanceof String); // false

let std = "erosteps" ; // this is a string and its datatype is string.
let student = new String("erosteps");// this is type of object in javascript called as Object
console.log(student instanceof String); //true
console.log(sets instanceof String); //false  // because this String and Set both are objects but they are differnt objects and so refrence of sets variable belongs to Set object not to String object, so this i reasone behind the False Output

console.log(std.slice(4).padStart(std.length, "X")); // XXXsteps // padding method for masking the character or numbers according to your requirement 
let mobile = 1234567891; // declare a variable with number datatype
mobile = mobile.toString(); //convert the data type from number to string
console.log(mobile.slice(mobile.length-4).padStart(mobile.length, "X"));// XXXXXX7891 // Padding method is used here to secure or unreadble from others create a mask on given string according to the requirement with help of padStart,PadEnd method
console.log(mobile.slice(0, 4).padEnd(mobile.length, "X"));// 1234XXXXXX // Padding method is used here to secure or unreadble from others create a mask on given string according to the requirement with help of padStart,PadEnd method
console.log(sets.values());// this return the value of a set object like a array form with each value of set
console.log(sets.keys()); //  Set have not any key like array because it not use the indexing like array so you can access same result with values or keys from the Set Object. 
console.log(sets.entries()); //  in javascript set object a method known as entries() is used for create a pair of output or result according to the requirement. like a,a -b,b-c,c and so on.


// in padstart method when we select slice positive number then it take how many charcter to be masked before given length.
 // ***//  in First part => mobile length = 10;  slice (10 -4 = 6),pad start means pad or mask charcter in starting of the string ,start from 1st letter to given length = 6 means 1-> 6 // XXXXXX7891
// ***//   in second part => mobile length = 10;  slice (start(0, end(4))),pad End means pad or mask in last of string, start just after given range like left 0->4  and mask remained charcter like // 1234XXXXXX
     //    we have string length 8 charcter, suppose slice(4) then it take first 4 or last 4 charector depending on requirement

/*  *******     Notation *******
*************************************
    *   if we want to know that which methode is availble for apply that particuler datatype then we go to the browser console and then we type in console that method and get output in log of that..
        for Example .... Here we want to know for String which method are availabel ...go to browser console and type 
                 .e.g :->   let student = new String("erosteps");
                            console.log(student);
                          now click on info tab in left sidebar then you see in result window with Accordian Tabs with arrows  
                          you see that you have got result as undefined.. and then after String {"erosteps"} as result with Accordian Tabs with Arrow 
                          when you click on  arrow then sub-part of that result is open and you have got lots of methods related with that object.

    *   this is happend with only Non-Primitive data-types, not with Primitive Data-Types.
    *   that not means that if Primitive Data-types are not shown any method in console panel then we cant apply any method on Primitive datatype variables..We Can do It..
        For Example  : -> let student = "Rohanpreet" ;
                            console.log(student.UpperCase());
                            when we run this script ..this will be work and we got result in output like below written.  
                            //output :-> ROHANPREET
    *    when we want to know how many values or elements are exist into the Set object then we cat use  Javascript method (.length) because this works on array and string
                            but in set object we use only sets.size methode to know the size of set..means how many elements are exist in a set.
    *                       in short term  we can say   .length =>  Array,String
    *                                                   .size   =>  Map,Set 
*/

 // we have created thre example for concatinate two or more set with uniqe values into one comman set 
    
    const A = new Set(['a','b','c']);// declare a new constant varable with new set object have contain values
    const B = new Set(['b','c','d']);
 
{    
    let text = "";
    for (const x of A) {
        text += x;
    }

    for (let x of B)
    {
        text += x;
    }
    
    const C = new Set(text);
    console.log([...C]); 
}

{
    const C = new Set([...A, ...B]);
    console.log([...C]); 
}
 
// new script with union method
{
    const C = A.union(B);

    let text = "";
    for (const x of C) {
        text += x;
    }
    console.log ([...text]);

 }







