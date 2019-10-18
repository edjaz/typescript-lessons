// Intersection

interface Person {
  name: string;
}

interface WithId {
  id: number;
}

// reçoit un param qui contient un attribut 'name' && 'id'
let savePerson: (modified: Person & WithId) => void;

savePerson({ name: 'name', id: 0 }); // OK
savePerson({ name: 'name' }); // KO

// On peut consrtuire un nouveau type comme suit :

type PersonWithId = Person & WithId;

const person: PersonWithId = {
  name: 'name',
  id: 0
}; // OK

const person1: PersonWithId = {
  name: 'name'
}; // KO
