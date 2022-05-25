const exTwoBtn = document.getElementById("exTwoBtn");

const generateHTMLTwo = (i, c) => {
    let exTwo = document.getElementById("exTwo");
    let innerHTML = exTwo.innerHTML;
    exTwo.innerHTML = innerHTML + `
    <div>Ciąg Fibonacciego dla wyrazu nr ${i} to: ${c}.</div>`
}

const exerciseTwo = () => {
    let a = 1;
    let b = 0;
    let c = 0;
    for (let i = 1; i < 11; i++) {
        c = a + b;
        b = a;
        a = c;
        console.log(`Ciąg Fibonacciego dla wyrazu nr ${i} to: ${c}.`);
        generateHTMLTwo(i, c);
    }
}

const hideButtonExTwo = () => {
    exTwoBtn.style.display = "none";
}

exTwoBtn.addEventListener("click", () => {
    exerciseTwo();
    hideButtonExTwo();
});