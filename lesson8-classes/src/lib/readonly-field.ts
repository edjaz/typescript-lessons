// Readonly modifier

// on champ readonly n'est quand lecture seul

// déclare un champ readonly
class OctopusAtt {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new OctopusAtt('Man with the 8 strong legs');
dad.name = 'Man with the 3-piece suit'; // error! name is readonly.

// déclare un champ readonly via le constructeur
class OctopusConst {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}


let octopusConst:OctopusConst = new OctopusConst('Man with the 8 strong legs');
octopusConst.name= 'Man with the 3-piece suit'; // error! name is readonly.