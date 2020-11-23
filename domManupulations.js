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
paras.forEach( (para) =>{
    console.log(para, 'para');
});



