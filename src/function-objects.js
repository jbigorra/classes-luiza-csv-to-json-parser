// Homework
/**
 *
 * Instead of using a Factory function that returns a literal object with a new ninja everytime.
 * Transform that implemention to instead use either Class to create a ninja or a constructor function.
 *
 * In this implementation of ninjas they do not belong to a team.
 *
 * The result should be creating a ninja in the following way:
 *
 * const Naruto = new Ninja("Sasuke", "Super punch", "Tokyo", 25);
 * const Sasuke = new Ninja("Naruto", "Super kick", "Tokyo", 40);
 * const Goku = new Ninja("Goku", "Kamekame ha", "Tokyo", 30);
 *
 * All ninjas should still be able to attack, say hi to other ninjas and also to heal other ninjas.
 *
 *
 * Extra homework:
 *
 * 1) Make a ninja be able to join a team.
 *
 * 2) If number one was done, then block allies from attacking each other and block enemies from healing each other.
 *
 */

class Ninja {
  constructor (name, specialAbility, origin, age) {
    this.name = name;
    this.specialAbility = specialAbility;
    this.origin = origin;
    this.age = age;
  }

  attack (otherNinja) {
    console.log(this.name + ' attacks ' + otherNinja.name + ' with ' + this.specialAbility);
  }

  saysHiTo (otherNinja) {
    console.log(this.name + ' says' + ' hi ' + otherNinja.name);
  }

  heal (otherNinja) {
    console.log(this.name + ' heals ' + otherNinja.name);
  }
}

const Naruto = new Ninja('Naruto', 'Rasengan', 'Tokyo', 25);
const Sasuke = new Ninja('Sasuke', 'Sharingan', 'Tokyo', 40);
const Goku = new Ninja('Goku', 'Kamekame ha', 'Tokyo', 30);

console.log(Naruto.origin);

Naruto.attack(Goku);
Naruto.saysHiTo(Sasuke);
Sasuke.heal(Goku);
