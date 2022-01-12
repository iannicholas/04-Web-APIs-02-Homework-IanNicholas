var displayQuestions = document.querySelector("#questions");
var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-quiz");



var questions = "";
var isDone = false;
var timer;
var timerCount;
var choice = "";
// var index = 0;

var questions = [
    {
        question: "Commonly used data types DO NOT include.",   
        a: "1. strings",
        b: "2. booleans",
        c: "3. alerts",
        d: "4. numbers",
        answer: "3. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        a: "1. quotes",
        b: "2. curly brackets",
        c: "3. parentheses",
        d: "4. square brackets",
        answer: "2. curly brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        a: "1. numbers and strings",
        b: "2. other arrays",
        c: "3. booleans",
        d: "4. all of the above",
        answer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        a: "1. commas",
        b: "2. curly brackets",
        c: "3. quotes",
        d: "4. parentheses", 
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is.",
        a: "1. JavaScript", 
        b: "2. terminal/bash",
        c: "3. for loops",
        d: "4. console.log", 
        answer: "4. console.log"
    }
]

// start button
function startQuiz() {
    isDone = "false";
    timerCount = 60;   
    // renderChoices();
    startTimer();
    console.log("Start button was clicked");
    console.log(questions);
    getQuestions();
}

// start timer
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount == 0) {
            clearInterval(timer);
        }
    }, 1000); 
}

// get questions on screen
function getQuestions() {
  
  if (timerCount > 0) {
    
      for (var i = 0; i < questions.length; i++) {
        
        var h3 = document.creatElement("h3");
        var node = document.createTextNode(questions[i].question);
        h3.appendchild(node);

        // displayQuestions.creatElement.innerHTML = "<h3>" + questions[i].question + "</h3><br>";
        // displayQuestions.innerHTML += "<button class=button-style id=choice1>" + questions[i].a + "</button><br>";
        // displayQuestions.innerHTML += "<button class=button-style id=choice2>" + questions[i].b + "</button><br>";
        // displayQuestions.innerHTML += "<button class=button-style id=choice3>" + questions[i].c + "</button><br>";
        // displayQuestions.innerHTML += "<button class=button-style id=choice4>" + questions[i].d + "</button><br>";
        
    }
    checkAnswer();
 }
 
} 

// check answer 
function checkAnswer() {
    // choice = document.getElementById("choice").onclick.value;
console.log("made it here");
console.log(choice);
if (choice === questions.answer) {
    alert.length("correct");
    getQuestions();
}
}
 



// Updates win count on screen and sets win count to client storage
// function setWins() {
//   win.textContent = winCounter;
//   localStorage.setItem("winCount", winCounter);
// }

// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }

// // These functions are used by init
// function getWins() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     winCounter = storedWins;
//   }
//   //Render win count to page
//   win.textContent = winCounter;
// }

// function getlosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   }
//   lose.textContent = loseCounter;
// }

// function checkWin() {
//   // If the word equals the blankLetters array when converted to string, set isWin to true
//   if (chosenWord === blanksLetters.join("")) {
//     // This value is used in the timer function to test if win condition is met
//     isWin = true;
//   }
// }

// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);



