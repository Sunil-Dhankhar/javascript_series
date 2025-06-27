    const accountID = "123456";
    name = "";// name is declared as null property
    if(!name) // check name is recived as null...if null then condition is true 
    {
        var name = "John David"; // initilize new modren variable name store name value / property temparary
        var city = "New York City" // initilize new varible with old var variable city having city value / property temprary
        console.log(name); //print the variable property with its value
    }
    if(city)
    {
    console.log(city); // print the variable property with its value
    var city = "Maxico"; // reassign or reinitilize city ( var ) variable with new value that overwrite its old value if exist
    console.log(city); //print again varible with its value
    let name = "David Williams"; // initilize new varible with its value
    console.log(name); // print variable with its value that user have provide
    console.log(accountID)
    }
/* comman Arithmatic Operations */
    let x = "100";
    let y = "10";
    let e = 5;
    let d = 45;

    let z = x / y;  // Works → 10
    let a = x * y;  // Works → 1000
    let b = x - y;  // Works → 90
    let c = x + y + d + e;  // Not as expected → "10010455"


    console.log(z + "  " + a + "  " + b + "  " + c);

/*  NOTATION :- Above written in this script we investigate that the var property scope is wide but this is not trustable.. becouse it 
                Overrite the its old value with new value and create conflict during exicution.. 
                            suppose if we have more then 2 or more file having same varible then it overwriting its value and distroye the working of script..
                in modren javascript, we have a new type of varible known as LET / let. this is not overwrite the variable, once it initilize and we assign a value to it,
                then we cant assign this new value in that scope till scope not end... its working in only Block scope..out side the block scope it not working 
                
                in this script we see in first if scope we have delare let name as with a value, and its working in this scope if i declare the same name with same varible type 
                out side the scope so it not allowed to reassign the varible again becouse its already declared, 
                        but when i tried to redclare with same name same variable type with differnt value in new scope, then it allow it to reassigne the variable  with new or same value,
                because its have a different block scope or new block scope, and its access is only in this scope, if we want to assigne  againe same varible with new value then we use it only
                in new Block Scope. 

                and one more thing Once const variable declared this cant change....in scope, out the scope it not modified...its special varible type that cant change if declared.

                now we see here that in artihmatic opration every numaric operator behaviour is changed, when it try divison, multipication, subtraction with two string have numaric value,
                performing numaric  operation very well, but when it try to sum it then the behaviour of method is changed.
                   thats happened becouse in javascript (+) operator is performing two type of jobs like sum and concatinate,
                   .1 =>    if it found both values in Numaric then it provide sum of both values.
                   .2 =>    if it found both values as String then it concatinate the both values like as a one string.
                   .3 =>    suppose one value is numaric and one value of it have string then it concatinate the both values, not provide the some, 
                            for sum this required each value is numaric, not a string. 

                Thanks for visit here..

*/ 


/* javascript objects  */

/* Notation about objects :- in javascript if we found values in {---} that means this is javascript object. */
 // we initilizing an object student with keys and its values...
let student = { name : "Rohanpreet", 
                class : "BA",
                rollNo : 123456,
                institution : "DAV IT Collage"
};

let t = student;//here we create a mirror of student object that is refrence of student object..with the help of referance variable we make changes into the object values according to the its object keyes outside the object. 
t.class = "PHD";// here we change the student class value outside the object
console.log(student["class"]); // this method is used to print the object value like student class; 
console.log(student["name"]);//this method is used to get specific value of an object
console.log( student.class);//this method is also used to get specific value of an object .. both method provide same output...written type is different but working is same

/* ---------  Comman operations ------*/


let p = 123;
let g = "'"+p+"'";

console.log(typeof g);
console.log(g);
console.log(typeof p.toString());
console.log(p.toString());


/* Array  */

const cars = ["Saab", "Volvo", "BMW"]; // this is an array of javascript
const car = ["Ford", "Kia", "Hundai"]; // this is an array of javascript
console.log(Array.isArray(cars)); // this is check that is that object is an array or not
console.log(cars);//printing the log of an array
cars[0] = "Jaguar";//changing the first element of array or change the first value of array
console.log(cars[0]);// printing the first value of array after change the array value
console.log(cars); // print the array log or values
console.log(cars.toString()); // converting an array into a String
console.log(cars.length); // count how many elements are present in array 
console.log(cars[cars.length-1]); // this print the last element of the array
let pt = "<ul>";
let i = 0;
cars.forEach(function(){
    pt += "<li>"+cars[i]+"</li>";
    i++;
});
pt += "</ul>";
console.log(pt);
console.log(cars.push("TATA"));// this increment one element into existing array or add 1 new value into the existing array
console.log(cars);
console.log(cars.concat(car));//this method concat is used to merge or concatinate to two array ,string, objects etc
 

// new example for nested array with objects  
const myObj = {  // creating new object or initlizing new object
  name: "John",
  age: 30,
  carss: [ //initilizeing new array into the object
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]}, //initlizing new objects with arrays into the array called as nested array with objects
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

let ca = "";//set an variable as null
myObj.carss.forEach(function(car){//start a for each loop for get the data from the nested array and object
    ca += " \n "+ car.name+ " \n ";
    car.models.forEach(function(model){ // again start a foreach for get data and values from internal array
        ca += model+ " \n";
    });
    ca += " \n ";
});
console.log(typeof ca); // getting the type of ca varible 
console.log(ca); // printing the whole data of nested array and object as a string through this varible that is initlize for store the whole value of nested array.


