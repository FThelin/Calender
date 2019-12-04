class Todos {
    constructor(year, month, day, text, timeFrom, timeTo){
        this.year = year;
        this.month = month;
        this.day = day;
        this.text = text;
        this.timeFrom = timeFrom;
        this.timeTo = timeTo;
    }   

    static todoList(todo){
        let list = []
        list.push(todo);
        return list;      
    }    
}

const clearForm = () => {
    $('#text').val("");
    $('#from').val("");
    $('#to').val("");
}

const showTodos = () => {
    
    let day = $('.day-number').text();
    let month = $('.month').text();
    let year = $('.year').text(); 
    let getTodos; 

    keys = Object.keys(localStorage);        
    for(let i = 0; i < keys.length; i++) {
        getTodos = JSON.parse(localStorage.getItem(keys[i]));
        for(let j = 0; j < getTodos.length; j++){
            if (getTodos[j].day == day && getTodos[j].month == month && getTodos[j].year == year) {
                const todoContent = document.createElement('div');
                todoContent.innerHTML = `<p>${getTodos[j].text}</p><p>Tid: ${getTodos[j].timeFrom} - ${getTodos[j].timeTo}</p><div id="icons"><i class="fas fa-times"></i><i class="fas fa-pen"></i></i><i class="fas fa-check"></div>`;
                $('.todos').append(todoContent);
                addMarkDoneEventListener();
                removeTodoEventListener();
                editTodoEventListener();
            } 
        }
    }
}

const addMarkDoneEventListener = () => {
    $("#icons .fa-check").unbind('click');
    $("#icons .fa-check").click( e => {
        if ($(e.target).parent().parent().hasClass('done')) {
            $(e.target).parent().parent().removeClass('done');
        } else {
            $(e.target).parent().parent().addClass('done');
        }        
    })
}

const editTodoEventListener = () => {
    $("#icons .fa-pen").unbind('click');
    $("#icons .fa-pen").click( e => {
        
        let getTodoDiv = e.target.parentElement.parentElement;
        let getTextElement = getTodoDiv.firstChild;
        let text = $(getTextElement).text();
        console.log(text);
        
        
        let day = $('.date .day-number').text();
        let month = $('.date .month').text();  
        let year = $('.date .year').text();
        
        $('.new-todo').css('display', 'flex');
        $('.new-todo p').text(`${day} ${month} ${year}`);
        $('.new-todo #text').val(text);
    })
    $(".new-todo button:nth-child(1)").unbind('click');
    $(".new-todo button:nth-child(1)").click( e => {
        e.preventDefault();
        editLocalstorage(e);
    })
}


const editLocalstorage = e => {
    console.log(e);
    
    let text = $(getTextElement).text();
    console.log('editLocalStorage');
    // console.log(text);
    
    
    let newText = $('#text').val();
    // console.log(newText);
    

    let day = $('.date .day-number').text();
    let month = $('.date .month').text();  
    let year = $('.date .year').text();


    let getTodos = JSON.parse(localStorage.getItem(`${day}${month}${year}`)); 
    for (let i = 0; i < getTodos.length; i++){            
        if(getTodos[i].text === text){
            getTodos[i].text = newText;
            console.log('getTodos:', getTodos)
            localStorage.setItem(`${day}${month}${year}`, JSON.stringify(getTodos));                
        }
    }
    $('.new-todo').css('display', 'none');
    showAmountOfTodos();
    $('.todos').html('');
    showTodos(); 
    clearForm();
}


const removeTodoEventListener = () => {
    $("#icons .fa-times").unbind('click');
    $("#icons .fa-times").click( e => {
        let getTodoDiv = e.target.parentElement.parentElement;
        let getTextElement = getTodoDiv.firstChild;
        let text = $(getTextElement).text();
        
        let day = $('.date .day-number').text();
        let month = $('.date .month').text();  
        let year = $('.date .year').text();

        let getTodos = JSON.parse(localStorage.getItem(`${day}${month}${year}`)); 
        for (let i = 0; i < getTodos.length; i++){            
            if(getTodos[i].text === text){
                $(e.target).parent().parent().remove();
                getTodos.splice(i, 1);
                localStorage.setItem(`${day}${month}${year}`, JSON.stringify(getTodos));                
            }
        }

        showAmountOfTodos();
    })
}

const showAmountOfTodos = () => {
    let month = $('.cal-month').text();
    let year = $('.cal-year').text();

    keys = Object.keys(localStorage);        
    for(let i = 0; i < keys.length; i++) {
        let getTodos = JSON.parse(localStorage.getItem(keys[i]));

        if (getTodos[0].month == month && getTodos[0].year == year) {
            let amountOfTodos = getTodos.length;
            $(`#horn${getTodos[0].day}`).addClass('show-horn');

            $(`#todo${getTodos[0].day}`).text(`(${amountOfTodos})`);
            $(`#todo${getTodos[0].day}`).addClass('show-todo');
        }            
    }  
}

const newTodo = () => {    
    let day = $('.date .day-number').text();
    let month = $('.date .month').text();  
    let year = $('.date .year').text();

    $('.new-todo').css('display', 'flex');
    $('.new-todo p').text(`${day} ${month} ${year}`);
}

const saveTodos = (e) => {
    e.preventDefault();
    let text = $('#text').val();
    let timeFrom = $('#from').val();
    let timeTo = $('#to').val();
    
    let day = $('.date .day-number').text();
    let month = $('.date .month').text();  
    let year = $('.date .year').text();
    let date = day + month + year; 
    
    let todoList = [];
    let todoInStorage; 

    let todo = new Todos(year, month, day, text, timeFrom, timeTo);

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
    
    clearForm();
    $('.new-todo').css('display', 'none');
    showAmountOfTodos();
    $('.todos').html('');
    showTodos(); 
}

const closeForm = (e) => {
    e.preventDefault();
    clearForm();
    $('.new-todo').css('display', 'none');
}