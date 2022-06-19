console.log(
  "%cSpace Battle Mini Project Start",
  "background: #222; color: #00ff00"
);

//SHIP CLASS
class Schwarzenegger {
  constructor(id) {
    this.id = "USS " + id;
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
}

class AlienShips {
  constructor(round) {
    this.id = "Alien Ship " + round;
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    // this.firepower = Math.floor(Math.random() * 3) + 6; //firepower buffed a little bit
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
}

const myShip = new Schwarzenegger("Schwarzenegger");
let roundCount = 1;
const randomRounds = Math.floor(Math.random() * 4) + 6;
console.log("Total rounds: " + randomRounds);

const rounds = (round) => {
  const alienShip = new AlienShips(round); //Instance of Alien Ship Per Round
  console.log("%cRound " + round + "!", "background: #222; color: #bada55;");
  do {
    //USS ATTACK ALIEN
    const myShipAttackAlien = () => {
      if (myShip.accuracy > Math.random()) {
        alienShip.hull -= myShip.firepower;
        if (alienShip.hull < 0) {
          alienShip.hull = 0;
        }
        console.log(
          `${myShip.id} attacked and hit ${alienShip.id}. You did ${myShip.firepower} damage.`
        );
        console.log(
          `${alienShip.id} hull left: ${alienShip.hull} and ${myShip.id} hull left: ${myShip.hull}`
        );
      } else {
        console.log(`%c${myShip.id} missed!`, "font-style: italic;");
        console.log(
          `${alienShip.id} hull left: ${alienShip.hull} and ${myShip.id} hull left: ${myShip.hull}`
        );
      }
    };

    //ALIEN ATTACK USS
    const alienAttackMyShip = () => {
      if (alienShip.accuracy > Math.random()) {
        myShip.hull -= alienShip.firepower;
        if (myShip.hull < 0) {
          myShip.hull = 0;
        }
        console.log(
          `${alienShip.id} attacked and hit ${myShip.id}! Alien ship did ${alienShip.firepower} damage`
        );
        console.log(
          `${alienShip.id} hull left: ${alienShip.hull} and ${myShip.id} hull left: ${myShip.hull}`
        );
      } else {
        console.log(`%cThe ${alienShip.id} missed!`, " font-style: italic;");
        console.log(
          `${alienShip.id} hull left: ${alienShip.hull} and ${myShip.id} hull left: ${myShip.hull}`
        );
      }
    };

    //END OF TURN CHECK HULL CONDITIONS
    myShipAttackAlien();
    if (alienShip.hull > 0) {
      alienAttackMyShip();
    }
    if (myShip.hull <= 0) {
      return console.log(
        `%c${myShip.id} was destroyed! GAME OVER.`,
        "background: #222; color: #ff0000"
      );
    }
    //REPEAT ROUND IF ALIEN SHIP OR MYSHIP HAS HIT POINTS
  } while (alienShip.hull > 0);
  console.log(
    `%c${alienShip.id} was destroyed!`,
    "background: #222; color: #00000ff"
  );

  //END GAME CONDITION
  if (round == randomRounds) {
    return console.log(
      "%cCongrats, YOU WON!",
      "background: #222; color: #00ff00"
    );
  }

  //CONTINE OR RETREAT
  const promptVal = prompt(
    `Do you want to continue enter (c) or any key to retreat?`
  );
  if (promptVal.toLowerCase() == "c") {
    round++;
    rounds(round);
  } else {
    console.log("%cGame over!", "background: #222; color: #ff0000");
  }
};
setTimeout(function () {
  alert("Welcome, pless ok to start");
  rounds(roundCount);
}, 2000);
