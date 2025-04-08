// ------------ Complex Types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getGeolocation() {
    // ... getting geolocation
    return [10, 44];
}
var _a = getGeolocation(), lat = _a[0], lon = _a[1];
console.log(lat + ":" + lon);
// --------- enums
// const EasyLevel = 1;
// const MidLevel = 2;
// const HardLevel = 3;
var Level;
(function (Level) {
    Level[Level["Easy"] = 1] = "Easy";
    Level[Level["Mid"] = 2] = "Mid";
    Level[Level["Hard"] = 3] = "Hard";
})(Level || (Level = {}));
console.log("".concat(Level[Level.Easy], " - ").concat(Level.Easy));
console.log("".concat(Level[Level.Mid], " - ").concat(Level.Mid));
console.log("".concat(Level[Level.Hard], " - ").concat(Level.Hard));
var input = Number(prompt("Enter level:"));
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
var id = 45550;
function exportData(user) {
    if (user instanceof Admin) {
        // specific logic for Admin
    }
    // general logic
}
var User = /** @class */ (function () {
    function User(id, login) {
        this.id = id;
        this.login = login;
    }
    User.prototype.export = function () {
        console.log("Exporting user data...");
    };
    return User;
}());
var Admin = /** @class */ (function () {
    // public id: number;
    // public login: string;
    // public role: string;
    // constructor(id: number, login: string, role: string) {
    //     this.id = id;
    //     this.login = login;
    //     this.role = role;
    // }
    // ---- or using inline initialization
    function Admin(id, login, role) {
        this.id = id;
        this.login = login;
        this.role = role;
    }
    Admin.prototype.export = function () {
        console.log("Exporting admin data...");
    };
    return Admin;
}());
// ------------ override
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.export = function () {
        console.log("Exporting manager data...");
    };
    Manager.prototype.manage = function () {
        console.log("managing...");
    };
    return Manager;
}(Admin));
function saveAdJson(data) {
    data.export();
}
var admin = new Admin(1000, "Yura", "SuperAdmin");
var user = new User(1223, "Vlad");
var manager = {
    save: function () {
    },
    export: function () {
    }
};
saveAdJson(admin);
saveAdJson(user);
saveAdJson(manager);
function showResult(n1, n2, action) {
    var res = action(n1, n2);
    console.log("Result:", res);
}
showResult(10, 33, function (a, b) { return a * b; });
// abstract classes
var Figure = /** @class */ (function () {
    function Figure(_name, symbol) {
        if (symbol === void 0) { symbol = '#'; }
        this._name = _name;
        this.symbol = symbol;
    }
    Object.defineProperty(Figure.prototype, "name", {
        set: function (value) {
            if (!value || value.trim() === '')
                console.log("Invalid name!");
            else
                this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Figure;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(_name, w, h, symbol) {
        if (symbol === void 0) { symbol = '#'; }
        var _this = _super.call(this, _name, symbol) || this;
        _this.w = w;
        _this.h = h;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.w * this.h;
    };
    Object.defineProperty(Rectangle.prototype, "perimeter", {
        get: function () {
            return this.w * 2 + this.h * 2;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.print = function () {
        var s = '';
        for (var y = 0; y < this.h; y++) {
            for (var x = 0; x < this.w; x++) {
                s += this.symbol;
            }
            s += "\n";
        }
        console.log(s);
    };
    return Rectangle;
}(Figure));
var f = new Rectangle("Super Rect", 23, 10);
console.log("Reatangle: S=", f.getArea(), " P=", f.perimeter);
f.print();
