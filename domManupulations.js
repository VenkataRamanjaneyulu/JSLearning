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

