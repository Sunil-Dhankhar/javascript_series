/* @@@@@@@@@@@@@@@@@@ Java Script Classes */

class cars { // declare or define a class 
    constructor(carname, mfdyear)// create a constructor that is a default method of the javascrit classes..this call automatically when the class is called. in simple terms we say that this metod is call each time when the class is called.
    { // constructor scope is start // this is also know as functional scope
        this.name = carname; // constructor received first property as carname, store into object referance variable this.name(temprary variable).
        this.year = mfdyear; // constructor received another property as mfdyear, store into object referance variable this.year(temprary variable).
    } // constructor scope ends

    version(ver){//declare a  function and  starts and get a argument that contain the argument value that is passed when function is called.
        return  this.ver = ver; // store the argument value into reference variable(temprary variable).
    } // end of functional scope

}// end of class 

let mcar = { //declare a variable as object with key and values properties
    name: "Jaguar", // key + value properties
    year: 2021, // key + value properties
}  // end of object

let car = new cars(mcar.name,mcar.year); // create a new object of the class and pass the arguments to the class object functions
let car1 = new cars("Ferari" , 2024); // create a new object of the class and pass the arguments to the class object functions
let car2 = new cars("Rolls Royes" , 2022);// create a new object to the class and pass the arguments to the class object functions
let car3 = new cars("Tesla" , 2023); // create a new object to the class and pass the arguments to the class object functions

console.log( car.name);// Jaguar // print the value car variable as object that is defined or declared as object
console.log( car.name + "= "+ car.year);//Jaguar = 2021 // print the value car variable as object that is defined or declared as object
console.log(typeof car1);// object // checking  the type of car1 variable that is defined or declared as object .. gettitng the type is Object
console.log(car1.name+ " = "+ car3.name + " @ "+ car2.name); // // print the object values that are passesd into the class object and insert the values into the constroctor method  and when i call the class object then it print the object passed values.
console.log(car1.name+ " = "+ car1.year ); // print the object values that are passesd into the class object and insert the values into the constroctor method  and when i call the class object then it print the object passed values.
console.log(car1.version("Petrol Turbo Charged")); //print the cars class object values with function that geting the arguments in function and run the script inside function scope according to the requirement..here you see its basic example for print the cars version as string value that is passed as argument and then return in the function for print or use as differnt places as per requirement.
console.log(car2.version("Diesel Turbo Charged")); //print the cars class object values with function that geting the arguments in function and run the script inside function scope according to the requirement..here you see its basic example for print the cars version as string value that is passed as argument and then return in the function for print or use as differnt places as per requirement.
console.log(car3.version("Petrol Hybrid with Turbo Charged ")); //print the cars class object values with function that geting the arguments in function and run the script inside function scope according to the requirement..here you see its basic example for print the cars version as string value that is passed as argument and then return in the function for print or use as differnt places as per requirement.

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@ Import Export Methode @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import method =>   file data or content from another file when we getting then this method is called as import the data or file.
// when you receive a file content  like a function or object. so you get this only like export conditon likr if export {vcar} then you access or import it as {vcar} or if export like vcar then import as vcar..nothing is changed if you change the import method against the export method then you got error.

// export method =>   file data or content of the file or specific data when we provide access to use this another file where it required then we use export method
// when you export the content then remember that you can use export default property once in a file..if you use it again then you got an error.

// there are two type of method for export the content (1.) export default methode, (2.) export name method- {vcar, ncar, mcar etc} 
// one important thing that export default method is not {} curly braces and you assign single value or method but when you want to share multiple content like objects or array or functions then the choice is here only export with name. here we export various things into single export command.
import {vcar} from "./imp.js"; // importing content from other file.. (here we importing an object and its property)
console.log(vcar.name); // print or access the imported object property.

import {ncar} from "./imp.js";// importing content from other file.. (here we importing an object and its property)
console.log(ncar); // print or access the imported object property.



// @@@@@@@@@@@ Javascript JSON  @@@@@@@@@@@@@@@@

// json is a method of transfer the data or content from one place to another place like server to web page. 
// with help of json server sent the data to webpage inform of object for faster experience.

// some basic rules of json
//      json data come in pair format like key and value
//      json data seprated with , seprator
//      in json { ----- } bracketes hold the objects 
//      in json [-------] bracketes hold all array values.
//      a single json object can hold multiple arrays and objects togeather.

// convert the json data into javascript objects
//       JSON.parse(text); // this is the syntax that is used to convert the json data into the javascript object for easly aceess the properties of json object or javascript object that is converted from json format to javascript object format.
