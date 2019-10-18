interface ReturnString {
  (): string;
}

declare const foo: ReturnString;
const bar = foo();

// Arrow Syntax
const simple: (num: number) => string = num => num.toString();

// Newable

interface CallMeWithNewToGetString {
  new (): string;
}

declare const Foo: CallMeWithNewToGetString;
const foo1 = new Foo(); 
