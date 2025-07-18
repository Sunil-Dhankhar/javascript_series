// @@@@@@@@@@@@@@@  JavaScript Window Navigator  @@@@@@@@@@@@@@@@@

// The Navigator Object
// The navigator object contains information about the visitor's browser.

// It can be written with or without the window prefix like:

// windows.navigator or just navigator // windows object is here a prefix

    // Some Basic Examples :=>    
        
        //  navigator.cookieEnabled; // (True)
            //  it returns true if cookies are enabled, otherwise false

        // navigator.language; // (en-US)
            // it returns the browser's language;

        // navigator.onLine; (True)
            // it returns true if the browser is online;

        // navigator.appName; ( Netscape )
            // it returns the application name of the browser.
            // The appName property is removed (deprecated) in the latest web standard. Most browsers (Chrome, Edge, Firefox, Safari) returns Netscape as the appName.
        
        // navigator.appCodeName; (Mozilla)
            // it returns the code name of the browser.
            // This property is removed (deprecated) in the latest web standard. Most browsers (Chrome, Edge, Firefox, Safari) returns Mozilla as appCodeName.
        
        // navigator.product; (Gecko)
            // it returns the product name of the browser engine.
            // This property is removed (deprecated) in the latest web standard.Most browsers returns Gecko as product.

        // navigator.appVersion; (Browser version is: 5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36)
            // it returns version information about the browser.
            // This property is removed (deprecated) in the latest web standard. Do not rely on appVersion to return the correct browser version:
            // Browser version is: 5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36

        // navigator.userAgent; (Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36)
            // it returns the user-agent header sent by the browser to the server.
            // The navigator object should not be used to detect browser versions because:->
                 
                    // Different browsers can use the same name.
                    // The navigator data can be changed by the browser owner.
                    // Some browsers misidentify themselves to bypass site tests.
                    // Browsers cannot report new operating systems, released later than the browser.

        
        // navigator.platform; (Linux x86_64)
            // it returns the browser platform (operating system).
            // This property is removed (deprecated) in the latest web standard.
            // Do not rely on platform to return the correct browser platform in all browsers.
        
        // navigator.javaEnabled(); (false)
            // it returns true if Java is enabled.
            // This method is removed (deprecated) in the latest web standard.
            // javaEnabled() always returns false.