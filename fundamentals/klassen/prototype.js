function Human(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Human.prototype.getFullname = function () {
  return `${this.firstname} ${this.lastname}`;
};

const claudia = new Human('Claudia', 'Berger');

console.log(claudia.getFullname());
