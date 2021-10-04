import Greetable from './greetable';
import User from './user';

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

// types
type Human = {
  firstname: string;
};

function sayHello(h: Human): void {
  console.log(`Hello ${h.firstname}`);
}

sayHello({ firstname: 'Ingo' });

// enum

enum Food {
  orange = 'Orange',
  banana = 'Banana',
  apple = 'Apple',
}

const food: Food = Food.banana;

function eat(f: Food) {
  console.log(`eating: ${f}`);
}

eat(food);

// alternative
type Fruits = 'Orange' | 'Banana' | 'Apple';
function eatFruit(f: Fruits) {
  console.log(`eating: ${f}`);
}
eatFruit('Orange');

async function getData(): Promise<User> {
  return Promise.resolve(new User('Klaus', 'König', 42));
}
const klausi = getData();
console.log(klaus.getInfo());
