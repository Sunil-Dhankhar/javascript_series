/* @@@@@@@@@@@@@@@@@@ Java Script Classes */

class cars { // declare or define a class 
   constructor (carname, mfdyear)// create a constructor that is a default method of the javascrit classes..this call automatically when the class is called. in simple terms we say that this metod is call each time when the class is called.
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


import {students} from "./imp.js"; // import class that is created in another file mentioned here 
 
// @@@@@ you can create multiple objects of a single class according to your requirement

const stud = new students("Roman williams", "2002"); // create a new object  of existing class and pass the value in form of arguments to the class
console.log(stud.name+" is now "+stud.age()+ " year old."); // print the data as per requirement from by giving object name with methode name.

const carr = new students("Land Rover", "2010"); // create a new object again from existing class and pass the value in form of arguments to the class
console.log(carr.name+" is my previous car and this is "+carr.age()+ " year old car."); // getting result based on passed arguments values via object and methods


const carss = new students("Audi x4", "2020"); // create a new object again from existing class and pass the value in form of arguments to the class
let dates = new Date(); // declare a new variable with date objects.
let years = dates.getFullYear(); // declare a new variable and then extract the full year value based on date object value and store it into variable

console.log(carss.name+" is my new car and i have bought this in "+carss.aging(years)+", "+carss.age()+ " year ago.");// call the class and its methods via passing the object values and arguments in methods with objects and get the result from the class methods based on passed arguments or values.

/* @@@@@@@@@@@  Javascript strict mode in classes   @@@@@@@@@@ */

// It doesn't matter whether you add 'use strict' before a class or not — if you do, it applies to the entire script outside and inside the class. if not then each class have its own strict mode
// the javascript classes already existing in strict mode, they not need strict keyword for apply strict mode.. every class have its own strict mode for the script.   
// All class methods and constructor code run in strict mode automatically.

//for example :-
    class student { // create a new class // each class have its own strict mode by default.
        constructor(name, prof, year){ // create a class constuctor have various/ multiple arguments
            this.name = name; // store the argument value into temprary variable of class constructor 
            this.prof = prof; // store the argument value into temprary variable of class constructor 
            this.year = year; // store the argument value into temprary variable of class constructor 
        }
        aged() //create a new function or method into the class
        {
            // date = new Date(); // ReferenceError: date is not defined
          let   date = new Date(); // declare the new varibale as date object
           return date.getFullYear() - this.year; // return the accurate value after the calculation based on current date and received date.
        } // close the function
    }

    const studs = new student("sandeep" , "Mechanical Enginer", 1987);// create a new object of existing class with passing arguments as values
    console.log(studs.aged()); // geting result based on calling the class object with class methods.. the class methods return the result based on received arguments and perform the code script with arguments and return the results

    // in this example you see that without dedine the variable we got a ReferenceError that date variable is not defined, you can check that this class has its own strict mode.
    // this not allow you to use variables without the define it. because in strict mode is mendatory to define variables before use...without define its use is prohibted.

    // @@@@@@@@@@@@@  JavaScript Class Inheritance   @@@@@@@@@@@@@

        // When we want to reduce conflicts in the script and avoid writing lengthy code or repeating the same function in multiple classes,
        // JavaScript provides a feature known as class inheritance. 
        // With this, we can inherit a parent class into a child class and use the parent class functions in the child class.
        // This makes the script shorter, reduces conflicts, and improves performance and efficiency.


        // for Example :-

        // we have already a class in above mentioned ..we just inherit this in our code with in the new class

        class car_care extends students { // start a new class with the extend (use a existing class in this class) a another class. 
            constructor(name, model, year){ // create a class constructor
                super(name); // this method is used or get the parent constructor value.
                this.brand = model; // store the argument received value into temprary reference variable for further use
                this.year = year; // store the argument received value into temprary reference variable for further use
            }
            car_brand(){ //create a new function or method 
                 return this.name + " have a bought the new car "+ this.brand+ " in "+ this.aging(this.year)+", just "+ this.age()+ " year Old" ;
                 // in above script it getting a parent constructor name along with brand value from constructor and values from parent methods like age and aging via pass the arguments and received result and then after return the bunch of all values. 
            }

