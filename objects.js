 /* 
 ********Objects**********
 =>Objects have properties and methods.
  */

  // Creating an Object literal
  //properties are key-value pairs
  let user = {
    name : 'Venkat',
    age: 27 ,
    email: 'kattamuruanil@gmail.com ',
    location:'Hyderabad',
    blogs : ['my first js blog', 'chess rules']
  };
  console.log('age is : ',user.age);
  user.age = 25;
  console.log('age is : ',user.age);
  console.log(user['age']);
  user['name']='anil';
  console.log(user['name']);

const key= 'location';
console.log(user[key], ' location');
console.log('Typeof user is :'+ typeof user);
