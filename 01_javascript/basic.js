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

                Thanks for visit here..

*/ 

