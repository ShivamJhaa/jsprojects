const quizData = [
    {
        Question:"Which is the most popular Language?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        correct:"d",
    },
    {
        Question:"Who is the president of US?",
        a:"Florin Pop",
        b:"Joe Biden",
        c:"Jetha Lal",
        d:"Vladimir Putin",
        correct:"b",
    },
    {
        Question:"What is name of the cretor of this website?",
        a:"Shivam",
        b:"John",
        c:"Ananya",
        d:"Pihu",
        correct:"a",
    },
    {
        Question:"What is the age of Shivam?",
        a:"20",
        b:"19",
        c:"18",
        d:"21",
        correct:"b",
    },
];

const quiz=document.getElementById("quiz");
const answerall=document.querySelectorAll(".answer");
const question=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();

    const currentQuizData= quizData[currentQuiz];

    question.innerText = currentQuizData.Question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer=undefined;
    answerall.forEach((ans)=>{
        if (ans.checked){
            answer=ans.id;
        }
    });
    return answer;

}
function deselectAnswer(){
    answerall.forEach((ans)=>{
        ans.checked=false;
    });
}

submitBtn.addEventListener("click",()=>{
    const ans =getSelected();
    if(ans){
        if(ans===quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if (currentQuiz<quizData.length){
            loadQuiz();
        }
        else {
            quiz.innerHTML=`
            <h2>You answered correctly ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
            `;

        }
    }

});