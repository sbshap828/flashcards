




const statesArray = [
  {
    state: "Alabama",
    choices: ["Birmingham", "Huntsville", "Mobile", "Montgomery"],
    answer: "Montgomery",
    capitalHistory: "Montgomery became the capital of Alabama in 1846, replacing Tuscaloosa as the seat of state government. The move was part of a compromise to resolve differences between north and south Alabama over the location of the capital.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Alaska",
    choices: ["Anchorage", "Fairbanks", "Juneau", "Ketchikan"],
    answer: "Juneau",
    capitalHistory: "Juneau was founded during a gold rush in 1880 as both a mining town and a place to build a government and state capitol building for the recently acquired territory. The town was named after gold prospector Joe Juneau.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Arizona",
    choices: ["Flagstaff", "Phoenix", "Tucson", "Yuma"],
    answer: "Phoenix",
    capitalHistory: "Phoenix became the capital of Arizona in 1889, one year before Arizona achieved statehood in 1912. The capital was moved from Prescott to Phoenix because of the city's central location within the state and its growing population.",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Arkansas",
    choices: ["Fort Smith", "Little Rock", "Texarkana", "Hot Springs"],
    answer: "Little Rock",
    capitalHistory: "Little Rock became the capital of Arkansas in 1821, when it was still a territory. The capital was moved to Hot Springs briefly, but later moved back to Little Rock where it has remained since.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "California",
    choices: ["Los Angeles", "Sacramento", "San Diego", "San Francisco"],
    answer: "Sacramento",
    capitalHistory: "Sacramento became the capital of California in 1854, replacing Monterey. The city was chosen partly because of its location at the confluence of the Sacramento and American Rivers, which made it a good transportation hub.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Colorado",
    choices: ["Denver", "Colorado Springs", "Boulder", "Aspen"],
    answer: "Denver",
    capitalHistory: "Denver became the capital of Colorado in 1867, 11 years after Colorado became a territory. The capital was moved from Golden to Denver due to its more central location in the territory.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Connecticut",
    choices: ["Hartford", "Bridgeport", "New Haven", "Stamford"],
    answer: "Hartford",
    capitalHistory: "Hartford became the capital of Connecticut in 1662, when Connecticut was still a British colony. Hartford was chosen because of its central location in the colony, and because it was an important center of trade and commerce.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Delaware",
    choices: ["Dover", "Wilmington", "Rehoboth Beach", "Bethany Beach"],
    answer: "Dover",
    capitalHistory: "Dover became the capital of Delaware in 1777, during the American Revolution. The capital was moved from New Castle to Dover because of its more central location in the state.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Florida",
    choices: ["St. Augustine", "Tallahassee", "Miami", "Orlando"],
    answer: "Tallahassee",
    capitalHistory: "Tallahassee became the capital of Florida in 1824, replacing St. Augustine and then Pensacola as the capital. The capital was moved to Tallahassee because it was more centrally located within the territory of Florida.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Georgia",
    choices: ["Savannah", "Augusta", "Atlanta", "Athens"],
    answer: "Atlanta",
    capitalHistory: "Atlanta became the capital of Georgia in 1868, during the Reconstruction era after the Civil War. The capital was moved from Milledgeville to Atlanta because it was more centrally located within the state.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Hawaii",
    choices: ["Maui", "Honolulu", "Kauai", "Hilo"],
    answer: "Honolulu",
    capitalHistory: "Honolulu became the capital of Hawaii in 1850, replacing Lahaina on the island of Maui. The capital was moved to Honolulu because of its central location within the Hawaiian Islands, and because it was the center of trade and commerce.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Idaho",
    choices: ["Boise", "Pocatello", "Coeur d'Alene", "Idaho Falls"],
    answer: "Boise",
    capitalHistory: "Boise became the capital of Idaho in 1864, during the Civil War. The capital was moved from Lewiston to Boise because it was more centrally located within the territory of Idaho, and because it was an important commercial and transportation hub.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Illinois",
    choices: ["Chicago", "Springfield", "Peoria", "Rockford"],
    answer: "Springfield",
    capitalHistory: "Springfield became the capital of Illinois in 1839, when Illinois was still a young state. The capital was moved from Vandalia to Springfield because of its more central location within the state.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Indiana",
    choices: ["Fort Wayne", "Indianapolis", "Evansville", "Gary"],
    answer: "Indianapolis",
    capitalHistory: "Indianapolis became the capital of Indiana in 1825, when Indiana was still a territory. The capital was moved from Corydon to Indianapolis because of its more central location within the state.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Iowa",
    choices: ["Cedar Rapids", "Des Moines", "Iowa City", "Davenport"],
    answer: "Des Moines",
    capitalHistory: "Des Moines became the capital of Iowa in 1857, replacing Iowa City as the capital. The capital was moved to Des Moines because of its more central location within the state.",
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/New_York_State_Capitol_building%2C_full.jpg/1599px-New_York_State_Capitol_building%2C_full.jpg?20170917004335",
  },
  {
    state: "Kansas",
    choices: ["Topeka", "Wichita", "Lawrence", "Overland Park"],
    answer: "Topeka",
    capitalHistory: "Topeka became the capital of Kansas in 1861, when Kansas became a state. The capital was moved from Lecompton to Topeka because it was more centrally located within the state.",
  },
  {
    state: "Kentucky",
    choices: ["Louisville", "Frankfort", "Lexington", "Bowling Green"],
    answer: "Frankfort",
    capitalHistory: "Frankfort became the capital of Kentucky in 1792, when Kentucky became a state. The capital was moved from Danville to Frankfort because it was more centrally located within the state.",
  },
  {
    state: "Louisiana",
    choices: ["New Orleans", "Baton Rouge", "Lafayette", "Shreveport"],
    answer: "Baton Rouge",
    capitalHistory: "Baton Rouge became the capital of Louisiana in 1849, replacing New Orleans as the state capital. The capital was moved to Baton Rouge because it was more centrally located within the state. The capital has been located in New Orleans twice before - from 1812 to 1813, and again from 1862 to 1868 during the American Civil War.",
  },
  {
    state: "Maine",
    choices: ["Portland", "Bangor", "Augusta", "Lewiston"],
    answer: "Augusta",
    capitalHistory: "Augusta became the capital of Maine in 1827, when Maine became a state. The capital was moved from Portland to Augusta because of its more central location within the state.",
  },
  {
    state: "Maryland",
    choices: ["Annapolis", "Baltimore", "Rockville", "Frederick"],
    answer: "Annapolis",
    capitalHistory: "Annapolis became the capital of Maryland in 1694, during the colonial era. The capital was moved from St. Mary's City to Annapolis because it was more centrally located within the colony.",
  },
  {
    state: "Massachusetts",
    choices: ["Boston", "Worcester", "Springfield", "Lowell"],
    answer: "Boston",
    capitalHistory: "Boston became the capital of Massachusetts in 1630, when the Massachusetts Bay Colony was established. The capital was moved briefly to nearby Cambridge in 1775 during the Revolutionary War, but returned to Boston the following year.",
  },
  {
    state: "Michigan",
    choices: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing"],
    answer: "Lansing",
    capitalHistory: "Lansing became the capital of Michigan in 1837, when Michigan became a state. The capital was moved from Detroit to Lansing because of its more central location within the state.",
  },
  {
    state: "Minnesota",
    choices: ["St. Paul", "Minneapolis", "Duluth", "Rochester"],
    answer: "St. Paul",
    capitalHistory: "St. Paul became the capital of Minnesota in 1858, when Minnesota became a state. The capital was moved from St. Peter to St. Paul because of its more central location within the state.",
  },
  {
    state: "Mississippi",
    choices: ["Jackson", "Meridian", "Biloxi", "Hattiesburg"],
    answer: "Jackson",
    capitalHistory: "Jackson became the capital of Mississippi in 1821, when Mississippi became a state. The capital was moved from Natchez to Jackson because of its more central location within the state.",
  },
  {
    state: "Missouri",
    choices: ["Kansas City", "St. Louis", "Springfield", "Jefferson City"],
    answer: "Jefferson City",
    capitalHistory: "Missouri became a state in 1821, but the capital was unsettled for many years. The capital was initially in St. Charles, then moved to St. Louis, and then moved again to Jefferson City in 1826 because of its more central location in the state.",
  },
  {
    state: "Montana",
    choices: ["Helena", "Billings", "Butte", "Missoula"],
    answer: "Helena",
    capitalHistory: "Helena became the capital of Montana in 1875, when Montana was still a territory. The capital was moved from Virginia City to Helena because of its more central location within the territory.",
  },
  {
    state: "Nebraska",
    choices: ["Omaha", "Lincoln", "Kearney", "Grand Island"],
    answer: "Lincoln",
    capitalHistory: "Lincoln became the capital of Nebraska in 1867, when Nebraska became a state. The capital was moved from Omaha to Lincoln because of its more central location within the state.",
  },
  {
    state: "Nevada",
    choices: ["Carson City", "Reno", "Las Vegas", "Henderson"],
    answer: "Carson City",
    capitalHistory: "Carson City became the capital of Nevada in 1864, when Nevada became a state during the Civil War. The capital was named after Kit Carson, a famous mountain man and explorer who worked for the federal government.",
  },
  {
    state: "New Hampshire",
    choices: ["Concord", "Manchester", "Nashua", "Portsmouth"],
    answer: "Concord",
    capitalHistory: "Concord became the capital of New Hampshire in 1808, when New Hampshire was still a young state. The capital was moved from Portsmouth to Concord because of its more central location within the state.",
  },
  {
    state: "New Jersey",
    choices: ["New Brunswick", "Camden", "Trenton", "Hoboken"],
    answer: "Trenton",
    capitalHistory: "Trenton became the capital of New Jersey in 1790, replacing Burlington. The capital was moved to Trenton because of its more central location within the state.",
  },
  {
    state: "New Mexico",
    choices: ["Santa Fe", "Albuquerque", "Roswell", "Las Cruces"],
    answer: "Santa Fe",
    capitalHistory: "Santa Fe became the capital of New Mexico in 1846, when New Mexico was still a territory. The capital has been located in Santa Fe since then, except for a brief period during the Civil War when it was temporarily moved to the safer location of Las Vegas, New Mexico.",
  },
  {
    state: "New York",
    choices: ["Buffalo", "New York City", "Albany", "Syracuse"],
    answer: "Albany",
    capitalHistory: "Albany became the capital of New York in 1797, replacing New York City as the capital. The capital was moved to Albany because it was more centrally located within the state, and because it was an important center for trade and commerce.",
  },
  {
    state: "North Carolina",
    choices: ["Raleigh", "Charlotte", "Greensboro", "Winston-Salem"],
    answer: "Raleigh",
    capitalHistory: "Raleigh became the capital of North Carolina in 1792, when North Carolina was still a young state. The capital was moved from New Bern to Raleigh because of its more central location within the state, and because it was named after Sir Walter Raleigh, an important figure in the English colonization of America.",
  },
  {
    state: "North Dakota",
    choices: ["Bismarck", "Fargo", "Grand Forks", "Minot"],
    answer: "Bismarck",
    capitalHistory: "Bismarck became the capital of North Dakota in 1883, when North Dakota was still a territory. The capital was moved from Yankton to Bismarck because of its more central location within the territory.",
  },
  {
    state: "Ohio",
    choices: ["Cincinnati", "Cleveland", "Columbus", "Dayton"],
    answer: "Columbus",
    capitalHistory: "Columbus became the capital of Ohio in 1816, when Ohio was still a young state. The capital was moved from Chillicothe to Columbus because it was more centrally located within the state.",
  },
  {
    state: "Oklahoma",
    choices: ["Oklahoma City", "Norman", "Tulsa", "Lawton"],
    answer: "Oklahoma City",
    capitalHistory: "Oklahoma City became the capital of Oklahoma in 1910, when Oklahoma was still a territory. The capital was moved from Guthrie to Oklahoma City because of its more central location within the territory.",
  },
  {
    state: "Oregon",
    choices: ["Portland", "Eugene", "Salem", "Bend"],
    answer: "Salem",
    capitalHistory: "Salem became the capital of Oregon in 1851, replacing Oregon City as the capital. The capital was moved to Salem because of its more central location within the state.",
  },
  {
    state: "Pennsylvania",
    choices: ["Philadelphia", "Harrisburg", "Pittsburgh", "Allentown"],
    answer: "Harrisburg",
    capitalHistory: "Harrisburg became the capital of Pennsylvania in 1812, replacing Lancaster as the capital. The capital was moved to Harrisburg because it was more centrally located within the state.",
  },
  {
    state: "Rhode Island",
    choices: ["Newport", "Providence", "Warwick", "Cranston"],
    answer: "Providence",
    capitalHistory: "Providence became the capital of Rhode Island in 1900, replacing Newport as the capital. The capital was moved to Providence because of its more central location within the state.",
  },
  {
    state: "South Carolina",
    choices: ["Myrtle Beach", "Columbia", "Charleston", "Greenville"],
    answer: "Columbia",
    capitalHistory: "Columbia became the capital of South Carolina in 1786, when South Carolina was still a young state. The capital was moved from Charleston to Columbia because of its more central location within the state.",
  },
  {
    state: "South Dakota",
    choices: ["Rapid City", "Aberdeen", "Sioux Falls", "Pierre"],
    answer: "Pierre",
    capitalHistory: "Pierre became the capital of South Dakota in 1889, when South Dakota became a state. The capital was moved from Yankton to Bismarck because of its more central location within the state.",
  },
  {
    state: "Tennessee",
    choices: ["Memphis", "Knoxville", "Nashville", "Chattanooga"],
    answer: "Nashville",
    capitalHistory: "Nashville became the capital of Tennessee in 1843, replacing Kingston as the capital. The capital was moved to Nashville because it was more centrally located within the state.",
  },
  {
    state: "Texas",
    choices: ["Austin", "Dallas", "Houston", "San Antonio"],
    answer: "Austin",
    capitalHistory: "Austin became the capital of Texas in 1839, when Texas was still an independent republic. The capital was moved from Houston to Austin because of its more central location within the state.",
  },
  {
    state: "Utah",
    choices: ["Salt Lake City", "Ogden", "Provo", "St. George"],
    answer: "Salt Lake City",
    capitalHistory: "Salt Lake City became the capital of Utah in 1858, replacing Fillmore as the capital. The capital was moved to Salt Lake City because of its more central location within the territory.",
  },
  {
    state: "Vermont",
    choices: ["Burlington", "Montpelier", "Rutland", "Brattleboro"],
    answer: "Montpelier",
    capitalHistory: "Montpelier became the capital of Vermont in 1805, when Vermont was still a young state. The capital was moved from Windsor to Montpelier because it was more centrally located within the state.",
  },
  {
    state: "Virginia",
    choices: ["Williamsburg", "Richmond", "Virginia Beach", "Norfolk"],
    answer: "Richmond",
    capitalHistory: "Richmond became the capital of Virginia in 1780, when Virginia was still a British colony. The capital was moved from Williamsburg to Richmond because it was more centrally located within the colony.",
  },
  {
    state: "Washington",
    choices: ["Seattle", "Spokane", "Tacoma", "Olympia"],
    answer: "Olympia",
    capitalHistory: "Olympia became the capital of Washington in 1889, when Washington became a state. The capital was moved from Vancouver to Olympia because it was more centrally located within the state.",
  },
  {
    state: "West Virginia",
    choices: ["Charleston", "Huntington", "Morgantown"],
    answer: "Olympia",
    capitalHistory: " Before the capitol was in its current location in Charleston, several West Virginia cities had served as the capitol location for the State of West Virginia. The capitol was first located in Wheeling from 1863-1870 in the Linsly Institute Building. It was moved to downtown Charleston from 1870-1875.",
  } ,
  {
    state:"Wisconsin",
    choices:["Madison", "Milwaukee", "Green Bay", "Kenosha"],
    answer:"Madison",
    capitalHistory: " Before th",

  },
  {
    state:"Wyoming",
    choices:["Cheyenne", "Casper", "Laramie", "Gillette"],
    answer:"Cheyanne",
    capitalHistory: " Before th",

  },




]

