// ------------ Complex Types

function getGeolocation(): [number, number] {
    // ... getting geolocation
    return [10, 44];
}

const [lat, lon] = getGeolocation();

console.log(lat + ":" + lon);

// --------- enums

// const EasyLevel = 1;
// const MidLevel = 2;
// const HardLevel = 3;

enum Level { Easy = 1, Mid, Hard }

console.log(`${Level[Level.Easy]} - ${Level.Easy}`);
console.log(`${Level[Level.Mid]} - ${Level.Mid}`);
console.log(`${Level[Level.Hard]} - ${Level.Hard}`);

let input: Level = Number(prompt("Enter level:"));

switch (input) {
    case Level.Easy:
        console.log("Easy level");
        break;
    case Level.Mid:
        console.log("Mid level");
        break;
    case Level.Hard:
        console.log("Hard level");
        break;
}

let id: string | number = 45550;

function exportData(user: User | Admin) {
    if (user instanceof Admin) {
        // specific logic for Admin
    }
    // general logic
}

// ------------ Interfaces
interface IExportable {
    export(): void; // required
    size?: number;  // optional
}

class User implements IExportable {
    public id: number;
    public login: string;

    constructor(id: number, login: string) {
        this.id = id;
        this.login = login;
    }

    export(): void {
        console.log("Exporting user data...")
    }
}

class Admin implements IExportable {
    // public id: number;
    // public login: string;
    // public role: string;

    // constructor(id: number, login: string, role: string) {
    //     this.id = id;
    //     this.login = login;
    //     this.role = role;
    // }
    // ---- or using inline initialization
    constructor(public id: number, public login: string, private role: string) { }

    export(): void {
        console.log("Exporting admin data...")
    }
}

// ------------ override
class Manager extends Admin {

    override export() {
        console.log("Exporting manager data...")
    }

    manage() {
        console.log("managing...")
    }
}

function saveAdJson(data: IExportable): void {
    data.export();
}

let admin = new Admin(1000, "Yura", "SuperAdmin");
let user = new User(1223, "Vlad");
let manager: ISavable = {
    save() {

    },
    export() {

    }
}

interface ISavable extends IExportable {
    export(): void;
    save(): void;
}

saveAdJson(admin);
saveAdJson(user);
saveAdJson(manager);

// ------------- Type alias
type ArifFunc = (a: number, b: number) => number;

function showResult(n1: number, n2: number, action: ArifFunc): void {
    const res = action(n1, n2);
    console.log("Result:", res);
}

showResult(10, 33, (a, b) => a * b);

// abstract classes
abstract class Figure {
    constructor(private _name: string, public symbol: string = '#') { }

    set name(value: string) {
        if (!value || value.trim() === '')
            console.log("Invalid name!");
        else
            this._name = value;
    }

    abstract getArea(): number;
    abstract print(): void;
    abstract get perimeter(): number;
}

class Rectangle extends Figure { // we cannot exdent more than 1 class, but can implement multiple interfaces

    constructor(_name: string,
        private w: number,
        private h: number,
        symbol: string = '#') {

        super(_name, symbol);
    }

    getArea(): number {
        return this.w * this.h;
    }
    get perimeter(): number {
        return this.w * 2 + this.h * 2;
    }
    print(): void {
        let s = '';
        for (let y = 0; y < this.h; y++) {
            for (let x = 0; x < this.w; x++) {
                s += this.symbol;
            }
            s += "\n";
        }
        console.log(s);

    }
}

const f = new Rectangle("Super Rect", 23, 10);

console.log("Reatangle: S=", f.getArea(), " P=", f.perimeter);
f.print();