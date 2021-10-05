// export class User {
export default class User {
  #firstname = '';
  #lastname = '';

  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }

  get fullname() {
    return `${this.#firstname} ${this.#lastname}`;
  }
}
