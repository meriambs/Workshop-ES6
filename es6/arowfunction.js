//***************************** arrow functions */

// ES6 arrow functions provide you with an alternative
//  way to write a shorter syntax compared to the function expression.


function add(x, y) {
    return x + y;
  }
  
  console.log(add(1, 2));
  
//   The following example is equivalent to the above add()
//    function expression but use an arrow function instead:  
  const add1 = (x, y) => {
    return x + y;
  };

//   In this example, the arrow function has one expression x + y 
// so it returns the result of the expression.

// However, if you use the block syntax, you need to specify the return keyword:

let add = (x, y) => { return x + y; };




// If you use an expression in the body of an arrow function, you don’t need to use the curly braces.

//   const add1 = (x, y) => x + y;
  console.log(add1(1, 2));





//  ---------------------- JavaScript arrow functions with no parameter
// If the arrow function has no parameter, you need to use parentheses, like this:

() => { statements }

//-----------------------let's talk about the Line break
// JavaScript doesn’t allow you to have a line break between
//  the parameter definition and the arrow (=>) in an arrow function.

// For example, the following code causes a SyntaxError:
// -----------------remove the comment to understand
// let multiply = (x,y) 
// => x * y; 

// -----------------Code language: JavaScript (javascript)
// However, the following code works perfectly fine:

// let multiply = (x,y) => 
// x * y;