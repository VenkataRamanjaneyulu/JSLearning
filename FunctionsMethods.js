/* 
*********** Functions ********
=>Functions are part of object data type.
=>Functions are useful for code reusability.
=>Functions accept values and retyurn values.
*/

//function declaration
function functionName(){
    console.log('Inside Function!');
}

//calling function / invoking function
functionName();
functionName();

//function expression and semicolon is mandatory
const speak = function(){
    console.log('Inside Function Expression!');
};

//invoking function expression.
speak();

//JS uses hoisting for functions but not for function expressions
caller(); // it will not throw error even though  function is declared after.
function  caller(){
    console.log('Inside function hoisting');
}

