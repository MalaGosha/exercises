const exTwoBtn = document.getElementById('exTwoBtn');
const exTwoText = document.getElementById('exTwo');
let arrayValues = ["kierowano", "korowanie", "rokowanie", "las", "SAL", "era"];

const showUniqueElements = (arrayValues) => {
    map = new Map()
    arrayValues.forEach(value => {
        let sortCharArray = value.split('').sort();
        let key = sortCharArray.toString().toLowerCase();
        let keys = Array.from(map.keys());
        if (!keys.includes(key)) {
            map.set(key, value);
        }
    })
    let values = Array.from(map.values());
    console.log(`Unikatowe wartości, które nie są anagramami to: ${values}`);
    return values;
}

exTwoBtn.addEventListener('click', () => {
    exTwoText.innerText = showUniqueElements(arrayValues).toString();
});
