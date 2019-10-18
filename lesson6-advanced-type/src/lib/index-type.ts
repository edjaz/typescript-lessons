export function pluck<T, K extends keyof T>(src: T, keys: K[]): T[K][] {
  return keys.map(key => src[key]);
}
const person = {
  id: 12345,
  name: 'Thierry',
  age: 47,
  active: true
};
console.log(pluck(person, ['id', 'age'])); // Output [12345, 47]

function pick<T, K extends keyof T>(obj: T, keys: K[]): { [P in K]: T[P] } {
  return keys.reduce(
    (acc, key) => {
      acc[key] = obj[key];
      return acc;
    },
    {} as { [P in K]: T[P] }
  );
}

const subObj = pick(person, ['name', 'age']);

console.log(subObj); // Output : {name: "Thierry", age: 47}

// Index types and index signatures

interface Person {
  id: number;
  name: string;
  age: number;
}

type PropAge = Person['age']; // number

const n: PropAge = 1;
const n1: PropAge = '1'; // Error

type Keys = keyof Person; // 'id' | 'name' | 'age'

const k: Keys = 'id';
const k1: Keys = 'name';
const k2: Keys = 'age';
const k3: Keys = 'prop'; // Error

type Props = Person[keyof Person]; // string | number

const p: Props = 'a';
const p1: Props = 1;
const p2: Props = true; // Error
