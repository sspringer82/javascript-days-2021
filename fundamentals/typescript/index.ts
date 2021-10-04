import User from './user';

interface Greetable {
  getInfo: () => string;
}

let s: string | number = 'Hallo Welt';
s = 32;

const bello = {
  name: 'Bello',
  getInfo() {
    return this.name;
  },
};

const klaus = new User('Klaus', 'König', 42);
console.log(klaus.getInfo());

function greet(greetable: Greetable): string {
  return `Hallo ${greetable.getInfo()}`;
}
console.log(greet(klaus));
console.log(greet(bello));
