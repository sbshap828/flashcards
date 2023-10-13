const statesArray = [
  {
    state: "Alabama",
    choices: ["Montgomery", "Mobile", "Birmingham", "Huntsville"],
    answer: "Montgomery",
  },
  {
    state: "Alaska",
    choices: ["Juneau", "Anchorage", "Fairbanks", "Sitka"],
    answer: "Juneau",
  },
  {
    state: "Arizona",
    choices: ["Phoenix", "Tucson", "Mesa", "Chandler"],
    answer: "Phoenix",
  },
  {
    state: "Arkansas",
    choices: ["Little Rock", "Fayetteville", "Conway", "Hot Springs"],
    answer: "Little Rock",
  },
  {
    state: "California",
    choices: ["Sacramento", "Los Angeles", "San Diego", "San Francisco"],
    answer: "Sacramento",
  },
  {"state": "Colorado", "choices": ["Denver", "Colorado Springs", "Aurora", "Boulder"], "answer": "Denver"},
  {"state": "Connecticut", "choices": ["Hartford", "New Haven", "Stamford", "Bridgeport"], "answer": "Hartford"},
  {"state": "Delaware", "choices": ["Dover", "Wilmington", "Newark", "Middletown"], "answer": "Dover"},
  {"state": "Florida", "choices": ["Tallahassee", "Miami", "Orlando", "Tampa"], "answer": "Tallahassee"},
  {"state": "Georgia", "choices": ["Atlanta", "Augusta", "Savannah", "Macon"], "answer": "Atlanta"},
  {"state": "Hawaii", "choices": ["Honolulu", "Hilo", "Kailua", "Kapolei"], "answer": "Honolulu"},
  {"state": "Idaho", "choices": ["Boise", "Nampa", "Meridian", "Idaho Falls"], "answer": "Boise"},
  {"state": "Illinois", "choices": ["Springfield", "Chicago", "Naperville", "Peoria"], "answer": "Springfield"},
  {"state": "Indiana", "choices": ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"], "answer": "Indianapolis"},
  {"state": "Iowa", "choices": ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"], "answer": "Des Moines"},
  {"state": "Kansas", "choices": ["Topeka", "Wichita", "Kansas City", "Overland Park"], "answer": "Topeka"},
  {"state": "Kentucky", "choices": ["Frankfort", "Louisville", "Lexington", "Bowling Green"], "answer": "Frankfort"},
  {"state": "Louisiana", "choices": ["Baton Rouge", "New Orleans", "Shreveport", "Lafayette"], "answer": "Baton Rouge"},
  {"state": "Maine", "choices": ["Augusta", "Portland", "Lewiston", "Bangor"], "answer": "Augusta"},
  {"state": "Maryland", "choices": ["Annapolis", "Baltimore", "Frederick", "Rockville"], "answer": "Annapolis"},
  {"state": "Massachusetts", "choices": ["Boston", "Worcester", "Springfield", "Cambridge"], "answer": "Boston"},
  {"state": "Michigan", "choices": ["Lansing", "Detroit", "Grand Rapids", "Ann Arbor"], "answer": "Lansing"},
  {"state": "Minnesota", "choices": ["Saint Paul", "Minneapolis", "Rochester", "Duluth"], "answer": "Saint Paul"},
  {"state": "Mississippi", "choices": ["Jackson", "Gulfport", "Hattiesburg", "Biloxi"], "answer": "Jackson"},
  {"state": "Missouri", "choices": ["Jefferson City", "Saint Louis", "Kansas City", "Springfield"], "answer": "Jefferson City"},
  {"state": "Montana", "choices": ["Helena", "Billings", "Missoula", "Bozeman"], "answer": "Helena"},
  {"state": "Nebraska", "choices": ["Lincoln", "Omaha", "Bellevue", "Grand Island"], "answer": "Lincoln"},
  {"state": "Nevada", "choices": ["Carson City", "Las Vegas", "Reno", "Henderson"], "answer": "Carson City"},
  {"state": "New Hampshire", "choices": ["Concord", "Manchester", "Nashua", "Portsmouth"], "answer": "Concord"},
  {"state": "New Jersey", "choices": ["Trenton", "Newark", "Jersey City", "Paterson"], "answer": "Trenton"},
  {"state": "New Mexico", "choices": ["Santa Fe", "Albuquerque", "Las Cruces", "Roswell"], "answer": "Santa Fe"},
  {"state": "New York", "choices": ["Albany", "New York City", "Buffalo", "Rochester"], "answer": "Albany"},
  {"state": "North Carolina", "choices": ["Raleigh", "Charlotte", "Greensboro", "Durham"], "answer": "Raleigh"},
  {"state": "North Dakota", "choices": ["Bismarck", "Fargo", "Grand Forks", "Minot"], "answer": "Bismarck"},
  {"state": "Ohio", "choices": ["Columbus", "Cleveland", "Cincinnati", "Toledo"], "answer": "Columbus"},
  {"state": "Oklahoma", "choices": ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"], "answer": "Oklahoma City"},
  {"state": "Oregon", "choices": ["Salem", "Portland", "Eugene", "Gresham"], "answer": "Salem"},
  {"state": "Pennsylvania", "choices": ["Harrisburg", "Philadelphia", "Pittsburgh", "Allentown"], "answer": "Harrisburg"},
  {"state": "Rhode Island", "choices": ["Providence", "Warwick", "Cranston", "Pawtucket"], "answer": "Providence"},
  {"state": "South Carolina", "choices": ["Columbia", "Charleston", "Greenville", "Myrtle Beach"], "answer": "Columbia"},
  {"state": "South Dakota", "choices": ["Pierre", "Sioux Falls", "Rapid City", "Aberdeen"], "answer": "Pierre"},
  {"state": "Tennessee", "choices": ["Nashville", "Memphis", "Knoxville", "Chattanooga"], "answer": "Nashville"},
  {"state": "Texas", "choices": ["Austin", "Houston", "Dallas", "San Antonio"], "answer": "Austin"},
  {"state": "Utah", "choices": ["Salt Lake City", "Provo", "Ogden", "St. George"], "answer": "Salt Lake City"},
  {"state": "Vermont", "choices": ["Montpelier", "Burlington", "Rutland", "Barre"], "answer": "Montpelier"},
  {"state": "Virginia", "choices": ["Richmond", "Virginia Beach", "Norfolk", "Alexandria"], "answer": "Richmond"},
  {"state": "Washington", "choices": ["Olympia", "Seattle", "Spokane", "Tacoma"], "answer": "Olympia"},
  {"state": "West Virginia", "choices": ["Charleston", "Huntington", "Morgantown", "Parkersburg"], "answer": "Charleston"},
  {"state": "Wisconsin", "choices": ["Madison", "Milwaukee", "Green Bay", "Kenosha"], "answer": "Madison"},
  {"state": "Wyoming", "choices": ["Cheyenne", "Casper", "Laramie", "Gillette"], "answer": "Cheyenne"}
];

const scoreBoard = document.querySelector("#score-board")
const question = document.querySelector(".question")
const ans1 = document.querySelector(".game--ans1")
const ans2 = document.querySelector(".game--ans2")
const ans3 = document.querySelector(".game--ans3")
const ans4 = document.querySelector(".game--ans4")
const nextBtn = document.querySelector(".next-btn")
const modal = document.querySelector("#modal-one")
const modalRestartBtn = document.querySelector(".modal-restart")
const modalExitBtn = document.querySelector(".modal-close")
const modalMessage = document.querySelector(".modal-message")
const modalScore = document.querySelector(".modal-score")
let index = 0
let scoreTotal = 0

function shuffle(){
    for (let i = statesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      let temp = statesArray[i];
      statesArray[i] = statesArray[j];
      statesArray[j] = temp;
    }
}
shuffle()

function displayQuestion(){

  if (index >= statesArray.length) {
    endGame()
    return;
  }

  let currentQuestion = statesArray[index]

  question.innerText = currentQuestion.state

  for (let i = currentQuestion.choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    let temp = currentQuestion.choices[i];
    currentQuestion.choices[i] = currentQuestion.choices[j];
    currentQuestion.choices[j] = temp;
  }

  ans1.innerText = currentQuestion.choices[0]
  ans2.innerText = currentQuestion.choices[1]
  ans3.innerText = currentQuestion.choices[2]
  ans4.innerText = currentQuestion.choices[3]
}

function endGame(){
  if (scoreTotal > 40) {
    modalMessage.innerText = "You are really good at this!"
    modalScore.innerText = scoreTotal
  } else if (scoreTotal >20) {
    modalMessage.innerText = "Not bad, but you can still use some work :-/"
    modalScore.innerText = scoreTotal
  } else {
    modalMessage.innerText = "You must be new around here. Go hit the books!"
    modalScore.innerText = scoreTotal
  }

  modal.classList.add('open')
}

function nextQuestion(){
  index++
  displayQuestion()
  ans1.disabled = false
  ans2.disabled = false
  ans3.disabled = false
  ans4.disabled = false
}

function handleClick(e){
  let userChoice = e.target.innerText
  if (userChoice === statesArray[index].answer) {
    scoreTotal++
    scoreBoard.innerText = scoreTotal
  }

  ans1.disabled = true
  ans2.disabled = true
  ans3.disabled = true
  ans4.disabled = true
}

displayQuestion()

nextBtn.addEventListener("click", nextQuestion)

ans1.addEventListener("click", handleClick)
ans2.addEventListener("click", handleClick)
ans3.addEventListener("click", handleClick)
ans4.addEventListener("click", handleClick)

// Close Modal
modalExitBtn.addEventListener("click", (e)=>{
  modal.classList.remove("open")
})

// Restart Game
modalRestartBtn.addEventListener("click", ()=>{
  scoreTotal = 0
  scoreBoard.innerText = scoreTotal
  index = 0
  shuffle()
  displayQuestion()

  modal.classList.remove("open")
})

// class Card {
//   constructor(state, choices, answer) {
//     this.state = state;
//     this.choices = choices;
//     this.answer = answer;
//   }
// }

// class Deck {
//   constructor() {
//     this.cards = [];
//     this.createDeck();
//   }

//   createDeck() {
//     const state = ["new york", "new jersey", "idaho"];

//     //["Hearts", "Diamonds", "Spades", "Clubs"];
//     const ans1 = ["ans11", "ans12", "ans13"];

//     const ans2 = ["ans21", "ans22", "ans23"];

//     const ans3 = ["ans31", "ans32", "ans33"];

//     const ans4 = ["ans41", "ans42", "ans43"];

//     for (let i = 0; i < state.length; i++) {
//       //for (let j = 0; j < ranks.length; j++) {
//       const card = new Card(state[i], ans1[i], ans2[i], ans3[i], ans4[i]);
//       this.cards.push(card);
//     }

//     this.shuffle();
//   }

//   shuffle() {
//     const cards = this.cards;

//     for (let i = cards.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       // [cards[i], cards[j]] = [cards[j], cards[i]]
//       let temp = cards[i];
//       cards[i] = cards[j];
//       cards[j] = temp;
//     }

//     console.log(cards[1]);
//   }
// }
// console.log("i'm here2");
// const bla = new Deck();
// hopefully a shuffled deck of flashcards

//cards.forEach(element => console.log(cards[i])

// function handleRestartGame() {
//   //gameActive = true;
//   // currentPlayer = "X";
//   //gameState = ["", "", "", "", "", "", "", "", ""];
//   // statusDisplay.innerHTML = currentPlayerTurn();
//   console.log(bla.cards[0].ans1);
//   console.log(bla.cards[0].ans2);
//   console.log(bla.cards[0].ans3);
//   console.log(bla.cards[0].ans4);

//   document.querySelector(".game--ans1").innerHTML = bla.cards[0].ans1;
//   document.querySelector(".game--ans2").innerHTML = bla.cards[0].ans2;
//   document.querySelector(".game--ans3").innerHTML = bla.cards[0].ans3;
//   document.querySelector(".game--ans4").innerHTML = bla.cards[0].ans4;
//   console.log("i'm here");

//   document
//     .querySelector(".game--ans1")
//     .addEventListener("click", handleCellClick);
//   document
//     .querySelector(".game--ans2")
//     .addEventListener("click", handleCellClick);
//   document
//     .querySelector(".game--ans3")
//     .addEventListener("click", handleCellClick);
//   document
//     .querySelector(".game--ans4")
//     .addEventListener("click", handleCellClick);

//   //.forEach((cell) => cell.addEventListener("click", handleCellClick));
// }

// function handleCellClick(e) {
//   const clickedCell = e.target;
//   console.log(e.target);
//   if ((e.target = "game--ans1")) {
//     console.log("you clicked 1");
//   }
//   //evaluate answer against correct answer
// }

// const blas = handleRestartGame();

// //window.onload = function () {

//   let questionArea = document.getElementsByClassName('questions')[0],
//       answerArea   = document.getElementsByClassName('answers')[0],
//       checker      = document.getElementsByClassName('checker')[0],
//       current      = 0

//      // An object that holds all the questions + possible answers.
//      // In the array --> last digit gives the right answer position
//      const person = {
//       firstName: "John",
//       lastName : "Doe",
//       id       : 5566,

//       fullName : function() {
//         return this.firstName + " " + this.lastName;
//        }

//       }

//     const person2 = {
//       firstName: "Joffhn",
//       lastName : "Dyyoe",
//       id       : 5544466,

//       fullName : function() {

//      console.log(person.firstName)

//       }

//     }

//     //  allQuestions = []{
//     //     'What is Canada\'s national animal?' : ['Beaver', 'Duck', 'Horse', 0],

//     //     'What is converted into alcohol during brewing?' : ['Grain', 'Sugar' , 'Water', 1],

//     //     'In what year was Prince Andrew born? ' : ['1955', '1960', '1970', 1]
//     //   };

//   function loadQuestion(curr) {
//   // This function loads all the question into the questionArea
//   // It grabs the current question based on the 'current'-variable

//     let question = Object.keys(allQuestions)[curr];

//     questionArea.innerHTML = '';
//     questionArea.innerHTML = question;
//   }

//   function loadAnswers(curr) {
//   // This function loads all the possible answers of the given question
//   // It grabs the needed answer-array with the help of the current-variable
//   // Every answer is added with an 'onclick'-function

//    let answers = allQuestions[Object.keys(allQuestions)[curr]];

//     answerArea.innerHTML = '';

//     for (let i = 0; i < answers.length -1; i += 1) {
//       let createDiv = document.createElement('div'),
//           text = document.createTextNode(answers[i]);

//       createDiv.appendChild(text);
//       createDiv.addEventListener("click", checkAnswer(i, answers));

//       answerArea.appendChild(createDiv);
//     }
//   }

//   function checkAnswer(i, arr) {
//     // This is the function that will run, when clicked on one of the answers
//     // Check if givenAnswer is sams as the correct one
//     // After this, check if it's the last question:
//     // If it is: empty the answerArea and let them know it's done.

//     return function () {
//       let givenAnswer = i,
//           correctAnswer = arr[arr.length-1];

//       if (givenAnswer === correctAnswer) {
//         addChecker(true);
//       } else {
//         addChecker(false);
//       }

//       if (current < Object.keys(allQuestions).length -1) {
//         current += 1;

//         loadQuestion(current);
//         loadAnswers(current);
//       } else {
//         questionArea.innerHTML = 'Done';
//         answerArea.innerHTML = '';
//       }

//     };
//   }

//   function addChecker(bool) {
//   // This function adds a div element to the page
//   // Used to see if it was correct or false

//     let createDiv = document.createElement('div'),
//         txt       = document.createTextNode(current + 1);

//     createDiv.appendChild(txt);

//     if (bool) {

//       createDiv.className += 'correct';
//       checker.appendChild(createDiv);
//     } else {
//       createDiv.className += 'false';
//       checker.appendChild(createDiv);
//     }
//   }

//   // Start the quiz right away
//   loadQuestion(current);
//   loadAnswers(current);

// };
