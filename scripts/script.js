$(document).ready(() => {
    
    
    const addEventListeners = () => {        
        $('.add').click(newTodo);
        $('.new-todo button:nth-child(1)').click(saveTodos);
        $('.new-todo button:nth-child(2)').click(closeForm);          
    }    
    
    today();    
    generateDays(today().month);
    addEventListeners();
    showAmountOfTodos();
    showTodos();     
})


