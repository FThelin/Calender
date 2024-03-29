/**
 * Get todays date
 */
const getToday = () => {    
    const date = new Date();
    return date;     
}

/**
 * This function adds a zero if the number is under 10 before the number is showed.
 * @param {number} i number from updateTime
 * @returns {number} number with added zero
 */
function addZero(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

/**
 * Function that updates ever half second then updates the time is the time has changed.
 * Then the function refers to itself to update again. 
 */
function updateTime() {
    let date = getToday();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    document.querySelector(".date .time").innerText = hours + ":" + minutes + ":" + seconds;
    // $('.date .time').text(`${hours}:${minutes}:${seconds}`);
    update = setTimeout(function () { updateTime() }, 500)
}


/**
 * Display todays date in post-it and above calender
 */
const today = () => { 

    const month = getToday().getMonth();
    const year = getToday().getFullYear();
    const weekday = getToday().getDay();
    const day = getToday().getDate();        

    
    switch (month) {
        case 0:
            $('section .cal-month').text('Januari');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Jan ${year}`);
            $('.date .day').text(nameOfDay(weekday));
            break;
        case 1:
            $('section .cal-month').text('Februari');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Feb ${year}`);
            $('.date .day').text(nameOfDay(weekday));
            break;
        case 2:
            $('section .cal-month').text('Mars');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Mar ${year}`);
            $('.date .day').text(nameOfDay(weekday));
            break;
        case 3:
            $('section .cal-month').text('April');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Apr ${year}`);
            $('.date .day').text(nameOfDay(weekday));
            break;
        case 4:
            $('section .cal-month').text('Maj');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Maj ${year}`);
            $('.date .day').text(nameOfDay(weekday));
            break;
        case 5:
            $('section .cal-month').text('Juni');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Jun ${year}`);
            $('.date .day').text(nameOfDay(weekday));
            break;
        case 6:
            $('section .cal-month').text('Juli');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Jul ${year}`);
            $('.date .day').text(nameOfDay(weekday));
            break;
        case 7:
            $('section .cal-month').text('Augusti');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Aug ${year}`);
            $('.date .day').text(nameOfDay(weekday));
            break;
        case 8:
            $('section .cal-month').text('September');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Sep ${year}`);
            $('.date .day').text(nameOfDay(weekday));
            break;
        case 9:
            $('section .cal-month').text('Oktober');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Okt ${year}`);
            $('.date .day').text(nameOfDay(weekday));
            break;
        case 10:
            $('section .cal-month').text('November');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Nov ${year}`);
            $('.date .day').text(nameOfDay(weekday));  
            break;
        case 11:
            $('section .cal-month').text('December');
            $('section .cal-year').text(year);
            $('.date .full-date').text(`${day} Dec ${year}`);
            $('.date .day').text(nameOfDay(weekday));                       
            break;
        default:
            $('section span').text('error');
    } 
    
    return {year: year, month: month, day: day}
}

/**
 * Get the correct name of the day
 * @param {Number} weekday returned from date object. Convert to name. 
 */
const nameOfDay = weekday => {
    switch (weekday) {
        case 0:
            return 'Söndag'
        case 1:
            return 'Måndag'
        case 2:
            return 'Tisdag'
        case 3:
            return 'Onsdag'
        case 4:
            return 'Torsdag'
        case 5:
            return 'Fredag'
        case 6:
            return 'Lördag'
    }
}