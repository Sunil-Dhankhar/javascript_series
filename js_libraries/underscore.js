/* A Small Description About  Lodash Library */

// Underscore is a Utility Library that is used to create a user friendly code environment with help of Readymade Function. with these functions you can create
// your code neat and clean with short code like 10 -15 line code become like 2-5 line code with same output. 
// this Library is very powerfull that works with Arrays and Objects for create your code easy and clean for faster execution.
// this library is smaller version of Lodadsh Library.

// UND = underscore Library

const _ = require('underscore'); // connect with underscore Library

// ***************************************************************************************************************************************************************************************************************************************************************** // 

//  Collaction Methods

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

    let superheros = [9,8,7,5,6,4,8,2,4,6,1,8,3] //define a simple array with numaric values.
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

{   // reject method => _.reject(list, predicate, [context])=> this method used to returns values that not satisfy the condition in simple words it returns false condition values without any if else statement.
    let supernum = [9,8,7,5,6,4,8,2,4,6,1,8,3]; //define a simple array with numaric values.
    let result = _.reject( supernum, (num) => num %2 === 0 ) // _.reject method returns those value from the array that not satisfy the mentioned conditions.
    console.log(result);    // output => [ 9, 7, 5, 1, 3 ]
}

{ // every => _.every(list, predict, [context])
    let supernum = [9,8,7,5,6,4,8,2,4,6,1,8,3]; //define a simple array with numaric values.    
    let result = _.every(supernum, (num) => num >= 9 ) // _every method check that each element of array satisfy the condition, if every value satisfy the condition then it returns true, if single value not satisfy condition then it returns false.
    let response = _.every(supernum, (num) => num <= 9 )// _every method check that each element of array satisfy the condition, if every value satisfy the condition then it returns true, if single value not satisfy condition then it returns false.
    let results = _.every(supernum, (num) => num >= 0 )// _every method check that each element of array satisfy the condition, if every value satisfy the condition then it returns true, if single value not satisfy condition then it returns false.
    console.log(result); // output => false
    console.log(response);// output => true
    console.log(results);// output => true
}

{ // some => _.some(list, pridict, [context])
    let supernum = [9,8,7,5,6,4,8,2,4,6,1,8,3]; //define a simple array with numaric values.    
    let result = _.some(supernum, (num) => num >= 9 ) // _some method check that each element of array satisfy the condition, if single value satisfy the condition then it returns the true, if nothing is satisfy then it returns false 
    let results = _.some(supernum, (num) => num >= 10 ) // _some method check that each element of array satisfy the condition, if single value satisfy the condition then it returns the true, if nothing is satisfy then it returns false 
    console.log(result);// output => true
    console.log(results);// output => false
}

{ // some => _.contains(list, value, [fromIndex])
    let supernum = [9,8,7,5,6,4,8,2,4,6,1,8,3]; //define a simple array with numaric values.
    let fruits = ["apple", "oranges", "grapes", "kiwi"]  // define the array value in string form
    let student = {name: "sumit", rollno:1285, streame:"B.com"} // define the variable as object with multiple values
    let students = [{name: "sandeep", rollno:8545, streame:"BCA"},{name: "Arvind", rollno:185, streame:"BA"},{name: "Neeraj", rollno:1875, streame:"BBA"}];
    let result = _.contains(supernum , 7); // the _.contain method is used to return the boolean value based on condition. if condition is satisfy then return true else return false, here find 7 value from array value. 
    let results = _.contains(fruits , "guava"); // the _.contain method is used to return the boolean value based on condition. if condition is satisfy then return true else return false, here find guava value from array value.
    let response = _.contains(student , "M.com"); // the _.contain method is used to return the boolean value based on condition. if condition is satisfy then return true else return false, here find M.com value from array value.
    //let responses = _.contains(students , "BCA" ); the _.contain does't Support to array object.. so this method cant work on array object, if you find the value from array objects then use another method like some that support callback function
    console.log("\n",result) // output => true // because the 7 number value is exist in array value
    console.log("\n",results) // output => false // because the guava fruit not exist in array value
    console.log("\n",response) // output => false // because the m.com value not exist in object properties

    // now we find the value from array objetcs with another method like _.some 

    let responses = _.some(students, (nums) =>{ // _.some method is used to find the 
        return nums.streame === "BCA";// check and return true or false based on condtion if value found then true else false
    })
    console.log(responses); // output => true // because the BCA Value is a property of students array Object.
}

