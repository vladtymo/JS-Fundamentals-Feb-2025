// 1 - strong typing language
// --------- data types: number string bool undefined null void never any=JS
var price = 23500;
price = 500.90;
// price = "120UAH";
var email = "Vlad";
console.log(email.toUpperCase());
var colors = ["red", "green", "blue"];
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var i = colors_1[_i];
    i.toUpperCase();
}
var element = 10;
element = "argaregae";
element = [34, 34, 3];
// --------- functions ---------
function add(a, b) {
    return a + b;
}
var result = add(45, 5);
// void - function does not return any value
function showRandomValue() {
    console.log("Value: ".concat(Math.floor(Math.random() * 100)));
}
showRandomValue();
function startGame() {
    while (true) {
        //....
    }
}
function generateError() {
    throw new Error("Some error!");
}
// ----------- objects -----------
var account = {
    id: 23,
    password: "Qwer",
    login: "vladnaz"
};
// ----------- tuples -----------
var hero = [10, -1, "Angry Boss"];
hero[0] = 11;
hero[1] -= 2;
console.log(hero[2]);
var x = hero[0], y = hero[1], title = hero[2];
console.log(x, y, title);
// ----------- enum -----------
var LEFT = 1;
var RIGHT = 2;
var Direction;
(function (Direction) {
    Direction[Direction["left"] = 1] = "left";
    Direction[Direction["right"] = 2] = "right";
    Direction[Direction["up"] = 3] = "up";
    Direction[Direction["down"] = 4] = "down";
    Direction[Direction["neutral"] = 10] = "neutral";
})(Direction || (Direction = {}));
// 1 - left, 2 - right, 3 - down, 4 - up
var direction = Direction.left;
function reverseHero(direction) {
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
var userId = 12003;
userId = "drgar-arehes-rerer";
// userId = true;
var ids = [4, 5, "first", 34];
var order = null;
order = "Order #3355";
var main;
var items = [34, 1, -1, "faewg", null];
var active = null;
