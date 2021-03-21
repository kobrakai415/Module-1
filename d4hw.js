/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const areaOfRectangle = function(l1, l2){
    area = l1 * l2
    return area
}

console.log(areaOfRectangle(3, 7));

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(intg1, intg2){
    let sum = intg1 === intg2 ? (intg1 + intg2) * 3 : intg1 + intg2 
    return sum
}

console.log(crazySum(4, 5));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(numb){
    let sum = numb > 19 ? (numb - 19) * 3 : Math.abs(numb - 19)
    return sum
}

console.log(crazyDiff(5));

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(integerN){
    let truthyOrFalsy = (integerN <= 100 && integerN >= 20) || integerN === 400 ? true : false
    return truthyOrFalsy
}

console.log(boundary(400));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(str){
 
    return str.startsWith('Strive') ? str : "Strive "+ str
}

console.log(strivify("hello"));


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3And7 = function(n) {
    if (n%3 === 0 && n%7 === 0){
        return "Number is a multiple of 3 and 7"
    } else if (n%3 === 0 && n%7 !== 0){
        return "Number is a multiple of 3"
    } else if (n%3 !== 0 && n%7 === 0){
        return "Number is a multiple of 7"
    } else {return "Number is not a multiple of 3 or 7"}
}

console.log(check3And7(8));

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("strive"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(str){
    let newWord = str.split(" ")
    for (let i = 0; i < newWord.length; i++){
        newWord[i] = newWord[i][0].toUpperCase() + newWord[i].substr(1);
    }
    return newWord
}

console.log(upperFirst("hello my name is kai"));


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(str){
    newString = str.slice(1, -1)
    return newString
}

console.log(cutString("hello"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n){
    let arrayN = []
  
  
    for (let i=0; i < n; i++) {
       
        arrayN.push(Math.round(Math.random()*10))
    }
  
    return arrayN
  }
  
  console.log(giveMeRandom(5))


/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/

