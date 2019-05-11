// Sort example with simple function and callback
var values = [0, 3, 2, 5, 7, 4, 8, 1];

values.sort(function(value1,value2){
    return value1-value2;
});

console.log(values);

/**
 * The same example with arrow functions
 * Basic structure of arrow function : param => expression
 */
var valuesArrow = [0, 3, 2, 5, 7, 4, 8, 1];
valuesArrow.sort((value1,value2) => value1-value2);

console.log(valuesArrow);

/**
 *  In other cases, when our arrow functions aren’t that simple and require more code,
 *  we can include a block of code after the arrow operator. For example:
 */
var greet = name => {
    var helloString = 'Greetings ';
    return helloString + name;
};

console.log(greet("Emmanuel"));