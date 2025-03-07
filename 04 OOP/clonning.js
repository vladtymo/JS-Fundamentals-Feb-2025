// -=-=-=-=-=-=-=- object copying -=-=-=-=-=-=-=-
let user = {
    login: "vtymos",
    roles: ["mentor", "teacher", "manager"],
    email: "exmaple@ukr.net",
    age: 18,
    isOnline: false,
    address: {
        city: "Rivne",
        street: "Soborna",
        building: "5a"
    }
};

// ---------- copy object reference
let refCopy = user;

user.roles.pop();
console.log("Copy roles: ", refCopy.roles);

//  ----------create shallow copy
function getShallowCopy(user) {
    return {
        login: user.login, // copy login value
        roles: user.roles, // copy array reference
        email: user.email,
        age: user.age,
        isOnline: user.isOnline,
        address: user.address
    }
    // or you can use assign() method
    return Object.assign({}, user);
}

let shallowCopy = getShallowCopy(user);
user.age += 10;
user.roles.push("admin");

console.log("Copy age: ", shallowCopy.age);
console.log("Copy roles: ", shallowCopy.roles);

// ---------- create deep copy
function getDeepCopy(user) {
    return {
        login: user.login,
        roles: user.roles.slice(),              // create new array 
        email: user.email,
        age: user.age,
        isOnline: user.isOnline,
        address: Object.assign({}, user.address) // create new object
    }

    // or you can use ...spread operator
    return {
        ...user,                                // rest
        roles: user.roles.slice(),              // create new array 
        address: Object.assign({}, user.address) // create new object
    }
}

let deepCopy = getDeepCopy(user);
user.age += 10;
user.roles.push("director");

console.log("Copy age: ", deepCopy.age);
console.log("Copy roles: ", deepCopy.roles);