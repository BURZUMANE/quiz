// const list = document.querySelector('ul');

// list.addEventListener('click', e =>{
//     if(e.currentTarget === e.target){
//         return;
//     }
//     const active = e.currentTarget.querySelector('.purple');
//     active && active.classList.remove('purple');
//     e.target.classList.add('purple');
// })

const todos = {
    items: [],
    add(text){
        const todo = {
            id: Date.now(),
            // text : >>>
            // text : text,
            // ???? es6 or es5
            text,
        };
        this.items.push(todo);

        return todo;
    },
    delete(id){
        this.items = this.items.filter(item => item.id !== id);
    }
};

const refs = {
    editor: document.querySelector('.js-editor'),
    todoList : document.querySelector('.js-todo-list'),
}
refs.editor.addEventListener('submit', handleEditorSubmit);
refs.todoList.addEventListener('click', handleDelete);


function handleEditorSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.text.value;
    
    const todo =todos.add(inputValue);
    const build = buildTodoItem(todo);
    appendMarkUp(refs.todoList, build);
    console.log(todos.items);
    form.reset();
}



function buildTodoItem(item){
    return `
    <li class="todo-list__item" data-id="${item.id}">
        <div class="todo">
            <p class="todo__text">${item.text}</p>
            <div class="todo__action">
                <button class="button" type="button">
                    delete
                </button>
            </div>
        </div>
    </li>
    `
}

function appendMarkUp(parentRef, element){
    parentRef.insertAdjacentHTML('beforeend', element);
};

function handleDelete(e){
    if(e.target.nodeName !== 'BUTTON'){
        return;
    }
    const button = e.target;
    const parentLi = button.closest('li.todo-list__item');
    const todoId = Number(parentLi.dataset.id);
    // todos.delete(todoId);
    todos.delete(todoId);
    console.log(todos.items);
    parentLi.remove();

}


