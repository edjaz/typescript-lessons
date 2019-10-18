// Boolean
let b1: boolean = false; 
let b2: boolean = true;
let b3: boolean = null;


// Si on déclare et instantie la variable en même temps, il est préférable de ne pas mettre le type
let b4 = false; 


// toutes les fonctions sur boolean sont

interface Boolean {
    /** Returns the primitive value of the specified object. */
    valueOf(): boolean;
}