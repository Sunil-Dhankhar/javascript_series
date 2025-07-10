/*  iterator functions
                        Iterable VS Iterator
 //my_list = [1, 2, 3]   # Iterable that object keys or values that you should use into the arrat for loop or etc.

    //my_iter = iter(my_list)  # Iterator that object keys or values that you should use in for loop and defined object provide key and values one by one...Called as iterator 
    
    drop(5)      =>	Returns an iterator that skips a specified number of elements before yielding the rest ******* this is bassicaly used for reduce the all values til mentioned number [1,2,3,4,5,6] = 5,6
    every()     =>	Returns true if all elements satisfy a test function
    filter()    =>	Returns an iterator containing elements that satisfy a filter function ******* filter and find that values which pass the conditional statement test. like (x >=3) => 3,4,5,6
    find()	    =>  Returns the first element that satisfies a test function ******* find a first value from starting point who pass the conditional test like [11, 1,26,78,90] , (x > 18) => 26
    flatMap()	=>  Returns an iterator by mapping each element and then flattening the results ******* used to create a array mapping without changing original array. [1,2,3,4,5] (x => x *10) = 1,10,2,20,3,30,4,40,5,50
    forEach()	=>  Executes a function once for each element in the iterator. ******* this is used for itrate(pass value and key one by one) each object value to iterator varible for further process 
    from()	    =>  creates an iterator object from an iterable 
    map()	    =>  Returns an iterator with all elements transformed by a map function ******* it map the original array in the singe layer array [1,2,3,4,5] , (X => X*2) =2,4,6,8,10 
    reduce()	=>  Applies a reducer function against each element to reduce it to a single value ******* this is used to  reduce a all values into single value according to the function condition [175 , 25 ,24, 50] , (x >= 25 { sum += x}) = 250
    some()	    =>  Returns true if at least one element satisfy a test function ******* this method check and verify that atleast single value pass the conditional test from the provided object or array values [1,5,15,18,21,54,2] (x > 10) = true, (x>60 ) = false,  
    take()      =>  Returns the values till the number mentiond inside the function  ******* this methode is used for get all value till mentioned number of value ...x= [1,2,3,4,5,6,7] take(5), 1,2,3,4,5 
*/


/* conversional methods in javascript

        ****convert to a string*****
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        array => fruits.toString(); // convert array into a string
        date => date.toString() // convert the date into a string
        Number => nums.toString() // convert the Number into a string
        object => object.toString() // convert the object into a string,and output after converting the object as [object  object]
        for Example :=> 
            let person = {
                    firstname: "John",
                    lastname: "Doe",
            }
            let text = "User : "+person["firstname"].toString(); 
            console.log(text); // User : John
            console.log(typeof text); // string

*/

/*          **********Convert Number from others datatyps********
                
        +++++++++ Number() =>   Returns a number, converted from its argument +++++++++

            String to Number => Number("3.14") // convert string to number like 3.14
            Math.PI to Number => Number(Math.PI) // 3.141592653589793  // Return value of PI 
            Empty string to Number => Number("    ") 0 // Return 0 from Empty String
            Empty string to Number => Number("") //0 // Return 0 from Empty String
            whitespace String to Number =>  Number("99 88")// NAN // Return (NAN) NOT A NUMBER
            alphabet string to Number => Number("John")    // NAN // Return (NAN) NOT A NUMBER
            Unary + Operator => converts its argument from a varible to Number
            for example =>
                
*/
      {
                let a = "4"; // String
                let b = + a; // + operater before called Unary + operator
                console.log(typeof a + " + " + typeof b); // String + Number   
                console.log( a + " + " + b); // String + Number   
        }

        {
                let a = "google.com"; // String
                let b = + a; // converting string to number // NAN Value
                console.log(typeof a + " + " + typeof b); // String + Number);
                console.log(a + " + " + b); // String + Number   
        }


/*  ******************************Number to String *********************
                Number to string => string methode and to string methode
                
                String(argument); => // its a function that is used to convert any type of data into the string, without any error. **  Converts any value to a string and Works with: undefined, null, numbers, booleans, arrays, objects, etc.
                value.to.String // its Pre-defined Javascript Function that is used to convert its passed value into String.  ** Converts a value to a string only if it is not null or undefined. it returns or throws an error if called on null or undefined
                
                // String => used to convert the  Number type or Number into String type
                // toString => used to convert the  Number type or Number into String type
                  like => let x = 12345; // type is Number
                  console.log(String(x)); // type converted in String
                  console.log(toString(x)); // type converted in String

        +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

             ******************Converting Dates  ****************
                
             Converting Dates to Number
             --------------------------
             let dates = new Date()
             Number(dates);// returns 1404568027739
             dates.getTime()// returns 1404568027739 //getTime() does the same as Number.
             
             Converting Dates to String
             --------------------------
             String(Date());  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
             Date().toString // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)" // toString() does the same.

             Many More Methods also have like getDate(), getDay(), getFullYear(), getMinutes(), getMonth() etc are also convert as string.

             Converting Booleans to Numbers
             --------------------------
                Number(false) // return 0
                Number(true) // return 1

             Converting Booleans to String
             --------------------------
             
             String(false) // return "False"
             String(true)  // return "True"
             
             Automatic Type Conversion 
             --------------------------

                 5  + null    // returns 5       because null is converted to 0            
                "5" + null  // returns "5null"   because null is converted to "null"
                "5" + 2     // returns "52"      because 2 is converted to "2" // ( in javascript + operator work as two type like (1). Concatination (2). arithmatic operator, here 5 is string so it 2 treat as string and concatinate both )
                "5" - 2     // returns 3         because "5" is converted to 5
                "5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

             Automatic String Conversion 
             --------------------------
                let myVar;
                // if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
                // if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
                // if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"

                // if myVar = 123             // toString converts to "123"
                // if myVar = true            // toString converts to "true"
                // if myVar = false           // toString converts to "false"


             
*/