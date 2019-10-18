interface Personne {
  fullname(): string;
}

class Individu implements Personne {
  constructor(public firstname: string, public lastname: string) {}

  fullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}

const individu: Personne = new Individu('firstname', 'lastname');
console.log(individu.fullname());
