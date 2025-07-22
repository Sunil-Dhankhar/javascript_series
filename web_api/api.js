// +++++++++++ Web API's ++++++++++++++++++++

/*  The Web API is a technology that creates a connection between the user's browser and the web server for data transfer.
The Web API enhances the browser's performance when interacting with the server.
It also extends the browser's functionality, allowing data to be transferred between the browser, the server, or third-party applications using API technology.

If you want to use a third-party API for data transfer, you’ll need the appropriate third-party API code. You can find this code online and integrate it into your script according to your requirements.

Examples of popular Web APIs:

    // YouTube API – If you want to display YouTube videos on your website, you can do so using the YouTube Web API.

    // Twitter / X API – If you want to display tweets or X posts on your website, you’ll need the Twitter / X Web API.

    // Facebook API – To show Facebook posts on your website, you will need the Facebook Web API.

    // Zoho CRM API – You can interact with external platforms like Zoho CRM using Web APIs to send leads or other data from your own site.

And many more...

        @@@@@@@@@@@@@   Javascript Validation Api  @@@@@@@@@@@@@@@@

        before submit the data.. the checking of data is valid or not called as validation and in Web Api it play a major role before sent a request to server its neccessory that the browser request is valid or not.
        checkValidity() =>  the check validity is a technique of checking the form data befor send request to otherhand for getting the result.
                            this method is return boolearn values like if condtition is true maens data or request is valid then return the true else return the false.
        setCustomValidity() => this method is used to set the custom message display in place of the default message
        
        check example => 
*/

        // <input id="id1" type="number" min="100" max="300" required>
        //<button onclick="myFunction()">OK</button>
            //<p id="demo"></p>
/*
        function myFunction() { // initilize the new function 
            const inpObj = document.getElementById("id1"); // define the variable for store the value of input value as a object when user add a value in input item and after that click on button

            inpObj.setCustomValidity(""); // reset custom message when user click on button

            if (!inpObj.checkValidity()) { // check validation // check input data is valid or not if not then run this block script otherwise run the else part block script 
                // this block run when condition is false. and the checkValidity method returns the false value.
                inpObj.setCustomValidity("Number should be between 100 and 300");// this method is used to set custom message in error report. 
                inpObj.reportValidity(); // Show browser error message popup // this method is used to show custom message in input field popup.
                document.getElementById("demo").innerHTML = inpObj.validationMessage; // add custom message into the required place where you want to show. like this in a peragraph, with temp msg.
            } else { // end of if block and start else part with conditional block
                // this block run when the validity condition is true and return the true value as boolearn value.
                document.getElementById("demo").innerHTML = "Input OK"; // add the message inside the paragraph or desired place where you want to display the true message.. 
                
                // here you can insert the form submit code to the api Server and received the result from the server according to the data reqeust.
            }
        }
*/
        // Note :=> These methods will not work in node environmunt. these required browser environment for run these method. because these method are belongs to the DOM Model
                //  and you very well know that the DOM operation will run in only windows browser invironment..they not run execute anywhere other place where browser environment is not availavle.
/* 
  ==== > Constraint Validation DOM Properties :=> those properties in javascript that are used to validate the validity of data like form data is validate before the form submit.
  some basic properties related to this =>
    1. validity         => it returns the object that tell the validity of the element. like true or false.
    2. validationMessage => it returns an error message that is used to display to user.
    3. wilValidate      => it tells the object element will be validate or not.
    4. checkValidity()  => it validates the object input elements. if validate then execute the script if not then return the false with error message. that error message display in user browser.
    5. reportValidity() => it check the data is validate or not. if not then it returns the custom created message or default message as a popup message in the input field.
    6. valueMissing     => it validate that Required field is empty or not ?
    7. typeMismatch     => it validate that the object element type is valid or not like email field type is text or not..
    8. patternMismatch  => it validate that pattern is matching or not if not then return false value with message.     
    9. tooLong          => it validate that object element text is over then the limit or under the limit. 
   10. tooShort         => it validate that object element text is short then the limit or under the limit. 
   11. rangeUnderflow   => it validate that object element number value is smaller then the allowed range or not.
   12. rangeOverflow    => it validate that object element number value is Bigger then the allowed range or not.
   13. stepMidmatch     => it validate that Step value procedure follwed or not.
   14. customError	    => it validate that user have set the custom message or not used Manually. 
   15. valid            => it validate that if an element is valid or not.

*/


