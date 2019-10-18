interface WithTimestamp {
  timestamp: number;
}

type Clazz<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Clazz>(Base: TBase) {
  return class extends Base implements WithTimestamp {
    timestamp = Date.now();
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}
}

class PersonWithCreatedDate extends Timestamped(Person) {}

console.log(new PersonWithCreatedDate('firstname', 'lastname')); // => PersonWithCreatedDate {firstName: "firstname", lastName: "lastname", timestamp: 1565254802639}