const scoreBoard = document.querySelector("#score-board")
const question = document.querySelector(".question")
const gameImage = document.querySelector(".game--image")
const gameDescription = document.querySelector(".game--description")
const ans1 = document.querySelector(".game--ans1")
const ans2 = document.querySelector(".game--ans2")
const ans3 = document.querySelector(".game--ans3")
const ans4 = document.querySelector(".game--ans4")
const nextBtn = document.querySelector(".next-btn")
const modal = document.querySelector("#modal-one")
const modal2 = document.querySelector("#modal-two")
const modalRestartBtn = document.querySelector(".modal-restart")
const modalExitBtn = document.querySelector(".modal-close")
const modalMessage = document.querySelector(".modal-message")
const modalScore = document.querySelector(".modal-score")
const modal2ExitBtn = document.querySelector(".modal2-close")
const modal2Message = document.querySelector(".modal2-message")

const picture = document.querySelector(".jpeg-spot")

let index = 0
let scoreTotal = 0
let ansPosition = ""
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
// here it test of 3 states
if (index === 12) {

//if (index >= statesArray.length) {
    endGame()
    return;
  }

  let currentQuestion = statesArray[index]
  
 // needtoknow=statesArray[index]
  //alert (needtoknow + "kkjkg")
  question.innerText = currentQuestion.state
