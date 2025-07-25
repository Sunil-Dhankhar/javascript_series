/* A Small Description About  Lodash Library */

// Underscore is a Utility Library that is used to create a user friendly code environment with help of Readymade Function. with these functions you can create
// your code neat and clean with short code like 10 -15 line code become like 2-5 line code with same output. 
// this Library is very powerfull that works with Arrays and Objects for create your code easy and clean for faster execution.
// this library is smaller version of Lodadsh Library.

// UND = underscore Library

const _ = require('underscore'); // connect with underscore Library

{ // _.each => this perform the role of foreach loop. 
    let arr1 = [1, 2, 2, 3, 4, 8, 12]; // define an Array with some values

    _.each(arr1, (value, index) => { // apply  the each function of UND that perform the Forach loop job quickly in short and smart version.
        console.log(`Index ${index}: value ${value}`); // print the array values with index one by one 
    });
}

{   // _.map => this function perform also foreach loop job, working of each and map is almost same but a  mojor differnce between both is that the each loop not return the values if you permorming like multiplication on array values,
    //          then it not return the result as expected after calculation. this is the change in Map function, map function always return the values. you can see changes in example results that we have mentioned ahead.

    let arr1 = ['apple', 'mango', 'oranges', 'grapes']; // define an Array with some values
    let arr2 = [1, 2, 6, 3, 4, 8, 12]; // define an Array with some values
    const fruits = new Map([["apple" , 500], ["mango", 700], ["orange", 300], ["grapes", 600]]); // declare a new variable with Map Object have multiple pair values 
    
    let list = _.map(Array.from(fruits),([key, value]) => { // define map method for destructure map object that containmultiple pair of arrays, destructure each array pair and then apply a call back function for extract the each key and value form the array pair 
        return `${key} is ${value} KG`;     // return the extracted value from the array according to your required Structure. 
    },);
    console.log(list);//print the returned data as like => [ 'apple is 500 KG',  'mango is 700 KG',  'orange is 300 KG',  'grapes is 600 KG']
   
    const vals = _.map((arr2), ((key) => { // define the map method for extracting the each value of array for further use in script after the call back function.
            return key * 10; // Return the result of each array value after performing the calculation.
    }), ); 
    console.log(vals); // print the Return data as like => [ 10, 20,  60, 30, 40, 80, 120]
        
    const google = _.each(arr2 , (valu) => { // define the each functon or method for extracting the each array value for further use in script after the call back function 
        return valu * 5; // Return the result of each array value after performing the calculation.
    });
    console.log(google) // print the Returned result as like => [1, 2, 6, 3, 4, 8, 12] // here you see that, after performing the calculation in call back function it not return the result as expected.
                        // its just return the new array as like same array that we profide to extracting value. if replace just method from each to map, then the calculation work but in each it not work. 
}

{   //_.reduce => this method is powerfull tool of the underscore library..that is used for reduce the multiple values into single value. after prforming the call back function
 
    let arr2 = [1, 2, 6, 3, 4, 8, 12]; // define an Array with some values
    let result = _.reduce(arr2,(key, value) =>{ // define the reduce function for perform the callback function script and reduce all array value into single value as result and then return this result for further use according to requirement
        return key * value; // calculate the key ass accumolator and value as value of array, multiply with each other and return a single value after performing each value of the array
    }); 
    console.log(result); // print the returned result of reduce function. => 13824 
                        // where as map return at this point like [   0,  2, 12, 9, 16, 40, 72 ]. with same functionality.
                        // there is a major difference between them both function.
}

{   // _.reduceRight => this method is useful when you want to use the array values from opposite site means you want to use values from rigth side to left side.
    let list = [[0, 1], [2, 3], [4, 5]]; // define multilevel or nested array
    let flat = _.reduceRight(list, (a, b) => { return [...a, ...b]; } ); // reduce right method spot the array values from right side to left then it returns the result in a new array after concatinate two array a with array b with help of spread operator method.
    console.log("\n",flat); // print the return data from the upper mentioned function like [ 4, 5, 2, 3, 0, 1 ].
    
    let lists = [9,8,7,6,5,4,3,2,1,0]; //define a simple array with numaric values.
    let flats = _.reduceRight(lists, (a, b) => { return a.concat(b); },[]);// reduce right method spot the array values from right side to left then it returns the result in a new array after concatinate two array a with array b with help of concat method.
    console.log("\n",flats);// print the return data from the upper mentioned function like [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].
    

    // Notice :-    here we found a major differnce that concat method works for all elements like number,string, objects, collection etc.
    //              but spread operator is working when if array recived a value in array or string, if it found number or object or other type of data then it give the TypeError
    //              becouse in sperad operator rules it works only on arrays or string for concatination into single.
    //              when we tried to provide the list of array like lists then it found in array direct numbers not array not string do it provide me error like type of error
}

{   // _.filter method is a useful when you want to filter the arrays, objects, or other data based on condition
     let lists = [9,8,7,6,5,4,3,2,1,0]; //define a simple array with numaric values.
     let flats = _.filter(lists, (value) => { return value % 9 == 0 ; }); // _.filter method filters values based on the condition specified in the callback function and returns a new array containing the values that meet that condition.
     console.log(flats); // [ 8, 6, 4, 2, 0 ] // print the returned value by filter method after filtering the data.
}

{   //_.findWhere() is used to find the first matching object in an array of objects based on specified property values.

    let superheros = [9,8,7,5,6,4,8,2,4,6,1,8,3]
    let student = [ {name:"mohit", class:"mcom", rollno:524},
                    {name:"rohit", class:"bcom", rollno:527}, 
                    {name:"gagan", class:"bcom", rollno:521}]; //define the Array object with object properties like key and values 
    let info = _.findWhere(student, {class: "bcom" }); // _.findWhere method is find the first value from the array object list based on the given condition and return the matched value 
    console.log(info); // print the returned value by the findwhere method after matching the condition.
    
    let info2 = _.where(student, {class: "bcom"}); // _.Where method is find the all values from the array object list based on the given condition and return the matched value 
    console.log(info2);//[  { name: 'rohit', class: 'bcom', rollno: 527 }, { name: 'gagan', class: 'bcom', rollno: 521 }] 
    // print the returned value by the where method after matching the condition.
   
    let info3 = _.find(superheros, num => num === 8); // _.find method is find the first value from the anytype of element list based on the given condition and return the matched value 
    console.log(info3);// print the returned value by the find method after matching the condition.  // 8

}
