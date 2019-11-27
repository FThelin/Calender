function addTodo() {
    const todos = document.querySelector('.todos');
    const todoContent = document.createElement('div');
    todoContent.innerHTML = `<input type="text" placeholder="Todo..." maxlength="18"><div id="time">Tid:<input type="time"></input> - <input type="time"></input></div><div id="icons"><i class="fas fa-times"></i><i class="fas fa-check"></i></div>`;
    todos.append(todoContent);
    addTodoEventListeners();
}

function addTodoEventListeners() {
    const remove = document.querySelectorAll('#icons i:nth-child(1)');
    const todoDone = document.querySelectorAll('#icons i:nth-child(2)');    

    for(let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', removeTodo);
        todoDone[i].addEventListener('click', markDone);
    }
}

function removeTodo(e) {
    const todo = e.target.parentNode.parentNode;
    todo.remove();
}

function markDone(e) {
    const todo = e.target.parentNode.parentNode;
    const children = e.target.parentNode.siblings;
    todo.style.backgroundColor = 'rgb(50, 186, 96)';
    todo.style.opacity = '0.3';
    children.style.color = 'black';
}

