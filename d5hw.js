/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

console.log("-------------Exercise A----------");

let test = "Hello world"

console.log(test);

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

console.log("-------------Exercise B----------");

let result = 10 + 20
let sum = result 

console.log(sum);

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

console.log("-------------Exercise C----------");

let max = 21
let min = 0
let random = Math.round(Math.random() * max)

console.log(random);


/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

console.log("-------------Exercise D----------");

const me = {
    name: "Kai",
    surame: "Kadir",
    age: 23
}

console.log(me);

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

console.log("-------------Exercise E----------");

delete me.age

console.log(me);

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

console.log("-------------Exercise F----------");

me.skills = ["Python", "Javascript"]
console.log(me);

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

console.log("-------------Exercise G----------");

delete me.skills.pop()

console.log(me);

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

console.log("-------------Exercise 1----------");

let max1 = 7
let min1 = 1

const dice = function(){
    return Math.round(Math.random() * (max1 - min1) + min1)
}

console.log(dice());

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

console.log("-------------Exercise 2----------");

const whoIsBigger = function(a, b){
   return a > b ? a : b
}

console.log(whoIsBigger(5, 5));


/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

console.log("-------------Exercise 3----------");

const splitMe = function(string){
   return string.split(" ")
}

console.log(splitMe("I love coding"));

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

console.log("-------------Exercise 4----------");

const deleteOne = function(name, male){
    if(male === true){
       return name.slice(1)
    } else{
        return name.slice(0, -1)
    }  
}

console.log(deleteOne("Kaiwan Kadir", false));

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

console.log("-------------Exercise 5----------");

const onlyLetters = function(string){
    return string.replace(/[0-9]/g, "")
}

console.log(onlyLetters("I have 4 dogs"));

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

console.log("-------------Exercise 6----------");

const isThisAnEmail = function(email){
  return (email.indexOf("@") > 0 && email.indexOf(".") > 0)
}

console.log(isThisAnEmail("kai.kadir@hotmail.co.uk"));

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

console.log("-------------Exercise 7----------");

const whatDayIsIt = function(){
    let date = new Date()
    let day = date.getDay()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[day]
}

console.log(whatDayIsIt());

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

console.log("-------------Exercise 8----------");

const rollTheDices = function(n){
    let values = []
    let sum = 0

    for (i = 0; i < n; i++){
        values.push(dice())

        sum = sum + values[i]
    }
    
    return {
        values: values,
        sum: sum,
    }
}

console.log(rollTheDices(10));


/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

console.log("-------------Exercise 9----------");

const howManyDays = function(date){
    const todaysDate = new Date()
    date = new Date(date);

    const diffTime = Math.abs(todaysDate - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    return diffDays;
}

console.log(howManyDays("2021-03-01"));


/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

console.log("-------------Exercise 10----------");

const isTodayMyBirthday = function(){
   let today = new Date()
   console.log(today);
   let bday = new Date (2021, 2, 14)
   console.log(bday);

   return today.getDay() === bday.getDay() && today.getMonth() === bday.getMonth()
}

console.log(isTodayMyBirthday());

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/


console.log("-------------Exercise 11----------");

const car = {
    brand: "BMW",
    model: "X5"
}

    const deleteProp = function(obj, str){
        newObj = delete obj[str]
        return obj
}

console.log(deleteProp(car, "brand"));


/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

console.log("-------------Exercise 12----------");

const olderMovie = function(){
    let result = {Year: 2100}
    for(i = 0; i < movies.length; i++){
      let movie = movies[i]
      let currentYear = parseInt(movie.Year)
      if (currentYear < result.Year)
      result = movie
    }
    return result
  }
  
  console.log(olderMovie());


/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

console.log("-------------Exercise 13----------");

const countMovies = function(){
  return movies.length
}

console.log(countMovies());

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

console.log("-------------Exercise 14----------");

function onlyTheTitles(){
  let result = []

  for(i = 0; i < movies.length; i++){
    let movie = movies[i]

  result.push(movie.Title)
  }

  return result
}

console.log(onlyTheTitles());


/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

console.log("-------------Exercise 15----------");

const onlyInThisMillennium = function(){
    let result = []

    for (i = 0; i < movies.length; i++){
     if (movies[i].Year > 1999) {
       result.push(movies[i])
     }
    }
    return result
}

console.log(onlyInThisMillennium());

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

console.log("-------------Exercise 16----------");

const getMovieById = function(id){

    for (i = 0; i < movies.length; i++){
      if (movies[i].imdbID === id)
        return movies[i]
    }
    return null
}

console.log(getMovieById("tt0120737"));

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

console.log("-------------Exercise 17----------");

const sumAllTheYears = function(){
  let sum = 0
  for (i = 0; i < movies.length; i++){
    
    sum += parseInt(movies[i].Year)

  }
  return sum 

}

console.log(sumAllTheYears());

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

console.log("-------------Exercise 18----------");


function searchByTitle(str){
  let result = []

  for (i = 0; i < movies.length; i++){
    if(movies[i].Title.includes(str)){

      result.push(movies[i])
  }
  }
  return result
}

console.log(searchByTitle("Avengers")); 

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

console.log("-------------Exercise 19----------");

function searchAndDivide(str){
  let result = {match: [], unmatch: []}

    for (i = 0; i < movies.length; i++){
      if(movies[i].Title.includes(str)){
      result.match.push(movies[i])
} else {
  result.unmatch.push(movies[i])
}
    }
    return result
  }

  console.log(searchAndDivide("Lord"));

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

console.log("-------------Exercise 20----------");

const removeIndex = function(num) {
  let result = []
  for(i = 0; i < movies.length; i++){
  if(i !== num)
    result.push(movies[i])
  }
  
  return result
}

console.log(removeIndex(1)); 

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

console.log("-------------Exercise 21----------");

function halfTree(height) {
  for (let i = 0; i < height; i ++) {
      let toPrint = ""
      for (let j = 0; j < i + 1; j++) {
          toPrint += "*"
      }
      console.log(toPrint)
  }
}

halfTree(6)

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

function tree(height){
  for (let i = 0; i < height; i++){
      let stars = "*".repeat(2 * i +1)
      let spacesBefore = " ".repeat(height - i - 1)
      console.log(spacesBefore + stars)
  }
}


console.log("-------------Exercise 22----------");

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

console.log("-------------Exercise 23----------");

function isItPrime(number) {
  for (let i = 2; i < number; i ++){
      if (number % i === 0)
          return false
  }

  return true
}