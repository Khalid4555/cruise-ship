const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/Itinerary");

describe("Ship", () => {
  it("returns an object", () => {
    const enfield = new Port("enfield");
    const walthamstow = new Port("walthamstow");
    const itinerary = new Itinerary([enfield, walthamstow]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
});

describe("currentPort", () => {
  it("returns a starting port", () => {
    const enfield = new Port("enfield");
    const walthamstow = new Port("walthamstow");
    const itinerary = new Itinerary([enfield, walthamstow]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(enfield);
  });
});

describe("setSail", () => {
  it("can set sail ", () => {
    const enfield = new Port("enfield");
    const walthamstow = new Port("walthamstow");
    const itinerary = new Itinerary([enfield, walthamstow]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.setSail()).toBeFalsy();
  });
});

describe("setSail", () => {
  it("departure from current port ", () => {
    const enfield = new Port("enfield");
    const walthamstow = new Port("walthamstow");
    const itinerary = new Itinerary([enfield, walthamstow]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });
});

describe("dock", () => {
  it("can dock ship at different ports ", () => {
    const enfield = new Port("Dover");
    const walthamstow = new Port("Calais");
    const itinerary = new Itinerary([enfield, walthamstow]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock(walthamstow);

    expect(ship.currentPort).toBe(walthamstow);
  });
});

describe("ship saild", () => {
  it("can't sail further than its itinerary", () => {
    const enfield = new Port("Dover");
    const walthamstow = new Port("Calais");
    const itinerary = new Itinerary([enfield, walthamstow]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });
});
