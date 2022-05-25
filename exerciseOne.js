const exOneBtn = document.getElementById("exOneBtn");
const exOneABtn = document.getElementById("exOneABtn");
const exOneBBtn = document.getElementById("exOneBBtn");

const generateHTML = (i, resultExOne) => {
    let exOne = document.getElementById("exOne");
    let innerHTML = exOne.innerHTML;
    exOne.innerHTML = innerHTML + `
    <div>Wartość ${i}! wynosi ${resultExOne}.</div>`
}

const generateHTMLA = (i, resultExOne) => {
    let exOneA = document.getElementById("exOneA");
    let innerHTML = exOneA.innerHTML;
    exOneA.innerHTML = innerHTML + `
    <div>Wartość ${i}! wynosi ${resultExOne}.</div>`
}

const generateHTMLB = (i, resultExOne) => {
    let exOneB = document.getElementById("exOneB");
    let innerHTML = exOneB.innerHTML;
    exOneB.innerHTML = innerHTML + `
    <div>Wartość ${i}! wynosi ${resultExOne}.</div>`
}

const exerciseOne = () => {
    let array = [];
    let resultExOne = 1;

    for (let i = 1; i < 11; i++) {
        resultExOne = String(resultExOne * i);
        console.log(`Wartość ${i}! wynosi ${resultExOne}.`);
        array.push(resultExOne);
        generateHTML(i, resultExOne);
    }
}

const exerciseOneA = () => {
    let j = 0;
    let array = [];
    let resultExOneA = 1;

    while (j < 10) {
        resultExOneA = String(resultExOneA * (j + 1));
        console.log(`Wartość ${(j + 1)}! wynosi ${resultExOneA}.`);
        array.push(resultExOneA);
        generateHTMLA(j, resultExOneA);
        j++;
    }
}

const exerciseOneB = () => {
    let p = 0;
    let array = [];
    let resultExOneB = 1;

    do {
        resultExOneB = String(resultExOneB * (p + 1));
        console.log(`Wartość ${(p + 1)}! wynosi ${resultExOneB}.`);
        array.push(resultExOneB);
        generateHTMLB(p, resultExOneB);
        p++;
    } while (p < 10);
}

const hideButtonExOne = () => {
    exOneBtn.style.display = "none";
}

const hideButtonExOneA = () => {
    exOneABtn.style.display = "none";
}

const hideButtonExOneB = () => {
    exOneBBtn.style.display = "none";
}

exOneBtn.addEventListener("click", () =>{
    exerciseOne();
    hideButtonExOne();
});
exOneABtn.addEventListener("click", () => {
    exerciseOneA();
    hideButtonExOneA();
});
exOneBBtn.addEventListener("click", () => {
    exerciseOneB();
    hideButtonExOneB();
});