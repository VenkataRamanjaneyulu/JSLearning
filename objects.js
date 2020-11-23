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
    blogs : ['my first js blog', 'chess rules'],
    login: function(){
        console.log('User Logged In');
    },
    logout : function(){
        console.log('User Logged Out');
    },
    logBlogs : function(){
        this.blogs.forEach((blog)=>{
            console.log('Blog name is : '+blog);
        })
    },
    printEmail(){
       console.log('Email printed :'+ this.email); 
    }

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

user.login();// login is a method here
user.logout();
user.logBlogs(); // this keyword for accessing current object else window object
// but for arrow function , the value is not changed based on caller but it will show window object.
user.printEmail(); // for normal functions  this keyword will work.



/*
******** Objects in Arrays *********
*/
const blogs = [
    { title : 'SFDC Book', likes: 50},
    { title : 'LWC Book', likes: 100},
];
console.log('blogs ', blogs);
blogs.forEach((blog)=>{
  console.log('title : '+ blog.title + ' '+ ' Likes : '+ blog.likes);
});

