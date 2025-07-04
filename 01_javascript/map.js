/*  Map is  a object that is collection of keys and values in form of [key, value] pairs 
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
*/
const fruits = new Map([ //create or declare a new varible  with multilevel array in form of MAP
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

{
    let numb = fruits.get("apples"); // get the value from the array reference variable  
    console.log(numb); // 500
}

{
    let sets = fruits.set("mango", 400)
    console.log(sets);//Map(4) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200, 'mango' => 400
}
}

{
    let sets = fruits.has("mango")
    console.log(sets);//true
}
 {
    let del = fruits.delete("oranges")
    console.log(del);//true
    console.log(fruits)//Map(3) { 'apples' => 500, 'bananas' => 300, 'mango' => 400 }
}
{
    console.log(fruits.size);//3
}
{
    console.log(fruits.clear()); //return undefined
    console.log(fruits); //Map(0) {}
}


