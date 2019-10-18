// Déclaration de décorateur

// exemple d'un décorateur qui ajoute un contructeur qui sera appeller après le constructor de la classe

function ClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  console.log('ClassDecorator');
  return class extends constructor {
    newProperty = 'new property';
    cpOldHello = arguments[0];
    hello = 'override';
  };
}

@ClassDecorator
class Greeter {
  property = 'property';
  hello: string;
  constructor(m: string) {
    console.log('constructor');
    this.hello = m;
  }
}

console.log(new Greeter('world'));

// Output :
// ClassDecorator
// constructor
// {property: "property", hello: "override", newProperty: "new property", cpOldHello: "world"}