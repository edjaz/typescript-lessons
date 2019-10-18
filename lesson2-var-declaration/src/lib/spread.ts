// Spread

// à l'équivalent en inline de addAll en java sur une List

let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus); // [0, 1, 2, 3, 4, 5]

// le spread operator permet aussi de faire de la recopie de d'objet comme clone en Java
// de plus on peut ajouter ou remplacer des variables

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search); // {food: "rich", price: "$$", ambiance: "noisy"}
let search1 = { ...defaults, food1: "rich" };
console.log(search1); // {food: "spicy", price: "$$", ambiance: "noisy", food1: "rich"}