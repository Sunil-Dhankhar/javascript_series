/* &&&&&&&&&&&&&&&&&&&& Javascript Ajax Method &&&&&&&&&&&&&&&&&&&& */

// get data from the server or database, this can make possible with this method knon as the JS Ajax method.
// this fetch or submit data on server or database in background remotly without the load page.
// with the js ajax method you can fetch and submit(store) the data on database or server with help of ajax method.. 
// this will work as like the Worker method but the major differnce between worker and the ajax is that the worker work on 2 file and on same orign but in the ajax case these condition are not applied..
// it works as indepandently in comparison of Worker. its main uses is for fetch data from database or server and submit the data on server or database without lack or without page load in background.

// AJAX = Asynchronous JavaScript And XML.
// AJAX is not a programming language.
// AJAX just uses a combination of:
// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data) 

//   How Ajax Works

//  Browser Send A request on ---------->   Server process received request and return back the result   -------------->  Browser display the requested data that is received from the Web Server

// ****************// fetch() and axios() method are the modern method for send or receive the data from the server.

// @@@@@@@@@  AJAX - The XMLHttpRequest Object  @@@@@@@@@@

// the 4 steps that all colabrate and make a Ajax call, these are :-
        // Create an XMLHttpRequest object  => variable = new XMLHttpRequest();
        // Define a callback function       => xhttp.onload = function() { --------- };
        // Open the XMLHttpRequest object   => xhttp.open("method (get or post)", "file url or server url");
        // Send a Request to a server       => xhttp.send();

// @@@@@@@@@@  Access Across Domains  @@@@@@@@@@
// For security reasons, modern browsers do not allow access across domains.
// This means that both the web page and the XML file it tries to load, must be located on the same server.
// in simple terms we can say that when you make a Ajax Request then it is neccesory that the Sorce file and destination file are on same orign means both are plced on same platform.

// The onreadystatechange Property  => on change of this property status it execute the function.
// The readyState property holds the status of the XMLHttpRequest.

// The onreadystatechange property defines a callback function to be executed when the readyState changes.

// The status property and the statusText properties hold the status of the XMLHttpRequest object.
/*

                    Property	                Description

                    onreadystatechange	        Defines a function to be called when the readyState property changes
                    readyState	                Holds the status of the XMLHttpRequest.
                                                0: request not initialized
                                                1: server connection established
                                                2: request received
                                                3: processing request
                                                4: request finished and response is ready
                    status	                    200: "OK"
                                                403: "Forbidden"
                                                404: "Page not found"
                                                For a complete list go to the Http Messages Reference
                    statusText	                Returns the status-text (e.g. "OK" or "Not Found")                

*/



// AJAX - XMLHttpRequest  => xhttp.open (xttp is object and open is method that is used for send the request to the server).
    function load_data(){// define the function
        const xhttp = new XMLHttpRequest(); // create a XMLobject with a variable.
        xhttp.onload = function (e){ // call back function execute with its internal mentioned script. when its parent function load or call, this function call automatically
            console.log(this.responseText); // print the response after geting from the server
        } //end of call back function
    
        xhttp.open("GET","./web_api/fetch_info.txt"); // initilize the XMLHttp request with method that decide that data will be received from server or post on server and url of the server where you send the request.
        xhttp.send(); // send the request on server for fetch or submit the data.
    }// end of main function

    load_data(); // call the function when page is load.

    // this is the basic example of ajax request method with send request on server. we use here Node Environment and this script requires the browser Environment for execute and get data from the server.

    // for it make request for post the data on server via send method.

    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // this is used to set the header along with data type.. that verify and tell to server that the package of data in request is belong to which category/
    //                                                     x-www-form-urlencoded // this belongs to html form data format.
    // xhttp.send("fname=Henry&lname=Ford");   // this method is send request like html form method like key-value pair where it send the key and value bothin pair and server received and access the value with help key
    // suppose it send this data on php file.. and other hand php file received the request and get the value from it like 
    //                  $first_name = $_POST["fname"]; , $last_name = $_POST["lname"];   


    // there are two types of request sync request and other one is async request 
            // sync request is send request to server and stop further code  to run till response not rescived. /// not recommended  xhttp.open("GET" "url", false);
            // Async request is send request to server and run further code  to in background, not matter that server response is received or not rescived. /// recommended  xhttp.open("GET" "url", true);

    
    
