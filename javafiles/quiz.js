const questionBtns = document.querySelectorAll(".question-button")

questionBtns.forEach(function(btn){
    btn.addEventListener("click",function(evt){
        console.log(evt.target);
        if(evt.target.classList.contains('basicmath')){
            localStorage.setItem('selectedQuestion','basicmath')
        }
        if(evt.target.classList.contains('middlemath')){
            localStorage.setItem('selectedQuestion','middlemath')
        }
        if(evt.target.classList.contains('advancemath')){
            localStorage.setItem('selectedQuestion','advancemath')
        }
        location.href='../htmlfiles/questions.html'
    })
})


const guideBtn = document.querySelector("#guide-btn")
const overLay = document.querySelector(".overlay")
const container = document.querySelector(".container")
const exitBtn = document.querySelector("#exit")

guideBtn.addEventListener("click", ()=>{
    overLay.classList.remove('hidden')
    container.classList.remove('hidden')
})

exitBtn.addEventListener("click", ()=>{
    overLay.classList.add('hidden')
    container.classList.add('hidden')
})