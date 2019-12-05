let getId;

const showAllTodos = () => {
    let getTodos; 
    $('.todos').html('');

    keys = Object.keys(localStorage);        
    for(let i = 0; i < keys.length; i++) {
        getTodos = JSON.parse(localStorage.getItem(keys[i]));
        for(let j = 0; j < getTodos.length; j++){          
            const todoContent = document.createElement('div');
            todoContent.innerHTML = `<p>${getTodos[j].text}</p><p class="todoDate">${getTodos[j].day}${getTodos[j].month}${getTodos[j].year}</p><div id="icons"><i class="fas fa-times"></i><i class="fas fa-pen"></i></div>`;
            $('.todos').append(todoContent);
            removeTodoEventListener();
            //editTodoEventListener();             
        }
    }
}

class Todos {
    constructor(id, year, month, day, text){
        this.id = id;
        this.year = year;
        this.month = month;
        this.day = day;
        this.text = text;
    }   

    static todoList(todo){
        let list = []
        list.push(todo);
        return list;      
    }    
}

const clearForm = () => {
    $('#text').val("");
    $('#day').val("");
    $('#month').val("");
    $('#year').val("");
}

const showTodos = () => {
    let getTodos;    

    keys = Object.keys(localStorage);        
    for(let i = 0; i < keys.length; i++) {
        getTodos = JSON.parse(localStorage.getItem(keys[i]));
        for(let j = 0; j < getTodos.length; j++){
            if (getTodos[j].day == selectedDay && getTodos[j].month == selectedMonth && getTodos[j].year == selectedYear) {
                const todoContent = document.createElement('div');
                todoContent.innerHTML = `<p>${getTodos[j].text}</p><p class="todoDate">${getTodos[j].day}${getTodos[j].month}${getTodos[j].year}</p><div id="icons"><i class="fas fa-times"></i><i class="fas fa-pen"></i></div>`;
                $('.todos').append(todoContent);
                removeTodoEventListener();
                //editTodoEventListener();
            } 
        }
    }
}

const editTodoEventListener = () => {
    $("#icons .fa-pen").unbind('click');
    $("#icons .fa-pen").click( e => {
        
        let getTodoDiv = e.target.parentElement.parentElement;
        let getTextElement = getTodoDiv.firstChild;
        let text = $(getTextElement).text();
        
        $('.new-todo').css('display', 'flex');
        $('.new-todo p').text(`${selectedDay} ${selectedMonth} ${selectedYear}`);
        $('.new-todo #text').val(text);
    })
    $(".new-todo button:nth-child(1)").unbind('click');
    $(".new-todo button:nth-child(1)").click( e => {
        //e.preventDefault();
        //editLocalstorage(e);
    })
}


// const editLocalstorage = e => {
//     console.log(e);
    
//     let text = $(getTextElement).text();
//     console.log('editLocalStorage');
//     // console.log(text);
    
    
//     let newText = $('#text').val();
//     // console.log(newText);
    

//     let day = $('.date .day-number').text();
//     let month = $('.date .month').text();  
//     let year = $('.date .year').text();


//     let getTodos = JSON.parse(localStorage.getItem(`${day}${month}${year}`)); 
//     for (let i = 0; i < getTodos.length; i++){            
//         if(getTodos[i].text === text){
//             getTodos[i].text = newText;
//             console.log('getTodos:', getTodos)
//             localStorage.setItem(`${day}${month}${year}`, JSON.stringify(getTodos));                
//         }
//     }
//     $('.new-todo').css('display', 'none');
//     showAmountOfTodos();
//     $('.todos').html('');
//     showTodos(); 
//     clearForm();
// }


const removeTodoEventListener = () => {
    $("#icons .fa-times").unbind('click');
    $("#icons .fa-times").click( e => {
        let getTodoDiv = e.target.parentElement.parentElement;
        let getTextElement = getTodoDiv.firstChild;
        let text = $(getTextElement).text();
        let getDate = getTodoDiv.firstChild.nextSibling; 
        let date = $(getDate).text();

        let getTodos = JSON.parse(localStorage.getItem(date));
        getId = getTodos[0].id; 
        for (let i = 0; i < getTodos.length; i++){            
            if(getTodos[i].text === text){
                $(e.target).parent().parent().remove();
                getTodos.splice(i, 1);
                localStorage.setItem(date, JSON.stringify(getTodos));                
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

        if (getTodos.length && getTodos[0].month == month && getTodos[0].year == year) {
            let amountOfTodos = getTodos.length;
            $(`#horn${getTodos[0].day}`).addClass('show-horn');
            $(`#todo${getTodos[0].day}`).text(`(${amountOfTodos})`);
            $(`#todo${getTodos[0].day}`).addClass('show-todo');
        } 
        if (getTodos.length === 0 && selectedDay === 'No'){
            $(`#horn${getId}`).removeClass('show-horn');
            $(`#todo${getId}`).text('');
            $(`#todo${getId}`).removeClass('show-todo');
        } else if (getTodos.length === 0){
            $(`#horn${selectedDay}`).removeClass('show-horn');
            $(`#todo${selectedDay}`).text('');
            $(`#todo${selectedDay}`).removeClass('show-todo');
        }           
    }  
}

const newTodo = () => { 
    $('.new-todo').css('display', 'flex');   
}

const saveTodos = e => {    
    e.preventDefault();
    let text = $('#text').val();
    let day = $('#day').val();
    let id = $('#day').val();
    let month = $('#month').val();
    let year = $('#year').val();
    let date = day + month + year; 
    let todoList = [];
    let todoInStorage; 
    let todo = new Todos(id, year, month, day, text);

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
    
    $('.todos').html(''); 
    showAllTodos();
    clearForm();
    $('.new-todo').css('display', 'none');
    showAmountOfTodos();       
    showTodos(); 
}

const closeForm = (e) => {
    e.preventDefault();
    clearForm();
    $('.new-todo').css('display', 'none');
}