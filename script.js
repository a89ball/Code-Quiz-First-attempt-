const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

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

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
 questionCounter = 0
 score = 0
 availableQuestions = [...questions]
 getNewQuestion()
}

getNewQuestion = () => {
 if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
 localStorage.setItem('mostRecentScore', score)

 return window.location.assign('/end.html')
    }

 questionCounter++
 progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
 progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

 const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
 currentQuestion = availableQuestions[questionsIndex]
 question.innerText = currentQuestion.question

 choices.forEach(choice => {
 const number = choice.dataset['number']
 choice.innerText = currentQuestion['choice' + number]
    })
 availableQuestions.splice(questionsIndex, 1)

 acceptingAnswers = true
}

choices.forEach(choice => {
 choice.addEventListener('click', e=> {
 if(!acceptingAnswers) return

 acceptingAnswers = false
 const selectedChoice = e.target
 const selectedAnswer = selectedChoice.dataset['number']

 let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :'incorrect'

 if(classToApply === 'correct') {
 incrementScore(SCORE_POINTS)
        }

 selectedChoice.parentElement.classList.add(classToApply)

 setTimeout(() => {
 selectedChoice.parentElement.classList.remove(classToApply)
 getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
 score += num
 scoreText.innerText = score
}

startGame()
