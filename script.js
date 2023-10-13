class Card {
  constructor(state,ans1,ans2,ans3,ans4) {
    this.state = state;
    this.ans1=ans1;
    this.ans2=ans2;
    this.ans3=ans3;
    this.ans4=ans4;
    
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }

  createDeck() {
    const state = [
    "new york",
    "new jersey",
    "idaho"
    ]
    
    //["Hearts", "Diamonds", "Spades", "Clubs"];
    const ans1 = [
      "ans11",
      "ans12",
      "ans13"
    ];

    const ans2 = [
      "ans21",
      "ans22",
      "ans23"
    ];


    const ans3 = [
      "ans31",
      "ans32",
      "ans33"
    ];

    const ans4 = [
      "ans41",
      "ans42",
      "ans43"
    ];




    for (let i = 0; i < state.length; i++) {
      //for (let j = 0; j < ranks.length; j++) {
        const card = new Card(state[i], ans1[i],ans2[i],ans3[i],ans4[i]);
        this.cards.push(card);
      }
    

    this.shuffle();
  }

  shuffle() {
    const cards = this.cards;

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // [cards[i], cards[j]] = [cards[j], cards[i]]
      let temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }

    console.log(cards[1])
  }
}
console.log("i'm here2")
const bla = new Deck()
// hopefully a shuffled deck of flashcards

//cards.forEach(element => console.log(cards[i])

function handleRestartGame() {
  //gameActive = true;
 // currentPlayer = "X";
  //gameState = ["", "", "", "", "", "", "", "", ""];
 // statusDisplay.innerHTML = currentPlayerTurn();
 console.log(bla.cards[0].ans1)
 console.log(bla.cards[0].ans2)
 console.log(bla.cards[0].ans3)
 console.log(bla.cards[0].ans4)
 
  document.querySelector(".game--ans1").innerHTML=bla.cards[0].ans1
 document.querySelector(".game--ans2").innerHTML=bla.cards[0].ans2
  document.querySelector(".game--ans3").innerHTML=bla.cards[0].ans3
  document.querySelector(".game--ans4").innerHTML=bla.cards[0].ans4
  console.log("i'm here")
}

const blas = handleRestartGame() 



//document
  //.querySelector(".game--ans1").addEventListener(handleCellClick)
  //.forEach((cell) => cell.addEventListener("click", handleCellClick));


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