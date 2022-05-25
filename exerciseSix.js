const exSixBtn = document.getElementById("exSixBtn");

const generateHTMLSix = (cubeOne, cubeTwo, result) => {
    let exSix = document.getElementById("exSix");
    let innerHTML = exSix.innerHTML;
    exSix.innerHTML = innerHTML + `
    <div>Rzut pierwszą kością o wartości ${cubeOne} oraz drugą kością o wartości ${cubeTwo} dają łaczny wynik ${result}, który jest cyfrą/liczbą parzystą</div>`
}

const exerciseSix = () => {
    let cubeSize = 6;
    for (let cubeOne = 1; cubeOne <= cubeSize; cubeOne++){
        for (let cubeTwo = 1; cubeTwo <= cubeSize; cubeTwo++){
            let result = cubeOne + cubeTwo;
            if (result %2 === 0){
                console.log(`Rzut pierwszą kością o wartości ${cubeOne} oraz drugą kością o wartości ${cubeTwo} dają łaczny wynik ${result}, który jest cyfrą/liczbą parzystą`)
                generateHTMLSix(cubeOne, cubeTwo, result);
            }
        }
    }
}

const hideButtonExSix = () => {
    exSixBtn.style.display = "none";
}

exSixBtn.addEventListener("click", () => {
    exerciseSix();
    hideButtonExSix();
});