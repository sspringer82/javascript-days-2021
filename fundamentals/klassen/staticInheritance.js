class Human {
  firstname = '';
  lastname = '';

  static legCount = 2;

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  static createNewHuman(firstname, lastname) {
    return new this(firstname, lastname);
  }
}

class User extends Human {
  id = 0;

  constructor(firstname, lastname, id) {
    super(firstname, lastname);
    this.id = id;
  }

  toString() {
    return `${this.getFullname()} - ${this.id}`;
  }
}

const claudia = new Human('Claudia', 'Berger');

console.log(claudia.getFullname());

console.log(`Human leg count: ${Human.legCount}`);

const bernhard = Human.createNewHuman('Bernhard', 'Bichler');

console.log(bernhard.getFullname());

const basti = new User('Sebastian', 'Springer', 18);

console.log(basti.toString());

const karl = User.createNewHuman('Karl', 'Müller');
karl.id = 12;
console.log(karl);
