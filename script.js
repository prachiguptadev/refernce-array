let firstArray = [1, 2, 3, 4];   /* firstArray has array store*/
let secondArray = firstArray;    /* secondArray has firstArray(reference) store*/
// both the same memory store

secondArray.push(5);
// push the value secondArray
//  both are same the reference, so effect both variable 

console.log(firstArray);    /* [1, 2, 3, 4, 5] */
console.log(secondArray);    /*[1, 2, 3, 4, 5]*/
