const schwarzenegger = () => {
  return {
    id: "schwarzenegger",
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    hit(num) {
      return this.hull - +num;
    },
  };
};

const alienShips = (id) => {
  return {
    id,
    hull: Math.ceil(Math.random() * 3 + 2),
    firepower: Math.ceil(Math.random() * 3 + 1),
    accuracy: Math.ceil(Math.random() * 3 + 5) / 10,
    attack(num) {
      return (this.hull -= num);
    },
  };
};

const alienShip1 = alienShips(1);
const alienShip2 = alienShips(2);
const alienShip3 = alienShips(3);
const alienShip4 = alienShips(4);
const alienShip5 = alienShips(5);
const alienShip6 = alienShips(6);
const myShip = schwarzenegger();

console.log(alienShip1);
console.log(alienShip2);
console.log(alienShip3);
console.log(alienShip4);
console.log(alienShip5);
console.log(alienShip6);

//myShip attack Alien1
if (Math.random() < myShip.accuracy) {
  alienShip1.attack(myShip.firepower);
  if (alienShip1.hull <= 0) {
    console.log("Alien Ship Destroyed!");
  }
  console.log(alienShip1.hull);
} else {
  console.log("missed");
  console.log(alienShip1.hull);
}
