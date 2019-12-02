const today = () => { 

    /**
     * Get todays date
     */
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const weekday = date.getDay();
    const day = date.getDate();       

    /**
     * Display todays date in post-it and above calender
     */
    switch (month) {
        case 0:
            $('section .cal-month').text('Januari');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('Januari');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 1:
            $('section .cal-month').text('Februari');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('Februari');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 2:
            $('section .cal-month').text('Mars');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('Mars');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 3:
            $('section .cal-month').text('April');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('April');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 4:
            $('section .cal-month').text('Maj');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('Maj');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 5:
            $('section .cal-month').text('Juni');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('Juni');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 6:
            $('section .cal-month').text('Juli');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('Juli');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 7:
            $('section .cal-month').text('Augusti');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('Augusti');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 8:
            $('section .cal-month').text('September');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('September');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 9:
            $('section .cal-month').text('Oktober');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('Oktober');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 10:
            $('section .cal-month').text('November');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('November');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 11:
            $('section .cal-month').text('December');
            $('section .cal-year').text(year);
            $('.date .day-number').text(day);
            $('.date .month').text('December');
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
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