const Port = require("../src/port");
const Ship = require("../src/ship");

describe("Port", () => {
  it("returns an object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});

describe("name", () => {
  it("returns a new port location", () => {
    const port = new Port("Dover");

    expect(port.name).toBe("Dover");
  });
});