{ //invoke =>_.invoke(list, method, [fromIndex]) // this methode is used to apply the methode on each value of array and affect the each element of array or object
    let fruits = ["apple", "oranges", "grapes", "kiwi"]     // define the array value in string form
    let student = {name: "sumit", rollno:1285, streame:"B.com"} // define the variable as object with multiple values 
    let result = _.invoke(fruits , 'toUpperCase' );  // _.invoke method apply mentioned method on each element of array for affect the each value of array and after affected return each value with effect
    let response = _.invoke(student , "toUpperCase"); // _.invoke method apply mentioned method on each element of object for affect the each value of object and after affected return each value with effect
    console.log(result); // output => [ 'APPLE', 'ORANGES', 'GRAPES', 'KIWI' ]. // convered each value of array in Upper Case from lower Case
    console.log(response);// output => [ 'SUMIT', undefined, 'B.COM' ]. // convered each value of object value in  Upper Case from lower Case

    // if you want use a condition based as like first character should be in uppercase and rest are in lowecase then this not possible with invoke method because not a perticuler methode is in javascript for this.
    // for like this condition we can use another method that support callback function like map function where we use multilple method for according to our requirement for satisfy the condition 
    // like charAT find the character find the first character of each element, then touppercase method convert this into uper and then afer slice method is used to hold the rest value of elemt for concatinate the value.  
    let results = _.map(fruits , (num) => { // map function is used for apply condition on each element of array that is mentioned in call back function 
       return num.charAt(0).toUpperCase()+num.slice(1); // return the value after affect with this condition. 
    } ); // charAT(0)=> a.toUpperCase=>A.slice=>pple = Apple.
    console.log(results);// output => [ 'Apple', 'Oranges', 'Grapes', 'Kiwi' ]. 
}

{ // Pluck => _.pluck method is used get perticuler property from array of objects. this method works only on Array of objects.
    let students = [{name: "sandeep", rollno:8545, streame:"BCA"},{name: "Arvind", rollno:185, streame:"BA"},{name: "Neeraj", rollno:1875, streame:"BBA"}]; // define the array of objects
    let  result  = _.pluck(students, "streame"); // pluck method is used to find the value related to data from the array of objects , here it find the streame field related data from the array objects if condition satisfy then it returns the values related with field values
    let  results  = _.pluck(students, "name"); // pluck method is used to find the value related to data from the array of objects , here it find the name field related data from the array objects if condition satisfy then it returns the values related with field values
    let  resultss  = _.pluck(students, "rollno");// pluck method is used to find the value related to data from the array of objects , here it find the rollno field related data from the array objects if condition satisfy then it returns the values related with field values
    console.log(result); // output => BCA,BA,BBA 
    console.log("\n"+results) // output =>  sandeep,Arvind,Neeraj
    console.log("\n"+resultss); // output => 8545,185,1875
}

{ // max => _.max(list, [iteratee], [context]) // this method is used to find the maximum value from the array or array of objects
    let supernum = [9,8,7,5,6,4,8,2,4,6,1,8,3]; //define a simple array with numaric values.
    let students = [{name: "sandeep", rollno:8545, streame:"BCA"},{name: "Arvind", rollno:185, streame:"BA"},{name: "Neeraj", rollno:1875, streame:"BBA"}]; // define the array of objects
    let maxNum = _.max(supernum); // max method is used to find maximum value from given simple array then it applied diirect on array and  and return the minimum value from the array list.
    let Maxnum = _.max(students, (number) => number.rollno); // max method is used to find the maximum number from the array object, if value is not in simple terms then you have required here a callback function, in which you define the object value that find the maximum number based on this value.  
    console.log(maxNum);//9
    console.log(Maxnum);//{ name: 'sandeep', rollno: 8545, streame: 'BCA' }
}

{ // min => _.min(list, [iteratee], [context]) // this method is used to find the minimum value from the array or array of objects

    let supernum = [9,8,7,5,6,4,8,2,4,6,1,8,3]; //define a simple array with numaric values.
    let students = [{name: "sandeep", rollno:8545, streame:"BCA"},{name: "Arvind", rollno:185, streame:"BA"},{name: "Neeraj", rollno:1875, streame:"BBA"}]; // define the array of objects
    let miNum = _.min(supernum);// min method is used to find minimum value from given simple array then it applied diirect on array and return the minimum value from the array list.
    let Minum = _.min(students, (number) => number.rollno);// min method is used to find the minimum number from the array objects, if value is not in simple terms then you have required here a callback function, in which you define the object value that find the Minimum number based on this value.
    console.log(miNum);//1
    console.log(Minum);// output{ name: 'Arvind', rollno: 185, streame: 'BA' }
}

