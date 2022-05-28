const exOneBtn = document.getElementById('exOneBtn');
const exOneText = document.getElementById('exOne');
const exOneABtn = document.getElementById('exOneABtn');
const exOneAText = document.getElementById('exOneA');
const exOneBBtn = document.getElementById('exOneBBtn');
const exOneBText = document.getElementById('exOneB');
const exOneCBtn = document.getElementById('exOneCBtn');
const exOneCText = document.getElementById('exOneC');
let arrayOfNames = ["Paweł", "anna", "Anna", "Paweł", "Paweł", "Grzegorz", "0", "Anna", "Anna123"];


// filter()
function uniqueValues(value, index, self) {
    return self.indexOf(value) === index;
}
let arrayUniqueValues = [];
arrayUniqueValues = arrayOfNames.filter(uniqueValues);
console.log(`Przy użyciu metody filter() otrzymamy unikalne wartości jak ${arrayUniqueValues}`);



// create Array from Set
const createArrayWithValues = setArray => {
    return Array.from(setArray);
}

//Set()
const showValuesUseSet = (arrayOfNames) => {
    let set = new Set(arrayOfNames);
    let arrayUniqueValues = createArrayWithValues(set);
    console.log(`Przy użyciu metody Set() otrzymamy unikalne wartości jak: ${arrayUniqueValues}`);
    return arrayUniqueValues;
}

// Set()
let setOfNickNames = new Set();
const checkBigChar = /^([A-Z]$)/;
const showNicks = (arrayOfNames) => {
    arrayOfNames.forEach(el => {
        let firstCharacter = el.charAt(0);
        if (checkBigChar.test(firstCharacter)) {
            setOfNickNames.add(el);
        }
    })
    let uniqueNickNames = createArrayWithValues(setOfNickNames);
    console.log(`Unikatowe nazwy to: ${uniqueNickNames}`);
    return uniqueNickNames;
}


// Set()
const checkDigit = /\d+/;
let setOfNames = new Set();
const showNames = (arrayOfNames) => {
    arrayOfNames.forEach(el => {
        let firstCharacter = el.charAt(0);
        if (checkBigChar.test(firstCharacter) && !checkDigit.test(el)) {
            setOfNames.add(el);
        }
    })
    let uniqueNames = createArrayWithValues(setOfNames);
    console.log(`Unikatowe imiona to: ${uniqueNames}`);
    return uniqueNames;
}


exOneBtn.addEventListener('click', () => {
    exOneText.innerText = arrayUniqueValues;
});

exOneABtn.addEventListener('click', () => {
    exOneAText.innerText = showValuesUseSet(arrayOfNames).toString();
});

exOneBBtn.addEventListener('click', () => {
    exOneBText.innerText = showNicks(arrayOfNames).toString();
});

exOneCBtn.addEventListener('click', () => {
    exOneCText.innerText = showNames(arrayOfNames).toString();
});