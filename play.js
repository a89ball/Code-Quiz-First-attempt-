const question =document.querySelector('#question');
const choices =Array.from(document.querySelectorAll('.choice-text'));
const progressText =document.querySelector('#progressText');
const scoreText =document.querySelector('#score');
const progressBarFull =document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionsCounter = 0
let avaliableQuestions= [...questions];

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

const SCORE_BOARD = 100
const MAX_QUESTIONS = 5

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
       
        count++
    }else{
        count = 0;
        // response to incorrect answer
        incorrectAnswer();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(Timer);
            scoreRender();
        }
    }
}

function renderQuestion(){
    let Quest=questions[runningQuestion];
    question.innerHTML = "<p>"
}

function startQuiz(){
    startContainer.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    Timer = setInterval(renderCounter,1000);
}

getNewQuestion = () => {
    if (avaliableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionsCounter++
    progressText.innerText = `Question ${questionCounter} of  ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * avaliableQuestions.length)
    currentQuestion = avaliableQuestions[questionIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    avaliableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore (SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)

        getNewQuestion()
        
        }, 1000)
    })  
    
})

incrementScore = num => {
    score <=num
    scoreText.innerText = score
}

startQuiz();