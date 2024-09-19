// var numbers = [3, 56, 2, 48, 5];
// console.log(numbers)

// //Map -Create a new array by doing something with each item in an array.
// const doubleNumbers = numbers.map(n => n * 2)
// console.log(doubleNumbers) //[6, 112, 4, 96, 10]

// const doubleNums = n => n * 2
// const result = numbers.map(doubleNums)
// console.log(result)//[6, 112, 4, 96, 10]

// var output = []
// numbers.forEach(n => output.push(n * 2))
// console.log(output)//[6, 112, 4, 96, 10]

// //Filter - Create a new array by keeping the items that return true.
// const BigNumbers = numbers.filter(n => n > 10)
// console.log(BigNumbers)//[56, 48]

// var smallNumbers = []
// numbers.forEach(n => {
//     if (n < 10){
//         smallNumbers.push(n)
//     }})
// console.log(smallNumbers)//[3, 2, 5]

// //Reduce - Accumulate a value by doing something to each item in an array.
// let sumN = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber)
// console.log(sumN)//114

// var sumNumber = 0
// numbers.forEach(n => sumNumber += n)
// console.log(sumNumber)//114

// //Find - find 'the first item' that matches from an array.

// let findResult = numbers.find(n => n > 10)
// console.log(findResult)//56

// //FindIndex - find the 'index of the first item' that matches.

// let indexResult = numbers.findIndex(n => n > 10)
// console.log(indexResult)//1

//substring -give 100 characters from meaning of emojipedia so they're equally long

import emojipedia from "./emojipedia"

let result = emojipedia.map(e => e.meaning.substring(0,100))
console.log(result)
