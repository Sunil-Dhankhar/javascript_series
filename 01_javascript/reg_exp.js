/*     +++++++++++++++++++JavaScript Regular Expressions ++++++++++++++++++++++

            // A regular expression is a sequence of characters that forms a search pattern.

            // When you search for data in a text, you can use this search pattern to describe what you are searching for.

            // A regular expression can be a single character, or a more complicated pattern.

            // Regular expressions can be used to perform all types of text search and text replace operations.


            // eroSteps/i  is a regular expression. // eroSteps is a pattern wor search and i is a modifier (modifies the search to be case-insensitive). that i is used to search pattern freely,no matter pattern mentioned in which case..all case are now opened for search the pattern.

*/
// Some Basic Examples are 
{
    let text = "erosteps"; // declare a varible with a string
    console.log(text.search("steps"));// steps is place on 3 position of string
}

{
    let text = "erosteps"; // declare a varible with a string
    console.log(text.search(/TEP/i));// tep is place on 4 position of string and i is modifier that help to search result from string as pattern without any case-senstive property and make it possible for search ...if we remove 1i then it returns -1 because now condition follow case Senstive rule for search as pattern 
    console.log(text.replace("erosteps", "EroSteps pvt ltd.")); // this regular expression is used for replace the string with other string  
    console.log(text.replace(/eroSteps/i, "EroSteps Pvt ltd.")); // you can also replace pattern as using this regular expression for replace the string with required other string  

}

{
     let text = "erosteps"; // declare a varible with a string
    console.log(text.search(/TEP/i)); // i for case insenstive // Perform case-insensitive matching
    console.log(text.match(/s/g)); // g is used for search as globaly // Perform a global match (find all)
    console.log(text.match(/s/m)); // m is used for search as multiple // 	Perform multiline matching

    // [abc]	Find any of the characters between the brackets	
    // [0-9]	Find any of the digits between the brackets	
    // (x|y)	Find any of the alternatives separated with | // thsi is used to search all values related with both values globally..

    // \d	Find a digit	// this is used to find the digit from any string if existing
    // \s	Find a whitespace character	bwtween a string .. you can  calculate how many white spaces are existing in the string with .length property or method
    // \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b this search the pattren before any boundry( , . or any other thing like ! ) if found then return the position else return -1 
    // \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx

    // let result = text.match(/\u0053/g); this is hexadecimal code of 'S' and this search only S globally , but if yoy want to search as well as small s then you just pass gi modfier in place of g. then you see. it search both small or uppercase.
}

{
    // const pattern = /e/; this expresion is used to check or verify that pattren is exist or not in peragraph or string .. if exist then return true else false as boolean value
     // pattern.test("The best things in life are free!"); // true

     // const obj = /e/.exec("The best things in life are free!"); //It searches a string for a specified pattern, and returns the found text as an object. if not found then returns Null as object.
     // console.log("Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input); // Found e in position 2 in the text: The best things in life are free!
}

{
       // ********************The RegExp.escape() Method ****************************

       // the RegExp.escape () method is not predefind function of javascript.. but its design for escape the special character from the string and then return the value without special characters
       // its not a built in method of javascript but an important method of regular expression that part of javascript. user can modify this according to requirement
       
     let strings = "Hello *world+ ero*@Steps";
     console.log(RegExp(strings)); //Hello \*world\+ ero\*@Steps
    
    function RegExp(str) {
         return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}