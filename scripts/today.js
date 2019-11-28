function today() {
    /**
     * Saving elements in variables
     */
    const monthSelector = document.querySelector('section span');
    const todayWeekDay = document.querySelector('.date .day');
    const todayDateAndMonth = document.querySelector('.date .date-month');
    const todayYear = document.querySelector('.date .year');
    
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
            monthSelector.innerText = `Januari ${year}`;
            todayDateAndMonth.innerText = `${day} Januari`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;
            break;
        case 1:
            monthSelector.innerText = `Februari ${year}`;
            todayDateAndMonth.innerText = `${day} Februari`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;
            break;
        case 2:
            monthSelector.innerText = `Mars ${year}`;
            todayDateAndMonth.innerText = `${day} Mars`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;
            break;
        case 3:
            monthSelector.innerText = `April ${year}`;
            todayDateAndMonth.innerText = `${day} April`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;
            break;
        case 4:
            monthSelector.innerText = `Maj ${year}`;
            todayDateAndMonth.innerText = `${day} Maj`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;
            break;
        case 5:
            monthSelector.innerText = `Juni ${year}`;
            todayDateAndMonth.innerText = `${day} Juni`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;
            break;
        case 6:
            monthSelector.innerText = `Juli ${year}`;
            todayDateAndMonth.innerText = `${day} Juli`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;
            break;
        case 7:
            monthSelector.innerText = `Augusti ${year}`;
            todayDateAndMonth.innerText = `${day} Augusti`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;
            break;
        case 8:
            monthSelector.innerText = `September ${year}`;
            todayDateAndMonth.innerText = `${day} September`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;
            break;
        case 9:
            monthSelector.innerText = `Oktober ${year}`;
            todayDateAndMonth.innerText = `${day} Oktober`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;
            break;
        case 10:
            monthSelector.innerText = `November ${year}`;
            todayDateAndMonth.innerText = `${day} November`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;
            break;
        case 11:
            monthSelector.innerText = `December ${year}`;
            todayDateAndMonth.innerText = `${day} December`;
            todayWeekDay.innerText = nameOfDay(weekday);
            todayYear.innerText = year;            
            break;
        default:
            monthSelector.innerText = `error`;
    }   
}

/**
 * Get the correct name of the day
 * @param {Number} weekday returned from date object. Convert to name. 
 */
function nameOfDay(weekday) {
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