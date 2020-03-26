import questions from './questions.js'

const refs = {
    mainUl: document.querySelector('.js-questions'),
}


const questionList = {
    questionsMarkUp: '',
    questionsBuild({id,question,answers,correctAnswer}) {
        return `
        <li class="questions__item">
        <h class="questions__title">${question}</h>
        <ul class="questions__list">     
            ${this.answer(answers)}
        </ul>
    </li>`;
    },
    answer(arr) {
        let build = ''
        for (const elem of Object.entries(arr)) {

            build += `<li class="questions__list-item">${elem[0]}: ${elem[1]}</li>`
            // console.log(elem);
        }
        return build;
    },
    appendMarkUp(parentRef, element){
        parentRef.insertAdjacentHTML('beforeend', element);
    },
    render(arr){
        console.log(this.questionsBuild);
        const result = arr.forEach(item => {
            questionList.questionsBuild(item);
        });
        return result;
    }
}

console.log(refs.mainUl);
console.log(questionList.questionsBuild(questions[0]));

// questionList.appendMarkUp(refs.mainUl, questionList.render(questions));

questionList.render()
