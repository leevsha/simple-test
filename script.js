let questions = [
    {
        question: "Какой язык программирования мы сейчас изучаем?",
        a: "C++",
        b: "C#",
        c: "JavaScript",
        d: "Java",
        answer: "JavaScript",
    },
    {
        question: "Сколько будет 2+2?",
        a: "5",
        b: "3",
        c: "0",
        d: "4",
        answer: "4",
    },
    {
        question: "Сколько будет 2*3?",
        a: "6",
        b: "3",
        c: "0",
        d: "4",
        answer: "6",
    },
    {
        question: "Сколько будет 3*3?",
        a: "6",
        b: "3",
        c: "9",
        d: "4",
        answer: "9",
    },
    {
        question: "Сколько будет 5*3?",
        a: "16",
        b: "13",
        c: "15",
        d: "4",
        answer: "15",
    },
    {
        question: "Сколько будет 10*3?",
        a: "60",
        b: "30",
        c: "0",
        d: "40",
        answer: "30",
    },
    {
        question: "Сколько будет 2*30?",
        a: "60",
        b: "30",
        c: "50",
        d: "40",
        answer: "60",
    },
    {
        question: "Сколько будет 2*0?",
        a: "6",
        b: "3",
        c: "0",
        d: "4",
        answer: "0",
    },
    {
        question: "Сколько будет 5+5?",
        a: "6",
        b: "3",
        c: "10",
        d: "4",
        answer: "10",
    },
    {
        question: "Сколько будет 0+3?",
        a: "6",
        b: "3",
        c: "0",
        d: "4",
        answer: "3",
    },
];

let answerbtn = document.getElementById("answerbtn");
let allquestions = document.getElementById("allquestions");
let corransw = 0;
let result = document.getElementById("result");
function createQuestion(question, a, b, c, d, questionindex) {
    let divquestion = document.createElement("div");
    divquestion.id = "question" + questionindex;
    divquestion.classList.add("questionsCSS");
    allquestions?.appendChild(divquestion);
    let questionheader = document.createElement("div");
    questionheader.innerHTML = `${question} <br>`;
    divquestion.appendChild(questionheader);
    let form = document.createElement("form");
    divquestion.appendChild(form);
    creationFirstOption(form, questionindex, a);
    creationSecondOption(form, questionindex, b);
    creationThirdOption(form, questionindex, c);
    creationFourthOption(form, questionindex, d);
}
for (let index = 0; index < questions.length; index++) {
    createQuestion(questions[index].question, questions[index].a, questions[index].b, questions[index].c, questions[index].d, index)
}
function creationFirstOption(form, questionindex, a) {
    let label1 = document.createElement("label");
    form.appendChild(label1);
    let option1 = document.createElement("input")
    option1.type = "radio";
    option1.id = "Num1" + questionindex;
    option1.name = "Num" + questionindex;
    option1.value = a;
    label1.setAttribute(`for`, `${option1.id}`);
    label1.appendChild(option1);
    label1.insertAdjacentHTML("beforeend", `${a} <br>`);
}
function creationSecondOption(form, questionindex, b) {
    let label2 = document.createElement("label");
    form.appendChild(label2);
    let option2 = document.createElement("input")
    option2.type = "radio";
    option2.id = "Num2" + questionindex;
    option2.name = "Num" + questionindex;
    option2.value = b;
    label2.setAttribute(`for`, `${option2.id}`);
    label2.appendChild(option2);
    label2.insertAdjacentHTML("beforeend", `${b} <br>`);
    form.appendChild(label2);
}
function creationThirdOption(form, questionindex, c) {
    let label3 = document.createElement("label");
    form.appendChild(label3);
    let option3 = document.createElement("input")
    option3.type = "radio";
    option3.id = "Num3" + questionindex;
    option3.name = "Num" + questionindex;
    option3.value = c;
    label3.setAttribute(`for`, `${option3.id}`);
    label3.appendChild(option3);
    label3.insertAdjacentHTML("beforeend", `${c} <br>`);
    form.appendChild(label3);
}
function creationFourthOption(form, questionindex, d) {
    let label4 = document.createElement("label");
    form.appendChild(label4);
    let option4 = document.createElement("input");
    option4.type = "radio";
    option4.id = "Num4" + questionindex;
    option4.name = "Num" + questionindex;
    option4.value = d;
    label4.setAttribute(`for`, `${option4.id}`);
    label4.appendChild(option4);
    label4.insertAdjacentHTML("beforeend", `${d} <br>`);
    form.appendChild(label4);

}
function answerChecker() {
    for (let index = 0; index < questions.length; index++) {
        let element = document.getElementsByName(`Num${index}`);
        element.forEach((e) => {
            if (e.checked && e.value == questions[index].answer) {
                corransw++
            }
        })
    }
    let number = corransw / questions.length;
    console.log(number);
    if (number >= 0.7) {
        result.innerHTML = `Вы правильно ответили на ${number * 10}/${questions.length} вопросов, что больше 70%. Поздравляю!`;
        result.style.backgroundColor = "green";
    }
    else {
        result.innerHTML = `Вы правильно ответили на ${number * 10}/${questions.length} вопросов, что меньше 70%. Попробуйте ещё раз!`;
        result.style.backgroundColor = "red";
        corransw = 0;
    }

}

answerbtn.addEventListener("click", answerChecker);
