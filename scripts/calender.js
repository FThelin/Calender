 
const generateDays = month => {

    let html = "";

    if (month == 10){
        month = 31
    }

    for(let i = 1; i < month ; i++){
        days = `<div id="button-${i}">${i}</div>`;
        html += days
        $('.calender').html(html);
    }     
}


$('.decrement-month').click(() => {
    const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];

    generateDays(months[today().month]);
})