{ // sortBy => _.sortBy(list, iteratee, [context]) // this method sort the number as per asc orders
    let supernum = [9,8,7,5,6,4,8,2,4,6,1,8,3]; //define a simple array with numaric values.
    let sortit = _.sortBy(supernum, (nums) => { // _.sort method is used for sort the arrays value in ASC order.
        return nums; // retrun value after sorthing array values in asc order
    })
    console.log(sortit); // [ 1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 8, 9 ]// print the sorted array
}

{ //groupBy => _.groupBy method is used to create the objects groups based on its array value. its basically works with arrays, objects and array objects.
    let groupval = [1.2, 1.4, 1.9, 1.6, 2.5, 2.2, 2.8, 3.9, 1.8, 2.4, 3.3]//define a simple array with numaric float values
    let supernum = [9,8,7,5,6,4,8,2,4,6,1,8,3]; //define a simple array with numaric values.
    let fruits = ["Apple", "Oranges", "Grapes", "Kiwi", "Apricot", "African_Cucumber", "Guava", "Opal_Apple", "Kei_Apple", "Kesar_Mango"]     // define the array value in string form
    let result = _.groupBy(groupval, (num) => {// _.groupBy Method is used to create a grouping object based on array values 
        return Math.floor(num); // it create objects group based on math.floor.. this method just create the floor value as key like 6.3 and 6.1 = 6 is floor value and this is group key
    });
    let results = _.groupBy(supernum, (nums) => { return nums}) // here _.groupBy method create group of baject values on flat numaric values.
    let resultk = _.groupBy(fruits, (nums) => { return nums[0]}) // here _.groupBy method is used to create a new group based on its first charcter, first character is the key of object group. 

    console.log(results); // print returned groups object value based on flat numaric values
    /* output => {
                    '1': [ 1 ],
                    '2': [ 2 ],
                    '3': [ 3 ],
                    '4': [ 4, 4 ],
                    '5': [ 5 ],
                    '6': [ 6, 6 ],
                    '7': [ 7 ],
                    '8': [ 8, 8, 8 ],
                    '9': [ 9 ]
                    } */
    console.log(result);  // print returned groups object value based on float values as floor numaric values
    /* output => {
                    '1': [ 1.2, 1.4, 1.9, 1.6, 1.8 ],
                    '2': [ 2.5, 2.2, 2.8, 2.4 ],
                    '3': [ 3.9, 3.3 ]
                    } */

    console.log(resultk); // print returned groups value based on first character of elements values
    /* {
            A: [ 'Apple', 'Apricot', 'African_Cucumber' ],
            O: [ 'Oranges', 'Opal_Apple' ],
            G: [ 'Grapes', 'Guava' ],
            K: [ 'Kiwi', 'Kei_Apple', 'Kesar_Mango' ]
            } */
}

{ //indexBy => _.indexBy method is used to convert the array object into object where it we decide which property beome object key.
    let students = [{name: "sandeep", rollno:8545, streame:"BCA"},{name: "Arvind", rollno:185, streame:"BA"},{name: "Neeraj", rollno:1875, streame:"BBA"}]; // define the array of objects        
    let result = _.indexBy(students, "name") // _.indexBy method is used to create a key from object property for object after converting the array object to object
    console.log(result)/* output :=>{   sandeep: { name: 'sandeep', rollno: 8545, streame: 'BCA' },
                                        Arvind: { name: 'Arvind', rollno: 185, streame: 'BA' },
                                        Neeraj: { name: 'Neeraj', rollno: 1875, streame: 'BBA' }
                                        } */
}

{ // countBy => _.countBy it create the group of objects based on condition and also count the element exist in a perticuler group.
    let words = ["one", "two", "three", "four", "six", "five"]; // define the array with value into new variable.
    let result = _.countBy(words, (word) => { // with countBy method callback function create the groups based on mentioned condition
         return word.length; // here is the condition for creates group based element  length
    });
    console.log(result);  // Output => { '3': 3, '4': 2, '5': 1 } //print the returned output based on condition
    console.log(_.size(words))//output => 6
}

