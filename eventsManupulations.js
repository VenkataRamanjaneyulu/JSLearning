//Events
/*
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
 console.log('You Poked me!');
}); 
*/

/*
const items = document.querySelectorAll('li');
items.forEach( (item)=>{
   item.addEventListener('click',(evt) => {
    console.log('Li clicked');
    //    console.log(evt.target);
    //    console.log(item);
    //evt.target.style.textDecoration = 'line-through';
    evt.target.remove(); /// removes elemnt from dom
    evt.stopPropagation(); // stops event bubbling to parent
   })
});
*/

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
//Which can be solved using event delegation  / bubbling.

/* 
********** Event Bubbling and Event Delegation**********
*/

ul.addEventListener('click',(evt)=>{
 console.log(evt); // under evt object check for target and then for tagName
 if(evt.target.tagName ==='LI'){
     evt.target.remove();
 }
});