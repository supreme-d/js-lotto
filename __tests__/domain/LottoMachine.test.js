import LottoMachine from "../../src/domain/LottoMachine";

describe("LottoMachine", () => {
  describe("insertMoney()", () => {
    let lottoMachine;

    beforeEach(() => {
      lottoMachine = new LottoMachine(1000);
    });

    it("should update the insertedAmount with input", () => {
      const amount = 1000;

      lottoMachine.insertMoney(amount);

      expect(lottoMachine.getInsertedAmount()).toBe(1000);
    });

    it("should throw an error if input is not an integer", () => {
      const amount = "1000";

      expect(() => lottoMachine.insertMoney(amount)).toThrow();
    });

    it("should throw an error if input is negative", () => {
      const amount = -1000;

      expect(() => lottoMachine.insertMoney(amount)).toThrow();
    });
  });
});
