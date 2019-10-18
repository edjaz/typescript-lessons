// Generic Types

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
let myIdentity1: {<T>(arg: T): T} = identity;



interface GenericIdentityFn {
    <T>(arg: T): T;
}

let myIdentity2: GenericIdentityFn = identity;


interface GenericIdentityFn2<T> {
    <T>(arg: T): T;
}

let myIdentity3: GenericIdentityFn2<number> = identity;
