class User {

    #name; // encapsulation

    constructor(name, surname, age) {
        this.#name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return this.#name + " " + this.surname;
    }

    // set / get
    get fullName() {
        return this.#name + " " + this.surname;
    }
    get isAdult() {
        return this.age >= 18;
    }

    set name(value) {
        // data validation
        if (/[A-Z][a-z]+/.test(value))
            this.#name = value;
        else
            console.warn("Invalid name!");
    }
}

const user = new User("Vlad", "Tymo", 18);

//user.#user = "...";
user.name = "Vlad"; // yes
user.name = "igor"; // no

console.log(user.getFullName());
console.log(user.fullName);
console.log(user.isAdult);
