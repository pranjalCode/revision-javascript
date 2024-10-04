//Objects can be created by many ways

//1. using Literals, it is not singlton object
let user = {
    name: 'pranjal',
    email: 'pranshu@gmail.com',
    age: 27
}

let user4 = {
    name: 'pranshu',
    email: 'pranshu@gmail.com',
    age: 27
}

const cu = {...user, ...user4} //usig spread operator triple dot(...) in curly braces
console.log("Using spread Operator "+cu)
console.log(user)
console.log(user.name)  //we can get element using dot (.)
console.log(user['name'])  //using square bracket[], this one is the best way

//2. Using object constructor, it is singlton object
let user2 = new Object();
user2.name = 'shubham';
user2.age = 27;
user2.email = 'jsr@gmail.com';
console.log(user2)


//3. Using constructor Function and this keyword
function user3 (name, email, age, cont){
    this.name = name;   
    this.email = email;
    this.age = age;
    this.cont = cont;
}

let obj = new user3('shiva', 'shiva@exam.com', 27, 7007);
console.log(obj);




// *****************************************************************************************

//Object de structure
const emp = {
    name: 'Ram',
    empid: '0124',
    gender: 'male',
    age: 25
}

//we can get any element using dot(.) operator
const {name} = emp;  //this one is the de structuring of object
console.log(name);