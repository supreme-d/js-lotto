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
      throw new TypeError();
    }

    if (amount < 0) {
      throw new RangeError();
    }

    this.#insertedAmount = amount;
  }
}
