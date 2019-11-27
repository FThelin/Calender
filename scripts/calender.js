function generateDays() {
    let jan, mar, may, jul, aug, okt, dec;
    jan = mar = may = jul = aug = okt = dec = 31;

    for(let i = 1; i < 32 ; i++){
        days =  `<div id="button-${i}">${i}</div>`;
        const x = document.querySelector('.calender');

        x.innerHTML += days;
    }    
}