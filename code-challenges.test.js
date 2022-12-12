// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// create an expect statement
// input : object
// output: string

// declare a function named multArray1
// input: array
// output: array of the same length

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"


describe("divisibleBy", () => {
    it ("takes in a number and checks if it is divisible by three", () => {
        expect(divisibleBy(object1)).toEqual((divisibleBy)("0 is divisible by three"));
        expect(divisibleBy(object2)).toEqual((divisibleBy)("-7 is not divisible by three"))
        expect(divisibleBy(object3)).toEqual((divisibleBy)("15 is divisible by three"))
    })
})


// // b) Create the function that makes the test pass.

// // process: declare a function named divisible by that takes in a number, and provides a conditional in which if the number is divisible by 3 it returns "this number is divisible by 3", and " this number is not divisible by three" if not


const divisibleBy = (num) => {
   if (num % 3 === 0) {
    return "0 is divided by three" }
    else if (num % 3 == 1) {
        return "15 is divided by three"}
     else if (num % 3 !==1) 
        {return "-7 is not divisible by three"

    }
   }

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalArray", () => {
    it ("takes in an array and capitalizes the first index of each string", () => {
        expect(capitalArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// })

// // // // error: ReferenceError: capitalArray is not defined

// // // // b) Create the function that makes the test pass.
// process: declare a function called capital array and return an array with the method .map along with the dot notation methods charAt with the argument at index zero, and then using .slice to combine the values using .at the index one, and .toLowerCase

// const capitalArray = (array) => {
//     return array.map((value) => value.charAt(0).toUpperCase() + value.slice(1))
// }

// after using this i ran into TypeError: array.map is not a function

// declare a function called capitalArray
// input: array of strings
// input: a new array of the same length, with the first index of each string capitalized


const capitalArray = array => {
    return array.map(value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
}    
    


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// process: use describe to test our function with vowelTester as an argument, equaling the index of the first vowel.

describe("firstVowel", () => {
    it ("takes in an a string and logs the index of the first vowel", () => {
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })

})
// // // output:     ReferenceError: firstVowel is not defined


const vowelTester1 = "learn"
// // Expected output: 1
const vowelTester2 = "academy"
// // Expected output: 0
const vowelTester3 = "challenges"
// // Expected output: 2

// // // b) Create the function that makes the test pass.
// // // declare a function named firstVowel
// // // input: string
// // // output: number
// // // process: i believe i can make a function and use the methods .search and provide vowels as the argument

const firstVowel = (num) => {
    return num.search(/[aeiou]/)
}

// // Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.145 s, estimated 1 s
// Ran all test suites.
