
// Type assertions
let someValue: any = 'this is a string';

// on peut caster de deux façon
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;


// exemple en utilisant type
type BookTitle = {
    title: string;
}

let value: any = {
  title: 'this is a string'
};

let test1 = value as BookTitle;
console.log(test1.title);

// exemple en utilisant un classe

class Book {
    title:string;
}

let test2 = value as Book;
console.log(test2.title);
