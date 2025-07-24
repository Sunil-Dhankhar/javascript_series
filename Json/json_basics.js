/* @@@@@@@@@@@@@@@@@@@@@@@  JSON =>  Javascript Object Notation   @@@@@@@@@@@@@@@@@@@@@@@ */

// JSON is not a language, its a simple and lightweight format of object data that is used to transfer from local to server and server to local.
// JSON is a text format for storing and transporting data
// JSON is "self-describing" and easy to understand
// JSON object has a property like pair of data (KEY and VAlUE) that is wraped in {}.
            // for Example => { fname:John, lname:smith, occupation:worker}
// JSON is a lightweight data-interchange format
// JSON is plain text written in JavaScript object notation
// JSON is used to send data between computers
// JSON is language independent 
//  there are basically two type of methods for handle tha data
        //  1.> JSON.stringify()
        //  2.> JSON.parse()

        // JSON.stringify() is used to convert a JavaScript object into a JSON string.
        // JSON.parse() is used to convert a JSON string into a JavaScript object.

//  *****************  JSON Syntax Rules    ****************

// JSON syntax is derived from JavaScript object notation syntax: { "name":"Satveer Gill",  "age": 25, "phone":7845684582,"student":false, "subject":["hindi","math","english"],"address":null}

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

        // json common rules for write json data in right format:-
        // example =>   {"category":"fruit", "name":"apple", "price":200, "imported":false,"parent-country":null}
                        // here in this above example you can see or notice that:-
                        // string values always wrapes in quotes(" ") and key always written as string with quotes like ("category","name","price" etc.)
                        // and values always write with type like if the value of  key is string then wrap it with quotes like ("fruit", "apple")
                        // and other type( numbers, boolearn, Null, object, array-number ) of values write as without the quotes like (200,false, null).  
            

// @@@@@@@@@@  JSON vs XML  @@@@@@@@@@@

// JSON and XML both are used to send and receive the data from the Server.

// JSON is a Format of data that is clean and easy to use. its like a javascript object and easly accessable, its very light-weight. it comes in just pair of key-value data.
// in comarison of Json the XML is not a format of data, its a markup Language Like HTML and it contain various nodes like HTML DOMS. its not easy to use
    // or very complax as comparison to json. its heavy to load.

    // example of json and xml:- 
        /* JSON => {"employees":[                                                       //  start the json object with { then define a key as string then applied colon(:) for markup,after that in value section starting array
                                    { "firstName":"John", "lastName":"Doe" },           //  in array property we initilize more values as json object
                                    { "firstName":"Anna", "lastName":"Smith" },         //  in array property we initilize more values as json object
                                    { "firstName":"Peter", "lastName":"Jones" }         //  in array property we initilize more values as json object
                                ]}                                                      //  End of array then after end of json object.

            XML =>  <employees>                                                         //  start a branch wtih main employee tag                
                            <employee>                                                  //  start a new sub-branch with in the main branch again tag name employee
                                <firstName>John</firstName> <lastName>Doe</lastName>    //  start two sub branches with its endspoint. and add the keys and values both in branches like first branch print the key and second branch print its value
                            </employee>                                                 //  end of sub branch employee
                            <employee>                                                  //  start a new sub-branch with in the main branch again tag name employee
                                <firstName>Anna</firstName> <lastName>Smith</lastName>  //  start two sub branches with its endspoint. and add the keys and values both in branches like first branch print the key and second branch print its value
                            </employee>                                                 //  end of sub branch employee
                            <employee>                                                  //  start a new sub-branch with in the main branch again tag name employee
                                <firstName>Peter</firstName> <lastName>Jones</lastName> //  start two sub branches with its endspoint. and add the keys and values both in branches like first branch print the key and second branch print its value
                            </employee>                                                 //  end of sub branch employee
                    </employees>                                                        //  end of main branch with main tag employee
        */

// here you see in both format JSON data is smaller, shorter, easy to readable and light-weight as comparision to XML data.

// JSON doesn't use end tag
// JSON is too shorter then XML
// JSON is quicker to read and write
// JSON can use arrays
    
// when we use Ajax then we found a conclusion about both language that the Json format is much better then XML because :-
        // AJAX applications, JSON is faster and easier than XML:

            // Using XML

            // Fetch an XML document
            // Use the XML DOM to loop through the document
            // Extract values and store in variables
            // Using JSON

            // Fetch a JSON string
            // JSON.Parse the JSON string


