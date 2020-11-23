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



/*
*********** Arguments and Parameters ************
*/
const tryFunction = function(name='defaultName',day='Morning'){
    //name is called pararmeter and it is a local variable
    console.log(`Good ${day} ${name}`);
};
tryFunction(); // prints default name
tryFunction('Anil'); // anil is called argument
// order of arguments is importanat.
tryFunction('Anil','Night');

/*
********** Return statement of function ******
*/
const calcArea = function(radius){
    return (3.14* (radius**2 ) );
};

let area = calcArea(10);
console.log('area value is',area);

const doWithArea = function(area){
    console.log('area passed to doWithArea is', area);
};

doWithArea(area);


/* 
*********** Arrow Functions ***********
=>Parenthesis and return statement are required if there is one param.
*/
const calcArea2 = (radius) => {
    return (3.14* (radius**2 ) );
};
let area2 = calcArea2(10);
console.log('area value  from arrow function is',area2);


/* Converting normal functions to arrow functions.
const greet = function(){
    return 'Hello';
};
const greetArrow = ()=> 'Hello';
console.log(greetArrow());
//return statement and block scope is not required for one statement in function


const bill = function(products,tax){
 let total =0;
 for(let i=0 ; i<products.length;i++){
     total += products[i]+(products[i]*tac);
 }
 return total;
};


const bill2 = (products,tax) => {
    let total =0;
    for(let i=0 ; i<products.length;i++){
     total += products[i]+(products[i]*tax);
    }
 return total;
};

console.log(bill2([10,30,40],0.1) , 'final price');

*/

