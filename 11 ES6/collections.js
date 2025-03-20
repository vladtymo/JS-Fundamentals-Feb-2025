// -=-=-=-=-=-=-=- collections -=-=-=-=-=-=-=-
// ------ simple array
let arr = [1, 4, 6, 7, 4];
arr[2] = 90;

console.log(new Set(arr));

// ------ Set - list of the unique elements
const set = new Set();

set.add("red");
set.add("green");
set.add("blue");

// ignored items:
set.add("blue");
set.add("red");
set.add("red");

console.log("Size:", set.size); // 3

if (!set.has("white"))
    set.add("white");
else
    set.delete("white");

console.log(set);

for (const i of set) {
    console.log(i);
}

set.clear();
console.log("Size:", set.size); // 0

// Map / Dictionary - list of pairs (key + value)
const map = new Map();

// key must be unique
map.set("UA", "Ukraine");
map.set("IT", "Italy");
map.set("DE", "Germany");

console.log(map);

map.set("UA", "Glory to Ukraine!");
console.log(map.get("UA"));

map.delete("DE");

if (!map.has("DE"))
    console.log("DE does not exists!");

console.log("Keys:", map.keys());
console.log("Values:", map.values());
console.log("Entries:", map.entries());

console.log("Size: ", map.size); // 2
for (const [key, value] of map) {

    // console.log(pair[0]); // key
    // console.log(pair[1]); // value
    console.log(`Pair: ${key} <> ${value}`);
}

// create collection of the cars with car number as a key

const cars = new Map([
    ["AA1212BK", { model: "VW Passat", year: 2015, color: 'Gray' }],
    ["|777|", { model: "Audi A8", year: 2011, color: 'Red' }],
    ["AC7878AA", { model: "Toyota Camry", year: 2022, color: 'White' }]
]);

// cars.set("AA1212BK", { model: "VW Passat", year: 2015, color: 'Gray' });
// cars.set("|777|", { model: "Audi A8", year: 2011, color: 'Red' });
// cars.set("AC7878AA", { model: "Toyota Camry", year: 2022, color: 'White' });

const { model, color } = cars.get("|777|");

console.log("Model: " + model + " color: " + color);
