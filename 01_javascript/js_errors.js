/*  /////////////////////////  JavaScript Errors  //////////////////////////// 

    ***** TRY - CATCH - THROW - FINALY *****
    
    when you working in javascript and when you try to execute your script and this script have some bugs and errors called  unuseuals errors or unexpected errors 
    like syntax error, trying to access undefined variable etc then javascript compiler throw the Error and code is stoped from running mode.

    // various types of error like syntax error, type error, Reference Error, Internal Error etc.

    // for handle this type of error we use the method or handler try catch throw methods.
    
    ---------------------------------------------------------------
    // The try statement defines a code block to run (to try).

    // The catch statement defines a code block to handle any error.

    // The finally statement defines a code block to run regardless of the result.

    // The throw statement defines a custom error.

    basic example of this concept written in below
*/

try {
  // maybe error exist here
  let x = y + 1; // y is not defined → Reference Error
} catch (err) {
  console.log(" We Got an Error :", err.message);
}

/*  *****************  JavaScript try and catch ********************
    // The try statement allows you to define a block of code to be tested for errors while it is being executed.

    // The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

    // The JavaScript statements try and catch come in pairs:

    //  Syntax =>   try {
                    Block of code to try
                    }
                catch(err) {
                    Block of code to handle errors
                }
    
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@  JavaScript Throws Errors  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

        // When an error occurs, JavaScript will normally stop and generate an error message.

        // The technical term for this is: JavaScript will throw an exception (throw an error).

        // throw genrate a custom error while an error occur while scrip run in try mode if error found then it throw an error and code execution is stop with immediate effect .

        throw syntax => throw expression;
        let expression = "somthing wronge happend here";
        console.log(throw expression);

    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ The finally Statement  $$$$$$$$$$$$$$$$$$$$$$$$
    // The finally statement lets you execute code, after try and catch, regardless of the result:
    // The finally block always executes, no matter whether an error occurs or not — it runs fearlessly every time.  
    // The finally block runs every time, whether there's an error or not

    Syntax :=>
    try { //try statement
        Block of code to try
    }
    catch(err) { // catch statement
     Block of code to handle errors
    }
    finally { //finally statement
        Block of code to be executed regardless of the try / catch result
    }
*/ 

function errorHandler(value) // declare a  new function here 
{  
    try{ //start the try statement where we tryying to execute the script 
            
            let y = value.toString(); // convert the value variable into string and store this into y variable
            value = Number(value); //convert and store the variable value into value from any datatype to number
            if(y.trim() == "") throw "Empty"; //check here y is null or " " then throw an error if condition is true
            let num = typeof value; //get type of data that is store into value and after getting the type then we store the type into num variable.
            if(isNaN(value)) throw "Its NAN Value"; // check if statement that is received value is NAN if yes them throw an error
            if( num !== "number") throw "Not a Number"; // check num variable type is not equal to the Number then throw an error  
            
            if(value < 20) { throw "Range is Too Low"} else { throw x}  // check in if statement that received value is less then 20 if yes then throw an error else throw value for print it
            if(value > 50) { throw "Range is Too High" }else { throw x } // check in if statement that received value is greater then 50 if yes then throw an error else throw value for print it

    } // end of try block
    catch(error){ // start the catch statement that is used to catch all error of try statement while try statement script executing
        console.log("\n The Input Provided is "+ error);// Print the error that the catch block receives during the execution of the try block. 
    } // end of catch block
    finally{ // start the finally block after the catch block also known as finally statement
        console.log("\n The Input Provided is "+ value); // Print the message you want to display to the user after script execution.
        
            // This message will always be printed, whether an error occurs or not.
            // It runs every time, along with any returned or received value.

    } //end of finally block 
}//end of the function

errorHandler(" josh "); // call the function for execution the script with try catch method