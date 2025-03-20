// [export] allows to import item from other modules

let admin = {
    login: "super",
    password: "1"
};
/*export*/ const id = 345;

/*export*/ function getRandom(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

/*export*/ class User {
    constructor(login) {
        this.login = login;
    }

    print() {
        console.log("User login:", this.login);
    }
}

export { id, getRandom, User };