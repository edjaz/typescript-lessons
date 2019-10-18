// Pour décalarer un decorator d'attribut, on doit créer un fonction
// qui return une fonction avec la signature suiviant :
// target: any, propertyKey: string, descriptor: PropertyDescriptor

function MyFirstDecorator() {
  console.log('MyFirstDecorator(): evaluated');
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('MyFirstDecorator(): called');
  };
}

function MySecondDecorator() {
    console.log('MyFirstDecorator(): evaluated');
    return function(
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      console.log('MyFirstDecorator(): called');
    };
  }

class C {
  @MyFirstDecorator()
  @MySecondDecorator()
  method() {}
}

// Output
// MyFirstDecorator(): evaluated
// MySecondDecorator(): evaluated
// MyFirstDecorator(): called
// MySecondDecorator(): called

