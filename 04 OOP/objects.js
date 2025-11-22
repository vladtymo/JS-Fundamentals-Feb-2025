// -=-=-=-=-=-=- objects -=-=-=-=-=-=-

let number = 20;
let client = "Vlad Tymo";
let quantity = 4;
let totalPrice = 3400;
//...

// function showOrder(num, client,,,, ) {
// }

// -------- create an object
// 1 - using new
//var order = new Object();
var order = {};

order.number = 10;
order.client = "Bob";
order.discount = 15;

// 2 - using {}
var order = {
  // initi with properties
  number: 10,
  discount: 15,
  client: "John Smith",
  complete: false,
  price: 1200,
};

order.totalPrice *= 0.9; // apply 10% discount

console.log("Order status:", order.complete ? "Done" : "In Progress");

console.log("Order type:", typeof order); // object

// -- add new properties
order.date = "20/1/2023";
order.products = ["Apple", "Cherry", "Banana", "Pineapple"];
order.address = {
  city: "Rivne",
  street: "Soborna",
  builing: "5a",
};

console.log("Shipping street:", order.address.street);

let car = {
  model: "Audi A6",
  year: 2007,
  color: "Red",
  engine: {
    power: 240,
    volume: 3.0,
    type: "TSI",
  },
  sto: ["10.10.2019", "10.10.2020", "04.10.2022"],
};

car.sto.push("26.12.2023");
console.log(car.engine.type);

// -- override values
order.price += 30;

// -- read object properties
// 1 - object.property
// 2 - object["property"]

console.log(`Order info: ${order["number"]} at ${order["date"]}`);
console.log(
  `[${order.number}] ${order.client} ordered ${order.products.length} items!`
);
console.log(
  `Client address: ${order.address.city}, ${order.address.street}...`
);

order.speed = 100;
// -- delete existin prop
delete order.speed;

console.log("Value:", order.bonus);
console.log("Value:", order.speed); // undefined

// -- using object as a parameters
function showOrder(order) {
  console.log("Order:", order.number);
  console.log("Products:", order.products);

  //console.log("this in function scope:", this); // window, undefined in strict mode
}

function addNewItem(order, item) {
  order.products.push(item);
}

addNewItem(order, "Lemon");
showOrder(order);

// -- create object array
const coord = { x: 4, y: 9, z: 12 };

const coords = [
  { x: 1, y: 4 },
  { x: 9, y: 7 },
  { x: 0, y: 8 },
];

console.log("X2:", coords[2].y); // 8

// -- get all object keys
console.warn("Order properties:");

for (const key in order) {
  console.log(key + ": ... " + order[key]);
}

console.log("Has speed property:", order.hasOwnProperty("number"));
console.log("Keys:", Object.keys(order));
console.log("Keys:", Object.values(order));

// ------------ methods = function inside object
const product = {
  // proeprties
  name: "Radeon RX 6600",
  price: 11499,
  rating: 4.8,
  inStock: true,

  // object methods
  applyDiscount: function (value) {
    // [this] - reference to this object
    this.price -= (this.price / 100) * value;

    // [this] = [product]
    console.log("this in object scope:", this);
  },
  show() {
    console.log(`Name: ${this.name} Price: ${this.price}$`);
  },
};

// [this] - context-related keyword
console.log("this in global scope:", this); // window object

// the same funcs
// - alert();
// - window.alert();
// - this.alert();

product.show();
product.applyDiscount(15); // -15%
product.show();

// --- Example

let product1 = {
  name: "Iphone 14",
  price: 999,
};
let product2 = {
  name: "Samsung S23",
  price: 899,
};

let cart = [product1, product2];

console.log("Price: ", cart[1].price, "$");

// ---------------------------- classes

class Product {
  constructor(name, price, rating = null) {
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.inStock = true;
  }
  // object methods
  applyDiscount(value) {
    // [this] - reference to this object
    this.price -= (this.price / 100) * value;

    // [this] = [product]
    console.log("this in object scope:", this);
  }
  show() {
    console.log(`Name: ${this.name} Price: ${this.price}$`);
  }
}

let myProduct1 = new Product("Google Pixel 7", 799, 4.5);
myProduct1.show();
myProduct1.applyDiscount(10);
myProduct1.show();

let myProduct2 = new Product("Sony Xperia 1", 899);
let myProduct3 = new Product("Nokia 3310", 59, 4.0);
let myProduct4 = new Product("Huawei P50", 4500);

myProduct3.show();
