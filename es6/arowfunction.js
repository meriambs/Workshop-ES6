//***************************** arrow functions */

//Les fonctions fléchées de l'ES6 vous offrent une alternative
// façon d'écrire une syntaxe plus courte par rapport à l'expression de la fonction.


function add(x, y) {
    return x + y;
  }
  
  console.log(add(1, 2));
  

// L'exemple suivant est équivalent à l'add() ci-dessus
// expression de fonction mais utilisez une fonction fléchée à la place :

  const add1 = (x, y) => {
    return x + y;
  };


// Dans cet exemple, la fonction flèche a une expression x + y
// il renvoie donc le résultat de l'expression.

// Cependant, si vous utilisez la syntaxe de bloc, vous devez spécifier le mot-clé return :

let add = (x, y) => { return x + y; };




// Si vous utilisez une expression dans le corps d'une fonction fléchée, vous n'avez pas besoin d'utiliser les accolades.

// const add1 = (x, y) => x + y ;
  console.log(add1(1, 2));






// ---------------------- Fonctions fléchées JavaScript sans paramètre
// Si la fonction fléchée n'a pas de paramètre, vous devez utiliser des parenthèses, comme ceci :

() => { statements }


//---------------------- Parlons du saut de ligne
// JavaScript ne vous permet pas d'avoir un saut de ligne entre
// la définition du paramètre et la flèche (=>) dans une fonction fléchée.

// For example, the following code causes a SyntaxError:
// -----------------remove the comment to understand
// let multiply = (x,y) 
// => x * y; 

// -----------------Code language: JavaScript (javascript)
// However, the following code works perfectly fine:

// let multiply = (x,y) => 
// x * y;
