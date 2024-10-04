// There are two types of datatype in javascript
// 1. Primitive
// 2. Non-Primitive

//There are 7 types of primitive data type
let s = 27    //Number data type
console.log(s, typeof(s))

let name = 'JavaScript'   //String data type
console.log(name, typeof name)

let b = true             //Boolean type
console.log(b, typeof b)

let n = null    //null type, it is signle alone value
console.log(n, typeof(n))

let u; //undefined type
console.log(u, typeof u)

let sm = Symbol(27);    //Symbol type, used to declare uniques ids
console.log(sm, typeof(sm))

let bi = 14578727021475n //Bigint type
console.log(bi, typeof(bi))

//There are 3 non primitive data types
//call by reference

let a = [1,5,7,6,98,10]  //array type
console.log(a, typeof(a))

let student = {
    name: 'sibbu', 
    age: 27,
    contact: 3508
} //object type
console.log(student, typeof student)


let func = function addNumber(){
    return console.log('hello')
} //function object
console.log(func, typeof(func))




//==============================================================================================
//Memory Allocation
//Stack (for primitive typr)
//Heap (for non-primitive type)

let fname = 'pranjal'
let lname = 'srivastav'
console.log(fname+ " "+lname) //out dated use of this syntax

console.log(`my name is ${fname} ${lname}`) //modern use of this syntax, easy to apply method on it