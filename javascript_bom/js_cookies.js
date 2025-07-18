//   @@@@@@   JavaScript Cookies   @@@@@@@

    // Cookies let you store user information in web pages.

    // What are Cookies?
    //     Cookies are data, stored in small text files, on your computer.

    //     When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

    //     Cookies were invented to solve the problem "how to remember information about the user":

    //     When a user visits a web page, his/her name can be stored in a cookie.
    //     Next time the user visits the page, the cookie "remembers" his/her name.
    //     Cookies are saved in name-value pairs like:

    //     username = John Doe

    // Create a Cookie with JavaScript

    //     JavaScript can create, read, and delete cookies with the document.cookie property.

    //     With JavaScript, a cookie can be created like this:

    //     document.cookie = "username=John Doe";
    //     You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:

    //     document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    //     With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.

    //     document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

    // Read a Cookie with JavaScript

    //     With JavaScript, cookies can be read like this:

    //     let x = document.cookie;

    //     for example :=> 
    //             function myFunction() {
    //                 document.getElementById("demo").innerHTML = document.cookie;
    //                 }
    //                myFunction();

    //     document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;

    // Change a Cookie with JavaScript
    //     With JavaScript, you can change a cookie the same way as you create it:

    //     document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    //     The old cookie is overwritten.

    // Delete a Cookie with JavaScript

    //     Deleting a cookie is very simple.

    //     You don't have to specify a cookie value when you delete a cookie.

    //     Just set the expires parameter to a past date:

    //     document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // The Cookie String

    //     The document.cookie property looks like a normal text string. But it is not.

    //     Even if you write a whole cookie string to document.cookie, when you read it out again, you can only see the name-value pair of it.

    //     If you set a new cookie, older cookies are not overwritten. The new cookie is added to document.cookie, so if you read document.cookie again you will get something like:

    //     cookie1 = value; cookie2 = value;

    // JavaScript Cookie Example

    //     In the example to follow, we will create a cookie that stores the name of a visitor.

    //     The first time a visitor arrives to the web page, he/she will be asked to fill in his/her name. The name is then stored in a cookie.

    //     The next time the visitor arrives at the same page, he/she will get a welcome message.

    //     For the example we will create 3 JavaScript functions:

    //     A function to set a cookie value
    //     A function to get a cookie value
    //     A function to check a cookie value
    //     A Function to Set a Cookie
    //     First, we create a function that stores the name of the visitor in a cookie variable:

    //     For Example :->

    // function setCookie(cname, cvalue, exdays) {
    //      const d = new Date();
    //      d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //      let expires = "expires="+ d.toUTCString();
    //      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // }
    //  for set a cookie its a like add value into cookie:
        /* document.cookie = "add value here that what you want to set in cookie" */

//    A Function to Get a Cookie
//Then, we create a function that returns the value of a specified cookie:

// function for set cookie

    function setCookie(cname, cvalue, exdays) { // function declared  with receiving arguments when function is call..then this arguments become variable that have value. till is null value
    const d = new Date(); // define a variable as a date object
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); // it calculate the next date after exdays(30 days after 18july +30 = 17 Aug)
    let expires = "expires="+ d.toUTCString();// creating a value of cookie expire after one month
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // set the new update cookie value with old values
    } //end of the function 

// function for get cookie

    function getCookie(cname) { // declare a function with argument like username
        let name = cname + "="; // set a argument as avalue into new variable
        let decodedCookie = decodeURIComponent(document.cookie); // this decode methode concatinate all cookies into one string and that string store into the new declared variable
        let ca = decodedCookie.split(';'); // split each cookeie via removing the semicolon from the string where it comes and sotre the each value of cookie as array value into the new variable.
        for(let i = 0; i <ca.length; i++) {// start a for loop and run till arr values are not finished means runn till array length.
            let c = ca[i]; // // store the received value from the array into the new variable 
            while (c.charAt(0) == ' ') {// here check the string first character is null, empty space or not.
            c = c.substring(1); //  if its empty or space then this loop run till first character is null or empty, and also remove it the empty space from the starting of the string and remaing value put into again variable C.
            } // while loop ends
            if (c.indexOf(name) == 0) { // check the index of name variable from the C array and then check its index is equal to 0 or not if condition true then run block script else run else block script.  
            return c.substring(name.length, c.length); // if condition is true then return the name variable length and array length.
            } // end if block
        }//end for block
        return "";//return empty string
    } // end of the function 


// function for chck the cookie
    
    function checkCookie() { // declare a brand new function
        let username = getCookie("username"); // call the another function and recived return value add into the new variable.
        if (username != "") { //check here that received value that store recently into this variable is empty or not if not then run this block
            //alert("Welcome again " + username); // this work in window browser  
            console.log("Welcome again " + username); // print the received value as a string. this work in node js and browser both.
        } else { // end o fif block and start of else block, means if username is empty then run this block
            username = prompt("Please enter your name:", ""); // add new value that get from prompt popup window and store it into username variable that is already defined 
            if (username != "" && username != null) {  // check here that username variable is empty as well as null  or not. if username is not null then run this block. 
            setCookie("username", username, 365); // set cookie means add new value into browser cookie  as username with value username that is valid for full year means 365 days and never expire till 365 days.
            } // end of if condition
        } // end of else part
    } // end of the function

checkCookie(); // call this function on window load