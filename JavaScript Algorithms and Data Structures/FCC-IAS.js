// Intermediate Algorithm Scripting



/*Sum All Numbers in a Range
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */

function sumAll(arr) {
    let max = Math.max(arr[0],arr[1]);
    let min = Math.min(arr[0],arr[1]);
    let suma = 0;
    for (let i = min ; i <= max ; i++){
      suma+=i;
    }
    return suma;
  }
sumAll([1, 4]);

  /* Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. */

function diffArray(arr1, arr2) {
    const newArr = [];
    
    function soloEnPrimera(primera,segunda){
      for (let i = 0 ; i < primera.length ; i++){
        if( segunda.indexOf(primera[i]) === -1){
          newArr.push(primera[i]);
        }
      }
    }
    soloEnPrimera(arr1,arr2);
    soloEnPrimera(arr2,arr1); 
    return newArr;
  }
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/* Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object. */
 
function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
  
    const newArr=[];
  
    for(let i=0 ; i < arr.length ; i++){
      let seRemueve=false;
      for(let j=0 ; j< valsToRemove.length ; j++){
        if( arr[i] === valsToRemove[j]){
          seRemueve=true;
        }
      }
      if (!seRemueve){
        newArr.push(arr[i]);
      }
    }  
    return newArr;
  }
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/* Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and 
its value, that was passed on as the second argument. */

