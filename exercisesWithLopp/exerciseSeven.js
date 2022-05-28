const exSevenBtn = document.getElementById("exSevenBtn");
let whiteBal = "white";
let redBal = "red";
let arrayAllBalls = [];
let arrayUsedBalls = [];
let number;
let colorOfBall;
let arrayRedColors = [];
let arrayWhiteBalls = [];

const generateHTMLSeven = (introduction, number, text) => {
    let exSeven = document.getElementById("exSeven");
    let innerHTML = exSeven.innerHTML;
    exSeven.innerHTML = innerHTML + `
    <div>${introduction} ${number} ${text}</div>`
}

const getArrayAllBalls = () => {
    for (let i = 0; i < 20; i++) {
        arrayAllBalls.push(whiteBal, redBal);
    }
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * 40) + 1;
}

const showResultOfDraw = () => {
    getArrayAllBalls();
    while (arrayUsedBalls.length < 10) {
        number = getRandomNumber();

        if (!arrayUsedBalls.includes(number)) {
            console.log(`Losowanie nr ${(arrayUsedBalls.length + 1)}`);
            generateHTMLSeven("Losowanie nr ", arrayUsedBalls.length + 1, "")
            arrayUsedBalls.push(number);
            colorOfBall = arrayAllBalls[number];

            if (colorOfBall === "white") {
                arrayWhiteBalls.push(colorOfBall);
                if (arrayRedColors.length === 3 && arrayWhiteBalls.length === 2) {
                    console.log("Biały, Czerwony, Czerwony, Czerwony, Biały");
                    generateHTMLSeven("", "", " wypadły kolejno wcześniej kolory: biały, czerwony, czerwony, czerwony a teraz biały.");
                    arrayWhiteBalls.length = 1;
                    arrayRedColors = [];
                } else if (arrayWhiteBalls.length === 2) {
                    arrayWhiteBalls.length = 1;
                    arrayRedColors = [];
                }

            } else if (colorOfBall === "red") {
                console.log(`W losowaniu nr ${(arrayUsedBalls.length)} wypadł kolor czerwony.`);
                generateHTMLSeven("", "", " wypadł kolor czerwony.");
                if (arrayWhiteBalls.length === 1) {
                    arrayRedColors.push(colorOfBall);
                    if (arrayRedColors.length === 4) {
                        arrayRedColors = [];
                    }
                }
            }
        }
    }
}

const clearPreviousDraw = () =>  {
    let exSeven = document.getElementById("exSeven");
    exSeven.innerHTML = "";
}

const clearArrays = () => {
    arrayAllBalls = [];
    arrayUsedBalls = [];
    arrayRedColors = [];
    arrayWhiteBalls = [];
}

exSevenBtn.addEventListener("click", () => {
    clearPreviousDraw();
    showResultOfDraw();
    clearArrays();
});

// OTHER VERSIONS TO IMPROVED:
/*
//VERSION 1

let resultArray = [];

let arrayColorsOfBalls = [];
const requireArray = ["withe","red","red","red","withe"]
const showResultOfDraw2 = () => {
    getArrayAllBalls();
    while (arrayUsedBalls.length < 10) {
        number = getRandomNumber();

        if (!arrayUsedBalls.includes(number)) {
            console.log(`Losowanie nr ${(arrayUsedBalls.length + 1)}`);
            generateHTMLSeven("Losowanie nr ", arrayUsedBalls.length + 1, "")
            arrayUsedBalls.push(number);
            colorOfBall = arrayAllBalls[number];
            arrayColorsOfBalls.push(colorOfBall);

            if (colorOfBall === "red") {
                console.log("red");
            }

            for (let i = 0; i < arrayColorsOfBalls.length; i++) {
                if (arrayColorsOfBalls[i] === requireArray[i]) {
                    console.log("colors of balls  " + arrayColorsOfBalls[i]);
                    console.log("colors required  " + requireArray[i]);
                    resultArray.push(requireArray[i]);
                    console.log("result array" + resultArray)
                    if (resultArray.length === 5){
                        console.log("mamy to")
                    }
                }
            }
        }
    }
}
showResultOfDraw2();*/



/*
VERSION 2

let arrayUsedColorBalls = [];
const getArrayUsedBalls = () => {
    getArrayAllBalls();

    while (arrayUsedBalls.length < 10) {
        number = getRandomNumber();

        if (!arrayUsedBalls.includes(number)) {
            console.log(`Losowanie nr ${(arrayUsedBalls.length + 1)}`)
            arrayUsedBalls.push(number);
            colorOfBall = arrayAllBalls[number];
            arrayUsedColorBalls.push(colorOfBall);

            if (colorOfBall === "red"){
                console.log(`W losowaniu nr ${(arrayUsedBalls.length)} wypadł kolor czerwony.`);
            }

            let stringColors = arrayUsedColorBalls.toString();
            let regex1 = "white,red,red,red,white";
            stringColors = stringColors.search(regex1);
            if (stringColors >=0) {
                console.log("biały, czerwony, czerwony, czerwony, biały.");
            }
        }
    }
}


getArrayUsedBalls();*/

