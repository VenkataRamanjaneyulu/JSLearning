//Form Events and Regular Expressions and KeyBoard Events
const form = document.querySelector('.signup-form');
//const name = document.querySelector('#username');

//click event will get called only when you click on button but 
//with sumbit event even if you press enter button , function will get called

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log(name.value);
    //console.log(form.username.value);  // another way of getting value using with id/name attributes
    //console.log(form.username.value);
});