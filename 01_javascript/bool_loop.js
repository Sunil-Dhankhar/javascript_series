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
            let result =  watercolor ?? groundcolor ?? skycolor ?? seacolor;
            console.log(result);
        }        

        null_coal();

    /* Loops */
    
    //while loop
    let text = "";
    let i = 1;
    while(i <= x) {
        text += i;
        i++;
    }
    console.log(text);
