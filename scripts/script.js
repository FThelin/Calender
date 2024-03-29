$(document).ready(() => {

    /**
     * Add event listeners to the new todo and edit todo forms.
     */
    const addEventListeners = () => {
        $('.add').click(newTodo);
        $('.new-todo button:nth-child(1)').click(saveTodos);
        $('.new-todo button:nth-child(3)').click(closeForm);
        $('.new-todo button:nth-child(2)').click(editTodo);
    }
         
    today();
    updateTime();
    generateDays(today().month);    
    showAmountOfTodos();    
    showTodos();    
    showAllTodos(); 
    addEventListeners();
    holidayAsyncAwait(today().year);    
})

/**
 * Fetch the swedish holidays API response
 * @param {Number} year 
 */
async function holidayAsyncAwait(year) { 

    try {
        const response = await fetch('https://api.dryg.net/dagar/v2.1/' + year + '');
        const data = await response.json();
        holidayYear(data.dagar);
    } 
    catch (error) {
        console.error(error);
    }
}

/**
 * Find the holidays of the year
 * @param {String} days Array of objects woth all days
 */
function holidayYear(days) {
    
    let holiday;
    let listOfHolidays = [];
    for (const day of days) {
        if (day.helgdag) {
            let allDates = {holiday: day.helgdag, month:day.datum.slice(5, 7), dag:day.datum.slice(8, 10)};          
            listOfHolidays.push(allDates);
        }
    }    
    loopYear(listOfHolidays);
}

/**
 * Convert month names to numbers and show in calender
 * @param {String} listOfHolidays 
 */
function loopYear(listOfHolidays) {
    let month;
    switch ($('.cal-month').text()){
        case 'Januari':
            month = "01";
            break;
        case 'Februari':
            month = "02";
            break;
        case 'Mars':
            month = "03";
            break;
        case 'April':
            month = "04";
            break;
        case 'Maj':
            month = "05";
            break;
        case 'Juni':
            month = "06";
            break;
        case 'Juli':
            month = "07";
            break;
        case 'Augusti':
            month = "08";
            break;
        case 'September':
            month = "09";
            break;
        case 'Oktober':
            month = "10";
            break;
        case 'November':
            month = "11";
            break;
        case 'December':
            month = "12";
            break;
    }

    for(let i = 0; i < listOfHolidays.length; i++){
        if (listOfHolidays[i].dag.startsWith("0")){
            listOfHolidays[i].dag = listOfHolidays[i].dag.slice(1, 2);
        }
        if (listOfHolidays[i].month === month){         
            $(`.calender #holiday${listOfHolidays[i].dag}`).text(listOfHolidays[i].holiday);
            $(`.calender #holiday${listOfHolidays[i].dag}`).addClass('holiday');            
        }
    }
}