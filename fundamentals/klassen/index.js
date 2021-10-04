class Human {
  #firstname = '';
  #lastname = '';

  static legCount = 2;

  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }

  #getFullname() {
    return `${this.#firstname} ${this.#lastname}`;
  }

  get fullname() {
    return this.#getFullname();
  }

  set firstname(value) {
    console.log('set firstname');
    this.#firstname = value;
  }

  get firstname() {
    return this.#firstname;
  }
}

class User extends Human {
  printUsername() {
    console.log(this.#getFullname());
  }
}

const lydia = new Human('Lydia', 'Schmitt');
console.log(lydia.fullname);
console.log(lydia.firstname);
lydia.firstname = 'lydy';

console.log(lydia.fullname);

const angelika = new User('Angelika', 'Huber');
// angelika.printUsername(); // SyntaxError
