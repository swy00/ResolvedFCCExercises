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




  