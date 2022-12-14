// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split(""))

// // a) Your answer:"h""o" "t" "e" "l" "2" "0" "2" "2"
// // // Output [
  // 'H', 'o', 't', 'e',
  // 'l', ' ', '2', '0',
  // '2', '2'
// ]

// // b) Verify and explain: it did split the string by each character, however they were all stored inside of an array.

// // --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// // a) Your answer: nothing, no return is provided.
// // // Output: undefined
// // b) Verify and explain: undefined. the function is made, however i believe it's undefined because there is no return for this function yet.

// // --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// // a) Your answer:[8, 10, 12, 14, 16]
// // // Output: [ 8, 10, 12, 14, 16 ]
// // b) Verify and explain: A variable is declared that is using higher order function .map through dot nation passing in number as an argument changing the array to a new array of the same length multiplying each index by 2.

// // --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// // a) Your answer: [11, 13, 15]
// // // Output: [ 11, 13, 15 ]
// // b) Verify and explain: a variable is being declared that is using the built in method .filter through dot notation passing in an argument that will filter the array with only numbers that are not even. (% 2 !==0)

// // --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// // a) Your answer: "JavaScript"
// // // Output: JavaScript
// // b) Verify and explain: it logged JavaScript, however I believe it was printed as an object/symbol instead of a string.

// // --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// // a) Your answer: "George" 
// // // Output: Learn { student: 'George', cohort: 'Hotel', year: 2022 }
// // b) Verify and explain: i believe it printed the every learn object with George substituted as the object student, with the other objects maintaining their placeholders.
