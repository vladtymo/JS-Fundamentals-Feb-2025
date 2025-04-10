// ---------- Function Overloading

// takes two numbers and return ariphmetic result
function add(x: number, y: number): number;                     // 3 + 5 = 8
function add(x: string, y: string): string;                     // "red" + "blue" = "red blue"
function add(x: string, y: string, separator: string): string;  // "red" + "blue" + "-" = "red-blue"

function add(x: any, y: any, separator?: string): any {

    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string' && separator) {
        return x + separator + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x + ' ' + y;
    }

    throw new TypeError();
}

console.log(add(3, 5));
console.log(add("red", "blue"));
console.log(add("red", "blue", "-"));

// function random(min: number, max: number): number; // 10, 20 = 17
// function random(min: string, max: string): string; // 'a', 'f' = 'c'

// ---------- Generics
// element<TypeName>

// ------ generic function
function pushToMiddle<ElementType>(arr: ElementType[], item: ElementType): ElementType[] {

    let midIndex = arr.length / 2;
    const firstHalf = arr.slice(0, midIndex);
    const secondHalf = arr.slice(midIndex, arr.length);

    return [...firstHalf, item, ...secondHalf];
}

console.log(pushToMiddle<number>([1, 2, 3, 4, 5, 6, 7], 999));
console.log(pushToMiddle<string>(["A", "B", "C", "D"], "FFF"));

// ------ generic class
// generic type limits: type extends {...}
class Chain<NodeT extends { title: string }> {
    private items: NodeT[];

    constructor() {
        this.items = [];
    }

    get size(): number {
        return this.items.length;
    }

    addNode(item: NodeT) {

        console.log("Going to add " + item.title + " item!");

        this.items.push(item);
    }
    removeNode(item: NodeT) {

        let index = this.items.indexOf(item);
        if (index !== -1)
            this.items.splice(index, 1);
    }

    print(): void {
        for (let i of this.items) {
            console.log(i.title);
        }
    }
}

class Book {
    public title: string = "Blabla Title";
}

let library = new Chain<Book>();

// let chain = new Chain<string>();
// let koefs = new Chain<number>();

// koefs.addNode(4.4);
// koefs.addNode(13.5);
// koefs.removeNode(4.2); // ignore

// koefs.print();

// chain.addNode("hello");
// chain.addNode("work");
// chain.removeNode("work");

// chain.print();

// ------ generic interface
interface IPackage<TData> {
    size: number; // bytes
    name: string;
    protocol?: string;
    url: string;

    clear(): void;
    send(data: TData): void;
    getData(): TData;
}

class Avatar implements IPackage<Avatar> {

    size: number;
    name: string;
    protocol?: string | undefined;
    url: string;

    constructor() {
        this.size = 0;
        this.name = "unknown";
        this.url = "https://localhost/";
    }
    send(data: Avatar): void {
        throw new Error("Method not implemented.");
    }
    getData(): Avatar {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
}

// ---------- Decorators
// @decoratorName
// class Test {

//     @decoratorName
//     test: any;

//     @decoratorName  
//     get Test(): any { return this.test; }

//     @decoratorName
//     constructor(test: any) {
//         this.test = test;
//     }

//     @decoratorName
//     print(): void {

//     }
// }

// -------------- class decorator
// type ClassDecorator = (value: Function, context: {
//   kind: "class"
//   name: string | undefined
//   addInitializer(initializer: () => void): void
// }) => Function | void

function WithDate(target: any, context: any): any {
    if (context.kind === "class") {
        target.prototype.date = new Date(); // create new property with date now
        // target.prototype.resetDate = () => {}
    }
}

@WithDate
class Order {
    public readonly id: number;
    //public readonly date: Date; // decorate already added this field
    client?: string

    constructor(id: number, client?: string) {
        this.id = id;
        //this.date = new Date();
        this.client = client;
    }

    showInfo(): void {
        console.log(`Order [${this.id}] created at ${(this as any).date.toDateString()} by ${this.client ?? "anonymous"}`);
    }
}

const order = new Order(122, "Vlad");
order.showInfo();

const order2 = new Order(333);
order2.showInfo();
