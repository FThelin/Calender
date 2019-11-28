window.addEventListener('load', init);

function init(){    
    generateDays();
    today();
    addEventListeners();
}

function addEventListeners() {
    const addTodoButton = document.querySelector('.add');
    addTodoButton.addEventListener('click', addTodo);       
}


