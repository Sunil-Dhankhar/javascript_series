/* ******************** JavaScript Use Strict ************************* */

// "use strict"; Defines that JavaScript code should be executed in "strict mode".

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// For Example => With Strict Mode, you can not use undeclared variables.You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.


// @@@@@@@@@@@   Declaring Strict Mode   @@@@@@@@@@@@@@

// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode)
// we use various scope for various example for understand the casses related with use strict but you assume these are on global bases not on block scope bases. i will also mention on
// that each scope assume like global or block or functional 
{ // assume it as global scope 
    "use strict";
    xy = 55; // This will cause an error because xy variable is not declared
}

{ // assume this is  global scope
    "use strict";
    myfunction();//function is called before its declared called hoist feature of javascript and run..

    function myfunction(){//function is declared
        yt = 60; // This will cause an error because yt is not declared and strict mode applied as globally
    }
}

{ // treat as functional scope
    xp = "windows xp";       // This will not cause an error.
    myFunction();

    function myFunction() { //declare a new function as a hoist function
        "use strict"; // strict mode declared in function and this mode is applicable only inthis function block and its not affected outside the function.
        vista = "windows vista";   // This will cause an error
    }
}
