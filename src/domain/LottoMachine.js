import * as ERROR_MESSAGE from "../constants/error";

export default class LottoMachine {
  #ticketPrice;
  #insertedAmount;

  constructor(ticketPrice) {
    this.#ticketPrice = ticketPrice;
    this.#insertedAmount = 0;
  }

  getInsertedAmount() {
    return this.#insertedAmount;
  }

  insertMoney(amount) {
    if (!Number.isInteger(amount)) {
      throw new TypeError(ERROR_MESSAGE.MONEY_TYPE_ERROR);
    }

    if (amount < 0) {
      throw new RangeError(ERROR_MESSAGE.MONEY_RANGE_ERROR);
    }

    this.#insertedAmount = amount;
  }
}
