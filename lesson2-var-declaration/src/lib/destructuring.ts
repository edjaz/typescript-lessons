// Destructuring

// la destructuration permet de nommer des élément d'un tableau et de pouvoir utilisé chaque champs comme un variable

let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

// on peut par exemple inverser deux élément d'un tableau de la façon suivante

[first, second] = [second, first];
console.log(first); // outputs 2
console.log(second); // outputs 1

// on peut aussi extraire le variable d'un tuple. Car un tuple n'est qu'un sort de tableau.

let tuple: [number, string, boolean] = [7, 'hello', true];
let [variableA, variableB, variableC] = tuple; // a: number, b: string, c: boolean

// on peut aussi extraire les variable d'un objet.

let o = {
  v1: 'foo',
  v2: 12,
  v3: 'bar'
};
let { v1, v2 } = o;

console.log(v1); // output 'foo'
console.log(v2); // output 12

// on peut renomer les variables que l'on extrait :

let { v1: newName1, v2: newName2 } = o;

console.log(newName1); // output 'foo'
console.log(newName2); // output 12

// On peut donner des valeur par défaut :

interface Sample {
  a: string;
  b?: string;
}

// valeur par défaut d'un variable
function keepWholeObject(wholeObject: Sample) {
  let { a: sampleA, b: sampleB = 1001 } = wholeObject;
  console.log(sampleA);
  console.log(sampleB);
}

keepWholeObject({
  a: 'test'
});
// Output test
// Output 1001

// valeur par défaut d'un variable

function f({ a, b = 0 } = { a: '' }): void {
  console.log('var a => ', a);
  console.log('var b => ', b);
}

f();
// Output ''
// Output 0

f({ a: 'a' });
// Output 'a'
// Output 0

f({ a: 'a', b: 1 });
// Output 'a'
// Output 1
