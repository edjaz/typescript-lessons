const failMethode = (value: never) => {
  throw new Error('Unexpected value: ' + value);
};

enum PetType {
  DOG,
  CAT,
  TURTLE
}

function demo(petType: PetType): boolean {
  switch (petType) {
    case PetType.DOG: {
      return true;
    }
    case PetType.CAT: {
      return true;
    }
    case PetType.TURTLE: {
      return true;
    }
    default: {
      failMethode(petType); // peut appeller la méthode qui recoit never car ce cas n'est normalement pas possible
      return false;
    }
  }
}

function demo2(petType: PetType): boolean {
  switch (petType) {
    case PetType.DOG: {
      return true;
    }
    case PetType.CAT: {
      return true;
    }
    default: {
      failMethode(petType); // à la compilation on peut voir que l'on a oublier un cas dans un switch
      return false;
    }
  }
}
