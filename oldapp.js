// Old code before refractor

/* const myShip = new Ship("USS Schwarzenegger", 20, 5, 0.7); //PLAYER SHIP INSTANCE
const randomRounds = Math.floor(Math.random() * 4) + 6;
console.log("Total rounds: " + randomRounds);
let roundCount = 1;
//GAME IS PLAYED IN RANDOM NUMBER OF ROUNDS
const rounds = (round) => {
  const id = "Alien Ship " + round;
  const hull = Math.floor(Math.random() * 4) + 3;
  const firepower = Math.floor(Math.random() * 3) + 2;
  const accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  const alienShip = new Ship(id, hull, firepower, accuracy); //NEW ALIENSHIP INSTANCE PER ROUND
  console.log("%cRound " + round + "!", "background: #222; color: #bada55;");
  do {
    //PLAYER ATTACK ALIEN FUNCTION. LOOPS TURN WITHIN ROUND.
    const myShipAttackAlien = () => {
      if (myShip.accuracy > Math.random()) {
        alienShip.hull -= myShip.firepower;
        if (alienShip.hull < 0) {
          alienShip.hull = 0;
        }
        console.log(
          `${myShip.id} attacked ${alienShip.id} and did ${myShip.firepower} damage.`
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
    //ALIEN ATTACK PAYER. LOOPS TURN WITHIN ROUND.
    const alienAttackMyShip = () => {
      if (alienShip.accuracy > Math.random()) {
        myShip.hull -= alienShip.firepower;
        if (myShip.hull < 0) {
          myShip.hull = 0;
        }
        console.log(
          `${alienShip.id} attacked ${myShip.id} and did ${alienShip.firepower} damage`
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
    //INVOKING ON FUNCTION FOR TURN
    myShipAttackAlien();
    alienShip.hull > 0 && alienAttackMyShip(); //CHECK ALIEN HULL ELSE ATTACK
    if (myShip.hull <= 0) {
      return console.log(
        `%c${myShip.id} was destroyed! GAME OVER.`,
        "background: #222; color: #ff0000"
      );
    }
    //REPEAT TURN IF ALIEN OR PLAYER HULL>0
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
  //CONTINNUE OR RETREAT END OF ROUND PROMPT
  const promptVal = prompt(
    `Enter (c) to continue. Enter any key or cancel to retreat`
  );
  if (promptVal == "c" || promptVal == "C") {
    round++;
    rounds(round);
  } else {
    console.log(
      "%cYou retreated, Game over!",
      "background: #222; color: #ff0000"
    );
  }
};
setTimeout(function () {
  alert("Welcome, click 'ok' to start");
  rounds(roundCount);
}, 2000);
 */
