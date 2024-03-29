// -1-Opérateur de propagation
// L'opérateur de propagation permet à un itérable de se propager ou de se développer individuellement à l'intérieur d'un récepteur.
// Les itérables sont tout ce qui peut être bouclé, comme des chaînes, des tableaux.

 const code1 = 'CODEBURST'; // Line 1
 const caracteres = [ ...code1 ]; // Line 2
 console.log(caracteres) ;

 const splitt=code1.split('')
 console.log(splitt)

//on aura le même [ 'C', 'O', 'D', 'E', 'B', 'U', 'R', 'S', 'T' ]


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
//pour le nouvelobj { nom : 'Foo', âge : 22 }
//for newOb {name: 'Foo', age: 22, firstName: 'Foo', lastName: 'Bar', gender: 'M'} the age:22 ils ajouteront un seul pas les deux

// NOTE
// we create or have an object with default values and we want to create an other that have the same keys and values but change element in it 

const defaultObject ={
  name:"default name",
  lastName:"default lastname",
  age:"default age"
}
const users ={
  ...defaultObject,
  name:"meriam",
  age:28

}
console.log(defaultObject),console.log(users)
// console.log---> defaultObject{
//   age:default age
//   lastName:default lastname
//   name:default name
//   }
// console.log users -> { age:28,lastName:default lastname,name:meriam }











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
