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

export  {vcar, ncar};


function mycar (carname, model, year)
{
    this.name = carname; 
    this.brand = model;
    this.year = year;
    
} 
export {mycar};