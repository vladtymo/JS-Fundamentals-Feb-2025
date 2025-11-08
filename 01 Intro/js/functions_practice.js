// task: write functio to sort array
function sortArray(arr, order = "asc") {
  let sorted = arr.slice().sort((a, b) => a - b);

  if (order === "desc") {
    sorted = sorted.reverse();
  }

  return sorted;
}

// 10  30 240

let numbers = [30, 10, 240, 55, 15, 358, 22];

console.log(sortArray(numbers));
console.log(sortArray(numbers, "desc"));
console.log(sortArray(numbers));

console.log("Original: ", numbers);

// task 1 - написати функцію яка видаляє останній (перший) елемент з масиву
// додаток: функція приймає індекс елемента який потрібно видалити

// написати фукнцію яка приймає кількість дужок та виводить їх у вигляді: (((()))) - число 4

function showBrackets(count) {
  let line = "";
  for (let i = 0; i < count; i++) {
    line += "(";
  }
  for (let i = 0; i < count; i++) {
    line += ")";
  }
  console.log(line);
}

function showBracketsPlus(count) {
  let line = "";
  line += "(".repeat(count);
  line += ")".repeat(count);
  console.log(line);
}

showBrackets(6);
showBracketsPlus(6);
