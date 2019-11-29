const todoList = [];


const addTodo = () => {    
    const todoContent = document.createElement('div');
    todoContent.innerHTML = `<input type="text" placeholder="Todo..." maxlength="18"><div id="time">Tid:<input type="time"></input> - <input type="time"></input></div><div id="icons"><i class="fas fa-times"></i><i class="fas fa-check"></i></div>`;
    $('.todos').append(todoContent);
    addTodoEventListeners();
    saveTodo();    
}

const saveTodo = () => {
    let day = $('.date .day-number').text();
    let month = $('.date .month').text();  
    let year = $('.date .year').text();
    let date = day + month + year; 
    let todo = {year: year, month: month, day: day};
    
    todoList.push(todo);
    localStorage.setItem('Todos', JSON.stringify(todoList));
}

const addTodoEventListeners = () => {    
    $('#icons i:nth-child(1)').click(removeTodo);
    $('#icons i:nth-child(2)').click(markDone);    
}

const removeTodo = e => {
    const todo = e.target.parentNode.parentNode;
    todo.remove();
}

const markDone = e => { 
    $(e.target).parent().parent().addClass("done");
}

const showTodos = () => {

    $('.todos').html('');
    let day = $('.date .day-number').text();
    let month = $('.date .month').text();  
    let year = $('.date .year').text();
    let todos = JSON.parse(localStorage.getItem("Todos"));
    let values;
    let amountOfTodos = 0;
    
    for(let i = 0; i < todos.length; i++){
        values = Object.values(todos[i]);
        if (values[0] == year && values[1] == month && values[2] == day) {
            amountOfTodos++;            
        }         
    }
    $(`#todo${day}`).text(amountOfTodos);
    
}


