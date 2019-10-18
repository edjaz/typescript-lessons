function Enumerable(value: boolean) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

/*

interface PropertyDescriptor {
    configurable?: boolean; // Set to true if the property descriptor can be changed later
    enumerable?: boolean; // Set to true if the property is accessed during for (propertyName in object)
    value?: any; // The value stored in the property. value can only be specified if both get and set functions are not specified.
    writable?: boolean; // Set to true if the property can be modified, false otherwise. writable can only be specified if both get and set functions are not specified.
    get?(): any; // The getter function that returns the value for the property
    set?(v: any): void; // The setter function that is called when setting the property
}

*/

class GreeterEnumerable {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @Enumerable(false)
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeterEnum: GreeterEnumerable = new GreeterEnumerable('message');

for (var x in greeterEnum) {
  console.log(x);
}

// Output
// greeting
