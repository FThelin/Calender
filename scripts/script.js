window.addEventListener('load', init);

function init(){    
    generateDays();
    getDate();
    addEventListeners();
}

function addEventListeners() {
    const addTodoButton = document.querySelector('.add');
    addTodoButton.addEventListener('click', addTodo);
    addTodoButton.addEventListener('click', addTodo);        
}


function getDate() {
    const span = document.querySelector('section span');
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDay();
    
    let test = {"month": month, "year": year, "day":day};

    switch (month) {
        case 0:
            span.innerText = `Januari ${year}`;
            break;
        case 1:
            span.innerText = `Februari ${year}`;
            break;
        case 2:
            span.innerText = `Mars ${year}`;
            break;
        case 3:
            span.innerText = `April ${year}`;
            break;
        case 4:
            span.innerText = `Maj ${year}`;
            break;
        case 5:
            span.innerText = `Juni ${year}`;
            break;
        case 6:
            span.innerText = `Juli ${year}`;
            break;
        case 7:
            span.innerText = `Augusti ${year}`;
            break;
        case 8:
            span.innerText = `September ${year}`;
            break;
        case 9:
            span.innerText = `Oktober ${year}`;
            break;
        case 10:
            span.innerText = `November ${year}`;
            break;
        case 11:
            span.innerText = `December ${year}`;
            break;
        default:
            span.innerText = `error`;
    }    

    return test;
}

function generateDays() {
    let jan, mar, may, jul, aug, okt, dec;
    jan = mar = may = jul = aug = okt = dec = 31;

    for(let i = 1; i < 32 ; i++){
        days =  `<div id="button-${i}">${i}</div>`;
        const x = document.querySelector('.calender');

        x.innerHTML += days;
    }    
}
let nr = 1;

function addTodo() {
    nr++;
    const todos = document.querySelector('.todos');
    const todoContent = document.createElement('section');
    todoContent.innerHTML = `<div id="${nr}"><input type="text" placeholder="Todo..." maxlength="20"><p>Tid: <input type="time"></input> - <input type="time"></input></p></div>`;
    todos.append(todoContent);
    addTodoEventListeners();
}

function addTodoEventListeners() {
    const todo = document.querySelectorAll('.todos div');
    for(let i = 0; i < todo.length; i++){
        todo[i].addEventListener('click', removeTodo);
    }
}

function removeTodo() {
    let test = this.id;
    console.log(test);
    // console.log(e.target, test);
    el = document.getElementById(test);
    el.remove();

    // test2.style.display = 'none';
}


