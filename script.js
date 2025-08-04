const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "London",
        correct: "c"
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Jane Austen",
        d: "Mark Twain",
        correct: "b"
    },
    {
        question: "What is the largest planet in our Solar System?",
        a: "Earth",
        b: "Jupiter",
        c: "Mars",
        d: "Venus",
        correct: "b"
    }
];

let currentQuestion = 0;
let score = 0;
let selected = null;

const questionEl = document.getElementById('question');
const answerBtns = document.querySelectorAll('.answer-btn');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

function loadQuestion() {
    deselectAnswers();
    selected = null;
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    answerBtns[0].textContent = q.a;
    answerBtns[1].textContent = q.b;
    answerBtns[2].textContent = q.c;
    answerBtns[3].textContent = q.d;
    nextBtn.style.display = "none";
    resultEl.textContent = "";
}

function deselectAnswers() {
    answerBtns.forEach(btn => btn.classList.remove('selected'));
}

answerBtns.forEach((btn, idx) => {
    btn.onclick = () => {
        deselectAnswers();
        btn.classList.add('selected');
        selected = ['a', 'b', 'c', 'd'][idx];
        nextBtn.style.display = "inline-block";
    };
});

nextBtn.onclick = () => {
    if (selected === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    questionEl.textContent = "Quiz Completed!";
    document.querySelector('ul').style.display = "none";
    nextBtn.style.display = "none";
    resultEl.textContent = `Your score: ${score} / ${quizData.length}`;
}

loadQuestion();