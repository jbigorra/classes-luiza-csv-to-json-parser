// Create an literal object that represents an "Utility" object that can join arrays and split strings.
// The Utility object should have a name property with the value of "Awesome utility"

const utility = {
  name: "Awesome Utility",
  joinArray: function(array, joiningCharacter) {
  },
  splitString: function(string, splittingCharacter) {
  }
};

// creating a character


function createNinja(name, specialAbility, origin, team, age) {
    const ninja = {
        name,
        specialAbility,
        origin,
        team,
        age,
        health: 100,
        attack: function(otherNinja) {
          if (!otherNinja || team === otherNinja.team) return;

          otherNinja.health -= 10

          console.log(name + ' is attacking' + ' and the other ninja health goes to ' + otherNinja.health)
        },
        SaysHiTo: function(otherNinja) {
          console.log(name + ' says ' + ' Hi ' + otherNinja.name);
        },
        heal: function(otherNinja) {
          if (otherNinja.team !== team) return;

          otherNinja.health += 20;

          if (otherNinja.health > 100) otherNinja.health = 100;

          console.log(otherNinja.name + " health is " + otherNinja.health);
        }
    };
    return ninja;
}


const Sasuke = createNinja("Sasuke", "Super punch", "Tokyo", "Shadow", 25);
const Naruto = createNinja("Naruto", "Super kick", "Tokyo", "Shadow", 40);
const Goku = createNinja("Goku", "Kamekame ha", "Tokyo", "Sayayin", 30);

console.log(Sasuke);
console.log(Naruto);

Sasuke.attack(Naruto);
console.log(Naruto.health);

Naruto.SaysHiTo(Sasuke);
Naruto.SaysHiTo(Goku);

Goku.SaysHiTo(Naruto);

Goku.attack(Naruto);
Goku.attack(Naruto);
Goku.attack(Naruto);
Goku.attack(Naruto);

console.log(Naruto.health);

Sasuke.heal(Naruto);

console.log(Naruto.health);


// A ninja can heal another ninja (by 20 helth points)
// But the health of the healed ninja cannot go above the maximum health which is 100.
// Ninjas must belong to the same team in order to be able to heal each other.

// console.log(utility.name);
// console.log(utility["name"]);
console.log(utility);



