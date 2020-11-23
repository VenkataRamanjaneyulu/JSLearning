//alert('Hello World!'); 
console.log('Hello World!');

// variables
let age= 27; //age is a variable which can be changed.
let year = 1993;
console.log('age is : '+age ,'and born year is : ' +year);

age= 30;// reassigning the value
console.log('new age is : '+age);

const pi =3.14; // pi is a constant which can't be changed.
console.log('Pi value is : '+pi);
//pi=20; //creates type error if we assign a new value to constant , uncomment and try once.
//console.log('Pi new value is '+pi); 

var name="Anil-Kattamuru"; // var is a legacy style for declaring variable.
console.log('Name is : '+name);

/*variable can't be started with digits like 1name
reserved keywords are not allowed  for identifiers */


/*
Data Types:
=========
Number : 1, 100.4 
String : "hello"
Boolean : true/false
Null   : Explicitly set a variable with no value
Undefined : Variables not yet defined.
Object : Complex data structures - Arrays , Dates etc., Everything in JS is an object
Symbol : Used with Objects , new addition with JS.
*/

/* 
=>JS is case -sensitive lang 
=>JS is loosely typed language
*/


/* 
*************Strings*************
=>We must enclose Strings with single quote (or) with double quote.
*/
let email = "kattamuruanil@gmail.com";
console.log("My Email is : "+ email);

//String concatenation
let firstName= "Anil";
let lastName = "Kattamuru";

let fullName= firstName+' '+lastName;
console.log("My FullName is : "+fullName);

//getting characters from string
//get first character of fullName
//JS is indexed with 0 as starting index.
let firstChar= fullName[0];
console.log("First Character at FullName is :"+ firstChar);

//String length is a property of String object.
console.log("Length of Fullname including spaces is : "+fullName.length);

//String Methods
console.log("FullName in UppserCase is : "+ fullName.toUpperCase());
let nameLowerCase = fullName.toLowerCase();
console.log("FullName in LowerCase is : "+ nameLowerCase);

let indexOfAt = email.indexOf('@');
console.log("Position of @ symbol in  "+email+" "+ "is : "+indexOfAt);


/*
*************Common String Methods *************
*/
let findChar = "a";
let lastCharIndexIs = email.lastIndexOf('a');
let emailLength = email.length;
console.log("Last Index of letter "+findChar+" in "+email+" is : "+lastCharIndexIs);

let lastCharInEmail = email[emailLength-1];
console.log("Last character in "+ email + " is : "+lastCharInEmail);

//Slice
console.log("Email after slice is :" +email.slice(3,13) );

//SubString
console.log("Email after substring is :" +email.substring(3,13) );
//Both substring and sliec wil have first argument is same i.e start position
//but for subString 2nd argument is length of indexes but for slice it is index element.

// email will not alter as Strings are immutable so it will create a new copy
console.log('Email remains unchanged even after slice/ substring : '+email);

//replace method
console.log("Email after replacing @ with $ is "+ email.replace('@','$'));

let testEmail = 'kattamuruanil';
//console.log(email.replace('a','e')); // only replaces the first character it founds but not all.


/* 
***********Numbers***********
*/

let radius = 10;
//math operators +, - ,* , / ,% , **
console.log("Area of circle is "+(pi)*(radius**2));
//order of precendence is important i.e BODMAS while doing calculations.
//++ has pre increment and post increment operator
//-- pre decrement and post decrement
let likes = 1;
likes+=1;
console.log("Likes values is "+likes);
let newLikes =1;
console.log("newLikes values is "+newLikes++); 

//NaN => Not a Number
 console.log("NaN example is 5*'hello' => "+ 5*"hello");

 //Concatenate Numbers
 let x= 10;
 let y=20;
 let StringNum="10";
 console.log('Concatenate value of two numbers is '+(x+y));
 console.log('Concatenate value of number and string is '+(x+StringNum));


 /* 
 *******String Templates i.e TemplateLiteral*******
 */
let title="My New Book";
let author="Venkat";
let concatStringExp= 'The blog called '+title+' by '+author+' has '+likes +' likes';
console.log('Concatenated string is : '+concatStringExp);

