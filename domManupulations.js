// modify html using JS
/*
************ DOM ********
*/

//Querying the DOM
//QuerySelector

//gets single element from dom
const para = document.querySelector('.error');
console.log('para',para);

////gets mulitiple elements from dom
const paras = document.querySelectorAll('p');
// returns node-list
paras.forEach( (para) =>{
    console.log(para, 'para');
});

const titl = document.getElementById('page-title');
console.log(titl,'titl');

const errors = document.getElementsByClassName('error');
console.log(errors ,'errors');
// errors is an html collection and forEach method is not supported

const ptags = document.getElementsByTagName('p'); // htmlCollection.
console.log(ptags);
console.log(ptags[0]);


/* Adding and changing content using JS */
const para1 = document.querySelector('p');
//console.log('para text is : ',para1.innerText);
para1.innerText = 'Hello Venkat!';

paras.forEach( (para) =>{
    console.log(para.innerText);
});


//changing content

const content = document.querySelector('.content');
//console.log(content2.innerHTML);
content.innerHTML += `<h2> This is a new heading from JS  with data</h2>`
//console.log(content2.innerHTML); /// += is for appending and = for overriding

const persons = ['Venkat','Anil','Andrew','Karuna','Beny','Satyavati'];
persons.forEach((person) => {
 content.innerHTML += `<p>${person}</p>`;
});

/*
********** Getting and Setting attributes of html tags 
*/

const linkTag = document.querySelector('a');
//console.log('link tags : '+ linkTag.getAttribute('href'));
linkTag.setAttribute('href','https://login.salesforce.com');
linkTag.innerText = 'Salesforce';
linkTag.setAttribute('style','color:green'); // if attribue doesn't exist then js will create an attribute.


/*
************* Changing CSS ********
*/

const title = document.querySelector('h1'); 
//title.setAttribute('style','margin:150px 50px 10px 30px'); // color property was overriden by this.\
console.log('title styles :' , title.style);
title.style.margin  = '50px';
title.style.color = 'crimson';
/* if you wnat to use font-size css property you can't use like title.style.font-size ='10px'; 
    because js will think it's subtraction of size variable and font variable
    To overcome this convert font-size to cameCase like fontSize
*/
title.style.fontSize = '100px';


/*
******** Adding and Removing classes from html 
*/

const classVar = document.querySelector('#errorId');
console.log('classList',classVar.classList); 
classVar.classList.add('jsClass');// returns DOMTokenList with class names
console.log('classListAfter',classVar.classList); 
classVar.classList.remove('error');
console.log('classListAfterRemove',classVar.classList); 


//textContent vs innerText => textContent will bring all the content but innerText will bring only visible content

const parasCol= document.querySelectorAll('p');
parasCol.forEach( p => {
 if(p.textContent.toLowerCase().includes('success')){
     p.classList.add('success');
 }else if (p.textContent.toLowerCase().includes('error')){
    p.classList.add('error');
 }else {
    p.classList.remove('error');
    p.classList.remove('success');
 }
});


//toggle method for adding or removing
const titleVar = document.querySelector('h1');
titleVar.classList.toggle('page-title');
titleVar.classList.toggle('page-title');

