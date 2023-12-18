class Character {
  constructor(username, level, hp) {
    this.username = username;
    this.level = level;
    this.hp = hp;
  }
  attack() {
    console.log(`${this.username} Attacks the ennemi`);
  }
  showDetails() {
    console.log(
      `Username: ${this.username}, level: ${this.level}, health point: ${this.hp}`
    );
  }
  increaseHealth() {
    this.hp = Math.round(this.hp * 1.1);
  }
}

class Warrior extends Character {
  constructor(username, level, hp, strength) {
    super(username, level, hp);
    this.strength = strength;
  }
  heavyAttack() {
    console.log(
      `${this.username} deals a heavy blow with the strength of ${this.strength}!`
    );
  }
}

class Rogue extends Character {
  constructor(username, level, hp, agility) {
    super(username, level, hp);
    this.agility = agility;
  }
  subtlety() {
    console.log(
      `${this.username} moves subtlety with an agility of ${this.agility}!`
    );
  }
}

class Mage extends Character {
  constructor(username, level, hp, spell) {
    super(username, level, hp);
    this.ability = spell;
  }
  cast() {
    console.log(`${this.username} starts casting ${this.spell}!`);
  }
}

class Healer extends Character {
  constructor(username, level, hp, healing) {
    super(username, level, hp);
    this.healing = healing;
  }
  heal() {
    console.log(`${this.username} heals the group with ${this.healing}!`);
  }
}

const myCharacter = new Character("Amir", 100, 1000);
console.log(myCharacter);
const myWarrior = new Warrior("AmirW", 99, 1000, 20);
console.log(myWarrior);
const myRogue = new Rogue("AmirR", 98, 1000, 200);
console.log(myRogue);
const myMage = new Mage("AmirM", 97, 1000, "Charge arcanique.");
console.log(myMage);
const myHealer = new Healer("AmirH", 96, 1000, "Aube sacrée");
console.log(myHealer);

let characters = [myWarrior, myRogue, myMage, myHealer, myCharacter];

let characterDetails = characters.map((character) => {
  character.showDetails();
});

function attackAll(characters) {
  characters.forEach((character) => character.attack());
}
attackAll(characters);

let totalWarriorStrength = characters
  .filter((character) => character instanceof Warrior)
  .reduce((total, warrior) => total + warrior.strength, "");
console.log(`Total warriors strength ${totalWarriorStrength}`);

let newRogue = new Rogue("NewRogue", 95, 200000, 900);
let newWarrior = new Warrior("NewWarrior", 94, 300000, 840);
characters.push(newRogue, newWarrior);

let detailsJSON = characters.map((ch) => JSON.stringify(ch));
console.log(detailsJSON);

characters.sort((a, b) => a.level - b.level);
characters.forEach((ch) => {
  ch.showDetails();
});
console.log(characters);

let totalHp = characters.reduce((tot, ch) => tot + ch.hp, 0);
console.log(totalHp);
let avrgHp = totalHp / characters.length;
console.log(Math.round(avrgHp));

let mageOnly = characters.filter((char) => char instanceof Mage);
console.log(mageOnly);

characters.forEach((char) => char.increaseHealth());
console.log(characters);
