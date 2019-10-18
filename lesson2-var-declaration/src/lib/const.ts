// const

// const et comme let mais on ne peux pas faire qu'une seul affectation
// On l'utilise pour les constantes et le champs qui ne doit plus être modifier après l'affectation
const a = 1;
a = 10; // Error

const b = {
  title: 'title'
};

b = {
  title: 'title'
}; // Error
