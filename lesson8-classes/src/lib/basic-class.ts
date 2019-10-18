// Une classe

class Greeter {
  // attributs
  greeting: string;

  // constructeur
  constructor(message: string) {
    this.greeting = message;
  }

  // methodes
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

//instanciation
let greeter = new Greeter('world');

// Public, private, and protected modifiers

// Public by default
// When a member is marked private, it cannot be accessed from outside of its containing class
// The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes.
