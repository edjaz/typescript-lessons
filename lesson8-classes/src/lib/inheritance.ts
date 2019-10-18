// classe mére qui ne peut pas être instancier

abstract class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
  // abstract méthode: toutes les classes filles dévront définir la méthode jump
  abstract jump();
}

class Snake extends Animal {
  constructor(name: string) {
    // call the Animal constructor
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
  jump() {
    console.log('Snake jump');
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
  jump() {
    console.log('Horse jump');
  }
}

let sam = new Snake('Sammy the Python');
let tom: Animal = new Horse('Tommy the Palomino');

sam.move();
// Output
// Slithering...
// Sammy the Python moved 5m.
sam.jump();
// Output : Snake jump

tom.move(34);
// Output
// Galloping...
// Tommy the Palomino moved 34m.
tom.jump();
// Output : Horse jump