//we need to intercept the shuffle to learn where answer ended up

let originalPosition = currentQuestion.choices[0]
//originalPosition contains actual capital


  for (let i = currentQuestion.choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = currentQuestion.choices[i];
    currentQuestion.choices[i] = currentQuestion.choices[j];
    currentQuestion.choices[j] = temp;
  }
// if (originalPosition===currentQuestion.choices[0]){
//   ansPosition=0
// }
// if (originalPosition===currentQuestion.choices[1]){
//   ansPosition=1
// }
// if (originalPosition===currentQuestion.choices[2]){
//   ansPosition=2
// }
// if (originalPosition===currentQuestion.choices[3]){
//   ansPosition=3
// }
//now have the new positions

  ans1.innerText = currentQuestion.choices[0]
  ans2.innerText = currentQuestion.choices[1]
  ans3.innerText = currentQuestion.choices[2]
  ans4.innerText = currentQuestion.choices[3]
// think new code goes here
  } 

function endGame(){
  alert("end of game")
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
  
  // Clear div of description and image
  gameDescription.innerText = ""
  gameImage.src = ""

  displayQuestion()
 
  ans1.disabled = false
  ans2.disabled = false
  ans3.disabled = false
  ans4.disabled = false
}

function handleClick(e){
  let userChoice = e.target.innerText
  let message = ""

  if (userChoice === statesArray[index].answer) {
   
    scoreTotal++
    scoreBoard.innerText = scoreTotal

    message += "Great! "
    //alert("the correct answer is " + statesArray[index].answer)
   
    // goModal("true",statesArray[index].capitalHistory,statesArray[index].picture)
    
  } else {

    message += "Booo! "

  // goModal("false",statesArray[index].capitalHistory,statesArray[index].picture)

  }

  message += statesArray[index].capitalHistory
  gameDescription.innerText = message

  gameImage.src = statesArray[index].picture

  ans1.disabled = true
  ans2.disabled = true
  ans3.disabled = true
  ans4.disabled = true
}

function goModal(TorF,Charlie,jpeg){

if (TorF==="true") {
  modal2Message.innerText = ("Great Choice!!!! " + Charlie)
} 

if (TorF==="false") {
  modal2Message.innerText = ("Boo! " + Charlie)

}
alert ("this is the file " + jpeg)
// index=index + 1
// here......
//document.querySelector(".modal2-jpeg-spot").innerText= '<img src = "' + jpeg + '"width = "190" height ="237" />'
//this works for text document.querySelector(".modal2-jpeg-spot").innerText= "<img src = " + jpeg + "/>"
document.querySelector(".modal2-jpeg-spot").src =  + jpeg + '"width = "700" height ="237" />'
//vadocument.getElementById("myImg");
//var modalImg = document.getElementById("img01");

//<img class="modal2-content" id="img01" 
//document.getElementsByClassName(".modal2-picture")("<img src = " + jpeg + "/>")
// below is not working
modal2.classList.add('open')
modal2ExitBtn.addEventListener("click", (e)=>{
modal2.classList.remove("open")
nextQuestion()

})
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

