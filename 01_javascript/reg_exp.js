/*     +++++++++++++++++++JavaScript Regular Expressions ++++++++++++++++++++++

        ****************** syntax of regex:-  string.replace(searchPattern, replacement)  ************************

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
    // \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b this search the pattern before any boundry( , . or any other thing like ! ) if found then return the position else return -1 
    // \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx

    // let result = text.match(/\u0053/g); this is hexadecimal code of 'S' and this search only S globally , but if yoy want to search as well as small s then you just pass gi modfier in place of g. then you see. it search both small or uppercase.
}

{
    // const pattern = /e/; this expresion is used to check or verify that pattern is exist or not in peragraph or string .. if exist then return true else false as boolean value
     // pattern.test("The best things in life are free!"); // true

     // const obj = /e/.exec("The best things in life are free!"); //It searches a string for a specified pattern, and returns the found text as an object. if not found then returns Null as object.
     // console.log("Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input); // Found e in position 2 in the text: The best things in life are free!
}

{
    
    // the RegExp methods are not predefind function of javascript.. but its design for find the pattern like special character from the string and then return the value with or without according to the requirement
    // its not a built in method of javascript but an important method of regular expression that part of javascript. user can modify this according to requirement
    
    let strings = "H({e/l.}l^o ? *wo\\rl|d+ e.[ro*@S.t\ep})s"; // add a new string with some special charectors into a new declare variable
    
    function RegExp(str) { // create  or declared a function 
        return str.replace(/[.*+@?^${}()|[\]\\]/gi, '\\$&'); // create a regex (regular expression) inside the replace method for find the regex pattern from the input data according to our requirement.
    } // close the function
    console.log(RegExp(strings)); //H\(\{el\}l\^o \? \*wo\\rl\|d\+ e\[ro\*\@Step\}\)s // this regex find the special charcter and add the (\) just before the special character..in regex(\\ ($& these symbols are necessory for add \ or another operator)). 

    function removeSpecialChars(str) { //declare a function
        return str.replace(/[.*+@?^${}(/)|[\]\\]/gi, ''); // created a regex (regular expression) inside the replace method for find the regex pattern from the input data according to our requirement.
    } // close the function 

    console.log(removeSpecialChars(strings)); // Hello world eroSteps // call the function and found the output bases on function working pattern.. like in this function this remove remove all special charcter or replace with a white space.
}

{
    // ********************The RegExp.escape() Method ****************************
    // The regex.escape  methode is a javascript static method that escaping character inside the string with help of special regular expression characters and this is used to execute the script according to the found patteren and convert it as plain text for further safe process. 

   // Define RegExp.escape manually (polyfill)
    // Escape function
    // Correct escape function with dot included
    // Don't overwrite RegExp! 
    /* the below written script is used for replace the pattern matched text  with matching text (//this example not providing the exact out that we have required)
         here may be node interprator issue that not execute this issue. 
       here we want to replace [*] with the google.com but when investigate the regex varible in console as output firstly it provide RegExp {}, and when we convet it into a string then output becomes like [object object] and type of this is object. 
    this is the main issue for nat replacing the text pattern as requirement */ 

    RegExp.escape = function(string) { //creating a call back function under the RegExp.escape methode
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // find or search the text inside the pattern if found then replace the input as required pattern
    };

    const email = "yahoo.com"; // declare a variable as a string 
    const string = "yahoo.com is a Modren search engine."; // declare a another variable as a string

    const pattern = RegExp.escape(email);  // yahoo\.com // escaping the email string with function for patteren match where email pattern exit...if found then retuen the pattern according to the requirement 
    const regex = new RegExp(pattern).toString();     // /yahoo\.com/ // creating the received pattern as object then convert it into the string with method toString 
    const result = string.replace(regex, "Google.com"); // replace string with required string according to the pattern that we have required
    console.log(pattern); //print received return pattern from the call back function after matching the passed string.
    console.log(regex); // print object as string after converting the object to string
    console.log(" Replaced:", result);   //required output is :->  Google.com is a Modren search engine. *** but we received as yahoo.com is a Modren search engine. without  any changes.due to some technical issue of node and javascript.


}


// test()	 => this is used for check or verify that the element or pattern matching or not. this returns boolean values like true or false
{
    const pattern = /e/; //declare pattern string  for check
        console.log(pattern.test("The best things in life are free!")); //true as output
} 
// match()	 => this is used when you required one or multiple matches (only values).
{
    const string = "The best things in life are free!"; //declare new variable with string 
    const pattern = /t/;//declare pattern string  for check
    console.log(string.match(pattern));// print the result after match the pattern from the string
}

{
    const string = "The best things in life are free!"; // declare a new variable as a string
    const pattern = /t/g; // declare a new variable as pattern for all match
    const matches = string.matchAll(pattern); // create a  object with matchAll method for check how many elements are exist in the string and whats the index of it
    console.log(typeof matches); //object //checking the type of matches variable
    for (const match of matches) { //start the for of loop for grab all matches along with its position in the string
        console.log(`Matched '${match[0]}' at index ${match.index}`); // print the string with all matches, here we found that ${match[0]}(array object) have the matching pattern
        //  and ${match.index} (array index) have the index where this pattern found in the string 
    } //for loop end// exit from the for loop after all pattern matched.
}
// matchAll()=>	Multiple matches + capturing groups 
// .exec()	 => this is used for when you required matching pattern as well as its index, group and looping over matches.