// _.shuffle(list) => Returns a shuffled copy of the list, in simple terms we can say that it returns the shuffled values of provided array list
// _.sample(list, [n]) => Returns the shuffled elements from the array list in number of required number, if you choose three then it return 3 values rendomly from the list
// _.toArray(list) => Returns the string, objects, numbers or other type of data in form of Array, in simple terms it convert all type of data into Array form. 
// _.size(list) => Returns the total number of elements are availabel in list of array, objects, string etc.
// _.compact(list) => Returns the list of elements after delete the undefined, null, NAN values from the list.

{ // _.partition(list, predicate) => Returns two type of array from the list of elements, one of array that satisfy the condition and another one is don't satisfy (unsatisfy) the condition.
    let supernum = [9,8,7,5,6,4,8,2,4,6,1,8,3]; //define a simple array with numaric values.
    let compac = [4, 6, , "", 8, ,9]
    let result = _.partition(supernum, (num) => num % 2 == 0) // _.Partition method returns a array of arrays which have one array of those elements that satiesfy the condition and one array belongs to those elements that not satiesfy the condition. 
    console.log(result);  //output => Bind into single array [satisfy => [ 8, 6, 4, 8, 2, 4, 6, 8 ], unsatisfy => [ 9, 7, 5, 1, 3 ]]
    console.log(_.compact(compac)) // output => [ 4, 6, 8, 9 ] // returned array after delete / remove the null undefined array elements.
}

// ******************************************************************************************************************************************************************************************************************************************************************************//

//  Array Methods / Functions

{ // _.first(list, [n]) => Returns the first element of an array. Passing n will return the first n elements of the array. in simple terms we can say that it returns the first n numbers of elements from the array list.
    let supernum = [9,8,7,5,6,4,8,2,4,6,1,8,3]; //define a simple array with numaric values.
    let result = _.first(supernum, [3])
    console.log(result);   // output => [ 9, 8, 7 ];
}

{  // _.initial(array, [n]) => Returns a slice of the array excluding the last 'n' elements. if you provide number of n element then it returns all elements of the array except the last 'n' elements. If 'n' is not provided, it removes just the last element. it works only on array.
    let supernum = [9,8,7,5,6,4,8,2,4,6]; //define a simple array with numaric values.
    let result = _.initial(supernum, [6]) // _initial method removes the number of n (6) elements from the list from end side and and returns remaining elements. 
    console.log(result) // output => [ 9, 8, 7, 5 ] // returned after remove the last number of elements from the list.
    console.log(_.initial(supernum) ) // output => [9,8,7,5,6,4,8,2,4 ] // returned after remove the last number of elements from the list.
}

// _.last(array, [n=1]) => Returns the last element of the array. If 'n' is provided, returns the last 'n' elements as a slice of the array. If 'n' is not provided, returns just the last element. Works only on arrays.
// _.rest(array, [index]) { This is old Method } => Returns all elements of the array except the first one. if you not provide index value then it left first index value and rest elements has been returned but if you have provide the index value then it left the number of elements from starting and rest values has been retutned. only works with / on array
// _.drop(array, [n=1]) { This is New Method and this is opposite of initial method } => Returns a slice of the array excluding the first 'n' elements. If 'n' is not provided, it removes just the first element. Returns an empty array if 'n' is greater than or equal to the array's length. Works only on arrays.

{ // _.flatten(array, [shallow]) ("shallow" means surface-level — not deep. just 1 level up.) => this method converts multi-level array into a flat array. if you pass true in shallow then it flattens only one level, like 5 layer array becomes 4 layer. but if you don’t pass anything, then it flattens all levels, means 5 layer array becomes a single layer. it works on array only.
                                 // by default its value is false if you have not mentiond, then it goes 1 level up, but if you mentioned it as true then it goes to infinity level and convert the array as single layer array.   
    let multilev = [[1,2, [4,9,8,[2,8],[4,5]],[7,2]],[1,8,9,[1,2]] ]; // define multi level array of arrays
    let multi = _.flatten(multilev) // _.flatten method has been convert multilevel arrays into single level array
    console.log(multi) // output => [ 1, 2, 4, 9, 8, 2,  8, 4, 5, 7, 2, 1, 8, 9, 1, 2]
    console.log(_.flatten(multilev, true))// output => [ 1, 2, [ 4, 9, 8, [ 2, 8 ], [ 4, 5 ] ], [ 7, 2 ], 1, 8, 9, [ 1, 2 ] ]// returnd array of arrays with just one level up.
}

