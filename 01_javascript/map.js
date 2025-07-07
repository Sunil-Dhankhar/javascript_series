/* 

Map is  a object that is collection of keys and values in form of [key, value] pairs 
    (1.) In Map every key should be unique.
    (2.) In Map any type of data can be Key (e.g => number, string, objects etc)
    (3.) Map Object maintain the system that who inserted first so it process first as serial order. 

    Map Popular Methods 

    set(key, value) =>  add , insert or update the new arry values in pair of key and value
    get(key) => get map value with help of get method by pass the argument as map key
    has(key) => check and verify the key in  map exist or not
    delete(key) => remove element from Map via check and delete element... if key exist then remove the element along with key from the Map
    clear() => this method is used to clear all element from the object. 
    size => this method is used to get the size of map like how many pairs or elements are existing, if existing then count and retune the count value. 
    groupBy() =>	Groups object elements according to returned callback values    
*/
{
    const fruits = new Map([ //create or declare a new varible  with multilevel array in form of MAP
    ["apples", 500], //  map keys and values
    ["bananas", 300],
    ["oranges", 200]
    ]);

    {
        let numb = fruits.get("apples"); // get the value from the array reference variable  
        console.log(numb); // 500 // return the value of fruits map object according to desired key or mentiond key
    }

    {
        let sets = fruits.set("mango", 400) // set or add new value into map object 
        console.log(sets);//Map(4) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200, 'mango' => 400 // Map(4) means, this is an map object that have contained 4 proerties in form of key and values
    }


    {
        let sets = fruits.has("mango") // check or verify that mentioned value is exist or not in the map object
        console.log(sets);//true //return a boolear value in result
    }

    {
        let del = fruits.delete("apples")// delete or remove a value with its key from the map object according to the mentioned key
        console.log(del);// true // return boolean value true if value is exist and return true after remove object value with its key and return true...if value not exist then it returns false.
        console.log(fruits)// Map(3) { 'apples' => 500, 'bananas' => 300, 'mango' => 400 }
    }
    {
        console.log(fruits.size);//3 // this method is used for total countof map object that count, how many elements or properties or values are existing in the map object.
    }
    {
        console.log(fruits.clear()); //return undefined // this method is used to remove all the object properties along with its key from the map object // when all properties of the map is removed then it retunrd result as undefined becouse it have not any type of value along with key.
        console.log(fruits); //Map(0) // return Map(0) becouse all values are already removed so. its count is now 0.
        
    }
}
/* 
        Map.forEach() method is used for print all values of the map object according to the requirement with or without key // fruits.forEach(function(key,values){})
        Map.entries() method is used for get all values map object along with its key // for (let [key,values] of fruits.entries()) , for (let x of fruits.entries()){x[0]=>key, x[1]=>value} 
        Map.keys() method is used to get all only keys as in added order from the map object . for (let x of fruits.keys())
        Map.values()method is used to get all only values as in added order from the map object .for (let x of fruits.values())
        object as keys, object insert into the map as keys. example  written in below
*/

{ //start the scope for uniqueness from other code or script (Objects as Key)
    const apples = {name: 'Apples', price: 4800, category: "Export Quality"}; //declare a Object with defining its properties
    const bananas = {name: 'Bananas', price: 3000, category: "Export Quality"}; //declare a Object with defining its properties
    const oranges = {name: 'Oranges', price: 2600, category: "Standard Quality"}; //declare a Object with defining its properties

    let fruits = new Map(); // declare a new Map or create a new Map object with empty property called as undefined Map, that have not any value 
    fruits.set(apples, 200); // add object as a key of Map property and set or assign a value after the key define with seprator (,)
    fruits.set(bananas, 600); // add object as a key of Map property and set or assign a value after the key define with seprator (,)
    fruits.set(oranges, 700); // add object as a key of Map property and set or assign a value after the key define with seprator (,)
    let text = ""; //declare a variable as null string
    fruits.forEach(function(stockes, fruit){ // start a for Each loop for grab all Map Properties like its value and keys(Objects and its Properties)
        text += "\n all properties of "+ fruit.name + "\n";  //inserting the first property like name of the key objet inside the map property
        for( [key , value] of Object.entries(fruit)) // start here new for Of loop for grab all internal values of key Object of Map Object
        {
            text += " "+ key + " : " + value +"\n"; //keys and values that are properties of the object one by one and inset into text variable.
        } 
        text += " Total Stock of the "+ fruit.name + " is available is now  = "+ stockes+ " Boxes \n" ; // insert total stocks value that is defined or set after the map declaration related with its key into the text variable
     });

     console.log(text); // print all properties of Map object along with inserted objects with its own properties
} // end of scope

