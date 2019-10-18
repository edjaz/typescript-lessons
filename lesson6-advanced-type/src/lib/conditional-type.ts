type Nullable<T> = T | null | undefined;
type CustNonNullable<T> = T extends null | undefined ? never : T;
type Primitive = number | string | boolean | null | undefined;

const p1: Nullable<string> = null;
const p2: Primitive = null;
const p3: CustNonNullable<Primitive> = 'abc';
const p4: CustNonNullable<Primitive> = null;


type TypeNameSample<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type TypeNameSample0 = TypeNameSample<string>;  // "string"
type TypeNameSample1 = TypeNameSample<"a">;  // "string"
type TypeNameSample2 = TypeNameSample<true>;  // "boolean"
type TypeNameSample3 = TypeNameSample<() => void>;  // "function"
type TypeNameSample4 = TypeNameSample<string[]>;  // "object"

