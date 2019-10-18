// type Aliases

type TypeName = string;
type NameResolver = () => TypeName;
type Coord = [number, number];
type Container<T> = { value: T };

const constName: TypeName = 'name';

const fctNameResolver: NameResolver = (): TypeName => {
  return constName;
};

const coord: Coord = [1, 1];

const cont: Container<TypeName> = {
  value: constName
};

// String Literal Types

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

let easing: Easing = 'ease-in';
let easingErr: Easing = 'ease-err'; // KO

// overload de fonction

function createElement(tagName: 'img'): HTMLImageElement;
function createElement(tagName: 'input'): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
  return new Element();
}

createElement('img'); // OK
createElement('input'); // OK
createElement('test'); // KO

// Numeric Literal Types

// cela n'empêche pas le bug lors de l'execution
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  const nextRandom = () => Math.round(Math.random() * 10);

  let val = nextRandom();
  while (val > 6 || val === 0) {
    val = nextRandom();
  }

  return val as 1 | 2 | 3 | 4 | 5 | 6;
}

