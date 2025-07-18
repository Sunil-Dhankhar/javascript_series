// JavaScript Window Screen

// The window.screen object contains information about the user's screen.

// Window Screen
// The window.screen object can be written without the window prefix.

// Properties:

// screen.width  = returns the width of the visitor's screen in pixels.
// screen.height = returns the height of the visitor's screen in pixels.    
// screen.availWidth = returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
// screen.availHeight = returns the height of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
// screen.colorDepth  = returns the number of bits used to display one color. (24bits,32 bits color resolution in All Modern computers )
// screen.pixelDepth  = returns the pixel depth of the screen.(24 pixel)
// Window Screen Width = returns the width of the visitor's screen in pixels.(here window is prefix as a global object)
// The screen.width property returns the width of the visitor's screen in pixels.

// for Example :=>
//         document.getElementById("demo").innerHTML = "Screen Width: " + screen.width;
//         document.getElementById("demo").innerHTML = "Screen Height: " + screen.height;
//         document.getElementById("demo").innerHTML = "Available Screen width: " + screen.availWidth;
//         document.getElementById("demo").innerHTML = "Available Screen Height: " + screen.availHeight;
//         document.getElementById("demo").innerHTML = "Screen Color Depth: " + screen.colorDepth;
//         document.getElementById("demo").innerHTML = "Screen Pixel Depth: " + screen.pixelDepth;
//         document.getElementById("demo").innerHTML = "Window Screen Width: " + window.screen.width;
        
//         Result will be: Screen Width: 1920
//         Result will be: Screen Height: 1080
//         Result will be: Available Screen Width: 1920
//         Result will be: Available Screen Height: 1048
//         Result will be: Screen Color Depth: 24
//         Result will be: Screen Pixel Depth: 24
//         Result will be: Window Screen Width: 1920

// For modern computers, Color Depth and Pixel Depth are equal.



