// 1 - strong typing language

// --------- data types: number string bool undefined null void never any=JS

let price: number = 23500;

price = 500.90;
// price = "120UAH";

const email: string = "Vlad";
console.log(email.toUpperCase());

let colors: string[] = ["red", "green", "blue"];

for (const i of colors) {
    i.toUpperCase();
}

let element: any = 10;
element = "argaregae";
element = [34, 34, 3];

// --------- functions ---------
function add(a: number, b: number): number {
    return a + b;
}

let result: number = add(45, 5);

// void - function does not return any value
function showRandomValue(): void {
    console.log(`Value: ${Math.floor(Math.random() * 100)}`);
}

showRandomValue();

function startGame(): never {
    while (true) {
        //....
    }
}

function generateError(): never {
    throw new Error("Some error!");
}

// ----------- objects -----------
let account: { login: string, password: string, id: number } = {
    id: 23,
    password: "Qwer",
    login: "vladnaz"
};

// ----------- tuples -----------
const hero: [number, number, string] = [10, -1, "Angry Boss"];

hero[0] = 11;
hero[1] -= 2;
console.log(hero[2]);

const [x, y, title] = hero;

console.log(x, y, title);

// ----------- enum -----------
const LEFT = 1;
const RIGHT = 2;

enum Direction {
    left = 1, right, up, down, neutral = 10
}

// 1 - left, 2 - right, 3 - down, 4 - up
const direction: Direction = Direction.left

function reverseHero(direction: number) {
    switch (direction) {
        case Direction.left:
            console.log("Go right");
            break;
        case Direction.right:
            console.log("Go left");
            break;
        case Direction.up:
            console.log("Go up");
            break;
        case Direction.down:
            console.log("Go down");
            break;
    }
}

// ------------- union type -------------
let userId: string | number = 12003;
userId = "drgar-arehes-rerer";
// userId = true;

const ids: (string | number)[] = [4, 5, "first", 34];

let order: string | null = null;
order = "Order #3355";

// ------------- type aliases -------------
type Item = string | number | null;

let main: Item;

let items: Item[] = [34, 1, -1, "faewg", null];

// type User = { login: string, password: string, id: number };
// let active: User | null = null;
