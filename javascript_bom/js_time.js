//      @@@@@@@@@@@@@@@@@   JavaScript Timing Events  @@@@@@@@@@@@@

// Timing Events
    // The window object allows execution of code at specified time intervals.

    // These time intervals are called timing events.

    // The two key methods to use with JavaScript are:

    // setTimeout(function, milliseconds)
    // Executes a function, after waiting a specified number of milliseconds.

    // setInterval(function, milliseconds)
    // Same as setTimeout(), but repeats the execution of the function continuously.
    // The setTimeout() and setInterval() are both methods of the HTML DOM Window object.

    // The setTimeout() Method
    // window.setTimeout(function, milliseconds);
    // The window.setTimeout() method can be written without the window prefix.

    // The first parameter is a function to be executed.

    // The second parameter indicates the number of milliseconds before execution.

    // for example :=>
        function times() //define the function
        {
            // alert("hello"); // for browser environment
            console.log("Thankyoy for 3 seconds wait"); // for node environment
        } // end of the function

        setTimeout(times,3000); // call the function via setTimeout method that i have mentioned inside .. after given time like 3000 miliseconds means after 3 seconds.
        //setInterval(times,3000); // call the function via setInterval method that i have mentioned inside .. after given time like 3000 miliseconds means it call my mentioned functiona after every 3 seconds countinusly.
// How to Stop the Execution?
// The clearTimeout() and clearInterval method stops the execution of the function specified in setTimeout() and setInterval().
// If the function has not already been executed, you can stop the execution by calling the clearTimeout() method:
//         for Example :->
//                 myVar = setTimeout(function, milliseconds);
//                 clearTimeout(myVar);

//                 myVar2 = setInterval(function, milliseconds);
//                 clearInterval(myVar2);

        // Example :- 
        // <button onclick="myVar1 = setTimeout(myFunction, 3000)">Try it Once</button>
        // <button onclick="myVar2 = setInterval(myFunction, 3000)">Calling Again and Again</button>

        // <button onclick="clearTimeout(myVar1)">Stop 1</button>
        // <button onclick="clearInterval(myVar2)">Stop 2</button>

        // <script>
        // function myFunction() {
        // alert("Hello");
        // }
        // </script>