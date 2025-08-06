// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  //
const { JSDOM } = require('jsdom');
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
    const student = { rohit: "name", 12345:"rollno", Mcom:"stream"} // define a new variable with object and its property
    let result = _.invert(student);// invert method swap its given object properties with each other means keys become values and values become keys
    console.log(result) // output => { rollno: '12345', name: 'rohit', stream: 'Mcom' }
    // here you Notice that we define numaric key with value rollno is on 2nd position but now its on 1st position after swap. behind the scene, javascript sort the order if it found the numaric key,
    // if numaric kays found then it sort the object like as Numaric keys first in order and then String after like { 12345:"rollno", rohit: "name", Mcom:"stream"}, and after that invert function work its job and swap the properties with each other. its not assume..check in example
    // foor Example :-> 
    console.log(Object.entries(student)); // output => [ [ '12345', 'rollno' ], [ 'rohit', 'name' ], [ 'Mcom', 'stream' ] ]
}

{ // _.create(prototype, props) — This method is used to create a new object with the prototype of an existing object or function. It helps in inheriting properties from that prototype. You can also add new properties to the created object using the props parameter.
    const trek = { // define an objects with its property
        name : "Spity vally", // properties of main object 
        locs : "Himachal Pardesh, India" ,
        pack_price:14999+"/-",
        extra : function (){ // define a function inside object property for perform more functionality when object has been called
            return `I love the ${this.name} Located in ${this.locs} and the Package Price is ${this.pack_price} Only`; // return string when the object function is called
        }
    }
    const prop = { // define an objects with its property
        name: "Kheerganga",
        locs: "Parvati Valley, Himachal",
        price: 12999+"/-"
    };
    const props = { // define an objects with its property
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
    const trek = { // define an objects with its property
        name : "Spity vally", // properties of main object 
        locs : "Himachal Pardesh, India" ,
        pack_price:14999+"/-",
        extra : function (){ // define a function inside object property for perform more functionality when object has been called
            return `I love the ${this.name} Located in ${this.locs} and the Package Price is ${this.pack_price} Only`; // return string when the object function is called
        }
    }
    const prop = { // define an objects with its property
        name: "Kheerganga",
        locs: "Parvati Valley, Himachal",
        price: 12999+"/-"
    };
    const props = { // define an objects with its property
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
        let result = []; // define a varibale as an empty array
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

    const data = { // define a variable as object
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
    let car = { brand : "Audi", // define a new variable as an object have some own properties.
                    model: "A4x",
                    Fuel_type:"Diesel",
                    info : ()=>{ // definea call back function inside object properties
                        return `${this.brand} + ${this.model}`; // return this object properties values like brand or model.
                    }
    }

    let car_info = { category:"SUV", //define a new object with some own properties called as object properties
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

{  // _.pick(object, *keys) => this method is used to get specified keys properties from the object and return this properties and values into a new object. 
   // this method is works only on objects own properties, if the object have nesting objects or array then it return the nested object outer level refernce as a shallow copy.
   // this method not works on arrays, strings or any other type of data, or niehther  works on inherited objects or prototype properties of objects.

let car =       {   model:"BMW x3", // define a variable as an object 
                    color:"Red",
                    wheel_base :"21 inch",
                    keyless : "yes",
                    turbo: "yes",
                    infortainment:"Bose",
                    price:"3.5 Cr. Interoducing Price.",
                    varient: "xtream(mid-base)",
                    car_spec:{  brand : "Audi",// create a new object as object property in form of nesting (chain of chain)
                                Fuel_type:"Diesel",
                                car_info :{ category:"SUV", // create a new object as object property in form of nesting (chain of chain)
                                            seater : 7,
                                            engin : "4 stroke",
                                            made_in : "Japan"
                                }
                    }
                }

    let result ={ ..._.pick(car, "model","price", "varient"), // _.pick method grabing specified properties from the object, for access nested  object properties first of all we required a spred this as a object 
            // and after that create this all method as object and then apply each internal property of the object as you required with help of object key extention.
                brand: car.car_spec?.brand, // extend the keys for access the property value from the internal or nested object.
                Fuel_type: car.car_spec?.Fuel_type,
                seater: car.car_spec.car_info?.seater,// extend the keys for access the property value from the internal or nested object.
            };
    console.log(result); /* output =>{
                                    model: 'BMW x3',
                                    price: '3.5 Cr. Interoducing Price.',
                                    varient: 'xtream(mid-base)',
                                    brand: 'Audi',
                                    Fuel_type: 'Diesel',
                                    seater: 7
                                    } */

// Here, we are required to extract specific properties from nested objects. 
// In such cases, we use the spread operator inside an object to fetch the required values.
// When a property exists at the top level of an object, we can directly access it using the _.pick method. 
// However, if the property resides inside a nested object, trying to access it directly with _.pick will return 'undefined' or might throw an error.
// To handle this safely, we use a concept known as "safe access".
// First, we initialize an object, then use the spread operator before applying the _.pick method.
// After that, we can extract the necessary properties from the nested object using a chain of keys representing each level,
// for example: car.car_spec.car_info.seater
// Each key here represents a level of nesting in the object structure.

}

{  //  _.omit(object, *keys) => this method is opposite of pick method, this remove the specified keys and values from the object and returns the all object without specified keys in to new array
   let car =       {   model:"BMW x3", // define a variable as an object 
                    color:"Red",
                    wheel_base :"21 inch",
                    keyless : "yes",
                    turbo: "yes",
                    infortainment:"Bose",
                    price:"3.5 Cr. Interoducing Price.",
                    varient: "xtream(mid-base)",
                    car_spec:{  brand : "Audi",// create a new object as object property in form of nesting (chain of chain)
                                Fuel_type:"Diesel",
                                car_info :{ category:"SUV", // create a new object as object property in form of nesting (chain of chain)
                                            seater : 7,
                                            engin : "4 stroke",
                                            made_in : "Japan"
                                }
                    }
                }
        let result = { ..._.omit(car, 'turbo', 'keyless','infortainment'), 
            car_spec: { ..._.omit(car.car_spec, "Fuel_type"),
                      car_info: { ..._.omit(car.car_spec.car_info, "seater"),
                    }     
            }
        };
        console.log(result);
    /*output => {
                    model: 'BMW x3',
                    color: 'Red',
                    wheel_base: '21 inch',
                    price: '3.5 Cr. Interoducing Price.',
                    varient: 'xtream(mid-base)',
                    car_spec: {
                        brand: 'Audi',
                        car_info: { category: 'SUV', engin: '4 stroke', made_in: 'Japan' }
                    }
                    } */
    // The omit method is oposite of pick method, this remove specified keys from the object and returns remaining objects properties into a new object,
    // but this have a condition, this support only top level object properties and work on only top level object properties, when you trying to remove 
    // nested object properties with help of keys, this ignore it. so if you want to remove nested object keys then you have only ony way  
    // to remove the properties with help of omit method is that you want to apply omit method on each object as a nested object in form of manully with help of ... spread operator.
    // and then mention the each specified object keys for remove it from the object. like as above mention example.
    
}

{ // _.defaults(object, *defaults) => the _.defaults method is used to set default values that place or properties in object that are undefined or missing. if value id defined then it not change the value.
    
    let food = {  name:"Burger", type:undefined, price:undefined  }
    let optional = { name:"chicken Burger", type:'continentel', price:"150 Rs/- only", category:"non-veg"}
    let result = _.defaults(food, optional )

    console.log(result);  /* output :=> {
                    name: 'Burger',
                    type: 'continentel',
                    price: '150 Rs/- only',
                    category: 'non-veg'
                    }*/
// In this example, you can see that the default method replaces only those properties whose values are 'undefined'.
// If a property is already defined — even if the value is NaN, an empty string (""), 0, or any other value — this method will ignore it.
// It strictly works only with properties that are explicitly 'undefined'.
// For example, if the 'name' property is already defined as 'burger', this method will skip it and check the next property.
// If it finds a property with value 'undefined', like 'type', then it will replace that with the new value, say 'continental'.
// It continues this process for the remaining properties.
// Also, if you provide a key in the default object that doesn't exist in the original object, it will add that as a new property to the object.
// Finally, it returns the updated object with all undefined properties filled in, and all existing values preserved.

}

{  // _.clone(object_name) => this method is used to create a shallow copy of object or array into new object, that means this create a top level copy of the object and if this is nested then nested part is copyied as refernce not fully copied.
    let car = { // define a new variable as an object
        model: "BMW",
        color: "Red",
        spec: { // nested object
            engine: "V8"
        }
    };
   
    let cloneCar = _.clone(car); // clone mathod is used to create a shallow copy of main object and this is also create a refernce of nested object or array. and return into a new object.
    cloneCar.color = "Black"; // apply make changes into the clone object in top level
    cloneCar.spec.engine = "V9"; // apply make changes into clone and original object because the clone part of object is interlinkend with original via refference.
                                //  when the clone method is applying on main object then it cloned top level all properties as call by values, but when turn is nested object then it copy its reffernce not values, this is called as call by reference.
    console.log(car); // output => { model: 'BMW', color: 'Red', spec: { engine: 'V9' } }
    console.log(cloneCar); // output => { model: 'BMW', color: 'Black', spec: { engine: 'V9' } }

        // In this example, you can observe the difference in behaviour when modifying a cloned object using _.clone.
        // When we make changes to the top-level properties of the cloned object, the changes are applied only to the clone.
        // The original object (car) remains unchanged, just like before — which means top-level cloning works as expected.
        // However, when we modify a nested property within the cloned object, the changes are also reflected in the original object.
        // This happens because the _.clone method performs a **shallow copy**, not a deep copy.
        // In shallow cloning, the top-level properties are copied, but nested objects are not cloned — instead, only their **reference** is copied.
        // So both the original and cloned objects share the same nested object in memory.
        // As a result, any changes to the nested part in the clone will directly affect the original object as well.
        // Primitive types (string, number, boolean, null, undefined, symbol, bigint) are copied by value
        // Objects, arrays, and functions are copied by reference in shallow copy.

}

{   // _.tap(object, interceptorFunction) => This method is used to create a workflow in a method chaining sequence. It allows you to perform operations or side effects on the original object without breaking the chain.
    // The main advantage of _.tap is that it passes the object to the provided function (interceptor), performs any required modifications or logging inside it, and then returns the original object back into the chain.
    // This is especially useful in large-scale projects where you want to apply changes or debug the main object during method chaining, while still continuing the chain smoothly without interruption.

        // Create a basic object representing a food item
        let fastfood = {
            name: 'Burger',
            type: 'continental',
            price: '150 Rs/- only',
            category: 'non-veg'
        };

        // Updating the object directly using standard JavaScript (no chaining used here)
        fastfood.category = "veg"; 
        console.log(fastfood); 
        /*  
            Output:
            {
                name: 'Burger',
                type: 'continental',
                price: '150 Rs/- only',
                category: 'veg'
            }

            // This is a simple way to update object properties when changes are minimal.
            // No chaining or functional methods are used here.
        */

        // Now using underscore's chaining and tap for controlled object modification
        let result = _.chain(fastfood) // Start chaining using underscore
            .extend({ category: "VEG and NON-VEG" }) // Modifies the object using 'extend'
            .tap(obj => {
                // 'tap' allows us to inspect or modify the object mid-chain without breaking the flow
                console.log("Inside the Chain:", obj);
            })
            .value(); // Ends the chain and returns the final object

        /*  
            Output in Console:
            Inside the Chain: {
                name: 'Burger',
                type: 'continental',
                price: '150 Rs/- only',
                category: 'VEG and NON-VEG'
            }

            // In this example:
            // - 'extend' is used to update the category property
            // - 'tap' is used for logging/debugging without interrupting the chain
            // - '.value()' is necessary to extract the final result from the chain wrapper
        */
}

{ // _.toPath => this method is belongs to Lodashlibrary of javascript not to underscore,  and this methed basically used to return the path of array value or object value in a form of string, then it convert it as array values then we pass this to reduce function and afterthat to arrow function for grab the value from object
    // this method is basically is used to get value from the multilevel object or nested object if we have a path of object value as a string. 
   // so this method is not a part of the underscore library so for this type of work we create a custom function for change the address  from string to array .when we got the array then we apply further script to access th object value from nested objects.
    function toPath(vals)  // initilize a new function 
    {
          return vals.replace(/\[(\w+)\]/g, '.$1').split('.');
        // This regex converts square bracket notation (like [key]) into dot notation (.key).
        // After replacing, it splits the resulting string by dots into an array of keys.
        // For example, "car[car_spec][car_info]" becomes "car.car_spec.car_info" and then splits into ["car", "car_spec", "car_info"].

    }
    let car = { // define a new variable as an object
                model: "BMW",
                spec: { // nested object
                    engine: "V8",
                    color: "Black"
                }
            };
    let arras = "spec.color"; // object value path as a string.
    let rest = toPath(arras); // call the custom created function via pass the string value and that function return after convert this string in array.
    let result = rest.reduce((obj, keys) => { //execute the reduce function of underscore library and then run a call back function have value obj and keys that is return the value after match from the object.
            return obj && obj[keys] // return the value after the condition satiesfy
    },car);
    console.log(result);//print the output according to condition this time output is // Black.
}

{  // _.has(object, key) => This method checks whether the given key exists as an own property of the object.
    // If the key is found directly on the object (not inherited from prototype), it returns true.
    // Otherwise, it returns false.
    // this method is also chek only top level properties if the specified key is property of nestied object then it returns false

     let car = { // define a new variable as an object
                model: "BMW",
                spec: { // nested object
                    engine: "V8",
                    color: "Black"
                }
            };
    console.log(_.has(car, "model")) // true
    console.log(_.has(car, "price")) // false
    console.log(_.has(car, "spec.engine")) // false
    console.log(_.has(car, "spec.color")) // false

    // in these example you see that the model property exist then it returns true, price key not  exist return false and nested properties are not supported by this function or method so 
    // while you checking the  nested object property then it returns false.
}

{   //  _.property(path) => this method is used to access object property directly from the object, basically this method is take one argument and return a function.
    //                      this method support only top level properties of an object..if you provide a nested address then this find undefined result.

    const user = { // define a new variable as an object
                    id: 1,
                    first: 'Amit',
                    last: 'Verma',
                    address: { //nested object
                                city: 'Delhi'
                        }
                };

        let getProp = _.property("last"); // this method grab value with this key property, this method return a function for get value related with this argumented key.
        let getProps = _.property("address.city");// this method grab value with this key property, this method return a function for get value related with this argumented key.
        let getResult = getProp(user);//get value from the object from the retuned function via pass the object name. that means this is object and from this object grab key value property. 
        let getResults = getProps(user);//get value from the object from the retuned function via pass the object name. that means this is object and from this object grab key value property. 

        console.log(getResult); // verma 
        console.log(getResults); // undefined 

        // here in these both examples you see that when i pass top level key property to _.property method then this support and grabbing the value as expected result
        // but when we pass the arguments as nested object key path then it could'nt support and return a value name 'undefined'.
        // so here in both examples result proove that the _.property method just support single level or top level object property, not to be support nested objects properties.
}

{   // _.propertyOf(object) => the propertyOf method working style similar to property method, but the work with differnt workflow where the property take first path of the key value from the object and return the function.
    // there the propertyof method take first object and after return the function that function process path from the object. 
    // property => key value path first => there after object 
    // propertyOf =>  object first => there after key value path 
    // like property method this method also not support nested level object properties. this support to only top level object properties.
    
    const user = { // define a new variable as an object
                    id: 1,
                    first: 'Amit',
                    last: 'Verma',
                    address: { //nested object
                                city: 'Delhi'
                        }
                };

   let getfun  = _.propertyOf(user);
   console.log(getfun("first")) // Amit
   console.log(getfun("address")) // {city : 'Delhi'}
   console.log(getfun("address.city")) // undefined

        // here in these both examples you see that when i pass top level key property to _.propertyOf method then this support and grabbing the value as expected result
        // but when we pass the arguments as nested object key path then it could'nt support and return a value name 'undefined'.
        // so here in both examples result proove that the _.propertyOf method just support single level or top level object property, not to be support nested objects properties.
}

{   // _.matcher(attrs) → This method is used to verify that both the key and its corresponding value exist in the given object.
    // It returns a function that, when executed with an object, checks if the object contains all the specified key-value pairs.
    // If multiple key-value pairs are passed, then each key must exist and its value must exactly match.
    // If even a single key is missing or its value doesn't match, the function will return false — regardless of how many others match.

    let fastfood = {
            name: 'Burger',
            type: 'continental',
            price: '150 Rs/- only',
            category: 'non-veg'
        };
    const matchFn = _.matcher({ name: 'Burger', category:'non-veg' });// matcher function is used to verify that key and value both are exist and match or not if match it returns true else false 
    const match = _.matcher({ name: 'Burger', category:'veg' });// matcher function is used to verify that key and value both are exist and match or not if match it returns true else false
    console.log(matchFn(fastfood)); // output => true // pass object to return function. in this condition all key value matched. so output returns as true.
    console.log(match(fastfood));// output => false  // pass object to return function. in this condition all key value not matched. so output returns as false.
    
    // in both example you have noticed that in first example you see both keys and values are matched with object keys and values so it provide a result as true. but when you see second example then it returns false,
    // because in second example you see that the second key pair value is not exist in object so thats  doesnt matter first pair matched if you pass multiple pairs then each pair should be match.if not then output will recieve as negtive. 
}

// _.isEqual(object, other) => this method is used to compare only two objects deeply like nested objects, and ensure that the each value and key is matched or not if each key value is same in both objects then it returns true else returns false.  

{ // _.isMatch(object, properties) => this is working like _.matcher method..like match key and values both are exist or matches from the objects.
  // the main difference between both method is that the isMatch method is provide direct boolean value true or false and the matcher returns a function for use multiple time with differnt - 2 objects. this make this reusable. 
  
        let fastfood = { // define the new variable as object
            name: 'Burger',
            type: 'continental',
            price: '150 Rs/- only',
            category: { // nested object
                    food_type:'non-veg',
                    in_offer:'chicken-popcorns'
            }
        };

        let result = _.isMatch(fastfood, {name:'Burger', type:'continental'}); // with isMatch method we verify that the provided properties are matching in given objects or not
        let results = _.isMatch(fastfood, {name:'Burger', category:{food_type:'non-veg'}}); // with isMatch method we verify that the provided properties are matching in given objects or not

        console.log(result) // true // top level or shallow level
        console.log(results) // false // nested level or deep level.

    // in both example you have Noticed that in first example you see both keys and values are matched with object keys and values so it provide a result as true. but when you see second example then it returns false,
    // because in second example you see that the second key pair value is exist in object but in nested object so thats doesnt matter first pair matched or not, the mstter here is that the isMatch  not support the nested object and second properties belongs to nested object so we got output here as negtive or false. 

}

// _.isEmpty(collection) => this method is used to check that the colloection is empty or not, if the collection of array, object, string etc. is empty then it return true else return as false. 
// for example => true condition =>     _.isEmpty([]);  //  _.isEmpty('');  // _.isEmpty({});  // _.isEmpty(null);  // _.isEmpty(undefined);   // _.isEmpty(12);
// for example => false condition =>     _.isEmpty([1,2,3]);  //  _.isEmpty('hello');  // _.isEmpty({a:1}); 
//   _.isEmpty(5); => true // this is true because the isEmpty Method check string, array, objects only and if this got a number then it assume / treat it as empty value so technically this got output as true.   


// Create a virtual DOM
const dom = new JSDOM(`<!DOCTYPE html><body><div id="mydiv"></div></body>`); // the Node Environment does'nt support Dom model so we create here a fake Dom object for testing purpose
const document = dom.window.document; // // Access the fake DOM's document

{   // _.isElement(object) => this method is used to check that provide object is a DOM Object or not, if its a Dom object then return true else return false.
    
    // const div = document.createElement('div'); this script not working due to node Environment.
    
    const div = document.getElementById('mydiv');

    console.log(_.isElement(div));              // true (its a DOM object)
    console.log(_.isElement({}));               // false (its not a DOM object)
    console.log(_.isElement(null));             // false (its not a DOM object)
    console.log(_.isElement(document.body));    // true (its a DOM object)
    console.log(_.isElement('<div></div>'));    // false  (its a string value, not an element)
}

{ // _.isArray(object) => this method is used to check that the provided object is an Array or not if this is array then return true or if not then returns false.
    console.log("\n",_.isArray([]));        // true  (This is an Array)
    console.log(_.isArray([1,2,3]));        // true  (This is an Array)
    console.log(_.isArray("hello"));        // false (This is string)
    console.log(_.isArray({a:1}));          // false (This is an object)
    console.log(_.isArray(true));           // false (This is an Boolearn value)
    console.log(_.isArray(126));            // false (This is a Number)
    console.log(_.isArray(undefined));      // false (This is an undefined property)
    console.log(_.isArray(null));           // false (This is Null Property)
    console.log(_.isArray(new Array(5)));   // true  (This is an Array)
}

{  // _.isObject(value)=> this method is used to check that the provided object is an Object or not if this is object then return true or if not then returns false.

    console.log("\n",_.isObject({a:1}));        // true (This is an object)
    console.log(_.isObject({}));                // true (This is an object)
    console.log(_.isObject(new Date()));        // true (This is an object)
    console.log(_.isObject([]));                // true (This is an object)
    console.log(_.isObject([1,2,3]));           // true (This is an object)
    console.log(_.isObject("hello"));           // false (This is a string)
    console.log(_.isObject(null));              // false (This is Null property)
    console.log(_.isObject(undefined));         // false (This is an Undefined property)
}

{  // _.isArguments(object) => this method is used to check that the provided object is an argument object or not if this is argument object then return true or if not then returns false.
   // This is also check that argument object is placed in function inside or function outside.
   
   console.log("\n",_.isArguments([1, 2, 3]));  // false because this an Array not argument

   function cars_count() // initilize a new function
   {
        console.log(_.isArguments(arguments)); // true because the function hold a special arguents.
        console.log(arguments); //output => [Arguments] { '0': 1, '1': 2, '2': 3 }
   }

   cars_count(1,2,3)//call the function with pass the arguments
 // in javascript the function arguments object is only one of the object that support isArguments method..other arguments are type of inputs.so all are get false as result but the arguments object return true value.  
}

{ // _.isFunction(object) => this method is used to check that the provided value is a javascript function or not if this is a function then it return the result as true else false.
    function demo() { console.log("hello")} 

    console.log("\n",_.isFunction(demo));            // true // here just checking that demo is function or not, not calling to demo function.
    console.log(_.isFunction(function() {}));        // true //checking this is a function or not
    console.log(_.isFunction(() => {}));             // true // this is a short version of function that known as arrow function
    console.log(_.isFunction(Math.max));             // true (built-in function)
    console.log(_.isFunction(123));                  // false // this is a Number
    console.log(_.isFunction("hello"));              // false // this is a String
    console.log(_.isFunction({}));                   // false // this is empty object
    console.log(_.isFunction(null));                 // false // this is null property
    console.log(_.isFunction(undefined));            // false // this is undefined property

}

{ 
    // _.isString(object)  => this method is used to check that the given object is string type data or not, if its string then return true else return false
    // _.isNumber(object)  => this method is used to check that the given object is Number type data or not, if its number then return true else return false
    // _.isBoolean(object) => this method is used to check that the given object is boolean type data or not, if boolean value then return true else return false
    // _.isFinite(object)  => this method is used to check that the given value is a finite number (countable numbers) or not, if this is finite number then return true else return false
    // _.isDate(object)    => this method is used to check that the given object is Date type data or not, if its date type then return true else return false
    // _.isRegExp(object)  => this method is used to check that the given object is Regexp value or not, if its Regexp value then return true else return false
    // _.isError(object)   => this method is used to check that the given object is Error object or not, if its Error Object then return true else return false
    // _.isSymbol(object)  => this method is used to check that the given object is Symbol Value or not, if its Symbol value then return true else return false
    // _.isMap(object)     => this method is used to check that the given object is Map object or not , if its a Map Object then return true else return false
    // _.isSet(object)     => this method is used to check that the given object is Set object or not, if its a Set object then return true else return false  
    // _.isNaN(object)     => this method is used to check thar the given object is NAN (Not A Number) value or not if its NAN value then return true else return false
    // _.isNull(object)    => this method is used to check thar the given object is Null value or not if its Null value then return true else return false
    // _.isUndefined(value)=> this method is used to check thar the given value is undefined value or not if its Undefined value then return true else return false 

    let nums;
    console.log("\n",_.isUndefined(nums)) // true // because this variable is just declared not defined so this is undefined now so we got return value as true.
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  //

//   Utility Functions

// _.noConflict() => this method is used to remove conflict from the script when you use two or more libraries on same page with single operator 
//                   In here i am using underscore library with operator _. and if i want to use Lodash library with _. this operator then the various methods are conflicting with both libraries and override each other
//                   so this method is here very useful becose this method left the _. operator for previous library and used with a new variable name and you can access each method of this library with this name.
//      for Example => suppose i am using the underscore library, and i have required some methods of Lodash library so we can
//          <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
//          let lodash = _.noConflict();
//                    Now the _. operator works with only underscore and you can access all lodash library function with lodash.map etc. 
//     All conflicts are Removed 
