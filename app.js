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
/* const alienShips = (id) => {
  return {
    id: "Alien Ship " + id,
    hull: Math.ceil(Math.random() * 3 + 3),
    // firepower: Math.ceil(Math.random() * 3 + 1),
    firepower: Math.ceil(Math.random() * 3 + 4), //Alien ship is a little buffed
    accuracy: Math.ceil(Math.random() * 3 + 5) / 10,
  };
}; */
class AlienShips {
  constructor(round) {
    this.id = "Alien Ship " + round;
    this.hull = Math.floor(Math.random() * 4) + 3;
    // this.firepower = Math.floor(Math.random() * 3) + 2;
    this.firepower = Math.floor(Math.random() * 3) + 6;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
}

const myShip = new Schwarzenegger("Schwarzenegger");
let roundCount = 1;

const rounds = (round) => {
  // const myShip = schwarzenegger(); //Factory function
  // const alienShip = alienShips(round); //Factory function
  const alienShip = new AlienShips(round); //Instance of Alien Ship Per Round
  console.log("%cRound " + round + "!", "background: #222; color: #bada55;");
  do {
    // console.log(alienShip);
    // console.log(myShip);
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
    const alienAttackMyShip = () => {
      const random = Math.random();
      if (alienShip.accuracy > random) {
        myShip.hull -= alienShip.firepower;
        if (myShip.hull < 0) {
          myShip.hull = 0;
        }
        console.log(
          `${alienShip.id} ${round} attacked and hit ${myShip.id}! Alien ship did ${alienShip.firepower} damage`
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
  } while (alienShip.hull > 0);
  console.log(
    `%c${alienShip.id} was destroyed!`,
    "background: #222; color: #00000ff"
  );
  if (round == 6) {
    return console.log(
      "%cCongrats, WINNER!",
      "background: #222; color: #00ff00"
    ); //exit
  }

  //CONTINE OR RETREAT
  const pVal = prompt(
    `Do you want to continue enter (c) or retreat enter (r)?`
  );
  if (pVal == "c" || pVal == "C") {
    round++;
    rounds(round);
  } else {
    return console.log("%cGame over!", "background: #222; color: #ff0000");
  }
};

setTimeout(function () {
  alert("Welcome, pless ok to start");
  rounds(roundCount);
}, 2000);