{ // _.without(list, [*values]) => this method returns a new array after removing the mentioned values from the original array. it create a clone and affect the clone array and original array stay unchanged
    let supernum = [9,8,7,5,6,4,8,2,4,6]; //define a simple array with numaric values.
    let arraElm = [8,6,4]
    let results = _.without(supernum, ...arraElm) // this _.without function is used to remove mentioned value from the array list. 
    let result = _.without(supernum, 8,6,4) // this _.without function is used to remove mentioned value from the array list. 
    // let result = _.without(supernum, (8,6,4)) // this _.without function is used to remove mentioned value from the array list. but this remove only last value 4 from the array list because you have provide a group of elements and it gets only single value like 4. so it removes only 4 from the list 
    // let result = _.without(supernum, [8,6,4]) // this _.without function is used to remove mentioned value from the array list. but here nothing is removed because you have passed the array, and it search the array into list of array, if array exist then it remove if not then it cant affect the array and returns array as same like original.
    console.log(results); // output => [ 9, 7, 5, 2 ] // returned values after remove the array elements.
    console.log(result); // output => [ 9, 7, 5, 2 ] // returned values after remove the array elements.
}

{
    // _.union(array1, arr2, ...arrn) => this method is used to combine multiple arrays into a new single array without any duplicate value.
    let multilev = [[1,2, [4,9,8,[2,8],[4,5]],[7,2]],[1,8,9,[1,2]] ]; // define a multilevel array
    let result = _.union([1,2,],[4,9,8,],[2,8],[4,5],[7,2],[1,8,9,],[1,2]); // the union method here removing duplicate values from the multiple arrays and then create a new array and add all unique value into that new array and then return that array.
    let results = _.union(_.flatten(multilev)); // here we convert first the multilevel array into single level array because the union function does't support multilevel or nested array so after that union method grab unique values from the list and remove duplicate values and after that return the all values into single new array
    console.log(result,"\n", results) // output =>
        //  result =>  [ 1, 2, 4, 9, 8, 5, 7 ] 
        // results =>  [ 1, 2, 4, 9, 8, 5, 7 ]
}

{   // _.intersection(array1, arr2, ...arrn) => this method is used to grab common values from the multiple arrays. and push all common values into new array after deletion the duplicate values and after that returned that array.
    // intersection rule or condition is that each value of array should be exist in each array. if any array not have value then the condition becomes false and that element eleminate from the intersection array returned list.
    let multilev = [[1,2, [4,9,8,[2,8],[4,5]],[7,2]],[1,8,9,[1,2]] ]; // define a multilevel array
    let result = _.intersection([1,2,],[1,4,9,8,2],[2,1,8],[4,1,2,5],[1,7,2],[1,8,9,2],[1,2]); // the intersection method here removing unique values from the multiple arrays and then create a new array and add all common values into that new array and then return that array. remember the common value should be exist in each array, if single array have missed that value then it cant intersect or returend because 
                                                                                               // the intersection rule is ask that if a value exist in each array then it return in new array, if single array have not this value then this value not to be add into new array, this is condition of intersection rule that each value satiesfy the condition for return self into new array 
    let results = _.intersection(_.flatten(multilev)); // here we convert first the multilevel array into single level array because the intersection method is also not support multilevel or nested array as like union method so after that intersection method grab common values from the list and remove unique values and after that return the all values into single new array
    console.log(result,"\n", results) // output =>
        //  result =>  [1,2]  // here you see 1 and 2 element is exist in each array so these elements are returned into new array
        // results =>  [ 1, 2, 4, 9, 8, 5, 7 ] // here you see after flatten the nested arrays it converts into single layer array so in this array these values are common because of single layer and not comparable with any one and return each unique or common you both are says in this condition after deletion the duplicate values.

}

{ // _.difference(array1, arra2, ...arry_n) => this method check that the first array that we provide to this method, check each element is exist in any other array if exist then it remove the element from the checking list else push this value into new return array
    let multi = _.difference([1,2,3,4,5,6,7,8,9,0],[1,4,9,8,2],[2,1,8],[4,1,2,5],[1,7,2],[1,8,9,2],[1,2]); // this method check each element of first array into other arrays if element exist in other array then methout move to next element and if condition is true then it push that element into new array and after compare all elements of first array, then return this array for further work
    console.log(multi); // output => [3, 6, 0] => because first array have these unique values that not exist in any other array.
}

