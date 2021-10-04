"use strict";
let s = 'Hallo Welt';
s = 32;
class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
    getInfo() {
        return `${this.fullname} (${this.age})`;
    }
}
const klaus = new User('Klaus', 'König', 42);
console.log(klaus.getInfo());
