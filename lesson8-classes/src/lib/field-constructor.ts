// les champs sont déclarer directement dans le constructeur.

export class IndividuFC {
    constructor(public firstname: string, public lastname: string) {
    }
  
    fullname(): string {
      return `${this.firstname} ${this.lastname}`;
    }
  }
  
  const individu = new IndividuFC("firstname", "lastname");
  console.log(individu.fullname());
  