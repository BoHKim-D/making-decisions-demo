/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Eowyn and
    king of Angmar.
*/ 

let eowynAttack = 50;
let witchKingAttack = 50;

if (eowynAttack > witchKingAttack) {
    console.log("Eowyn is stronger.");
} else if (eowynAttack < witchKingAttack) {
    console.log("Witch King is stronger.");
} else if (eowynAttack === witchKingAttack) {
    console.log("They are equally strong.");
}

let eowynHealth = 100;
let eowynDefense = 0;

if (eowynHealth + eowynDefense <= witchKingAttack) {
    console.log("She dead.");
} 
else if (eowynHealth + eowynDefense > witchKingAttack) {
    eowynHealth = eowynHealth - witchKingAttack;
    console.log(`She has ${eowynHealth} health left.`);
    console.log("She lives.");
}

let coinLandsHeads = false;

if (coinLandsHeads === true) {
    console.log("Witch King gets to run away!");
} else {
    console.log("Witch King got stabbed and died.");
}

while (eowynHealth > 0) {
    eowynHealth = eowynHealth - witchKingAttack;
    console.log(`Eowyn has ${eowynHealth} HP left.`);
    if (eowynHealth <= 0) {
        console.log("Eowyn has been slain.");
    }
}