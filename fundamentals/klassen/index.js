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

const lydia = new Human('Lydia', 'Schmitt');
console.log(lydia.fullname);
console.log(lydia.firstname);
lydia.firstname = 'lydy';

console.log(lydia.fullname);