//  @@@@@@@@@@    JSON Data Types   @@@@@@@@@@@@@@@@

        // Valid Data Types
        // In JSON, values must be one of the following data types:

        // a string                     =>      { "name":"John"}
        // a number                     =>      { "age":25}
        // an object (JSON object)      =>      { "employee":{"name":"John", "age":30, "city":"New York"}}
        // an array                     =>      { "employees":["John", "Anna", "Peter"]}
        // a boolean                    =>      { "sale":true}
        // null                         =>      { "middlename":null}

// @@@@@@@@@   JSON.parse()    @@@@@@@@@@@@@@

    // in javascript  when we receive the data through the ajax call, then the received data always n String format and we cannot access its 
    // keys and values as per requirement, here JSON.parse() format play a major role that convert the received string into the json object 
    // and after convert the json data from string to object now we can easly use the its properties and values according to our requirement.

    // for example =>

        const json_string = '{ "name":"Satveer Gill",  "age": 25, "birth":"1986-12-14", "phone":7845684582,"student":false, "subject":["hindi","math","english"],"address":null}'; // assume that this json string is received from the server for retrive the information about a perticuler student, and store this string into new defined variable
        let convertInObj = JSON.parse(json_string);// convert the received json string into javascript object for accessable its property and values
        let dob     = new Date(convertInObj.birth)
        console.log(convertInObj);// verifying the object value via print it.
        console.log(convertInObj.name);// print the object first value for get the name of student.
        console.log(convertInObj.age);// print the object another value for get age of student.
        console.log(dob.toLocaleString());// print the object another value for date of birth of student.// with LocaleString method it convert the iso time into local time
        console.log(dob.toString());// print the object another value for date of birth of student.// with toString method date converts from iso format to local time format with string value like day name, month name, date, year, then time.
        console.log(convertInObj.phone);// print the object another value for get age of student.
        let text = "";// define a new variable as empty string value

        convertInObj.subject.forEach(Values => // grabing each value array value that is property of subject key in object with help of foreach. foreach loop is used for extract each array value
        { // forEach loop scope is start.
            text += Values +"\n"; // grab each value of array property and inserting into the text variable
        });// end of scope  of forEach loop 
        console.log(typeof text);// print the each value of array as string.
        console.log(text);// print the each value of array as string.

// this is the core example of how to use JSON.parse() method in javascript for convert the received json string into json object for grab the value from it accordingly your requirement.


// @@@@@@@@@@@@@@@@@ JSON.stringify()    @@@@@@@@@@@@@@@@@@@

