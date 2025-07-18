//   @@@@@@@@@@@@@@  The JavaScript Bom (Browser Object Model)  @@@@@@@@@@@

    // The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
    // in javascript `window` is a global object and the main object of the browser is window.
    // if you do anything with functions or without function directly, indirectly everything is part of the window object.
    // this will show you full environment of your browser. 

    // console.log(globalThis); //this works in both environment like browser and node both environment. 
    // console.log(global);// this works only in node js environment.

// All global JavaScript objects, functions, and variables automatically become members of the window object.

    // Global variables are properties of the window object.

    // Global functions are methods of the window object.

// Even the document object (of the HTML DOM) is a property of the window object:
    // window.document.getElementById("header");
// is the same as:
    // document.getElementById("header");

// Window Size
    // Two properties can be used to determine the size of the browser window.
    // Both properties return the sizes in pixels:

    // window.innerHeight - the inner height of the browser window (in pixels)
    // window.innerWidth - the inner width of the browser window (in pixels)

// Other Window Methods
    // Some other methods:

    // window.open() - open a new window
    // window.close() - close the current window
    // window.moveTo() - move the current window
    // window.resizeTo() - resize the current window



