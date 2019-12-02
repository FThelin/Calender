class Todos {
    constructor(year, month, day,){
        this.year = year;
        this.month = month;
        this.day = day;
    }   

    static todoList(todo){
        let list = []
        list.push(todo);
        return list;      
    }    
}

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
    let todo = new Todos(year, month, day);
    let todoList = [];
    let todoInStorage;
    
    if(localStorage.getItem(date)){
        let storage = JSON.parse(localStorage.getItem(date));
        for (let i = 0; i < storage.length; i++){
            todoInStorage = storage[i];
            todoList.push(todoInStorage);
            
        }
        todoList.push(todo);
        localStorage.setItem(date, JSON.stringify(todoList)); 
    } else {
        localStorage.setItem(date, JSON.stringify(Todos.todoList(todo))); 
    }    
    
    showAmountOfTodos();    
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

const showAmountOfTodos = () => {
        let month = $('.cal-month').text();
        let year = $('.cal-year').text();

        keys = Object.keys(localStorage);        
        for(let i = 0; i < keys.length; i++) {
            let getTodos = JSON.parse(localStorage.getItem(keys[i]));

            if (getTodos[0].month == month && getTodos[0].year == year) {
                let amountOfTodos = getTodos.length;
                $(`#todo${getTodos[0].day}`).text(`(${amountOfTodos})`);
                $(`#todo${getTodos[0].day}`).addClass('show-todo');
            }            
        }  
} 