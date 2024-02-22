import multiplicar from "./multiplicador.js";

describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(5, 7)).toEqual(35);
  });
});