//using template string not uses quotes .
let templateString = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log('templateString value is : '+templateString);

let htmlTag = `
    <h2>${title}</h2>
    <p>By ${author} Has ${likes} likes </p>
`;
console.log('HtmlTag value is :'+htmlTag);


/*
***********Arrays**************
*/
let students =['Anil','Venkat','Karuna']; // Array
console.log('Students are : '+students);
console.log('student at index 1 is :' +students[1] );
students[1]='Kumar';
console.log('student at index 1 after reassigning is :' +students[1] );
console.log('Students are : '+students);// Arrays are mutable

let randomArray = ['string1',22];
console.log("Random at position 1 is :"+randomArray[1]);

console.log('Length of students is : '+students.length);

//Array Methods
let joinedArray =  students.join("-");
console.log('Array join method value is :'+joinedArray);

console.log('Index of Venkat in [ ' + students + ' ] array is : '+students.indexOf("Venkat"));// -1 because Venkat is not found
console.log('Index of Venkat in students array is : '+students.indexOf("Kumar"));

let concatArray = students.concat(randomArray);
console.log("concatArray using concat is : "+concatArray);

let studentPush = students.push("Venkat");
console.log("students after push operation is : "+students);

let studentsPop = students.pop("Venkat");
// console.log(studentsPop); // displays removed item
console.log("students after pop operation is : "+students);


/*
*********** Null and Undefined **********
*/

 let ageNew ;
 console.log("Age is "+ageNew + (ageNew+3) + `My age is ${ageNew}`);//  undefined NaN undefined

 ageNew = null;
 console.log("Age is "+ageNew +' '+ (ageNew+3) + ` My age is ${ageNew}`);// null 3 null

/*
*********  Booleans true/false **********
*/
console.log(true,false,"false","true");
let newEmail = "vkattamuru@salesforce.com";
let present = newEmail.includes('@');
console.log('present : '+present);

/*
****************Loose Comparison vs Strict Comparison****************
*/
let comp1 = 25;
let comp2 = "25";
console.log("Comp of 25 == 25 is : "+ (comp1==25));//true
console.log("Comp of 25 == '25' is : "+ (comp1==comp2));//true

console.log("Comp of 25 === 25 is : "+ (comp1===25));//true
console.log("Comp of 25 === '25' is : "+ (comp1===comp2)); // false because no type converion will happen.

//Lowercase lteers are greater than capital letters

/* 
************** Type Conversion *********
Converting one data type to other.
*/
let score = '100';
console.log('Type of score is : '+typeof score);
console.log('score is : '+ (score+1)); // no default type conversion so it prints 1001
console.log('score is : '+ (score*1)); // auto type conversion to number

score = Number(score);
console.log('score is : '+ (score+1)); // 101

let scoreMan = Number('hello');
console.log('scoreMan is : '+ scoreMan); // NaN 

let scoreString = String(50);
console.log(scoreString , typeof scoreString);

let newVar= Boolean(0);
console.log('newVar value is :'+ newVar); // false
let newVar2= Boolean("0");
console.log('newVar2 value is :'+ newVar2);// true
let newVar3= Boolean(null);
console.log('newVar3 value is :'+ newVar3); // false
let newVar4 = (Boolean)('');
console.log('newVar4 value is :'+ newVar4); // false
let newVar5 = (Boolean)(undefined);
console.log('newVar5 value is :'+ newVar5); // false
let newVar6 = (Boolean)(NaN);
console.log('newVar6 value is :'+ newVar6); // false
let newVar7 = (Boolean)(Infinity);
console.log('newVar7 value is :'+ newVar7); // true


/* 
********** Control Flow Statements *********
If 
else 
else if
for()
while()
do{}while();

*/

//for loop 
//no need of semicolon at the end of loop
const names=['Anil','Venkat','Andrew'];
for(let i=0 ; i<names.length ; i++){
    console.log('Name at '+i+ ' is : '+names[i]);
    let html2 = `<div>${names[i]}</div>`;
    console.log('html2 value is : '+ html2);
}













