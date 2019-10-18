// Type Guards

// en utilisant des classes

class Dog {
  attrDog: string;
}

class Cat {
  attrCat: string;
}

class DemoClass {
  addPet(pet: Dog | Cat): void {
    if (pet instanceof Dog) {
      // pet: Dog
      console.log(pet.attrDog);
    } else {
      // pet: Cat
      console.log(pet.attrCat);
    }
  }
}

// En utilisant des interfaces

interface IDog {
  type: 'dog';
  name: string;
}

interface ICat {
  type: 'cat';
  name: string;
}

interface IDuck {
  type: 'duck';
}

class DemoInterface {
  addPet(pet: IDog | ICat | IDuck): void {
    if (pet.type === 'duck') {
      console.log('Duck has no name.'); // pet: Duck
    } else {
      console.log(pet.name); // ok, pet: Dog | Cat
    }
  }
}

// User Defined Type Guards

interface IFish {
  swim(): void;
}
interface IBird {}

function isFish(pet: IFish | IBird): pet is IFish {
  return 'swim' in pet;
}

console.log(isFish({ swim: () => null })); // true
console.log(isFish({})); //false

// typeof Type guards

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function isString(x: any): x is string {
  return typeof x === 'string';
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value;
  }
  if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// instanceof type guards

interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(' ');
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder('  ');
}

// Type is 'SpaceRepeatingPadder | StringPadder'
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  padder.getPaddingString(); // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
  padder.getPaddingString(); // type narrowed to 'StringPadder'
}