{ // _.uniq(array, [isSorted], [iteratee]) => this method is used for grab unique values from single layered array, because it works only on single level array. and then return those unique values into new array
    let supernum = [9,8,7,5,6,4,8,2,4,6,1,8,3]; //define a simple array with numaric values.
    let result = _.uniq(supernum.sort(), true, (num) => { return num; } ); // this method grab unique values from the attached single layered array and then after add a sort method for sorting array elements in asc mode, after that check that array is sorted or not if sorted then add true else add false, after that add iterate function or call back function for check each elements with condition if condition is true then push element  into new array and after that last element it return the new array list.
    console.log(result)   // output => [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
}

{     // _.zip(*arrays) => this method is used to create new groups from the arrays value, it grab first array first value then 2nd array first value and then third array first value after that return group. like
          console.log(_.zip(["a", "b", "c"], [5, 7, 9], ['x', 'y','z']))// => output =>  [[ 'a', 5, 'x' ], [ 'b', 7, 'y' ], [ 'c', 9, 'z' ] ]
     //  _.unzip(*arrays) => its totally opposite of zip method it repack the old array from the zip  array
     console.log(_.unzip([[ 'a', 5, 'x' ], [ 'b', 7, 'y' ], [ 'c', 9, 'z' ]])) // output => [ [ 'a', 'b', 'c' ], [ 5, 7, 9 ], [ 'x', 'y', 'z' ] ]
}

{ // _.object(list,[values]) => this method is used to create a new object from the two arrays or group of arrays have pair of keys and values
    let arra1 = ["name", "rollno", "stream"] // define the variable as array
    let arra2 = ["sumit aggarwal", 38415, "b.com"] // define the variable as array
    let arrayPair = [["name", "Rehan malik"],["class", "BBA"],["rollno", 87945]] // define the variable as nested array or multilevel
    let result = _.object(arra1, arra2) // _.object method is used to convert arrays into object with pair of keys and values. first array value become object key and second array value becomes value of object key
    let rest = _.object(arrayPair); // _object method here have a multilevel array that each array have pair of elments and each array first elemnt become object key and second element become object value.
    console.log(result) // output => { name: 'sumit aggarwal', rollno: 38415, stream: 'b.com' }
    console.log(rest)// output => { name: 'Rehan malik', class: 'BBA', rollno: 87945 }
}

{   //  _.chunk(list,length) => this method is used to break array elements into small chuks according to requirement like 2 length become a couple of element
    let ck = [  "Sameer malhotra", "Katrina kaif", "Tyrone james", "Elie charle", "Aidan williams", "Billie cure", "Little smith", "Timmy boom", "Josh Hezalwood", "Jos Buttler", "Fill salt", "Andrew symonds"]
    let result = _.chunk(ck, 2)
    console.log(result) // output => [ [ 'Sameer malhotra', 'Katrina kaif' ], [ 'Tyrone james', 'Elie charle' ], [ 'Aidan williams', 'Billie cure' ],  [ 'Little smith', 'Timmy boom' ],  [ 'Josh Hezalwood', 'Jos Buttler' ],  [ 'Fill salt', 'Andrew symonds' ]]
}

{  // _.indexOf(array, [value], isSorted) =>  this method is used to find the value position into the array that value in which position placed. 
        let ck = [  "Sameer malhotra", "Katrina kaif", "Tyrone james", "Elie charle", "Aidan williams", "Billie cure", "Little smith", "Timmy boom", "Josh Hezalwood", "Jos Buttler", "Fill salt", "Andrew symonds"];
        let result = _.indexOf(ck, "Little smith",false);
        console.log(result) // output => 6 (position) in array its 6 but according to humen reading sense its 7. 
}

{ //_.lastIndexOf(array, value, [fromIndex]) => this method find the searching value last time existing position. means in array the value last time on which position exists 
    let multi = [1,2,3,4,5,6,3,2,4,5,1,3,2]; // define the new variable with array and values
    let result = _.lastIndexOf(multi, 3) //the lastindexof method find the last position where find-value exist in last time
    console.log(result);// output => 11 position where 3 is exist
}

