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
            $('section span').text(`Januari ${year}`);
            $('.date .date-month').text(`${day} Januari`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 1:
            $('section span').text(`Februari ${year}`);
            $('.date .date-month').text(`${day} Februari`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 2:
            $('section span').text(`Mars ${year}`);
            $('.date .date-month').text(`${day} Mars`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 3:
            $('section span').text(`April ${year}`);
            $('.date .date-month').text(`${day} April`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 4:
            $('section span').text(`Maj ${year}`);
            $('.date .date-month').text(`${day} Maj`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 5:
            $('section span').text(`Juni ${year}`);
            $('.date .date-month').text(`${day} Juni`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 6:
            $('section span').text(`Juli ${year}`);
            $('.date .date-month').text(`${day} Juli`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 7:
            $('section span').text(`Augusti ${year}`);
            $('.date .date-month').text(`${day} Augusti`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 8:
            $('section span').text(`September ${year}`);
            $('.date .date-month').text(`${day} September`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 9:
            $('section span').text(`Oktober ${year}`);
            $('.date .date-month').text(`${day} Oktober`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 10:
            $('section span').text(`November ${year}`);
            $('.date .date-month').text(`${day} November`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        case 11:
            $('section span').text(`December ${year}`);
            $('.date .date-month').text(`${day} December`);
            $('.date .day').text(nameOfDay(weekday));
            $('.date .year').text(year);
            break;
        default:
            $('section span').text('error');
    }   
}

/**
 * Get the correct name of the day
 * @param {Number} weekday returned from date object. Convert to name. 
 */
const nameOfDay = weekday => {
    switch (weekday) {
        case 0:
            return 'Söndag'
            break;
        case 1:
            return 'Måndag'
            break;
        case 2:
            return 'Tisdag'
            break;
        case 3:
            return 'Onsdag'
            break;
        case 4:
            return 'Torsdag'
            break;
        case 5:
            return 'Fredag'
            break;
        case 6:
            return 'Lördag'
            break;
    }
}