//Events

const button = document.querySelector('button');
button.addEventListener('click', ()=>{
 console.log('You Poked me!');
});

const items = document.querySelectorAll('li');
items.forEach( (item)=>{
   item.addEventListener('click',(evt) => {
    //    console.log(evt.target);
    //    console.log(item);
    //evt.target.style.textDecoration = 'line-through';
    evt.target.remove(); /// removes elemnt from dom
   })
});

/* 
***********Adding and Deleting elements from DOM***********
*/
let ul = document.querySelector('ul');
//ul.remove(); // removes dom eelemnt

const button2 =  document.querySelector('button');
button2.addEventListener('click', ()=>{
  const li = document.createElement('li');
  li.textContent = 'someThing new to do';
  //ul.append(li); // adds at last
  ul.prepend(li); 

});

// Notice , we can't delete the todo items added by clicking add new button.

