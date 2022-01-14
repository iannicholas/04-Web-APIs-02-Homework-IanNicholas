var startScreen = document.querySelector("#start-screen");
var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-quiz");
var answer = document.querySelector(".answer");
var h2 = document.querySelector(".h2");
var questionArea = document.querySelector("#questions");
var scoreCounter = document.querySelector("#score-counter");
var option1 = document.querySelector("#choice1");
var option2 = document.querySelector("#choice2");
var option3 = document.querySelector("#choice3");
var option4 = document.querySelector("#choice4");

var questions = "";
var isDone = false;
var timer;
var timerCount;
var choice = "";
var score = "";
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
        startScreen.classList.add("hide");
        h2.innerHTML = questions[i].question;
        option1.innerHTML = "<button class=button-style id=choice1>" + questions[i].a + "</button><br>";
        option2.innerHTML = "<button class=button-style id=choice2>" + questions[i].b + "</button><br>";
        option3.innerHTML = "<button class=button-style id=choice3>" + questions[i].c + "</button><br>";
        option4.innerHTML = "<button class=button-style id=choice4>" + questions[i].d + "</button><br>";  
      }
  }
  checkAnswer();
} 

// check answer 
function checkAnswer() {
console.log("made it here");
console.log(choice);
if (choice === questions.answer) {
    answer = "Correct";
    score + 10; 
} else {
    timer - 5;
    answer = "Wrong";
}
i++;
getQuestions();
}

// sets score count to client storage
function setScore() {
  score.textContent = scoreCounter;
  localStorage.setItem("scoreCount", scoreCounter);
}

// updates score count on screen
function getScore() {
  var storedCount = localStorage.getItem("scoreCount");
  if (storedCount === null) {
    scoreCounter = 0;
  } 
  score.textContent = scoreCounter;
}

// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);



