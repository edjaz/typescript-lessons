// Functions

// Parameter annotations

function foo1(sampleParameter: { bar: number }) { }

// Return type annotation

interface Foo {
    foo: string;
}

function foo2(sample: Foo): Foo {
    return sample;
}

// Optional Parameters

function foo3(bar: number, bas?: string): void {
}

foo3(123);
foo3(123, 'hello');


// Overloading

function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
function padding(a: number, b?: number, c?: number, d?: number) {
 //...
}

// Declaring Functions

type LongHand = {
    (a: number): number;
};

// forme d'écriture préférable
type ShortHand1 = (a: number) => number;

// on peut écrire ceci, mais il est préférable d'utilisé une interface
type LongHandAllowsOverloadDeclarations = {
    (a: number): number;
    (a: string): string;
};


