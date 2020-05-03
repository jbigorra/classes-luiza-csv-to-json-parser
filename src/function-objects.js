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
 * create a joinTeam function in the object and I would say that you don't do it through the constructor.
 * The idea is that you use the function/method to make the ninja join a team and the the value of the team property
 * through the function.
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
    this.health = 100;
  }

  attack (otherNinja) {

    otherNinja.health -= 10
    console.log(this.name + ' attacks ' + otherNinja.name + ' with ' + this.specialAbility);
  }

  saysHiTo (otherNinja) {
    console.log(this.name + ' says' + ' hi ' + otherNinja.name);
  }

  heal (otherNinja) {

    otherNinja.health += 20;
    if (otherNinja.health > 100) otherNinja.health = 100;
    console.log(this.name + ' heals ' + otherNinja.name);
  }

}

//

//const subscription = { team: "aTeam", ninja: aNinja };

class TeamManager {
  constructor() {
   //this.teams = ['Leaf', 'Water', 'Stone', 'Birds'];
   this.subscriptions = [];
  }

  subscribe(ninja, team) {

    if(this.IsSubscribed(ninja)) {
      console.log(`${ninja.name} is already subscribed`);
      return;
    }

    const subscription = { ninja, team };

    this.subscriptions.push(subscription);
  }

  unsubscribe(ninja) {
    if(!this.IsSubscribed(ninja)) return;

    // let index;
    // for (let i=0; i < this.subscriptions.length; i++) {
    //   if (this.subscriptions[i].ninja === ninja) {
    //     index = i;
    //     break;
    //   }
    // }

    // const subscription = this.subscriptions.find(subscription => subscription.ninja === ninja);

    // const index = this.subscriptions.indexOf(subscription);

    const index = this.subscriptions.findIndex(subscription => subscription.ninja === ninja);

    this.subscriptions.splice(index, 1);
  }

  IsSubscribed (ninja) {
    // const subscription = this.subscriptions.filter(subscription => subscription.ninja === ninja);
    // return subscription.length === 1;

    return this.subscriptions.some(subscription => subscription.ninja === ninja);
  }
}

const Naruto = new Ninja('Naruto', 'Rasengan', 'Uzumaki', 25);
const Sasuke = new Ninja('Sasuke', 'Sharingan', 'Itachi', 40);
const Goku = new Ninja('Goku', 'Kamekame ha', 'Tokyo', 30);

console.log(Naruto.origin);

Naruto.joinTeam(Leaf);
Naruto.attack(Goku);
console.log(Goku.health);
Naruto.saysHiTo(Sasuke);
Sasuke.heal(Goku);
console.log(Goku.health);

const teamManager = new TeamManager();

teamManager.subscribe(Sasuke, 'Shadow');
teamManager.subscribe(Naruto, 'Leaf');
teamManager.subscribe(Goku, 'Shadow');



teamManager.subscribe(Goku, 'Leaf');
teamManager.subscribe(Sasuke, 'Leaf');

teamManager.unsubscribe(Naruto);



console.log(teamManager.subscriptions);
// im here discord is being dumb
// hahah ok no worries
// ... not working, wtf


// 16    8     4     2     1 // decimal values
// // ------------------------// binary
// 0     0     0     0     0
// 0     0     0     0     1    // 1
// 0     0     0     1     0    // 2
// 0     0     0     1     1    // 3
// 0     0     1     0     0    // 4
// 0     0     1     0     1    // 5



// 32    64     128     256     512

// https://leetcode.com/
// https://hackerrank.com/

// const string = "Juancho";

// const obj = {
//   "Juancho": function () {
//     console.log("Im a juancho property");
//   }
// };

// obj[string]();