//  stringify method is javascript method and its working style is opposite of json parse method that is used to sent the data on server in format of json,
//  then this method is used to convert the user data like array, objects etc into json format like JSON.stringify(obj). because mostly servers api follow the jSON format.
            // for example => 
                const student = {name:"rohanpreet",class:"b.com", rollno:44}
                const myArray = ["audi","tesla","BYD", {"car type": "sedan", "car category": "SUV", "car type": "Personal Vehicle"}, student];

                let maya = JSON.stringify(myArray)
                let stud = JSON.stringify(student)
                console.log( maya);
                console.log(typeof maya);
                console.log( stud);
                console.log(typeof stud);
    
    // Storing Data you can store the json string data into browser storage called as localStorage. after converting the data into json string you can store this string into browsr memory and after that when you need this data you can easily grab this data from the browser memory and use data accordingly.

    // for example =>  we have a json object converted json string, we use this string in next example.//
        // localStorage.setItem("car info", maya); // with this method i have set a string with multiple data values into browser storage. this store the data in key-value format
        // localStorage.getItem("car info"); // with this method i grab set value from the browser storage with help of key. in simple term when you have required browser storage data then you get it with putting just key in get method. after that can access this data according to your requirement by parse the json string into js object. then you can easily access the object values.


    // @@@@@@@@@@@@@@  Stringify a Function   @@@@@@@@@@@@@
    
        // In JSON, functions are not allowed as object values.
        // The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:
        // for example :=>  without function value
        const obj = {name: "John", age: function () {return 30;}, city: "New York"};//define a object with function 
          {  
            const myJSON = JSON.stringify(obj); //convert object into string with method stringify. note here..stringify not converting the functin into string, this skip the function with its key 
            console.log(myJSON);// output   => {"name":"John","city":"New York"}
           }
           
           {//with function value
            // if you wanna the functin value also pass with its key then there is a techniqe that mentioned below. 
            obj.age = obj.age.toString();//grab and convert the value of obj.key that contain function into string with help of toString Method before stringify the data.
            const myJSON = JSON.stringify(obj); //now convert the object values into json string with help of JSON stringify method
            console.log("\n"+myJSON);// output   => {"name":"John","age":"function () {return 30;}","city":"New York"}
           }


    //  @@@@@@@@@@@@@@@@@@@   JSON Object Literals   @@@@@@@@@@@@@@@@

    // Inside the JSON string there is a JSON object literal: like
           '{"name":"John", "age":30, "car":null}'
    // in above example there are three object Literals '{"name":"John"}','{"age":30}','{"car":null}'
    // a pair of key and value is known as json object literal.

    // JSON object literals are surrounded by curly braces {}.
    // JSON object literals contains key/value pairs.
    // Keys and values are separated by a colon.
    // Keys must be strings, and values must be a valid JSON data type:

        // string
        // number
        // object
        // array
        // boolean
        // null
        // Each key/value pair is separated by a comma.
    // we here cover json object, and array with examples
            const car_info = {                                  ///define an object with array as value property against the key cars.
                    "name":"John",
                    "age":30,
                    "cars":["Ford", "BMW", "Fiat"]
                }

    let carinfo = JSON.stringify(car_info) // convert the js object into json string with help of stringify method
    let car = JSON.parse(carinfo); // convert json string again into json object for grab the object value for use as per requirement
    console.log(carinfo+"\n"); // print all json string with key and value
    let tex = ""; //define the variable as empty string value
    
    // json array how to use or grab the each value of array from the objected array
    console.log("\n"+car.cars[1]); // print the array value as per requirement from the array object. // grab single value if you know the index of the value.
        for(let i in car.cars)// for in loop start on object array value
                {
                    tex += i+".) => "+car.cars[i]+"\n"; // add each array value into tex variable
                }
        
                let p =0;
        car.cars.forEach(vals => { p = p+1; // starting the for each loop on object array that grab only array value/ because this is basically used for array values
                    tex +="\n"+ p+".) => "+vals+"\n"; // add each array value into tex variable
                })// end of for each value
                console.log(tex); // print the tex variable stored values


    
    
    // ###############   JSON Server    #############

    // A common use of JSON is to exchange data to/from a web server.
    // When SENDING or Receiving data from a web server, the data is always a string.
    // Parse the data with JSON.parse(), and the data becomes a JavaScript object.

    // Sending Data
    // If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server
                window.location = "demo.php>x=" + carinfo; // this is the simple techniqe for send the data on server via URL

    // Receiving Data
    // If you receive data in JSON format, you can easily convert it into a JavaScript object:
                
                let carInfo = JSON.parse(carinfo); //this method we earlier discussed several time that it convert json string into js object. now you can use object each property with denoting object key with object.
            
    // JSON From a Server
    
    // You can request JSON from the server by using an AJAX request
    // As long as the response from the server is written in JSON format, you can parse the string into a JavaScript object.

    //  for example :->

   const xhttp = new XMLHttpRequest(); // define a new object for XMLHttpRequest for server request
    xhttp.onload = function(){ // define event function that run or execute when event perform like when response received then this event and function both execute.
        let obj = JSON.parse(this.responseText); // if its object in string
        const myArr = JSON.parse(this.responseText); // if its array in string
        console.log(obj.name);//print object property as value if response contain a object in form of string
        console.log(myArr[0]); // print array value according to given index if response contain a array. in form of string
    }//end of callback function
    xhttp.open("GET","demo.php", true); // create a Get data from server, request through ajax call on server. 
    xhttp.send(); // obj.send method is used to send initilized request on server for get data in response from the server.


    // json with php 
    // if you want to send data onto the server then
    // convert the retrived dynamic data from the database and set it as array or object then encode it into json format with help of json_encode method then send it on server
    
    // or if you retrived the data from server then decode it with method json_decode ..after theat you can use this data as per your requirement