{   // _.sortedIndex(array, value, [iteratee], [context]) => This method returns the index at which the value should be inserted into the sorted array to maintain its order.
    // it works perfect on sorted array if your array not sorted then first sort your array then after sorting order it Return / Provide accurate position of inserted element into the array
    let multi = [20,49,60,45,48,52] //define the variable with array values or elements
    let result = _.sortedIndex(multi.sort(), 50) // this method return the position of inserted element from the array.
    console.log(result); //output => 4 th position of array where last value is small then given value.
    // [20,45,48,49,50,52,60] this is the array become after the sortedIndex array method and 50 exist on 4th position.
}

{   //_.findIndex(array, predicate, [context]) => This method returns the position of first element from the array that satisfy the condition else it returns -1 as false means that element not exist in array.

    let multi = [45,6,89,30,49,60,10,25,38,96,40]; // define variable with array properties
    let result = _.findIndex(multi,(nums) => { // The findIndex method returns the position of the first element that satisfies the condition.
                    // condition for check each element is prime number or not. if element satisfy the condition then the loop stops. 
        if(nums <= 1) return false; //checking the element value is less then or equals to 1 then returns condition as false and not move further
        for(let i = 2; i <= Math.sqrt(nums); i++) // for loop check the each element squaroot fector is less then or equals to i value then move further  
        {
            if( nums % i == 0) // check the number is divisible with i or not 
            {
                return false; // if num divisible with i then returns false, means the num value is  not a Prime number and go back for check next value from the array list if exist till last value if not found any prime number that satisfy the condition
            }
        }
        return true; // return true if the condition is true and the num is not divisible with any other number. 
    } )
    let results = _.findIndex(multi,(num) => num % 7 == 0 ) // The findIndex method returns the position of the first element that satisfies the condition.
    console.log(result) // output => 2 // position 2 element satisfy the condition and that number is a Prime Number
    console.log(results) // output => 4 // position 4 element satisfy the condition that divisible with 7
}

{    // _.findLastIndex(array, predicate, [context](its optional)) => // The findLastIndex method returns the position of the first element that satisfies the condition in Reverse order.
    // note that last Index is just iterate the direction for scan the element from the last of array. but the element location or position or indexing is still same and indexing of the array elements not changed means not altered according to reverse order  
     let multi = [45,6,89,30,49,60,10,25,38,96,40,78]; // define variable with array properties
     let results = _.findLastIndex(multi,(num) => num % 10 == 0 ) // The findLastIndex method returns the position of the first element that satisfies the condition in Reverse order. means its just scan from last point of array. and find the element location that satisfy condition..element location always start from left to right and its order sorted as left to right forever. 
     console.log(results) // output => 10 // position 10 element satisfy the condition that divisible with 10 because it scan from last and second element from last end, satisfy the coondition then it returns position of element.
}

// _.range([start], stop, [step]) => this method is used to create a range of numbers from two number in form of array starting point if you noy=t provide then its by default 0 and end pint you decide because end poind is not defined.
        // for example => _.range(2, 9) => output will be received as  => [2,3,4,5,6,7,8]
        //                _.range(0, 10, 2) => output will be received as  => [0,2,4,6,8]
        //                _.range(5, 0, -1) => output will be received as  => [5,4,3,2,1] // when step value in negtive number.
        // step = positive number => move to forword with jump of positive number 
        // step = negtive number => move to backword with jump of negtive number 


// ************************************************************************************************************************************************************************************************************************************************************************************************************ //
    //  Functions 

{   //  _.bind(function, object, *arguments) => this method is used to bind the object with a function that this iterate to the object values inside the function.
    let fun1 = function () // define a anyonmus function without name inside the variable. 
    {
        return "Hello my Name is " + this.name; //return the string with object value that refer to object  property
    }
    let bindobj = _.bind(fun1, {name:"Rustom Batliwala"})// bind the object with function fun1 where this refer to object properties 
    console.log(bindobj());// call the function that hold the response of bind method after binding the object with function.
}

{   // _.bindAll(object, *methodNames) => this method used to bind the object with its own specified methods that always refert to this object and never respresent any other.
    // _.bindAll(object, *methodNames) => This method binds the specified methods of an object so that the value of 'this' always refers to the object itself.

   function fun1() { //define a function
        this.name = "Sahil Ghai"; //define the name of object refered property with this keyword.
        this.occupation = "Businessman";// //define the occupation of object refered property with this keyword.
        this.greet = () => {//define the greet refered property with this keyword with initilize a arrow function.
            return this.name+" is a Footwear "+ this.occupation; // return the object refered name and occupation
        }
     _.bindAll(this, 'greet');// _.bindAll method is used to bind an object to its own specified methods, so that the 'this' keyword inside those methods always refers to the object itself.
    } 
    let letsdoit = new fun1(); //  define a constructor object of a function  
    console.log(letsdoit.greet()); // call the object method with help of object property
}

