/*  ++++++++++++++++++++++ JavaScript Destructuring +++++++++++++++++++++++++++++++++
    
    JavaScript Destructuring  is a technique or extra orderniery Feature of Javascript that provide access to use array or object properties without any index key or object key directly. 
    in Simple terms we can say dirctly access the array values and object values without touch index key or object key called as js destructuring

    Some basic examples of this written in below with arrays and objects

    Destructuring feature or method is about extracting values, not modifying or adding new properties

*/

{ // scope start for uniqueness in script   **** Array Destructuring *****
    const arr = [10, 20, 30]; // initilizing an Array values with declaration of a variable with array values
    const [a, b, c] = arr; // destructuring the array values

    console.log(a); // 10 // a is assign to index 0 value
    console.log(b); // 20 // b is assign to index 1 value
    console.log(c); // 30 // c is assign to index 2 value

    const [x, y] = [1, 2];  // x = 1, y = 2  // destructuring the array values into x and y  
    console.log(x + " , " + y ); // print the array values as assigned variables

}

{ // another new Scope Stars for script Uniqueness for array script

    // Default  values example for destructuring array

    const [a = 5, b = 10] = [1]; // initilizing array with default value ([1]), and as trying to destructuring the array default values, if any value is null or undefined then you can assign a new value to that index value,
                                 // in this case b variable has undefined value so we see next in log that b variable has new value now as 10

    console.log(a); // 1 // default values not update becouse the first index value is defined as 1, so it not redefine or update.
    console.log(b); // 10 // default values of b is undefined so b is now defined as value 10  


}

{ // scope starts for uniqueness in script **** Object Destructuring ****

    const person = { // declare the object with reference variable
        name: "Rahul", // initilizing the object properties  with its key
        age: 25 // initilizing the object properties  with its key
    };

    const { name, age } = person; // destructring the object and assign its properties directly to the new declared variables 

    console.log(name); // "Rahul" // object key name property assigned to new declared of name variable
    console.log(age);  // 25 // object key age property assigned to new declared of age variable

        // we can access directly object property with creating new variable with same name of object key 
        // variable : object key;
        // name = {name} //after destructuring of object
        // age = {age} //after destructuring of object

    //+++++++++++++++++ Destructuring with Aliases (another name) ++++++++++++++++++++++++

    const student = { name: "Amit", age: 30 }; // declare the object with reference variable

    const { name: myName, age: myAge } = student; // destructring the object and assign its properties directly to the new declared variables to another new variable called alias technique

    console.log(myName); // "Amit" // object key name property assigned to new declared myName variable
    console.log(myAge);  // 30 // object key age property assigned to new declared myAge variable

}

{// new scope Start for script Uniqueness as nested object properties and also add new variable with value while destructring the object

    const user = { // initlizing a new variable with object datatype  
        name: "Neha", // defining the 1st propertey to the object
        address: {// defining the 2nd object property with more properties to as nested object 
            city: "Delhi", // defining the 1st nested property to this object
            pincode: 110001 // defining the 2nd nested property to this object
        }
    };

    const {address: { city, pincode }, Mobile_Number = 1234567899 } = user; // destructring the user object with its nested propeties city and pincode under the address as same name variable as city and pincode 
                                                                            // here you can see that we declare a new variable with its value while destructring the objects. this varible is not exist in object and after declare the original object not modified or not affected with this declaration.
    console.log(city);    // Delhi  // print the city variable value assigned from the object values as method destructring.
    console.log(pincode); // 110001 // print the pincode variable value assigned from the object values as method destructring.
    console.log(Mobile_Number); // 110001 // print the new declared variable value. 

}


        //String Destructuring 
{
    const stands = "erosteps";
    let [a,b,c,e,f] = stands;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}