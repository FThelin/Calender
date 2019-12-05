let selectedYear = 'Selected';
let selectedMonth = 'Date';
let selectedDay = 'No';
let currentMonth = today().month;
let currentYear = today().year;
const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];

const generateDays = currentMonth => {
    let html = "";
    let date = 1;
    let day;
    currentYear = $('section .cal-year').text();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0); 

    switch (firstDay.getDay()){
        case 0:
            day = 6;
            break;
        case 1:
            day = 0;
            break;
        case 2:
            day = 1;
            break;
        case 3:
            day = 2;
            break;
        case 4:
            day = 3;
            break;
        case 5:
            day = 4;
            break;
        case 6:
            day = 5;
            break;
    }

    for (let i = 0; i < 42; i++){
        days = `<div id="${i}"></div>`;
        html += days
        $('.calender').html(html);
    }
    let divs = $('.calender div');
    for (let i = 0; i < divs.length; i++){
        if (day == divs[i].getAttribute('id')){
            for(let j = day; j < lastDay.getDate() + day; j++){    
                $(`#${j}`).html(`${date}<div  id="holiday${date}"></div><div id="todo${date}"></div><i id="horn${date}" class="fas fa-bullhorn"></i>`);                
                date++;
            }
        }
    }
    for (let i = 0; i < divs.length; i++){
        let id = divs[i].innerText;
        $(divs[i]).attr('id', id);
    }
}

$('.decrement-month').click(() => {
    currentMonth--;
    if (currentMonth == -1) {
        currentMonth = 11;
        currentYear--;
    }
    $('section .cal-month').text(months[currentMonth]);
    $('section .cal-year').text(currentYear);
    generateDays(currentMonth);
    showAmountOfTodos();
    holidayAsyncAwait(currentYear);
})

$('.increment-month').click(() => {
    currentMonth++;
    if (currentMonth == 12) {
        currentMonth = 0;
        currentYear++;
    }
    $('section .cal-month').text(months[currentMonth]);
    $('section .cal-year').text(currentYear);
    generateDays(currentMonth);
    showAmountOfTodos();
    holidayAsyncAwait(currentYear);
})

const getMonth = month => {
    switch (month) {
        case 'Januari':
            return 00;            
        case 'Februari':
            return 01;
        case 'Mars':
            return 02;
        case 'April':
            return 03;
        case 'Maj':
            return 04;
        case 'Juni':
            return 05;
        case 'Juli':
            return 06;
        case 'Augusti':
            return 07;
        case 'September':
            return 08;
        case 'Oktober':
            return 09;
        case 'November':
            return 10;
        case 'December':
            return 11;
        default:
            return "error";        
    }
}

$('.calender').on('click', 'div', e => {
    
    if ($(e.target).hasClass('selected')){
        $(e.target).removeClass('selected');
        $(e.target).css('background-color', 'rgb(228, 228, 228)');
        selectedDay = 'No';        
        selectedMonth = 'Date';
        selectedYear = 'Selected';
        $('.todos').html('');
        showAllTodos();        
    } else {
        $('.calender > div').css('background-color', 'rgb(228, 228, 228)');
        $(e.target).css('background-color', 'rgba(0, 105, 100, 0.1)');
        $(e.target).addClass('selected');
        selectedYear = $('.cal-year').text();
        selectedMonth = $('.cal-month').text();
        selectedDay = e.target.getAttribute('id');
        $('.todos').html('');
        showTodos(); 
    }  
});