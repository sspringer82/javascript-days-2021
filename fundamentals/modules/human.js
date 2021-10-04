export default class Human {
  // export class Human { // named export
  // export default class Human { // nur 1x default export pro datei
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

export const names = ['Klaus', 'Maria', 'Peter', 'Isabelle'];