{ // start the new scope for uniqueness of the script ( Map.groupBy())

    const apples = {name: 'Apples', price: 5800, category: "Export Quality"}; //declare a Object with defining its properties
    const mangos = {name: 'Mangos', price: 8000, category: "Export Quality"}; //declare a Object with defining its properties
    const oranges = {name: 'Oranges', price: 2600, category: "Standard Quality"}; //declare a Object with defining its properties  
    const bananas = {name: 'Bananas', price: 3600, category: "Standard Quality"}; //declare a Object with defining its properties  

    let fruits = new Map(); // declare a new Map or create a new Map object with empty property called as undefined Map, that have not any value 
    fruits.set(mangos, 800); // add object as a key of Map property and set or assign a value after the key define with seprator (,)
    fruits.set(apples, 500); // add object as a key of Map property and set or assign a value after the key define with seprator (,)
    fruits.set(bananas, 600); // add object as a key of Map property and set or assign a value after the key define with seprator (,)
    fruits.set(oranges, 700); // add object as a key of Map property and set or assign a value after the key define with seprator (,)
    function fruit_caty([fruit] ) // declare a function for check each object for verify that which object is clear the test and which object fail in the test
    {
        result = (fruit.price > 5000)? "Export Quality" : "Standard Quality"; // condition for testing each object and transfer the result according to its test result categrization 
        return result; // return the result as  per condition of each object value.
    }
    
    let quality = Map.groupBy( fruits.entries(), fruit_caty); // map method is used to create a group accorditng to categrization according to condition passing. 
    console.log(quality); // print the groups which object have clear the test and which have failed in the test...called as group categrization
    let text = ""; // initlize  or declare a empty string variable for further process
    for (let [key] of quality.entries()) { //start for of loop for get keys from the quality object based on categrized object items into groups
        /* if (key === "Export Quality") { start if conditin to verify the condition if true then process next scope script.
            text += "\n These Fruits are belongs to "+key+ "\n"; //insert a string line in text variable
            for([keys, values] of quality.get(key)) // start for of loop for get object and its value based on it key element 
            {
                text += "\n \n " ;
                Object.entries(keys).forEach(function([kie,val]){//start for each statement for grab all properties that exist under the key name Object
                    text += " "+kie.toUpperCase() +":"+ val ;  // insert each key and value that is part of object related the key, into the text variable
                }) 
                text += " Stock ".toUpperCase()+ ": "+ values; // insert another value with key into the text variable after completion of addition all properties into text variable
            }//end for each loop
          //end if stateent and start the else part  
        } else if (key === "Standard Quality") { */ //starting else part after the if part 
           text += "\n \n These Fruits are belongs to "+key + "\n"; //insert a string line in text variable
             for([keys, values] of quality.get(key))// start for of loop for get object and its value based on it key element 
            {
                text += "\n \n " ;
                Object.entries(keys).forEach(function([kie,val]){//start for each statement for grab all properties that exist under the key name Object
                    text += " "+kie.toUpperCase() +":"+ val ;// insert each key and value that is part of object related the key, into the text variable
                }) 
                text += " Stock ".toUpperCase()+ ": "+ values;// insert another value with key into the text variable after completion of addition all properties into text variable
            } //end for each loop
        //} // end of else part 
    }//end of primary for of loop  
    console.log(text); // print the groups which object have clear the test and which have failed in the test...called as group categrization
} //end of main scope







