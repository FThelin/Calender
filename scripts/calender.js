const generateDays = () => {
    let jan, mar, may, jul, aug, okt, dec;
    jan = mar = may = jul = aug = okt = dec = 31;

    let html = "";

    for(let i = 1; i < 32 ; i++){
        days = `<div id="button-${i}">${i}</div>`;
        html += days
        $('.calender').html(html);
    }    
}