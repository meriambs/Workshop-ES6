
//**************************************  var  ************************************

//lorsque vous déclarez une variable à l'aide du mot-clé var,
//la portée de la variable est soit globale soit locale.
//Si vous déclarez une variable en dehors d'une fonction, la portée de la variable est globale.
// Lorsque vous déclarez une variable dans une fonction, la portée de la variable est locale.

if (true) {
    var t = 5;
    console.log(t); //5
   }
   console.log(t); // 5

// *************************************  Let  ************************************
// let est similaire à var mais let a une portée.
// let n'est accessible qu'au niveau du bloc où il est défini.

if (true) {
    let a = 40;
    console.log(a); //40
   }
   console.log(a); // undefined

// *************************************  const  ************************************

// Les variables déclarées avec const conservent des valeurs constantes.
// Les déclarations const partagent certaines similitudes avec les déclarations let.

if (true) {
    const a = 40;
    console.log(a); //40
   }
   console.log(a); //a is not defined






//NOTE 
// **********---  les variables var peuvent être redéclarées et mises à jour
// Cela signifie que nous pouvons le faire dans la même portée et n'obtiendrons pas d'erreur.

     var greeter = "hey hi";
     var greeter = "say Hello instead";




// **********---   gosting du var
// Le levage est un mécanisme JavaScript dans lequel les variables et les déclarations de fonctions sont déplacées vers le haut de leur portée avant l'exécution du code. Cela signifie que si nous faisons ceci :

     console.log (greeter);
     var greeter = "say hello"
//il est interprété comme ceci :

//     var greeter;
     console.log(greeter); // greeter is undefined
     greeter = "say hello"
//Ainsi, les variables var sont hissées au sommet de leur portée et initialisées avec une valeur indéfinie.
//-----------> si vous faites cela pour laisser , vous aurez (Erreur de référence.)

//ici note for the let 
// 
//let peut être mis à jour mais pas re-déclaré.
// Tout comme var, une variable déclarée avec let peut être mise à jour dans sa portée. Contrairement à var, une variable let ne peut pas être redéclarée dans sa portée. Donc, pendant que cela fonctionnera :
     let greeting = "say Hi";
     greeting = "say Hello instead";

// cela renverra une erreur :
// ---> cette partie est commentée afin que vous ne trouviez pas de problème lorsque vous accédez à la partie console
    // let greeting = "dire bonjour" ;
    // let greeting = "dire bonjour à la place" ; // erreur : l'identifiant 'greeting' a déjà été déclaré



    // note constante :

    // l'objet const ne peut pas être mis à jour, les propriétés de ces objets peuvent être mises à jour.
    // Par conséquent, si nous déclarons un objet const comme ceci :
    const greetingg = {
        message: "say Hi",
        times: 4
    }

    // we can't do 
    greetingg = {
        words: "Hello",
        number: "five"
    } // erreur : Affectation à variable constante.
    // mais on peut ajouter comme ceci :
    // salutation.message = "dites bonjour à la place" ;
