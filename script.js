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


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
let Timer;
let score = 0;
    let questions = [
        {
            questions:'What does HTML stand for?',
        choice1: 'Hypertext Markup Language',
        choice2: 'Hypertexual Makeup Language',
        choice3: 'Hightense Making Language',
        choice4: 'Hightend Markup Langauge',
        answer: '1',
    },
    {
        questions:'What does CSS stand for?',
    choice1: 'Centeral Structured Styling',
    choice2: 'Cascading Style Sheets',
    choice3: 'Cascading Structured Sheets',
    choice4: 'Center Style Sheets',
    answer: '2',
    },
    {
        questions:'What does JS stand for?',
    choice1: 'J Styles',
    choice2: 'JavaScript',
    choice3: 'JQueryScript',
    choice4: 'JStylesScript',
    answer: '2',
    },
    {
        questions:'The Bootstrap grid system is based on how many columns??',
    choice1: '6',
    choice2: '19',
    choice3: '12',
    choice4: '3',
    answer: '3',
    },
    {
        questions:'What does XML stand for?',
    choice1: 'eXtensible Markup Language',
    choice2: 'eXecutable Multiple Language',
    choice3: 'eXTra Multi-Program Language',
    choice4: 'eXamine Multiple Language',
    answer: '1',
    },
    ]

    function renderQuestion(){
        let Q = questions[runningQuestion];
        question.innerHTML = "<p>"+ Q.question +"</p>";
        choice1.innerHTML = Q.choice1;
        choice2.innerHTML = Q.choice2;
        choice3.innerHTML = Q.choice3;
        choice4.innerHTML = Q.choice4;
    }