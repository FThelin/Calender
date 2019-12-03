$(document).ready(() => {


    const addEventListeners = () => {
        $('.add').click(newTodo);
        $('.new-todo button:nth-child(1)').click(saveTodos);
        $('.new-todo button:nth-child(2)').click(closeForm);
    }

    today();
    generateDays(today().month);
    addEventListeners();
    showAmountOfTodos();
    showTodos();
    helgdagarAsyncAwait()
})


async function helgdagarAsyncAwait() {
    let year = today().year;
    console.log(today().year);

    try {
        const response = await fetch('https://api.dryg.net/dagar/v2.1/' + year + '');
        const data = await response.json();
        addHelgdagar(data.dagar)
    } catch (error) {
        console.error(error);
    }
}

function addHelgdagar(days) {
    let helgdagar;
    for (const day of days) {
        if (day.helgdag) {
            helgdagar = day.helgdag + " : " + day.datum;
            console.log(helgdagar);
        }
    }
    return helgdagar;
}
