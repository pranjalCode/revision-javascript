function addTwoNumber(){ //function define with function keyword
    return 3+4           //it must be return something
                         //If we didn't pass any parameter, simply we call it without any argument
}

console.log(addTwoNumber())

function doSomething(s,p){
    return Number(s) * Number(p)
}

console.log(7,7)

function takeAnyNumberofParameter(...s){ //(...) triple dot is rest operator used in function
                                         //without function it is spread operator
    return s
}

console.log(takeAnyNumberofParameter(27,8,6,7,12))


//pass an object into function
let obj = {
    name: 'shubham',
    age: 27
}
function handlingObject(anyObjectName){
    return console.log(`Hello I am ${anyObjectName.name} and I am ${anyObjectName.age}`)
}

handlingObject(obj);


//pass array in function

let array = [6,7,8,9,10,11,12,13,14]
function returnArrayFunction(getArray){
    return getArray[7]
}

console.log(returnArrayFunction(array))

//************Arrow Function**************************/

let sayHello = () => {    // '()=>{}' this is arrow function
    return 'Hello from Arrow function'  //every function return somthing, so we add return keyword explicitly
}
console.log(sayHello())

let addTwo = (a,b)=> (a+b)  //Implicit Arrow Function
console.log(addTwo(4,7))

let addThree = () => ({name: "pranjal", age: 27}) //we can pass object within parenthesis
console.log(addThree())

//***************  IIFE  *****************************/
//(Function Defination)(Execution Function);   ()() this is IIFE funcion
//semicolon is must after the execution code

( (name) => {
  console.log(`Good Evening ${name}`);
})('sibbu')