function whatIsInAName(collection, source) {

  const sourceKeys=Object.keys(source);  //devuelve el nombre de las propiedades del string
  //tengo que checkear collection para ver cual contiene el valor de string
  for (let i=0 ; i < sourceKeys.length ; i++) {
    collection= collection
                  .filter(function(obj){
  //obj[sourceKeys[i]] me da los valores de la prop de source en cada hilo de collection
                    return obj[sourceKeys[i]] == source[sourceKeys[i]];
  //Si el valor de la propiedad de ese subhilo no es igual al de source, no queda en el arr 
                   });  
    }        
  return collection;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/* Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
  return str
  .trim() //Elimia espacio en blanco al inicio o al final de arr
  .split(/ \s|_|(?=[A-Z])/)//split si= "\s" si encuentra un espacio en blanco o un "_" o si empieza con un caracter en Mayuscula
  .join("-")
  .toLowerCase();
}
spinalCase('This Is Spinal Tap');

/* Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end. */

function translatePigLatin(str) {
  var vocal= /[aeiou]/gi;
  var resultado="";
  if (str[0].match(vocal)){
    return str + "way";
  }else if (!str.match(vocal)){
    return str + "ay";
  }else{
    var consVocal=str.indexOf(str.match(vocal)[0]);
    resultado= str.substr(consVocal) + str.substr(0, consVocal) + "ay";
    //str.substr(consVocal) devuelve str menos las consonantes antes de la vocal
    //str.substr(0, consVocal) devuelve las consonantes que fueron sacadas de str
  }  
    return resultado;
}
translatePigLatin("consonant");

/* Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog */

function myReplace(str, before, after) {

  if(before[0].match(/^[A-Z]/)){
    after = after[0].toUpperCase() + after.substring(1)
    //substring devuelve el string sin la cantidad de letras que se le asigna
  }else{
    after = after[0].toLowerCase() + after.substring(1)
  }
  
  var strArr=str.split(/\W/);
  strArr[strArr.indexOf(before)]=after;
  var strJunto=strArr.join(" ");
  return strJunto;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

  /* DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. 
For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */

function pairElement(str) {
  var resultado=[];
  for (let i=0;i<str.length;i++){
    if(str[i]==="C"){
      resultado.push((str[i]+"G").split(""))
    }else if(str[i]==="G"){
      resultado.push((str[i]+"C").split(""))
    }else if(str[i]==="A"){
      resultado.push((str[i]+"T").split(""))
    }else if(str[i]==="T"){
      resultado.push((str[i]+"A").split(""))
    }
  }  
return resultado;
}

pairElement("GCG");
/* Letras faltantes
Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve undefined. */

function fearNotLetter(str) {
  let letras="abcdefghijklmnopqrstuvwxyz";
  let start=letras.indexOf(str[0]);
  
  for(let i=start ; i < start+str.length ; i++){
    if(!str.includes(letras[i])){
      return letras[i];
    }//Si la letra que se supone que está no se encuentra en STR la devuelve
  }
  return undefined;
}

fearNotLetter("abce");

/* Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples. */

function uniteUnique(arr) {
  var newArr=[];
  
  for ( let i=0; i < arguments.length; i++){
    for (let j=0; j < arguments[i].length ; j++){
      if(!newArr.includes(arguments[i][j])){
       newArr.push(arguments[i][j]);
      }
    }
  }//console.log(newArr)
    return newArr;
  }
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/* Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

function convertHTML(str) {
  var resultado=[];
  for (let i=0;i<str.length;i++){
    if(str[i]==="&"){
      resultado.push(("&amp;"))
    }else if(str[i]==="<"){
      resultado.push(("&lt;"))
    }else if(str[i]===">"){
      resultado.push(("&gt;"))
    }else if(str[i]==='"'){
      resultado.push(("&quot;"))
    }else if(str[i]==="'"){
      resultado.push(("&apos;"))
    }else{
      resultado.push(str[i])
    }
  }   
  return resultado.join("");
}

convertHTML("Dolce & Gabbana");

/* Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */

function sumFibs(num) {
  var resultado=0;
  var fibStart=[1,1]
  for (let i=2; i<num;i++){
    fibStart[i]=(fibStart[i-2]+fibStart[i-1])
  }
  //console.log(fibStart)
  for( let j=0 ; j<fibStart.length ; j++){
    if (fibStart[j]%2!==0 && fibStart[j]<=num ){
      resultado=resultado+fibStart[j]
    }
  }
  //console.log(resultado)
  return resultado;
}

sumFibs(4);

/* Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

function sumPrimes(num) {

  var resultado=0;   
  function isPrime(num) {
      if(num < 2) return false;
      for (var i = 2; i < num; i++) {
          if(num%i==0)
              return false;
      }
      return true;
  }
  
  for(var i = 0; i <= num; i++){
      if(isPrime(i)){
        resultado+=i;
      } //console.log(resultado);
  }
  
  return resultado;
}
sumPrimes(10)

/* Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
The answer here would be 6. */

function smallestCommons(arr) {
  var min=Math.min(arr[0],arr[1])
  var max=Math.max(arr[0],arr[1])
  let num=max;
  
  function esMultiplo(m, min, max) {
    for (var i = min; i < max; i++) {
      if (m % i !== 0) {
        return false;
      }
    }    
    return true;
  }
  while(!esMultiplo(num, min, max)){
    num+=max
  }
  return num;
}

smallestCommons([1,5]);

/* Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */

function dropElements(arr, func) {

  let arrOriginal=arr.length;

  for (let i=0 ; i < arrOriginal ; i++){
    if (func(arr[0])){
      break;
    }else{
      arr.shift();
    }
  }
  return arr;
  }
//dropElements([0, 1, 0, 1], function(n) {return n === 1;})
//dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})
//dropElements([1, 2, 3], function(n) {return n < 3; });

/* Steamroller
Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
  
  var steamrolled = [];

  for (var i = 0 ; i < arr.length ; i++) {
    if (Array.isArray(arr[i])) {
      var subArray = steamrollArray(arr[i]);
      steamrolled = steamrolled.concat(subArray);
    } else {
      steamrolled.push(arr[i]);
    }
  }
  return steamrolled;
}

steamrollArray([1, [2], [3, [[4]]]]);

/* Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated. */

function binaryAgent(str) {
  
  function binaryToString(str) {
    // Remuevo los espacios
    str = str.replace(/\s+/g, '');
    // Agrego espacio cada 8 numeros
    str = str.match(/.{1,8}/g).join(" ");

    var newBinary = str.split(" ");
    var binaryCode = [];

    for (let i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
        //console.log(String.fromCharCode(parseInt(newBinary[i], 2)))
    }
    return binaryCode.join("");
}
  //console.log(binaryToString(str))
  
  return binaryToString(str);
}

/* Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. 
The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation. */

function truthCheck(collection, pre) {
  for(let i=0 ; i < collection.length ;i++){
    if(!collection[i][pre])
      return false;
  }
  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

/*
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  
  const a = arguments[0];
  const b = arguments[1];
  const isNum = function(arg) { return Number.isFinite(arg); };
  
  if (arguments.length === 1 && isNum(a)) {
    return function(x) {
      if (isNum(x)) {
        return a + x;
      }
    };
  }
  else if (arguments.length === 2 && isNum(a) && isNum(b)) {
    return a + b;
  }
}

addTogether(2,3);

/*
Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person('Bob Ross');
//console.log(bob.getFullName());
bob.getFullName();

/*
Map the Debris
According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit is:

T=2πa3μ−−−√
 
a  is the orbit's semi-major axis
μ=GM  is the standard gravitational parameter
G  is the gravitational constant,
M  is the mass of the more massive body.
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr.forEach(function(item) {
    item.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));;
    delete item.avgAlt;
  });
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

