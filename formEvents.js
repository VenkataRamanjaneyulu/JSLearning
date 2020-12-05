/*
*****Form Events and Regular Expressions and KeyBoard Events *******
*/

/*
***********Form Events ************
*/

const form = document.querySelector('.signup-form');
const feedbackjs = document.querySelector('.feedback');

    const username = form.username.value;
    //console.log(username);
    const usernamePattern = /^[a-zA-Z]{6,8}$/;
    //console.log(usernamePattern.test(username));

//const name = document.querySelector('#username');

//click event will get called only when you click on button but 
//with sumbit event even if you press enter button , function will get called

/*form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log(name.value);
    //console.log(form.username.value);  // another way of getting value using with id/name attributes
    //console.log(form.username.value);
    
    
    if(usernamePattern.test(username)){
        //good feedback
        feedbackjs.textContent='That username is valid';
    }else{
        //feedback help info
        feedbackjs.textContent='Username must be of min 6 characters and maximum of 12 characters and only characters are allowed';
    } 

});
*/


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
form.username.addEventListener('keyup',(e) =>{
    console.log(e.target.value,form.username.value);
    console.log(usernamePattern.test(e.target.value));
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class','success');
        //feedbackjs.textContent='That username is valid';
    }else{
        //feedback help info
        form.username.setAttribute('class','error');
    } 

});


//array method i.e filter
const users =[
    {name:"anil",premium:true},
    {name:"kumar",premium:false},
    {name:"venkat",premium:false},
    {name:"satyavati",premium:true}
];
const premiumUsers = users.filter(user=> user.premium);
console.log(premiumUsers);


//array method i.e map
 const products =[
    {name:"mobile",price:50000},
    {name:"tomato",price:50},
    {name:"apple",price:150},
    {name:"lamp",price:777}
];
console.log(products);
const salesProducts = products.map( item =>{
    if(item.price <100){
        return {name:item.name,price:item.price/2};
    }else{
        return item;   
    }
});
console.log(salesProducts);


//array method i.e reduce
const scores = [33,41 ,55,90,75,100,12,14,50];
//finding number of scores greater than 50
const requredScores = scores.reduce( (acc,cur)=>{
 if(cur>=50){
     acc+=1;
 }
 return acc;
},0);

console.log(requredScores);


const playerScores = [
    {player:"Anil",score:10},
    {player:"Venkat",score:20},
    {player:"Kumar",score:40},
    {player:"Anil",score:20},
    {player:"Venkat",score:60},
    {player:"Kumar",score:30},
    {player:"Anil",score:30}
];

//score by anil
const anilScore = playerScores.reduce( (acc,cur)=>{
 if(cur.player ==='Anil'){
     acc+= cur.score;
 }
 return acc;
},0);
console.log(anilScore);


//array method i.e find
const scoresFind = [10,20,30,40,50,60,70,80,90,100];
// find 50 present or not
const found50 = scoresFind.find( item =>  item>=50);
console.log(found50);
 

//array method i.e sort
const marks = [ 10, 90, 50, 5 , 13, 75];
console.log(marks.sort()); // 10, 13, 5, 50, 75, 90 but not correct
console.log(marks.sort( (a,b) => b-a)); //90, 75, 50, 13, 10, 5
console.log(marks.reverse()); // 5, 10, 13, 50, 75, 90

const studentMarks = [
    {name:"A",score:35},
    {name:"B",score:15},
    {name:"C",score:95},
    {name:"D",score:0},
    {name:"E",score:44}
];

console.log( studentMarks.sort( (a,b)=> b.score-a.score));//descsending
console.log( studentMarks.sort( (a,b)=> a.score-b.score));//asscending


// array methods chaining
const newProducts = [
    {name:"lapy",price:50000},
    {name:"mobile",price:1000},
    {name:"spectacle",price:500},
    {name:"fan",price:1600},
    {name:"ac",price:80000}
];

const filteredProdcucts =  newProducts.filter(product => product.price>=50000);
console.log(filteredProdcucts);
const promos = filteredProdcucts.map( product => `The ${product.name} is now ${product.price*0.9} rupees only`);
console.log(promos);


//method chaining
const promosNew = newProducts
                .filter(product => product.price>=50000)
                .map( product => `The ${product.name} is now ${product.price*0.9} rupees only`);
                console.log(promosNew);
