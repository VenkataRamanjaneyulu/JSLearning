//Events

const button = document.querySelector('button');
button.addEventListener('click', ()=>{
 //console.log('You Poked me!');
});

const items = document.querySelectorAll('li');
items.forEach( (item)=>{
   item.addEventListener('click',(evt) => {
    //    console.log(evt.target);
    //    console.log(item);
    evt.target.style.textDecoration = 'line-through';
   })
});

