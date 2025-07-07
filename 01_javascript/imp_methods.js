/*  iterator functions
                        Iterable VS Iterator
 //my_list = [1, 2, 3]   # Iterable that object keys or values that you should use into the arrat for loop or etc.

    //my_iter = iter(my_list)  # Iterator that object keys or values that you should use in for lop and defined  object is provide key and values one by one...called as iterator 
    
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
    
            String to Number => Number("3.14") // convert string to number like 3.14
            Math.PI to Number => Number(Math.PI) // 3.141592653589793  // Return value of PI 
            Empty string to Number => Number("    ") 0 // Return 0 from Empty String
            Empty string to Number => Number("") //0 // Return 0 from Empty String
            whitespace String to Number =>  Number("99 88")// NAN // Return NOT A NUMBER
            alphabet string to Number => Number("John")   // NAN // Return NOT A NUMBER

*/