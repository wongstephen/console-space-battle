console.log("START");

//myShip-schwarzenegger
const schwarzenegger = () => {
  return {
    id: "USS Schwarzenegger",
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
  };
};

//Each instance of alien ship
const alienShips = (id) => {
  return {
    id: "Alien Ship " + id,
    hull: Math.ceil(Math.random() * 3 + 3),
    firepower: Math.ceil(Math.random() * 3 + 1),
    accuracy: Math.ceil(Math.random() * 3 + 5) / 10,
  };
};

let roundCount = 1;

const rounds = (round) => {
  const myShip = schwarzenegger();
  const alienShip = alienShips(round);
  const level = "Round " + round;
  if (round == 7) {
    return console.log("You Won"); //exit
  }

  do {
    // console.log(alienShip);
    // console.log(myShip);
    const myShipAttackAlien = () => {
      if (myShip.accuracy > Math.random()) {
        alienShip.hull -= myShip.firepower;
        let msg = `You attacked and hit ${alienShip.id}. You did ${myShip.firepower} damage. Alien hull left: ${alienShip.hull} and your hull left: ${myShip.hull}`;
        console.log(msg);
      } else {
        console.log(`${myShip.id} missed!`);
        console.log(
          `Alien hull left: ${alienShip.hull} and your hull left: ${myShip.hull}`
        );
      }
    };
    const alienAttackMyShip = () => {
      const random = Math.random();
      if (alienShip.accuracy > random) {
        myShip.hull -= alienShip.firepower;
        console.log(
          `Alien Ship ${round} attacked and hit ${myShip.id}! Alien ship did ${alienShip.firepower} damage`
        );
        console.log(
          `Alien hull left: ${alienShip.hull} and your hull left: ${myShip.hull}`
        );
      } else {
        console.log(`The Alien Ship ${round} missed!`);
        console.log(
          `Alien hull left: ${alienShip.hull} and your hull left: ${myShip.hull}`
        );
      }
    };
    myShipAttackAlien();
    if (alienShip.hull > 0) {
      alienAttackMyShip();
    }
    if (myShip.hull <= 0) {
      return console.log(`${myShip.id} was destroyed!`);
    }
  } while (alienShip.hull > 0);
  console.log(`Alien Ship ${round} was destroyed!`);
  const pVal = prompt(
    `Do you want to continue enter (c) or retreat enter (r)?`
  );
  if (pVal.toLowerCase == "r" || pVal == "retreat") {
    return console.log("game over");
  } else {
    round++;
    rounds(round);
  }
};

alert("Welcome, pless ok to start");
rounds(roundCount);
