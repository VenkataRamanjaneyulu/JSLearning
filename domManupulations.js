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

