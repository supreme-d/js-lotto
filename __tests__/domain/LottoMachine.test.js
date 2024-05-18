import LottoMachine from "../../src/domain/LottoMachine";

import * as ERROR_MESSAGE from "../../src/constants/error";

describe("LottoMachine", () => {
  let lottoMachine;

  beforeEach(() => {
    lottoMachine = new LottoMachine(1000);
  });

  describe("insertMoney()", () => {
    it("should update the insertedAmount with input", () => {
      const amount = 1000;

      lottoMachine.insertMoney(amount);

      expect(lottoMachine.getInsertedAmount()).toBe(1000);
    });

    it("should throw an error if input is not an integer", () => {
      const amount = "1000";

      expect(() => lottoMachine.insertMoney(amount)).toThrow(
        ERROR_MESSAGE.MONEY_TYPE_ERROR
      );
    });

    it("should throw an error if input is negative", () => {
      const amount = -1000;

      expect(() => lottoMachine.insertMoney(amount)).toThrow(
        ERROR_MESSAGE.MONEY_RANGE_ERROR
      );
    });
  });

  describe("buyTickets()", () => {
    it("should return lotto tickets", () => {
      const quantity = 1;
      lottoMachine.insertMoney(1000);

      const tickets = lottoMachine.buyTickets(quantity);

      expect(tickets.length).toBe(quantity);
    });

    it("should return null if inserted money is not enough to buy tickets", () => {
      const quantity = 2;
      lottoMachine.insertMoney(1000);

      const tickets = lottoMachine.buyTickets(quantity);

      expect(tickets).toBe(null);
    });

    it("should throw an error if input is not an integer", () => {
      const quantity = "1";

      expect(() => lottoMachine.buyTickets(quantity)).toThrow(
        ERROR_MESSAGE.TICKET_QUANTITY_TYPE_ERROR
      );
    });

    it("should throw an error if input is negative", () => {
      const amount = -1000;

      expect(() => lottoMachine.insertMoney(amount)).toThrow(
        ERROR_MESSAGE.TICKET_QUANTITY_RANGE_ERROR
      );
    });
  });
});
