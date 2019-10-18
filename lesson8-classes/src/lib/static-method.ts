export class IndividuSM {
  private constructor(
    public readonly firstname: string,
    public readonly lastname: string
  ) {}

  static fromCsv(infos: [string, string]): IndividuSM {
    const [firstname, lastname] = infos;
    return new IndividuSM(firstname, lastname);
  }

  fullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}

const individu = IndividuSM.fromCsv(['firstname', 'lastname']);
console.log(individu.fullname());
