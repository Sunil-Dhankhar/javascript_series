// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  //
const _ = require('underscore','lodash'); // connect with underscore Library

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

{ // _.invert(object) — This method is used to swap the keys and values of an object. That means the key becomes the value, and the value becomes the key. They both exchange their positions with each other.
    // return a new object with interchanged value.
    const student = { rohit: "name", 12345:"rollno", Mcom:"stream"} // declare a new variable with object and its property
    let result = _.invert(student);// invert method swap its given object properties with each other means keys become values and values become keys
    console.log(result) // output => { rollno: '12345', name: 'rohit', stream: 'Mcom' }
    // here you Notice that we define numaric key with value rollno is on 2nd position but now its on 1st position after swap. behind the scene, javascript sort the order if it found the numaric key,
    // if numaric kays found then it sort the object like as Numaric keys first in order and then String after like { 12345:"rollno", rohit: "name", Mcom:"stream"}, and after that invert function work its job and swap the properties with each other. its not assume..check in example
    // foor Example :-> 
    console.log(Object.entries(student)); // output => [ [ '12345', 'rollno' ], [ 'rohit', 'name' ], [ 'Mcom', 'stream' ] ]
}

{ // _.create(prototype, props) — This method is used to create a new object with the prototype of an existing object or function. It helps in inheriting properties from that prototype. You can also add new properties to the created object using the props parameter.
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
    const trav = _.create(trek); // _.create method is used to create a new object with the prototype of a parent object or function, so it can inherit the parent's properties.
    const trave = _.create(trek, prop); // _.create method is used to create a new object with the prototype of a parent object or function, so it can inherit the parent's properties.
    const traves = _.create(trek, props);// _.create method is used to create a new object with the prototype of a parent object or function, so it can inherit the parent's properties.
    console.log(trav.extra()) // output :=> I love the Spity vally Located in Himachal Pardesh, India and the Package Price is 14999/- Only
    console.log(trave.extra()) // output :=> I love the Kheerganga Located in Parvati Valley, Himachal and the Package Price is 14999/- Only
    console.log(traves.extra()) // output :=> I love the Leh-Ladakh Located in Ladakh (UT, J&K), India and the Package Price is 14999/- Only
    console.log(trav.pack_price) // output :=>  14999/-
    console.log(trave.price) // output :=>  12999/-
    console.log(traves.allowed()) // output :=>  In Summers Only, In Winter its Off.
    // Note :=> you note that the child objects (prototype of main objects), have some different properties rather then Parent object so both are allowed but when you accessing any chile object then if the extra property key is not exist in parent then it not override parent properties values.
    // but you can use this extra property individualy like objectname.keyname then you got output. 
    // with object prototype you can use parent object reuse multiple time as required andinherit its properties in child object. this make code readble and more flexible for add more functionality as per require with reusing object multiple time as requirement.

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
    let result = _.create(trek, props)// create a prototype of parent object as child object that inherit the parent object properties
    let single = _.functions(props);// the functions method returns all methods name from the perticuler object, not matter its parent object or child object
    console.log(single); // output => [ 'allowed' ]; 
    // let multi = _.functionsIn(result); // the functionsIn returns all methods name from object and inherit objects that interconnect with each other with chain of prototype. 
    // the functionIn method is belongs to Lodash library not to underscore. 
    // console.log(multi); // output => [ 'allowed', 'extra' ]; //this is smaller version that extract all name of function from the objects, 

    // for example => the bigger version of functionIn function. if that function not available then we write a large script for grab the properties of object like we have required all function name that are used in objects or its prototype objects
    // in underscore library no one method to grab inherit object function name properties for access easily,
    //  so we have define a method to get all inherit object method name along with child object methods name.
    function pro(obj){ // define a function
        let result = []; // declare a varibale as an empty array
        for(let key in obj) // start for in loop where we create an instance of object
        {
            if(typeof obj[key] === "function" ) //condition where check the object key type is a function if yes or condition true then execute the internal script 
            {
                result.push(key)// if condition is true then we reached here, then push that key into array that is defined as null.
            }
        }
        return result.sort();// after that get all keys into array then return that array for further execution
    } // end of the function

    console.log(pro(result)) ;
    // call the function via pass the object and after you get a return an array, print the array which each property or element belongs to object functions name that are linked with each other or prototype functions.
}

