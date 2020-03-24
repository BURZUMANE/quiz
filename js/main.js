import questions from './questions.js'

const form = document.querySelector('.js-questions-form');
const questionList = document.querySelector('.questions');
// SUBMIT HANDLER

const handleSubmit = function(event){
    event.preventDefault();
    form.ele
}

form.addEventListener('click', handleSubmit);


// RENDERS
// ANSWERS
const renderAnswers = function(arr, id){
    let answers = ''
    for(const i of Object.entries(arr)){

       answers += `
       <li class="questions__answer-item">
        <input type="radio" name="${id}" value="${i[0]}"/>
        <span class="answer-span">${i[0]}</span>: ${i[1]}
       </li>`
    }
    return answers;
}


const renderQuestion = function( {id, question, answers:{a, b, c, d}, answers,correctAnswer }){
    let result = `
    <li class="questions__item">
        <h3 class="questions__title">${question}</h3>
        <ul class="questions__answer">
        ${renderAnswers(answers, id)}
        <ul>
    </li>
    `
    // CONSOLES
    // console.log(result);
    // console.log(`ID: ${id} 
    // question:${question}
    // ${a}`);
    // renderAnswers(answers);
    return result;
};

const mapQuestions = function(arr){
    let result = ""
    arr.map(item => result += renderQuestion(item));
    return result;
}


// mapQuestions(questions);
// for(const elem of questions){
//     renderQuestion(elem);
// }

// renderQuestion(questions[0]);




// console.log(renderAnswers(questions[0].answers));

console.log(mapQuestions(questions));
questionList.insertAdjacentHTML('afterbegin', mapQuestions(questions));