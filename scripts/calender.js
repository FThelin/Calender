const generateDays = month => {    

    let html = "";

    if (month == 3 || month == 5 || month == 8 || month == 10) {
        month = 31;
    } else if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        month = 32;
    } else {
        month = 29;
    }

    for(let i = 1; i < month ; i++){
        days = `<div id="${i}">${i}</div>`;
        html += days
        $('.calender').html(html);
    }    
}

let currentMonth = today().month;
let currentYear = today().year;
const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];

$('.decrement-month').click(() => {
    currentMonth--;
    if (currentMonth == -1) {
        currentMonth = 11;
        currentYear--;
    }
    $('section .cal-month').text(months[currentMonth]);
    $('section .cal-year').text(currentYear);
    generateDays(currentMonth);
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
    let year = $('.cal-year').text();
    let month = $('.cal-month').text();
    let day = e.target.getAttribute('id');    
    $('.date .date-month').text(`${day} ${month}`);    
    $('.date .year').text(year);
    let getWeekday = new Date(year, getMonth(month), day);
    let weekdayNumber = getWeekday.getDay()
    $('.date .day').text(nameOfDay(weekdayNumber));
});





