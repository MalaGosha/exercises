const exFourBtn = document.getElementById("exFourBtn");

const generateHTMLFour = (day) => {
    let exFour = document.getElementById("exFour");
    let innerHTML = exFour.innerHTML;
    exFour.innerHTML = innerHTML + `
    <div>${day}.</div>`
}

const exerciseFour = () => {
    let r = 0;
    let day;
    while (r < 7) {
        switch (r) {
            case 0:
                day = "1. Monday";
                break;
            case 1:
                day = "2. Tuesday";
                break;
            case 2:
                day = "3. Wednesday";
                break;
            case 3:
                day = "4. Thursday";
                break;
            case 4:
                day = "5. Friday";
                break;
            case 5:
                day = "6. Saturday";
                break;
            case 6:
                day = "7. Sunday";
                break;
        }
        console.log(day);
        generateHTMLFour(day);
        r++;
    }
}

const hideButtonExFour = () => {
    exFourBtn.style.display = "none";
}

exFourBtn.addEventListener("click", () => {
    exerciseFour();
    hideButtonExFour();
});