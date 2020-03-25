import questions from './questions.js'

const form = document.querySelector('.js-questions-form');
const questionList = document.querySelector('.questions');
// SUBMIT HANDLER

const handleSubmit = function(event){
    event.preventDefault();
}

form.addEventListener('click', handleSubmit);


// RENDERS
// ANSWERS
const renderAnswers = function(arr, id){
    let answerFragment = document.createDocumentFragment();

    for(const i of Object.entries(arr)){
       const answerLi = document.createElement('li');
       answerLi.classList.add('questions__answer-item"');
       const answerLabel = document.createElement('label');
       const input = document.createElement('input');
       input.classList.add('radio-toggle');
       input.type = 'radio';
       input.name = id;
       answerLabel.appendChild(input);
       answerLabel.append(`${i[0]} : ${i[1]}`);
       answerLi.appendChild(answerLabel);

       answerFragment.appendChild(answerLi);
    }

    return answerFragment;
}

// ${renderAnswers(answers, id)}
const renderQuestion = function( {id, question, answers:{a, b, c, d}, answers,correctAnswer }){
    let fragment = document.createDocumentFragment();
    const newLi = document.createElement('li');
    const questionTitle = document.createElement('h3');
    questionTitle.classList.add('questions__title"');
    questionTitle.textContent = question;
    const answersList = document.createElement('ul');
    answersList.classList.add('questions__answer');
    answersList.appendChild(renderAnswers(answers, id));
    newLi.append(questionTitle);
    newLi.append(answersList);
    fragment.appendChild(newLi);
    return fragment;
    

};

// ${renderAnswers(answers)} GOES UP

const mapQuestions = function(arr){
arr.forEach(elem => questionList.append(renderQuestion(elem)));
};
mapQuestions(questions);



// shit code
// function removeLi(e){
//     e.target.remove(e);
// }

// const shitList = document.querySelector(".shit-list");
// shitList.addEventListener('click', removeLi);
