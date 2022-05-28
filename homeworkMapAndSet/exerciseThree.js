const exThreeBtn = document.getElementById('exThreeBtn');
const exThreeText = document.getElementById('exThree');


let map = new Map();
map.set("name", "john");
let keys = map.keys();
let newArray = Array.from(keys);
newArray.push("more");

console.log(`Elementami nowej tablicy są: ${newArray}`)


exThreeBtn.addEventListener('click', () => {
    exThreeText.innerHTML = "let newArray = Array.from(keys)";
});