            get carbrand() // add a new method in form of getter of class, this have only read property
            {
                return this.brand; // this returns this object stored value.
            }
            
            set carbrand(xt){ // add a new method in form of setter of class, this have update property for change old value with new value.
                this.brand = xt; // setting new received value with old value.
            }
            
            set carmodel(xt){ // add a new method in form of setter of class, this have update property for change old value with new value.
                this.year = xt; // setting new received value with old value.
            }

            static buyername(xt){ //create or declare a static method with argument 
                return xt; //returns the value of received in argument 
            }
           
            static bname(xt){ //declare a new static function have a argument 
                return xt.name+ " "+ xt.year+ " "+ xt.brand; // here xt is an class object that is transfer or pass as argument by static function
            }
        }

        const care = new car_care("Diljeet", "BMW", 2024); // create a new object of extend class and pass the values or arguments to this class...
        console.log(care.car_brand()); //getting result from extended class via calling the object and class method. and print the result related with combinatianl class into the console panel.

        // classes are also use getter and setters
        // getter = > get num() { return this.name;} this method have only read property and this method is used as property not as function.
        // setter = > set num(p) { return this.name = p;} this method have write or update property that update the value with new value.. this set the new value. and like getter it is also treated as property not as function
        // getter and setter can contain only single argument value, javascript not allows you to pass multiple values to getter and setter
        // if you want to set multiple values via use of setter then you should create a new setter for each value with new name...you cant create setter with single name.. it should be unique from other setter.
        // console.log(students.num) this call the class getter
        // console.log(students.num = "surjeet") this call the class setter for update the value.

        // for example : - 
        // i have created a setter and a getter method in existing class for reduce code length...check it above mentioned example related with inheritance.
        // here just call the getter and setter method ....

        console.log(care.carbrand); // calling the getter property of the class or you can also say that  call the get method of the class that return the read property related to the class
        console.log(care.carbrand="Buggati", care.carmodel=2025); // calling the setter property of the class that set the new value in place of old value.
        console.log(care); // after updated the objects parameter or values,  get or print the result of object values. // car_care { name: 'Diljeet', year: 2025, brand: 'Buggati' }
        console.log(care.car_brand()); //get all updated object class methods values // Diljeet have a bought the new car Buggati in 2025, just 0 year Old.

        // @@@@@@@ Hoisting of Class in JavaScript @@@@@@@

            // In JavaScript, class declarations are NOT hoisted.
            // This means you must declare a class before you can use it in your code.

            // Unlike function declarations, which are hoisted to the top of their scope,
            // class declarations remain in the temporal dead zone until they are defined.

            // Also, all classes in JavaScript run in strict mode by default.
            // In strict mode, using variables or classes before declaration is not allowed.

        // @@@@@@@ Static Method of Class in JavaScript @@@@@@@
            // syntax :-> static functionName(argumrnt if have passed){ ------code here ----------------} and put this into a class
            // i have create a static function inside the above mentioned or existing class (car_care)
            // in simple terms i explain what is static method..
            // the method who call the class directly with its existing method without call any class object is called as static method.
            // just add a keyword (static) before any function or method. that is treated as static function. ( static buyername(xt) {   ------  code here   -------  })
            //with the help of static method you call direct class method directly without creating class object.
            // for example => i have created a static function inisde a class car_care
            console.log(car_care.buyername("Dr. Rishi Sood")); // check here i call the class name(car_care).static function(buyername)and after that a argument according to my requirement.
            // you can create a argument of  class object and pass as argument..
            
            console.log(car_care.bname(care)); // check here i call the class name(car_care).static function(buyername)and after that a argument according to my requirement.




         