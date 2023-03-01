const question = localStorage.getItem("selectedQuestion");
const nextBtn = document.querySelector(".next");
const submitBtn = document.querySelector(".submit");

let currentQuestionIndex = 0
let questions;
let totalQuestions;
let score = 0;
let wrongAnswer = 0;

function getQuestion(){
    fetch(`../questions/${question}.json`).then(response => {
        return response.json()
       })
       .then(result => {
        questions = result
        totalQuestions = result.length
        generateTemplate(questions[currentQuestionIndex])
       })
}

function checkCorrectAnswer(currentQuestion){
    const selectedOption = document.querySelector('input[name="option"]:checked').value
    if(currentQuestion.answer === selectedOption){
        score++
    }else{
        wrongAnswer++
    }
    console.log(currentQuestion);
}

nextBtn.addEventListener("click", () => {
    checkCorrectAnswer(questions[currentQuestionIndex])
    currentQuestionIndex++
     if(currentQuestionIndex === totalQuestions - 1){
        nextBtn.classList.add("hidden")
        submitBtn.classList.remove("hidden")
     }
    generateTemplate(questions[currentQuestionIndex])
})

submitBtn.addEventListener("click", () => {
    checkCorrectAnswer(questions[currentQuestionIndex])
    localStorage.setItem("totalresult", JSON.stringify({score, wrongAnswer}))

    location.href="../htmlfiles/result.html"
})

// note that the second question in question.question is your key name in the json file that holds your questions
function generateTemplate(question){
    console.log(question);
    const template =`
    <p class="question">${question.question}</p>
    ${question.option.map(option => {
        return `
        <label for=${option}>
        <input type="radio" name="option" id=${option} value=${option}>
        ${option}
        </label>
        `
    }).join("")}
    `
    document.querySelector(".questionContainer").innerHTML = template
}


getQuestion()

//for the calculator to appear and disappear
const calcuLator = document.querySelector(".calculator")
const closeBtn = document.querySelector(".close")
const overLay = document.querySelector(".overlay")
const calcButton = document.querySelector('.calculator-section');
const inputScreen = document.getElementById('input-screen');

calcuLator.addEventListener("click", function(){
    overLay.classList.remove('hiddenNow')
    calcButton.classList.remove('hiddenNow')
})


closeBtn.addEventListener("click", function(){
    overLay.classList.add('hiddenNow')
    calcButton.classList.add('hiddenNow')
})

overLay.addEventListener("click", function(){
    overLay.classList.add('hiddenNow')
    calcButton.classList.add('hiddenNow')
})

document.addEventListener("keydown", function(event) {
    if(event.key === "Escape"){
    overLay.classList.add('hiddenNow')
    calcButton.classList.add('hiddenNow')
    }
})

//Clear-button: to clear the values written in the input field

function clrButton() {
    inputScreen.value = " ";
}

//delete-button: to delete  each value one after the other

function delButton() {
    inputScreen.value = inputScreen.value.slice(0,-1);
}

// key-button: to let each of the values display;

function show(value){
    inputScreen.value += value;
}


//result : to give the correct answer to sums or mins
function result(){
    if(inputScreen.value == " "){
        alert("input figures to calculate")
    }else{
        inputScreen.value = eval(inputScreen.value);
    }
}
