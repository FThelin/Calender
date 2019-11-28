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
        days = `<div id="button-${i}">${i}</div>`;
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
        currentYear--
    }
    $('section span').text(`${months[currentMonth]} ${currentYear}`);
    generateDays(currentMonth);
})

$('.increment-month').click(() => {
    currentMonth++;
    if (currentMonth == 12) {
        currentMonth = 0;
        currentYear++
    }
    $('section span').text(`${months[currentMonth]} ${currentYear}`);
    generateDays(currentMonth);
})





