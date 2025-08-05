/* A Small Description About  Lodash Library */

// Lodash is a Utility Library that is used to create a user friendly code environment with help of Readymade Function. with these functions you can create
// your code neat and clean with short code like 10 -15 line code become like 2-5 line code with same output. 
// this Library is more powerfull that works with Arrays , Objects, strings, functions and collection for create your code easy and clean for faster execution.


const _ = require('lodash', 'underscore');
{
    // let arr = [1, 2, 2, 3, 4]; define a new array with values
    let arr =  { name: "John", age: function () {return 30;}, city: "New York", city:"Jalandhar",name:"smith", fun:"age"}; // define a object
    //let arr = "Lodash is a Utility Library that is used to create a user friendly code"; // define a string
    console.log(_.uniq(arr), 1); // get unique value from the array values. and ignore the duplicate value. 
    console.log(_.uniq(Object.entries(arr)), 1); // get the uniqe value from the object after converting object to array.
    console.log(_.chunk(Object.entries(arr))); // get the chunks (parts/pieces) of object array (object after converting object to array).
    console.log(_.flatten(_.chunk(Object.entries(arr)))); //get a single array with all values from nesting array to single array
}

{ // _.difference(first value, second value) // get unique value from first array value after compare with second array and return unique value
    let arr1 = [1, 2, 2, 3, 4, 8, 12]; // define a new array with values
    let arr2 = [1, 9, 22, 52, 33, 4]; // define a new array with values
    let arr = [1, 2, 5, 3, 4]; // define a new array with values
    console.log(_.difference(arr1 ,arr2 )); // returns the unique value from the first array that not exist in second array. // 2,2,3,8,12  
    console.log(_.difference(arr1 ,arr2 , arr)); // returns unique value from the first array that not exist in other mentioned array // 8,12
    console.log(_.difference(arr1 , arr)); // returns the unique value from the first array that not exist in another array. // 8,12
}

{ //_.differenceBy => syntax => _.differenceBy(arr1, arr 2, (obj----) )// compare both array values with each other on behalf of method that provided in last and get unique values
    const obj1 = [{ name:"jassi"},{name: "vikram"}] // define a array with multiple objects
    const obj2 =  [{name: "vikram"},{name:"jashan"}];  // define the object inside the array.
    console.log(_.differenceBy(obj1 , obj2 , "name")); // returns the unique value from the first array that not exist in another array. it returns a new array with unique value in array // [{name : 'jassi'}]
}

{ //_.differenceWith(arr1, arr2, comparator) .. compare arr1 with arr2 with a campare condition like a loop when condition is true then that array value is removed and condition run till end of array value length by checking each element.
    
    const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]; // create a new array objects
    const arr2 = [{ id: 2 }, { id: 4 }, { id: 5 }];// create a new array objects

    const result = _.differenceWith(arr1, arr2, (a, b) => a.id === b.id); // get unique values from first array with apply conditional difference on arr2, it check arr2 each value in arr1 if value exist then it remove the value else save it into another new variable. 
    console.log(result);  // Output: [ { id: 1 }, { id: 3 } ] 

    // condition => arrow function  applied and 2 arguments is passed like a and b, after that function execute and then check object a id is equal object b id with its type. if anything wrong while comparing then return false result..mean compared value is addedin in new array.

}

{   // _.drop(array , value(#number))  how many element will drop from array values from left side
    // _.dropRight(array , value(#number))  how many element will drop from array values from right side  
    // _.dropRightWhile(array , condition)  drop values from array values from right side by checking condition.(drop values as per condition from right side)  
    // _.dropWhile(array , condition)  drop values from array values from left side by checking condition, it removes the elements while condition is true, when the condition is false it returns all remaining array values without checking condition..(drop values as per condition from left side)  
    let arr = [ 
        { 'user': 'Hardy',  'active': true }, { 'user': 'Ammy', 'active': false }, { 'user': 'shakeera', 'active': true }, { 'user': 'Diljeet', 'active': false }];
    let arr1 = [1, 2, 2, 3, 4, 8, 12];//define a new array
    console.log(_.drop(arr1, 3));// output => [ 3, 4, 8, 12 ]
    console.log(_.dropRight(arr1, 3));// output => [ 1, 2, 2, 3 ]
    console.log(_.dropRightWhile(arr1, n => n >= 8)); // output => [ 1, 2, 2, 3, 4 ] // with this example  you see in this condition remove all value that are  greater and equals to 8 from the array. 
    //console.log(_.dropRightWhile(arr, (user) => user.active === false)); // output => [ { user: 'Hardy', active: true } ] // with this example  you see in this condition remove all value that are equals to false from the array. 
    console.log(_.dropWhile(arr, (user) => user.active !== false));    //[{user:'Ammy', active: false }, { user: 'Diljeet', active: false } ] // in this example you see that while the condition is true it removes the elements from the array and when the condition is false it stops and exit from the loop and returns all remained array as data.
}

{ // _.functions(object) => this method is used to get all function name from the object. means it returns all methods name from a perticuler object. this method returns only owns method not parent or inherit function property or name.
    const trek = { // declare an objects with its property
        name : "Spity vally", // properties of main object 
        locs : "Himachal Pardesh, India" ,
        pack_price:14999+"/-",
        extra : function (){ // declare a function inside object property for perform more functionality when object has been called
            return `I love the ${this.name} Located in ${this.locs} and the Package Price is ${this.pack_price} Only`; // return string when the object function is called
        }
    }
    const prop = { // declare an objects with its property
        name: "Kheerganga",
        locs: "Parvati Valley, Himachal",
        price: 12999+"/-"
    };
    const props = { // declare an objects with its property
        name: "Leh-Ladakh",
        locs: "Ladakh (UT, J&K), India ",
        allowed:()=>{ return "In Summers Only, In Winter its Off.";} // added a new arrow function inside the object property
    };
    let result = _.create(trek, props)
    let single = _.functions(props);
    let multi = _.functionsIn(result);
    console.log(single); // output => [ 'allowed' ];
    console.log(multi); // output => [ 'allowed', 'extra'];


}

{ // _.toPath(string path) => this method is used to convert the path of object value from string to array value. this method is used in mainly nested objects for access the object value easily.
    let car = { //define the new variable as an object
                model: "BMW",
                spec: { // define new object or nested object
                    engine: "V8",
                    color: "Black"
                }
            };
    let arras = "spec.color"; //path of object value as a string
    let rest = _.toPath(arras); // output => ["spec", "color"] // converted path as array value
    let result = rest.reduce((obj, keys) => { // reduce function is here reducing the multiple value into a single value and then after return the single value.
            return obj && obj[keys]// return the value after match the value. with condition
    },car); // from object // object name
    console.log(result); //print the returned back result as output.
}


{
    const user = {
                    id: 1,
                    profile: {
                        name: {
                                first: 'Amit',
                                last: 'Verma'
                        },
                        address: {
                                   city: 'Delhi'
                        }
                    }
                };

        let getProp = _.property("profile.name.last");
        let getResult = getProp(user);

        console.log(getResult);
}


