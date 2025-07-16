let mcar = { //declare a variable as object with key and values properties
    name: "Jaguar", // key + value properties
    year: 2021, // key + value properties
}  // end of object


let vcar = { //declare a variable as object with key and values properties
    name: "Audi", // key + value properties
    year: 2023, // key + value properties
}  // end of object

let ncar = { //declare a variable as object with key and values properties
    name: "Toyota", // key + value properties
    year: 2020, // key + value properties
}  // end of object

export  {vcar, ncar}; // export the both objects 


function mycar (carname, model, year) // declare a new function with arguments
{
    this.name = carname; //putting argument values into the reference object variable
    this.brand = model; //putting argument values into the reference object variable
    this.year = year;//putting argument values into the reference object variable
    
} 
export {mycar}; // export the function method



class students { // start  a class 
    constructor(name, year){ // create a constructor for class with arguments // its automatically called when the class is called 
        this.name = name; //putting argument values into the reference object variable
        this.year = year;//putting argument values into the reference object variable
    }
    age() // start a function or method inside the class 
    {
        let dates = new Date(); //create a  new variable with date object;
        return dates.getFullYear() - this.year; //returns the result after calculation perform based on received date.
    }
    aging(x)//start a new functin inside the class 
    {
        return x =  this.year;//getting the value from argument and then match it with this reference object value after that insert it into in pre-defined variable that is also in argument then return this variable to callback functin or object. 
    }
}

export{students} // export the class.