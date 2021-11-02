const startContainer = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const choice1 = document.getElementById("first");
const choice2 = document.getElementById("second");
const choice3 = document.getElementById("third");
const choice4 = document.getElementById("fourth");
const progress = document.getElementById("ScoreBar");
const scoreCon = document.getElementById("scoreContainer");


let questions = [
    {
        questions: 'What does HTML stand for?',
        choice1: 'Hypertext Markup Language',
        choice2: 'Hypertexual Makeup Language',
        choice3: 'Hightense Making Language',
        choice4: 'Hightend Markup Langauge',
        correct: '1',
    },
    {
        questions: 'What does CSS stand for?',
        choice1: 'Centeral Structured Styling',
        choice2: 'Cascading Style Sheets',
        choice3: 'Cascading Structured Sheets',
        choice4: 'Center Style Sheets',
        correct: '2',
    },
    {
        questions: 'What does JS stand for?',
        choice1: 'J Styles',
        choice2: 'JavaScript',
        choice3: 'JQueryScript',
        choice4: 'JStylesScript',
        correct: '2',
    },
    {
        questions: 'The Bootstrap grid system is based on how many columns??',
        choice1: '6',
        choice2: '19',
        choice3: '12',
        choice4: '3',
        correct: '3',
    },
    {
        questions: 'What does XML stand for?',
        choice1: 'eXtensible Markup Language',
        choice2: 'eXecutable Multiple Language',
        choice3: 'eXTra Multi-Program Language',
        choice4: 'eXamine Multiple Language',
        correct: '1',
    },
]

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
let Timer;
let score = 0;

function renderQuestion() {
    let Q = questions[runningQuestion];
    question.innerHTML = "<p>" + Q.questions + "</p>";
    choice1.innerHTML = Q.choice1;
    choice2.innerHTML = Q.choice2;
    choice3.innerHTML = Q.choice3;
    choice4.innerHTML = Q.choice4;
}

// starts quiz
startContainer.addEventListener("click", startQuiz);

function startQuiz() {
    startContainer.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    Timer = setInterval(renderCounter, 1000); //1s
}

function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;

        count++
    } else {
        count = 0;
        // change a point in progressbar to red when answer is incorrect
        wrongAnswer();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(Timer);
            scoreRender();
        }
    }
}

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        rightAnswer();
    } else {
        // answer is wrong
        // change progress color to red
        wrongAnswer();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(Timer);
        scoreRender();
    }
}
// correct
function rightAnswer(){
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}
// incorrect
function wrongAnswer(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

function scoreRender(){
    const nameVal = document.getElementById('name').value
   // document.getElementById("demo").innerHTML =nameVal
        
  if (nameVal !== null){
    scoreCon.style.display = "block";
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    
    scoreCon.innerHTML += "<p>" + nameVal + " Your Score is: " + scorePerCent +"%</p>";
  } else{
      return ''
  }
 
}