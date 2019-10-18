// Enum

// Const Enums
enum ColorEnum1 {
  Red,
  Green,
  Blue
}
let color1: ColorEnum1 = ColorEnum1.Green;
// color1 = 1

enum ColorEnum2 {
  Red = 1,
  Green = 10,
  Blue
}
let color2: ColorEnum2 = ColorEnum2.Blue;
// color2 = 11

enum ColorEnum3 {
  Red = 1,
  Green,
  Blue
}
let colorName: string = ColorEnum3[2];
// 'Green'

// String Enums
enum ColorEnum4 {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue'
}
let color3: ColorEnum4 = ColorEnum4.Blue;
// c = Blue


// Number Enums as flags
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}

// Enum with static functions

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
      switch (day) {
          case Weekday.Saturday:
          case Weekday.Sunday:
              return false;
          default:
              return true;
      }
  }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun)); // false

