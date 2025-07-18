// @@@@@@@@@@@   JavaScript Window Location   @@@@@@@@@@@@@

// The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

// Window Location
// The window.location object can be written without the window prefix.

// Some examples:

// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document
// Window Location Href
// The window.location.href property returns the URL of the current page.

// For Example :=>
    // Display the href (URL) of the current page:
  
        // document.getElementById("demo").innerHTML = "Page location is " + window.location.href;
            // it returns the URL of the current page. like (https://www.chatgpt.com/js/js_window_location.asp)

        // document.getElementById("demo").innerHTML = "Page hostname is " + window.location.hostname;
            // it returns the name of the internet host (of the current page). Like (www.chatgpt.com)
        
        // document.getElementById("demo").innerHTML = "Page path is " + window.location.pathname;
            // it returns the pathname of the current page. Like (/js/js_window_location.asp)

        // document.getElementById("demo").innerHTML = "Page protocol is " + window.location.protocol;
            //  it returns the web protocol of the page. like (https)

        // document.getElementById("demo").innerHTML = "Port number is " + window.location.port;
            // it returns the number of the internet host port (of the current page). Like ( default port 443 for HTTPS )

        // function newDoc() { window.location.assign("https://www.erosteps.com"); }
            // it load a new document in current tab or new tab that is decided as according to your script. like (https://www.erosteps.com opens in current tab by default).


//  @@@@@@@  JavaScript Window History @@@@@@@@@@

    // The window.history object contains the browsers history.

        // Window History
            // The window.history object can be written without the window prefix.

            // To protect the privacy of the users, there are limitations to how JavaScript can access this object.

        // Some methods:

            // history.back() - same as clicking back in the browser
            // history.forward() - same as clicking forward in the browser
        // Window History Back
            // The history.back() method loads the previous URL in the history list.

            // This is the same as clicking the Back button in the browser.

            // for Example :=> 

                    // window.history.back();  this method loads the previous URL in the history list.

        // Window History Forward
            // The history.forward() method loads the next URL in the history list.

            // This is the same as clicking the Forward button in the browser.

            //  For Example :=>

                    // window.history.forward(); this method loads the next URL in the history list.