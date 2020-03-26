import questions from './questions.js'

const refs = {
    mainList: document.querySelector('.js-questions'),
    submitForm: document.querySelector('.js-questions-form'),
}



// RENDER QUESTIONS
function renderQuestions({id, question, answers}){
    return `
    <li class="questions__item">
        <h3 class="questions__title">
            ${question}
        </h3>
        <ul class="questions__answers">
            ${renderAnswers(answers, id)}
        </ul>
    </li>
    `
}

function renderAnswers(arr, id){
    let result = '';
    const entriesArr = Object.entries(arr);
    entriesArr.forEach(item => {
        result += `

        <li class="questions__answers-item">
            <label for="${id}${item[0]}"> 
            <input type="radio" id="${id}${item[0]}" name="${id}" value="${item[0]}"> 
                ${item[0]}: ${item[1]}                          
            </label>
        </li>
        `
    })
    return result;
}


function buildPage(arr){
    return arr.map(element => {
       return renderQuestions(element);
    }).join('');
}


function inserHTML(parent, builder){
    parent.insertAdjacentHTML('beforeend', builder);
}


inserHTML(refs.mainList, buildPage(questions));

// EVENTS HANDELING

refs.submitForm.addEventListener('submit', submitHandler)


function submitHandler(e){
    e.preventDefault();
    const dataForm = new FormData(e.currentTarget);
    const submitedAnswers = {} 
    dataForm.forEach((value, key) =>{
        submitedAnswers[key] = value
    })
    answerCheck(submitedAnswers);
}


function answerCheck(obj){
    const answerValues = Object.values(obj);
    // console.log(answerValues);
    for(let i=0; i<questions.length; i++){
        if(questions[i].correctAnswer === answerValues[i]){
            console.log(`Question ${questions[i].id}: correct`);
            
        }else{
            console.log(`Question ${questions[i].id}: incorrect`)
        };
    }
}

// const form = document.querySelector('.js-questions-form');
// const questionList = document.querySelector('.questions');
// // SUBMIT HANDLER

// const handleSubmit = function(event){
//     event.preventDefault();
// }

// form.addEventListener('click', handleSubmit);


// // RENDERS
// // ANSWERS
// const renderAnswers = function(arr, id){
//     let answerFragment = document.createDocumentFragment();

//     for(const i of Object.entries(arr)){
//        const answerLi = document.createElement('li');
//        answerLi.classList.add('questions__answer-item"');
//        const answerLabel = document.createElement('label');
//        answerLabel.setAttribute('for', id)
//        const input = document.createElement('input');
//        input.classList.add('radio-toggle');
//     //    elem.setAttribute(name, value) - устанавливает атрибут
//        input.setAttribute('type', 'radio');
//        input.setAttribute('name', id);
//        input.setAttribute('id', id);
//        input.setAttribute('value', i[0]);
//     //    input.setAttribute('checked', false);
//        answerLabel.appendChild(input);
//        answerLabel.append(`${i[0]} : ${i[1]}`);
//        answerLi.appendChild(answerLabel);

//        answerFragment.appendChild(answerLi);
//     }

//     return answerFragment;
// }

// // ${renderAnswers(answers, id)}
// const renderQuestion = function( {id, question, answers:{a, b, c, d}, answers,correctAnswer }){
//     let fragment = document.createDocumentFragment();
//     const newLi = document.createElement('li');
//     const questionTitle = document.createElement('h3');
//     questionTitle.classList.add('questions__title"');
//     questionTitle.textContent = question;
//     const answersList = document.createElement('ul');
//     answersList.addEventListener('click', e => {
//         console.log(e.target);
//         // const isCheked = e.currentTarget.querySelectorAll('input');
//         // for(const elem of isCheked){
//         //     if(elem.getAttribute('checked') === true){
//         //         console.log('shit');
//         //         elem.setAttribute('checked', false);
//         //     }
//         // }
//         // e.target.setAttribute('checked', true);
//     })
//     answersList.classList.add('questions__answer');
//     answersList.appendChild(renderAnswers(answers, id));
//     newLi.append(questionTitle);
//     newLi.append(answersList);
//     fragment.appendChild(newLi);
//     return fragment;    
    

// };

// // ${renderAnswers(answers)} GOES UP

// const mapQuestions = function(arr){
// arr.forEach(elem => questionList.append(renderQuestion(elem)));
// };
// mapQuestions(questions);