/* +++++++++++++++  Web History API  ++++++++++++++++++
    
    The Web History API Provides Easy methods to access the windows.history object.
    The window.history object contains the URLs (Web Sites) visited by the user. in simple terms,  it keep the window history track.

    for example =>
      01).  window.history.back() => When this method is called, it navigates the user to the previous page visited in the current tab's history.
                                        It loads the most recently visited page from the history and goes back one step.
      02).  window.history.forword() => When this method is called, it moves the user forward to the next page in the current tab's history (if available).
                                        It loads the next page from the session history, moving ahead one step.
      03). window.history.go(value(-2) or (2)) => When this method is called with a value, it navigates through the session history.
                                                    If the value is negative (e.g., -2, -3), it moves back that many steps.
                                                    If the value is positive (e.g., 2), it moves forward that many steps in the history.
                                                    This jump is based on the user's browsing history in the current tab.
      04). window .history.length   => this method return the number of visted page by user in current window tab, not batter its back links or forword links..its just count the total number of pages that have user visted in window browser current tab.  
                                        The length property returns the number of URLs in the history list of the current browser window.
                                        The property returns at least 1, because the list includes the current page.
                                        This property is useful to find out how many pages the user has visited in the current browsing session.      
*/

/* *************** Web Storage API ******************
        The Web Storege Api provide the facility to store the data into the broswer in two mode like permanently or temorary. 
        there are two types of storage is available like Local stroage and other one is sessional storege
        the Local storage is also called as Permanent storage that store the data as permanent like 
        => Local Storage(browser):-> object
            syntax :-> localStorage.setItem("username","David Neo")
                        localStorage is an Object, setItem is method, between the parentheses these are perameters like username is key and david neo is value.

            // Data persists even after the browser is closed and reopened.
            // Useful for saving data like user preferences, themes, or saved items.
            // No expiration time.
            // Stores data as string key-value pairs.
            // It never deletes the stored data until the user removes it manually.

            when user want to get the data then user use this same method with just modify the property of it like:-
                localStorage.getItem("username"); // output -> will be as David Neo.
                localStorage.removeItem("username"); // output -> it remove the value David Neo as username from the storage.

        => Session Storage(browser):-> Object 
                syntax :-> sessionStorage.setItem("username", "William Shakes")
                            sessionStorage is an Object, setItem or getItem are Methods and in between parantheses there are two parameters in a pair of key and value.          
                
                    "Like local storage, this is also a way to store data in the browser, but it's a temporary type of storage. It stores data only for one session.
                     When the user leaves the website, closes the browser, or shuts off the system browser, the stored data is automatically removed from the browser's memory."

                            // Data is stored only for the session.
                            // As soon as the tab is closed, data is lost.
                            // Useful for temporary data, like form input during a session.
                            // Same API methods as localStorage.

            when user want to get the data then user use this same method with just modify the property of it like:-
                sessionStorage.getItem("username"); // output -> will be as William Shakes.
                sessionStorage.removeItem("username"); // output -> it remove the value William Shakes as username from the storage.




                                🧾 Key Differences ( Through a Table)
                            Feature	                localStorage	                        sessionStorage
                            
                            Lifespan	            Permanent (manual delete needed)	    Until tab is closed
                            Scope	                All tabs from same origin	            Only current tab
                            Storage Limit	        ~5-10 MB	                            ~5 MB
                            Accessible via	        localStorage object	                    sessionStorage object

            Note => Data is stored as strings only. You need to use JSON.stringify() and JSON.parse() for objects/arrays.

                    let obj = { age: 25 }; // define a variable as a object
                    localStorage.setItem('data', JSON.stringify(obj)); 
                        // set the object data in browser local memory with json stringfy method that convert the object into string value 
                        // because local storage or session storage is not store value as object array boolean value or number, this contain only string so here need to convert it as string
                    let parsed = JSON.parse(localStorage.getItem('data'));
                    // when you need the browser stored data, that is in string format, so firstly you get string value as data and then convert back it into its actual format like object, array etc
                    // then you store this converted data into a new object variable. now you use this object value according to your requirement.    
*/

            //  For Example => 
            /*                  //let arr = [1, 2, 3]; // define variable as array
                                let arr = {  //define variable as object
                                            name:"Grahem Smith", 
                                            age: 25, 
                                            occupation:"National Cricketer in South  African  Team", 
                                        }; 
 
                                localStorage.setItem('numbers', JSON.stringify(arr));// Store object value as a string into number variable
                                console.log(localStorage.number); // this print the object or array value as string // we place this here for check or test purpose
                                
                                // Retrieve and parse
                                let newArr = JSON.parse(localStorage.getItem('numbers')); // get back the stored data from the browser storage and after that conver back it its original source like object, array, number etc
                                console.log(newArr.occupation); // here we accessing the object property like object key-value with help of its key property.
            */


            // localStorage.clear() 
                // => This removes **all key-value pairs** from the localStorage object.
                // It does not convert it to a blank object, but simply **empties all stored data**.

            // sessionStorage.clear()
                // => This removes **all key-value pairs** from the sessionStorage object.
                // Just like localStorage, it **clears all stored session data**, but the object remains available.


    /*  @@@@@@@@@@@@@@@ Web Workers API @@@@@@@@@@@@@@@@
        
        The web Worker Api is called as javascript background thread that is used to process heavy work in background without affecting main thread.
        if you do that heavy work without JS Worker, then there are Mostly chances that your site page may be frizz or lak. 
        so with the JS Worker Technology you can do that work in background and the heavy process not affecting the main js UI interface.

        the worker is working in two Phase like one is sending and other one is receiver.

        worker.postMessage(data) => it send the data to worker  from main thread
        worker.onmessage => this method is used to receive sent data and then process it..
        
        worker mainly work with two file. one is main file and another one is background file where the work job is processed  
        
        for example :=>

            // main.js // main file, from where you put a request to worker
                        let worker = new Worker('worker.js'); // defined a new Worker as object and inside the new object mentioned a new another file where the worker process work in background.

                        worker.postMessage(10); // send the data to Worker

                        worker.onmessage = function (e) { // run this function when background worker return a message.
                        console.log('result is Received from the Worker End:', e.data); // Output: 20
                        };

            // worker.js // background file, where worker get a request from you or main file.
                        self.onmessage = function (e) { // execute function when the request or message is received
                        console.log('Main script se message mila:', e.data); // print the request for verifying the data is  received or not
                        let result = e.data * 2; // process the calculation like here it multiply the received value with 2 //suppose recived value is 5 then 5 * 2 = 10 and then store the calculted value into new variable.
                        self.postMessage(result); // send result back to the main thread after processing.
                        };

        
        the worker is working similerly to ajax call , but have some limitations like 

        ***=> origin should be same.. if you create a worker and want to process a job like heavy calculation in background then the of both file should be same..
                if you received the data from other domain through the Api and want to process that data through the worker then it not possible to process that data through the worker Directly..
        ***=> it always work with two file, one is main file where worker send the data, and another is backgrund file where it receive the request from main file and process them according to requirement and sent the result return back to main file.
        ***=> Dom is not accessable direct in the work.
        ***=> alert and prompt popup message not apear in background  process because it blockes the UI interface. because the UI is not allowed in the background.


        when process is finished and job is compelte then user can close the worker with help of method terminate... below mentioned.

        *** => worker.terminate();//  this is the methode to  stop the worker process ...that stop working further.


        ****=> Notice that when you pass the single value as argument like :-

                         worker.postMessage(10);  // post a request to worker with argument 
                         then the worker access this as function(e){ and process as e.data*2 = 20 }
                    but when you want to sent multiple argument form main file to background file then this process is applied like an object means it sent the data as key-value format.
                        for example => 
                             worker.postMessage({ // send data from main file to background file.
                                            num1: 10, // object properties like keys with values
                                            num2: 5, // object properties like keys with values
                                            operator: 'multiply' // object properties like keys with values
                                        }); 
                            
                            self.onmessage = function(e) { // background file where the request is received 
                              const [num1, num2, operator] = e.data; // destructure the all arguments.

                              then you access this as  = data.num1, data.num2, data.operator.
                              
                this is the case with you know how many argument are passed.., assume you dont know how many argument are passed from main file to worker then, what to do:-> ?
           >******>             the solution of that problem is like:->

           self.onmessage = function(e){ //receive the request from main file and then start the function
                    const obj = e.data; // each value of e.data object add into new variable
                    for( let key in obj){ //  start a for loop for extrcting each value from the object //this process will apply when you dont know how many keys and values are holded by object variable
                        if(obj.hasOwnProperty(key)){ // checking that object has its own key value or not..if result is true then process this block
                            console.log(`${key} = ${obj[key]}`); // print the each key and value from the object..you can use these keys and values according to your requirement..we have print here for just testing purpose.
                        }// end of if block
                    } //end of for in loop

                                        
                    // Optional: Convert to array of keys or values
                    const keys = Object.keys(data); //['name', 'age', 'isAdmin', 'country']
                    const values = Object.values(data);// ['Amit', 25, true, 'India']

                    self.postMessage(`Recived ${keys.length} values. `) // return the total lenght of key and values in pair like 4 to the main file 

                }
    The worker have not The window object, The document object, The parent object because the worker have not permission to access the page structure or DOM elements directly.


    in javascript worker self.onmessage is not a neccessory keyword. its a optional keyword.
    
    @@@@@  self refers to the global scope of the worker — equivalent to window in the main thread.in simple terms we can say in javascript self referes to global scope of worker like as window in Dom
    
    the Worker have two type of keyword for receive message or data from main thread or main file 
    
    1.) self.onmessage. => basic type of receiving the message from main thread. this is used in small and basic file for small functionality. this can use only single onmessage handeler. all execution are performed in single function.
    2.) self.addEventListener. => its too flexible.. and mostly used in large script like calculation or another huge execution of file. this method can use multiple add event listner as comparison to onmessage.
            syntax of event listener => self.addEventListener('message', function(event){-----});

    working style of both method is same, and they provide same result. but we have explain a differnce between both method with real time Example.
    A Real Time Example for create a Difference between both methods

    self.onmessage => this is the company manager and he want to assign a job like develop a app. so he ask to each employee of the company for type of employee. like he or she is programmer or somthing else like receptionist, data scintest, network specialist etc. 
                        till the manager found the required employee for assign the job to that employee. (if(type == "data sci")return elseif(type == "network enginer")return; elseif(type == "web programmer")return etc.)
                        in this example you see if company have 50 employe then it check condition each time till the condition is become true. its time consuming process and code also lengthy and complex.
                        and chances of this code faulty too high in large code. 
                
    self.addEventListener()=> this is the company manager and he ant to assign a job to buide the app and announce to all at once. each employee listen this but work only that employee who is eligible for this type of job.
                               this is less time consuming and fast approchable process 
                                this is also a lengthy code but easly handable and understandable and less complex. the chance of failuer this type of script is almost negtive number.
        for example :-> 
                self.addEventListener('message', function(event){ if(type == "data scientist") return});
                self.addEventListener('message', function(event){ if(type == "data analysist") return});
                self.addEventListener('message', function(event){ if(type == "app developer") return});
                self.addEventListener('message', function(event){ if(type == "web developer") return});
    */


