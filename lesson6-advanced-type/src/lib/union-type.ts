// Union types

function fctReturnStringorStrings(): string | string[] {
  return '1235';
}

function fctReceive(param: number | number[] | string | string[]): string[] {
  if (typeof param === 'string') {
    return [param];
  }

  if (typeof param === 'number') {
    return [String(param)];
  }

  return new Array(param).map(value => String(value));
}

console.log(fctReceive(['1', '3', '6'])); // Outupt ["1,3,6"]

type Bit = 0 | 1;
let bit: Bit = 0;
bit = 1; // ok
bit = 2; // error

// Union de classe

interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  return {
    fly: () => true,
    layEggs: () => 1
  };
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim(); // errors