{ // _.findKey(object, predictor(function), [context (optional)]) => this method used to find the key from the object that satiesfy the given condtion, if condition is true then search stops and it return the key from the object or if condition not satisfy by any key from the object then it return 'undefined'

    const data = { // declare a variable as object
        user1: { age: 25 }, // define a object property as new object
        bike: { price: 75000 + "/-" },// define a object property as new object
        car: { model: "BMW", name: 'X3' },// define a object property as new object
        user4: "just a string",//define object property as string
        user5: null //define object property as null
    };

    let result = _.findKey(data, (val) => { return val && val.price > 50000+"/-" && typeof val.price === "string"})// The findKey method searches an object for a key that satisfies the specified condition. It returns the first key for which the condition is true and stops searching further. Only a single key is returned.
    let results = _.findKey(data, (val) => { return val && val.model > "Audi" && typeof val.price === "string"})// The findKey method searches an object for a key that satisfies the specified condition. It returns the first key for which the condition is true and stops searching further. Only a single key is returned.
    console.log(result);// output => bike // this method setisfy the condition and got the key name from the given object.
    console.log(results);// output => undefined // this output comes because the object property not setisfy the findKey method condition and got undefined in return because this find the car codel as audi but the mentioned object have not any property related to audi..

}

{ // _.extend(destination, ...sources) is used to copy properties from one or more source objects into the destination object. If a property exists in both, the source value overwrites the destination value. It effectively merges all source properties into the destination.

    let car = { brand : "Audi",
                    model: "A4x",
                    Fuel_type:"Diesel"
    }
    let car_info = { category:"SUV",
                    seater : 7,
                    engin : "4 stroke",
                    made_in : "Japan"
    }
    let car_spec ={ color:"Red",
                    wheel_base :"21 inch",
                    keyless : "yes",
                    turbo: "yes",
                    infortainment:"Bose",
                    price:"3.5 Cr. starting price.",
                    varient: "xtream(mid-base)"
    }

    let result = _.extend(car, car_spec,car_info);
    console.log(result) /* output :=> {
                                        brand: 'Audi',
                                        model: 'A4x',
                                        Fuel_type: 'Diesel',
                                        color: 'Red',
                                        wheel_base: '21 inch',
                                        keyless: 'yes',
                                        turbo: 'yes',
                                        infortainment: 'Bose',
                                        price: '3.5 Cr. starting price.',
                                        varient: 'xtream(mid-base)',
                                        category: 'SUV',
                                        seater: 7,
                                        engin: '4 stroke',
                                        made_in: 'Japan'
                                        }*/
}

{ // _.extendOwn(destination, ...sources) is used to copy only the own (non-inherited) properties from one or more source objects to the destination object. It ignores properties inherited through the prototype chain.
    let car = { brand : "Audi", // declare a new variable as an object have some own properties.
                    model: "A4x",
                    Fuel_type:"Diesel",
                    info : ()=>{ // declarea call back function inside object properties
                        return `${this.brand} + ${this.model}`; // return this object properties values like brand or model.
                    }
    }

    let car_info = { category:"SUV", //declare a new object with some own properties called as object properties
                    seater : 7,
                    engin : "4 stroke",
                    made_in : "Japan"
    }
    let rest = _.create(car, car_info); // create a prototype of an object of another object for inherit the object property with help of create method 
    console.log(_.extendOwn(rest, car_info)); /* output => { category: 'SUV', seater: 7, engin: '4 stroke', made_in: 'Japan' }  */                                                           
    // here you see the extendOwn method grab the object own method properties not inherited object properties indestination object. this method ignore the inherted object roperty and just copy object own properties
    console.log(_.extendOwn(rest, car)); /* output => {
                                                        category: 'SUV',
                                                        seater: 7,
                                                        engin: '4 stroke',
                                                        made_in: 'Japan',
                                                        brand: 'Audi',
                                                        model: 'A4x',
                                                        Fuel_type: 'Diesel',
                                                        info: [Function: info]
                                                        }*/
 // here in this example you see the extendOwn function copy all source object properties inthe destination object. because here each object is single object and not have any inherited object property, because rest is also a new object and the car is parent object that is not inherit any other object property.
 
//  one more example of this method i will give Here.

    function person() {
        // Define a function that sets properties on 'this' and returns them
        this.name = "Rohit Sharma";
        this.position = "Captain of the Team";
    }

    const player = {
        game: "Cricketer",
        team: "India",
        Role: "Batsman",
    }; // Define an object with multiple properties

    const personal = new person(); // Create a new object using the 'person' constructor

    person.prototype.age = 38; // Add a prototype property to the 'person' constructor

    console.log(_.extendOwn(player, personal));
        /* Output:
        {
            game: 'Cricketer',
            team: 'India',
            Role: 'Batsman',
            name: 'Rohit Sharma',
            position: 'Captain of the Team'
        }
        */

        // Explanation:
        // _.extendOwn copies only the own (non-inherited) properties from the source object (personal) to the destination object (player).
        // In this example, the 'personal' object has two own properties: 'name' and 'position', which are added to the 'player' object.
        // The 'age' property, defined on person.prototype (inherited), is ignored by _.extendOwn, since it doesn't belong directly to the personal object.

}

{  // _.pick(object, *keys) 

}