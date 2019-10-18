// Constructor Type

interface ClockInterface {
  currentTime: Date;
  tick(): void;
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date): void {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep');
  }
}
class AnalogClock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date): void {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock');
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

digital.tick(); // Ouput beep beep
analog.tick(); // Output tick tick
