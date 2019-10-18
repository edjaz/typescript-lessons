/*
Un symbole est un type de données primitif représentant une donnée unique et inchangeable qui peut être utilisée afin de représenter des identifiants pour des propriétés d'un objet. L'objet Symbol est un conteneur objet implicite pour le type de données primitif symbole.
 */


const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false
