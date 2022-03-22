
//**************************************  var  ************************************

//when you declare a variable using the var keyword, 
//the scope of the variable is either global or local. 
//If you declare a variable outside of a function, the scope of the variable is global.
// When you declare a variable inside a function, the scope of the variable is local.

if (true) {
    var t = 5;
    console.log(t); //5
   }
   console.log(t); // 5

// *************************************  Let  ************************************
// let is similar to var but let has scope.
//  let is only accessible in the block level it is defined.

if (true) {
    let a = 40;
    console.log(a); //40
   }
   console.log(a); // undefined

// *************************************  const  ************************************

// Variables declared with the const maintain constant values. 
// const declarations share some similarities with let declarations.


if (true) {
    const a = 40;
    console.log(a); //40
   }
   console.log(a); //a is not defined






//NOTE 
// **********---  var variables can be re-declared and updated
// This means that we can do this within the same scope and won't get an error.

     var greeter = "hey hi";
     var greeter = "say Hello instead";




// **********---   Hoisting of var
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:

     console.log (greeter);
     var greeter = "say hello"
// it is interpreted as this:

//     var greeter;
     console.log(greeter); // greeter is undefined
     greeter = "say hello"
// So var variables are hoisted to the top of their scope and initialized with a value of undefined.
//-----------> if you do that to let , you will have (Reference Error.)





//ici note for the let 
// let can be updated but not re-declared.
// Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. So while this will work:

     let greeting = "say Hi";
     greeting = "say Hello instead";
// this will return an error:
// ---> this part is commented so you wont find a probleme when you go to the console part 
    //  let greeting = "say Hi";
    //  let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared




    //const note : 

    // const object cannot be updated, the properties of this objects can be updated.
    //  Therefore, if we declare a const object as this:
    const greetingg = {
        message: "say Hi",
        times: 4
    }

    // we can't do 
    greetingg = {
        words: "Hello",
        number: "five"
    } // error:  Assignment to constant variable.
    // but we can add like this : 
    // greeting.message = "say Hello instead";
