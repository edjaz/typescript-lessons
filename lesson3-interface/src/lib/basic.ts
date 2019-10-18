// Interface

// Function Types

// On peut définir la signature d'une fonction

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(
  source: string,
  subString: string
): boolean {
  let result = source.search(subString);
  return result > -1;
};

mySearch('src:', ':');

// Indexable Types

// par example on peut définir que tous les élément d'un tableau sont des string :

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ['Bob', 'Fred'];
let myStr: string = myArray[0];

console.log(myStr); // Output 'Bob'


// Class Types

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
