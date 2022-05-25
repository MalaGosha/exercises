const exFiveBtn = document.getElementById("exFiveBtn");

const generateHTMLFive = (t, y) => {
    let exFive = document.getElementById("exFive");
    let innerHTML = exFive.innerHTML;
    exFive.innerHTML = innerHTML + `
    <div>${t} - ${y}.</div>`
}

const exerciseFive = () => {
    let t = 1;
    for (let y = 5; y > 0; y--) {
        console.log(t + " - " + y);
        generateHTMLFive(t, y);
        if (t < 3) {
            t++;
        }
    }
}

const hideButtonExFive = () => {
    exFiveBtn.style.display = "none";
}

exFiveBtn.addEventListener("click", () => {
    exerciseFive();
    hideButtonExFive();
});
