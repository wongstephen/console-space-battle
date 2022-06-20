console.log(
  "%cSpace Battle Mini Project Start",
  "background: #222; color: #00ff00"
);
class Ship {
  constructor(id, hull, firepower, accuracy) {
    this.id = id;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  } //ship constructor
  getDamaged(damage) {
    return (this.hull -= damage);
  }
  setHull() {
    return (this.hull = 0);
  }
}
const myShip = new Ship("USS Schwarzenegger", 20, 5, 0.7); //PLAYER SHIP INSTANCE
const createAlienShip = (round) => {
  const id = "Alien Ship " + round;
  const hull = Math.floor(Math.random() * 4) + 3;
  const firepower = Math.floor(Math.random() * 3) + 2;
  const accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  const alienShip = new Ship(id, hull, firepower, accuracy);
  return alienShip;
}; //alien ship instance per round
let round = 0;
const totalRounds = Math.floor(Math.random() * 4) + 6;
const attack = (attacker, defender) => {
  if (Math.random() < attacker.accuracy) {
    defender.getDamaged(attacker.firepower);
    defender.hull < 0 && defender.setHull();
    console.log(
      `%c${attacker.id} sucessfully hit ${defender.id} and did ${attacker.firepower} damage\n${attacker.id} hull: ${attacker.hull}, ${defender.id} hull: ${defender.hull}`,
      "background: #222; color: #ADFF2F"
    );
  } else {
    console.log(`%c${attacker.id} missed!`, "background: #222; color: #ff0000");
  }
}; //attack function
const turns = (alienTurn) => {
  do {
    attack(alienTurn, myShip); //turn 1 alien attack myship
    if (myShip.hull <= 0) {
      return console.log(
        `%c${myShip.id} has been destroyed. Game Over`,
        "background: #222; color: #F0FFF0"
      );
    }
    attack(myShip, alienTurn); //turn 2 myship attack alien
  } while (alienTurn.hull > 0);
  console.log("%cAlien Ship Destroyed", "background: #222; color: #F0FFF0");
}; //turns function. myship is global, alien is instance per round
const rounds = (round) => {
  round++;
  if (round > totalRounds) {
    return;
  }
  console.log(
    `%cRound ${round} of ${totalRounds}`,
    "background: #222; color: #009900"
  );
  turns(createAlienShip(round)); //new alienship instance per round
  if (myShip.hull <= 0) {
    return;
  } //check if player ship is destroyed
  if (round < totalRounds) {
    let promptV = prompt("Press (c) to continue or any key to retreat", "c");
    if (promptV === "c") {
      rounds(round);
    } else {
      return console.log(
        "%cGame Over, you choose to retreat",
        "background: #222; color: FireBrick"
      );
    }
  } else {
    console.log(
      "%cAll alien Ships Destroyed\nCongrats, WINNER!",
      "background: #222; color: Cornsilk"
    );
  }
};
window.setTimeout(function () {
  alert("Welcome, click 'ok' to start");
  rounds(round);
}, 2000);