/* ********************* JavaScript Fetch API ********************** 

    The Fetch api is an Important part of the javascript. this is used to fetch data from the server and post data on server according to user requirement.
    Fetch Api play a major role in javascript and its a modren part of javascript, this get and post the data from the server or on server without any lack or without reload the page using 
    API Technology that interact with the server remotly.

    this is a part of asynchronous function where it create the connection between the user and server through the function. after that server send back the response,
    if the response have result then .then function/method execute the script other wise .catch method handel the error and find the error.

    for example => first eaxmple ****>
*/
            const fs = require('fs').promises; // fs method that provide the permission to file read, write, delete, rename file or file data. and fs.promises return a promises with assure.
            getText("./fetch_info.txt"); // call the function with pass file name as argument
            async function getText(file) { // call the function
                /*let x = await fetch(file); // this wil not work here, specilly in Node enviornment because this method is used to get or fetch data from the server not for local file.
                let y = await x.text();
                console.log(y); print the file data
                */

                try { // start the try method for run the script 
                        let data = await fs.readFile(file, 'utf8'); // this method is used to read the local file data and after await method complete this store the file data into new defined variable. utf8 method is used to convert the file data as string
                        console.log(data); //  print the file data here.
                    } catch (err) {// run this block script if any error found during execution the main script or try block script
                        console.error("Error reading file:", err);//print the received error uring the execution of try block script.
                    } // end of catch block scope.
            }// end of function

    // An Another example with fetch method that interact with server and get the data from the server.
            //in fetch method the default method is GET, and if you want sent the data on server then you can use the post method.it have another methods like put, delete also used for differnt operations like remove the data from server etc.

            // with get method..

                fetch('https://jsonplaceholder.typicode.com/posts/1')//send a request for get the data from the server and fetching url of the server where the data is stored or placed.
                    .then(response => response.json())// if got the response from the server as json data in json format then it convert json data into json object
                    .then(post => {  // after successfully resolve the promises or received the data here run a  arror function in .then method where accessing the received json object properties.
                        console.log('\n'+'Post title:', post.title); // print the received json object properties like body,title, userId, id etc.
                        console.log('\n'+'Post title:', post); // print the received json object .
                    }) // end of arrow function
                    .catch(error => { // caught the error if data not received from the error or any other error while we send a request to server and then server trying to respond. if any failuer occure then it send the error, that error received by the catch function.
                        console.log('Somthing miss Happening-: Sorry Unable to process your request yet..Please Try again later !!!', error); // print the received error.
                    });
            //  output on Resolved/ on successfully connection :- Post title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit

            
    // an example with the send request for post data on server
           let body_data = " The Fetch api is an Important part of the javascript. this is used to fetch data from the server and post data on server according to user requirement."
   +" Fetch Api play a major role in javascript and its a modren part of javascript, this get and post the data from the server or on server without any lack or without reload the page using "
   +" API Technology that interact with the server remotly."
   +"this is a part of asynchronous function where it create the connection between the user and server through the function. after that server send back the response,"
    +"if the response have result then .then function/method execute the script other wise .catch method handel the error and find the error.";
    
            fetch('https://jsonplaceholder.typicode.com/posts', { //send a request for post the data on server, this is the server url
                method: 'POST', // method for send data on server
                headers: { // method for define the type of data that will be posting on server.
                    'Content-Type': 'application/json' // define type of data
                },
                body: JSON.stringify({ // convert the data in json format from the string format, because the api server receive the json data easily and securely
                    title: 'javascript Web Api fetch method for sent data on server.', // the title of the post
                    body: body_data, // main data of the post placed in body property
                    userId: 11, // by default add here userid as 1
                    id: 101 // by default add here userid as 1
                }) // end of json stringfy function. 
            })
            .then(response => response.json()) //after sending data on server if the data is successfully posted and got response as resolved 
           .then(data => console.log(data))// then run the arrow function for execute further script according the user requirement.. here for testing purpose we have just print the server response after posting the data on server.
           .catch(error => console.error('Error:', error)); // catch the error if somthing wrong during posting the data on request. catch error handler caught that error and then print it for notify to user whats the problem occured during posting the data on server.
           
            /* output as => we have sent a data on dummy server and dummy server sent me the dummy response.    
                     
            {
                title: 'javascript Web Api fetch method for sent data on server.',
                body: ' The Fetch api is an Important part of the javascript. this is used to fetch data from the server and post data on server according to user requirement. Fetch Api play a major role in javascript and its a modren part of javascript, this get and post the data from the server or on server without any lack or without reload the page using  API Technology that interact with the server remotly.this is a part of asynchronous function where it create the connection between the user and server through the function. after that server send back the response,if the response have result then .then function/method execute the script other wise .catch method handel the error and find the error.',
                userId: 11,
                id: 101
            }
            */


    /*   @@@@@@@@@@@@@@@   Web Geolocation API    @@@@@@@@@@@@@@@@@@@@@@@@
    
            The HTML Geolocation API is used to get the geographical position of a user. 
            Geolocation is most accurate for devices with GPS, like smartphones.

            Using the Geolocation API

            The getCurrentPosition() method is used to return the user's current position coordinates in form of latitude and longitude.
            
    ****    in simple terms we can sya that the its a Web-Browser feature that allows to website get the user current geo-location in form of latitude and longitude coordinates.
            this required the permission from the browser to get the location of user. 
            
            syntax :-> navigator.geolocation.getCurrentPosition()//this get the current location of user.   

            some basic methods of navigator location like The getCurrentPosition() Method - Return Data..

            The getCurrentPosition() Method - Return DataThe getCurrentPosition() method returns an object on success. The latitude, longitude and accuracy properties are always returned. The other properties are returned if available:

            //              Property	                    Returns
                    //  coords.latitude	            The latitude as a decimal number (always returned)
                    //  coords.longitude	        The longitude as a decimal number (always returned)
                    //  coords.accuracy	            The accuracy of position (always returned) in meters like -> 1966.595645675 this mean the object located in 2km of the provided coordinates.
                    //  coords.altitude	            The altitude in meters above the mean sea level (returned if available) // null
                    //  coords.altitudeAccuracy	    The altitude accuracy of position (returned if available)// null
                    //  coords.heading	            The heading as degrees clockwise from North (returned if available) // null
                    //  coords.speed	            The speed in meters per second (returned if available) // nul
                    //  timestamp	                The date/time of the response (returned if available) // retrun time in miliseconds.
    */





    