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
        
    }
    
    /* Loops */
    
    //while loop
    let text = "";
    let i = 1;
    while(i <= x) {
        text += i;
        i++;
    }
    console.log(text);
