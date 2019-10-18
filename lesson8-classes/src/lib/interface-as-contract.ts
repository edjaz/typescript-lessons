// en typescript une interface repésent un contrat à respecter


interface IPersonne {
  id: string;
  firstname: string;
  lastname: string;
  birthdate?: Date;

  fullname(): string;
}


class CIndividu {
  public id: string;

  constructor(public firstname: string, public lastname: string) {
    this.id = '123456486';
  }

  fullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}

// on peut dire que CIndividu respecte IPersonne
// car : CIndividu contient tous les attributs obligatoires et une implémentation de fullname
const individup: IPersonne = new CIndividu('firstname', 'lastname');
console.log(individup.fullname());


// on peut dire que individuSignature respecte IPersonne
// car : individuSignature l'instance contient tous les attributs obligatoires et une implémentation de fullname
const individuSignature: IPersonne = {
  firstname: 'firstname',
  lastname: 'lastname',
  id: '123456',
  fullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }
};

console.log(individuSignature.fullname());
