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
    holidayAsyncAwait(today().year);
})


async function holidayAsyncAwait(year) { 

    try {
        const response = await fetch('https://api.dryg.net/dagar/v2.1/' + year + '');
        const data = await response.json();
        holidayYear(data.dagar);
        
    } catch (error) {
        console.error(error);
    }
}

function holidayYear(days) {
    
    let holiday;
    let listOfHolidays = [];
    for (const day of days) {
        if (day.helgdag) {
            let allDates = {holiday: day.helgdag, month:day.datum.slice(5, 7), dag:day.datum.slice(8, 10)};          
            listOfHolidays.push(allDates);
            // console.log(allDates);
        }
    }
    loopYear(listOfHolidays);
    // console.log(listOfHolidays);
}

function loopYear(listOfHolidays) {
    let month;
    switch ($('.cal-month').text()){
        case 'Januari':
            month = 01;
            break;
        case 'Februari':
            month = 02;
            break;
        case 'Mars':
            month = 03;
            break;
        case 'April':
            month = 04;
            break;
        case 'Maj':
            month = 05;
            break;
        case 'Juni':
            month = 06;
            break;
        case 'Juli':
            month = 07;
            break;
        case 'Augusti':
            month = 08;
            break;
        case 'September':
            month = 09;
            break;
        case 'Oktober':
            month = 10;
            break;
        case 'November':
            month = 11;
            break;
        case 'December':
            month = 12;
            break;
    }

    for(let i = 0; i < listOfHolidays.length; i++){
        if (listOfHolidays[i].month == month){
            $(`.calender #holiday${listOfHolidays[i].dag}`).text(listOfHolidays[i].holiday);
            $(`.calender #holiday${listOfHolidays[i].dag}`).addClass('holiday');
            
        }
    }
}

function loopMonth(listOfHolidays) {
    // console.log('array', listOfHolidays);
}