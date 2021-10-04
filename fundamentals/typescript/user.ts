export default class User {
  private age: number;
  constructor(
    private firstname: string,
    private lastname: string,
    age: number,
  ) {
    this.age = age;
  }

  private get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  getInfo() {
    return `${this.fullname} (${this.age})`;
  }
}