{   // _.partial(function, *arguments) => the _.partial method where you define preset argument into function for like bydefult values

    function greets(name, message, msg){ //define  a new function with parameters
        console.log(`Hello ${name}, ${message} \n ${msg}`); // print the parameters values as per required
    }
    let werun =  _.partial(greets, "Rohit", "You are a Web Developer." )// with help of _.partial method you can set default values for as preset or predefine params. you can set or pass more params function call time.

    werun("which language do you prefer ?"); // call the function via function instance with passing argument.
    // output =>  Hello Rohit, You are a Web Developer. 
    //            which language do you prefer ?
}

{   // _.memoize(function, [hashFunction]) => the _.memiize function is store the result of argument based on condition or method into cache for repeat call of function with same argument value,
    //                                          this time it not process the function and return stored resuled from the cache memory for fast computation or fast run.

   function multi(x) { //define the function with parameter
       console.log(`Running calculation for ${x}`); // print the parameter value with text/string line
       let nums = `Calculating the square of ${x} is = `; // define a new variable with string value
       return nums + x * x; //return the nums variable value with x * x calculated value in form of string
    }
    
    let memoizedMulti = _.memoize(multi); //the _.memoize functioin or method store theargument based result into cache memory for return result from the cache if argument is same as previous, then it avoid execute the script and return stored result.
    let nums = _.memoize(multi);//the _.memoize functioin or method store theargument based result into cache memory for return result from the cache if argument is same as previous, then it avoid execute the script and return stored result.
    console.log(nums(8)); // // "Running calculation..." + result
    console.log(memoizedMulti(8)); // "Running calculation..." + result
    console.log(memoizedMulti(8)); // Only result (from cache)
    console.log(memoizedMulti(9)); // "Running calculation..." + result
    console.log(memoizedMulti(8)); // Again from cache

}

{   // _.delay(function, wait, *arguments) => Similar to setTimeout, _.delay calls the given function after a specified delay (in milliseconds), with optional arguments.

    function multi(x) {//define the function with parameter
       console.log(`Running calculation for ${x}`);// print the parameter value with text/string line
       let nums = `Calculating the square of ${x} is = `;// define a new variable with string value
       console.log( nums + x * x); // print the nums variable value with x * x calculated value in form of string
    }
    let num = _.delay(multi, 5000, 6) //the _.delay method call the given function after a specific time delay in miliseconds.
         // note that the delay method not return any type of function for call .. this method call itself and after call itself described function call after given time.   
    //output => this function is call by delay after 5 seconds or 5000 miliseconds.
    //          Running calculation for 6
    //          Calculating the square of 6 is = 36    
}

{   // _.defer(function, arg1, arg2, ...) => Similar to setTimeout, but without a delay parameter. It defers the function execution until the current call stack is clear, placing it at the end of the event queue.

 function multi(x) {//define the function with parameter
       console.log(`Running calculation for ${x}`);// print the parameter value with text/string line
       let nums = `Calculating the square of ${x} is = `;// define a new variable with string value
       console.log( nums + x * x); // print the nums variable value with x * x calculated value in form of string
    }
     _.defer(multi, 16)   //the differ method is used to call the function asynchronously means that it add the script function into the last of execution stack that means ki this function is not call untill the stack is not cleared. 
    //output => this function is call after stack execution.
    //          Running calculation for 16
    //          Calculating the square of 6 is = 256 
}

{ // _.throttle(function, wait, [options]) => This method limits how often a function can be called. If the function is called repeatedly, it will only execute once per specified time interval (wait). Calls during the interval are ignored or delayed based on options.

    function multi(x) {//define the function with parameter
       console.log(`Running calculation for ${x}`);// print the parameter value with text/string line
       let nums = `Calculating the square of ${x} is = `;// define a new variable with string value
       console.log( nums + x * x); // print the nums variable value with x * x calculated value in form of string
    }
    let num = _.throttle(multi, 5000) //the _.throttle method call to given function after a specific time delay in miliseconds. during time interval if you call it again then this method ignore your call because it have control to stop/ignore unwanted calls.
    num(12); // 144 //called immediately
    num(15); //ignored due to time interval
    num(25); // 625 // call if the first time interval process is complete
}