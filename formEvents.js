/*
*****Form Events and Regular Expressions and KeyBoard Events *******
*/

/*
***********Form Events ************
*/

const form = document.querySelector('.signup-form');
const feedbackjs = document.querySelector('.feedback');

//const name = document.querySelector('#username');

//click event will get called only when you click on button but 
//with sumbit event even if you press enter button , function will get called

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log(name.value);
    //console.log(form.username.value);  // another way of getting value using with id/name attributes
    //console.log(form.username.value);
    const username = form.username.value;
    console.log(username);
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    console.log(usernamePattern.test(username));
    
    if(usernamePattern.test(username)){
        //good feedback
        feedbackjs.textContent='That username is valid';
    }else{
        //feedback help info
        feedbackjs.textContent='Username must be of min 6 characters and maximum of 12 characters and only characters are allowed';
    } 

});


/*
********* Regular Expression **********
*/

// If you want to validate we can use regular expressions like pattern-matchers.
//Regular expressions starts with forward slash / and ends with forward slash
// =>^ indicates start and $ indicates end /*anil$/ it will check for only anil
//charSet with [a-zA-Z] for single character match
//=> characters with min 6 chars and max 10 chars => /^[a-zA-Z0-9]{6,10}$/
//dot means match  any character  /^.{6,10}$

const username33 ='@anil120';
const regex = /[a-z0-9]{6,}/; //true checks like includes
const username2 ='@anil120';
const regex2 = /^[a-z0-9]{6,}$/; //false , checks from starting till end
console.log('regex value is : '+regex.test(username33));
console.log('regex value is : '+regex2.test(username2));

const username3 ='77hh@anil1208888';
let resultRegex = username3.search(regex);// returns integer of first match character.
console.log('result is :'+resultRegex);// retyrn -1 if no match


/*
************KeyBoard Events ***********
*/

