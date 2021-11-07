class Ship {
  constructor(startingPort) {
    this.passengers = 0;
    this.startingPort = startingPort;
  }

  setSail() {
    this.startingPort = false;
  }
}

module.exports = Ship;
