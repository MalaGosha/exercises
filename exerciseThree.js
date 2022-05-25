const exThreeBtn = document.getElementById("exThreeBtn");

const generateHTMLThree = (v, e) => {
    let exThree = document.getElementById("exThree");
    let innerHTML = exThree.innerHTML;
    exThree.innerHTML = innerHTML + `
    <div>${v} parzysty wyraz z ciągu Fibonacciego to: ${e}.</div>`
}

const exerciseThree = () => {
    let q = 1;
    let w = 0;
    let e = 0;
    let v = 1;
    for (let i = 0; ; i++) {
        e = q + w;
        w = q;
        q = e;
        if (e % 2 === 0) {
            console.log(`${v} parzysty wyraz z ciągu Fibonacciego to: ${e}`);
            generateHTMLThree(v,e);
            v++;
            if (v === 11) {
                break;
            }
        }
    }
}

const hideButtonExThree = () => {
    exThreeBtn.style.display = "none";
}

exThreeBtn.addEventListener("click", () => {
    exerciseThree();
    hideButtonExThree();
});