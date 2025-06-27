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
console.log(cars.push("TATA"));// this increment one element into existing array or add 1 new value into the existing array into the last of array
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

let allModels = myObj.carss.flatMap(car => car.models);  // this method is used for grab all car models that are placed into nested array into single layer array in short term.
console.log(allModels);
console.log(allModels[4]);

let arr = [[1,2],[3,4],[5,6],[7,[8,[9,0]]]];// another nested array
let pc = arr.flat(Infinity);// this method is used to convert a multilevel array into single level array like [1,2,3,4,5,6,7,8,9,0]

console.log(pc); // print the nested array as flat aray and change the all level into defth provide level like [1,2,3,4,5,6,7,8[9,0]],if we provide infinity in place of 2(depth) then output is in single array like [1,2,3,4,5,6,7,8,9,0]
console.log(pc.flatMap(x => [x, x * 15])); // here we print an array with performing calculation as per index.. 1, 1*15 = 1,15, => 2, 2*15 = 2,30 and so on.
const carry = cars.splice(1,0, "Mahindra & Mahindra", "Toyota", "Volkswagon", "Skoda", "Honda");// with this method we add some new array elements to the existing array 
console.log(cars);//printing the array after added the elements into the array

let rv  = pc.find(function(values){ // find method is used for find specif value from the array
               if(values > 5) {
                    //console.log(values) // if we print here then it provide me all values that have greater then 5 that are existing in array
                    return values; // with this method its return only one value that is existing in array when condition is true.. here conditin is true when after 5, 6 is existing, then it returns the 6
               }
});
console.log(rv); // print in console the return value that found in the array
console.log(pc.sort());
console.log(pc.reverse());
let bie = [90,19,2,3,4,5,6,87,8,9,18,15];
console.log(bie.sort(function(a,b){return a - b})); // sort as numaric number in ascending order
console.log(bie.sort(function(a,b){return b - a})); // sort as numaric number in descending order
console.log(pc.sort(function(){return 0.5 - Math.random()}));
//console.log(pc.reverse(), pc.sort());
/* some array method that are

        1.  pop() => remove the last element of an Array
        2.  shift() => remove the first element of an Array
        3.  push() => add new elemt into the existing array
        4.  join() => join each element of the array with other as String
        5.  toString => this convert the array as String
        6.  unshift() => this is used for add new value or element into the array at the bigning
        7.  delete cars[0] => this is used for delete a perticular element at specific position (**Note** :- this methode leave an undefined hole in array after remove element, you should pop,shift methode in place of delete ) 
        8.  concat() => this methode is used for merge two or more different -2 array into one called as concatinatation of the array
        9.  flat('depth')=> this method is used for convert the array into single array. multilayer to single layer array
        10. flatMap((1, 1 * 10) => flatmap method is used for doing mapping of array, it works (sometimes) look like a foreach, for-loop, for getting the value of multilayered array
        11. array.splice(2(index number), 1(count of element that want to remove), "elemennts-name") => this method is used to add new elemrnt at specifice location in the array and we also replace and remove some element of the array with this method through defing the path and key
                                    this effect the original array..
        12  array.toSpliced(1,2) => this methode works as same splice method, but a major differnce in both is that where splice affected orignal array but the toSpliced method performing
                                    same splice functionality in new different Array without effected orignal array.
        13. slice(1,3) => this method is used for slice an array from a specific location without effecting the original array, this create a new array using slice methode with array values from the specific location
                                    like (slice(1 (starting point),3 (ending point))). 
        14. indexOf("array value")+1 => this method is used for find the position of array elements from the array from the start side
        15. lastIndexOf("array value")+1 => this method is also used for find the array element position from the last/end side of array elemrnts
        16. includes("array element") => this is used to verify or check that this element is existing or not into the array
        17. find("array values") => with this method we get the value according to our requirement if the element is existing in the array. first you create a call back function in the find function 
                                    then pass the array values into function, here you check the required value is existing or not in the array. if already existing into the array then return the value for print or another operation.
        18. findIndex(array value) => this method is used to find the index of an array value...
        19. findLast(array value) => This method is used to find a value according to a condition starting from the end of the array. It checks the last element first; if it satisfies the condition, it is returned. Then it moves to the previous one, and so on, until the start, while the condition is not met.
        20. arrayname.findLastIndex(x => x > 40) => this is alos working like previouse one (find Last method). but here find only index of the value not value from the last of the array.
        21. sort() => this method is used for sort the elements of an array as ASCENDING in orderas value wise like as index wise like [0,1,2,3,4,5,6,7,8,9,10,11].
        22. reverse() => this methode is used to print array from ending  to startting..in reverse mode as index wise like from [90,19,2,3,4,5,6,87,8,9,18,15] to => [15,18,9,8,87,6,5,4,3,2,19,90].
        23. sort() + reverse() = Sort the array elements sort as DESCENDING order from the big number to small number..not metter what the array index of this. just sort as descending order.
        24. toSorted() => this method is also similar to sort method and also used for sort array elements, but a major differnce between them is that where sort method is alter the original array and sord the original array,
                            but toSorted method is not affecting the original array and it create the replica of original array and sort that new replica of original...or sort the new array..
        25 toReversed() => this method is also similar to reverse but not the same where the reverse method is used to reverse order of an original array, but in toReversed method it create the new array of original array,
                            know as replica of an original array, and then sort this back to front as index wise like [15,18,9,8,87,6,5,4,3,2,19,90].
                            
                // **  Note that ** -> sort method is basicalyy sort the string , so  in string if we found "100" and "25" that both are string and sort method sort it ass 100,25 becouse 1 (100) is small then 2 (25)
                        so result could be wronge. so for numaric  sorting we use function for compare each element of aaray mathematically that which element is small and which one is big..
        26. point.sort(function(a,b){return a - b});  //this is call numaric sorting order//in which compare 2 values and find one is small and one is big, small is written first called as ascending order.
        27. point.sort(function(a,b){return b - a});  //this is call numaric sorting order//in which compare 2 values and find one is big and one is small, big is written first called as descending order.
                
                // ** Note ** -> When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
                             (condition 1)=>    If the result is negative, a is sorted before b.
                             (condition 2)=>    If the result is positive, b is sorted before a.
                             (condition 3)=>    If the result is 0, no changes are done with the sort order of the two values.
        
        28  points.sort(function(){return 0.5 - Math.random()}); // this method is used for set array order as rendom order with new order each time when ever call it. this is not a specific order like asc,desc etc..
        29. min or max value() =>   // get smallest value from array = point[0] && highest value let bt = point.length-1; ,point[bt]; // this provide the highest value from the array list. in ascending order of array
        30. min or max value() =>   // get highest value from array = point[0] && smallest value let bt = point.length-1; ,point[bt]; // this provide the highest value from the array list. in Descending order of array
        */



