// Object


declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create([]); // OK
create(null); // OK

// un objet n'est pas un type primitif

/*
    create(42); // Error
    create("string"); // Error
    create(false); // Error
    create(undefined); // Error
*/