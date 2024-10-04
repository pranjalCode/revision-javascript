//In JS array can be multiple data types as well as single data type
//It is mutable

//First wayt to create array using square brackets [] 'Literal Notation' 
let a = [1,2.5, true, 'sibbu', null, undefined, Symbol(27), 4542178965412654n]
console.log(a)

//Second way, using new Array() constuctor
let b = new Array(4,4,5,7);
console.log(b)

const ab = [...a, ...b]
console.log(ab, typeof ab)
let ac = a.concat(b)
console.log(ac)