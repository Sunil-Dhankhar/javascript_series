// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  //
const _ = require('underscore'); // connect with underscore Library
//  Object Functions //

    // _.keys(object) => this method use to grab all the keys from an object. this method retuns the array of object keys ["name"].
    // _.values(object) => this method use to grab all the values from an object. this method retuns the array of object values like ["David Smith"].
    // _.pairs(object) => this method use to grab all the keys and values inform of pair from an object. this method retuns the array of object keys and values pair like [["name", "David Smith"]].
    

{ // _.allKeys(object) => This method returns an array of all keys of the object, including both own properties and inherited properties from the prototype chain. 

    function newCar() //define the new function
    {
        return this.carModel = "BMW x3"; // return the object reference value with this keyword.
    }
    newCar.prototype.price = "6 cr." // addnew value into object prototype
    const car = new newCar(); //define new variable as new constructor object of a function 
    function callagain () { //define a new function 
        console.log( "\n"+ car.carModel+ "\n"); // print the object value with key property
        console.log(car.price); // print the object value with key property
    }
    callagain() //call function for print the result
}

{ // _.mapObject(object, iteratee, [context]) => This method maps each property of an object, transforms its value using the iteratee, and returns a new object with the modified values.

    const obj = { a: 15, b: 22, c: 8, d: 20 }; // define a new variable as an object

    const newObj = _.mapObject(obj, (value) => { // the mapObject method map each property of object and transform(update) each value of object using the iteratee and returns into a new object
        if(value >= 10){ return value+100; } else { return value;}  //adding a condition for transfrom the value if object value satisfy the condition then it transform into new value else it remains as old value.
    });
    console.log(newObj); // output :=> { a: 115, b: 122, c: 64, d: 120 }
}

