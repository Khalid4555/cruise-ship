class Ship {
  constructor(currentPort) {
    this.passengers = 0;
    this.currentPort = currentPort;
  }

  setSail() {
    this.currentPort = false;
  }

  dock(port) {
    this.currentPort = port;
  }
}

module.exports = Ship;
