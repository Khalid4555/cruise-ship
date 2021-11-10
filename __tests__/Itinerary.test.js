const Itinerary = require("../src/Itinerary");
const Port = require("../src/port");

describe("Itenerary", () => {
  it("determines at which port it next docks.", () => {
    const enfield = new Port("enfield");
    const walthamstow = new Port("walthamstow");

    const itinerary = new Itinerary([enfield, walthamstow]);

    expect(itinerary.ports).toStrictEqual([enfield, walthamstow]);
  });
});
