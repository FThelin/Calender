$(document).ready(() => { 
    
    /**
     * Add click event to the "add" button.
     */
    const addEventListeners = () => {        
        $('.add').click(addTodo);       
    }

    
    today();
    generateDays(today().month);

    addEventListeners(); 
})


