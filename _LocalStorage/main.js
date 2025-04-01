const form = document.forms.numForm;
const input = form.elements.num;

const loadBtn = document.querySelector(".load");
const saveBtn = document.querySelector(".save");

const list = document.querySelector(".numberList");
let numbers = [];

const localStorageKey = "numbers";

form.onsubmit = (e) => {
    e.preventDefault();

    const val = input.value;

    numbers.push(val);
    printNumber(val);
}
function printNumber(num) {
    list.innerHTML += num + ", ";
}

function save() {
    localStorage.setItem(localStorageKey, JSON.stringify(numbers));
}
function load() {
    numbers = JSON.parse(localStorage.getItem(localStorageKey)) || [];

    list.innerHTML = "";
    for (const i of numbers) {
        printNumber(i);
    }
}

load();

saveBtn.onclick = save;
loadBtn.onclick = load;