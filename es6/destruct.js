// -1-Spread Operator
// The spread operator allows an iterable to spread or expand individually inside a receiver.
//  Iterables are anything that can be looped over such as strings, arrays.

 const code1 = 'CODEBURST'; // Line 1
 const caracteres = [ ...code1 ]; // Line 2
 console.log(caracteres) ;

 const splitt=code1.split('')
 console.log(splitt)

//we will have the same  [ 'C', 'O', 'D', 'E', 'B', 'U', 'R', 'S', 'T' ]

const items = [1,58,96,58];
const item = [1,58,96,58];

console.log('items',items) // Line 1
console.log('items',...items) // line2
console.log(...item,...items)//1 58 96 58 1 58 96 58
let test1 = [...items].map(el=>el*2); // show we can map and multiply by 2
console.log('test1',test1)


const obj = { name: 'Foo', age: 22 };
const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };

const newObj = { ...obj }
const newOb = { ...obj,...obj1,...obj2 }

console.log('newObj',newObj,obj,newOb)
//for the newobj  { name: 'Foo', age: 22 }
//for newOb {name: 'Foo', age: 22, firstName: 'Foo', lastName: 'Bar', gender: 'M'} the age:22 they will add just one not the two of them 




//*********************Destructuring******************** */

// Destructuring means taking out ( technically, making a copy of ) 
// individual items from an object or an array and assigning them to a variable

// Declaring Variables before Assignment

// let introduction = ["Hello", "I" , "am", "ady"];
// let [greetinfg, pronoun] = introduction;

// console.log(greetinfg);//"Hello"
// console.log(pronoun);//"I"
// // -----------------------
//  let [greetieeng,,,test] = ["Hello", "I" , "am", "ady"];

//  console.log(greetieeng);//"Hello"
//  console.log(test);//"ady"

//  //object Part : 

let person = {testt: "ady", country: "Nigeria", job: "Developer"};
//let {testt, country, job} = {testt: "ady", country: "Nigeria", job: "Developer"};//or
let {testt, country, job} = person;

console.log(testt);//"ady"
console.log(country);//"Nigeria"
console.log(job);//Developer"






//***************************    Template Literals */

let user = {
    name: "mohamed",
    age: 25,
    address: {
      city: "cité el khadhra",
      cp: 1400,
    },
  };
   console.log(`my name is ${user.name}, and i'm ${user.age} and i live in ${user.address.city} `)



let {testyy,age,city,cp} = user
console.log(`my name is ${testyy}, and i'm ${age} and i live in ${city}: ${cp} `)