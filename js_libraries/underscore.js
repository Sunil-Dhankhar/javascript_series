const _ = require('underscore');

{ // _.each => this perform the role of foreach loop. 
    let arr1 = [1, 2, 2, 3, 4, 8, 12];

    _.each(arr1, (value, index) => {
        console.log(`Index ${index}: Value ${value}`);
    });
}