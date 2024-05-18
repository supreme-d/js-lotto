import Lotto from "../domain/Lotto";

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

  buyTickets(quantity) {
    const tickets = [];
    const totalCost = quantity * this.#ticketPrice;

    if (!Number.isInteger(quantity)) {
      throw new TypeError(ERROR_MESSAGE.TICKET_QUANTITY_TYPE_ERROR);
    }

    if (quantity < 0) {
      throw new RangeError(ERROR_MESSAGE.TICKET_QUANTITY_RANGE_ERROR);
    }

    if (this.#insertedAmount < totalCost) {
      return null;
    }

    this.#insertedAmount -= totalCost;

    for (let i = 0; i < quantity; i++) {
      const numbers = Lotto.getRandomNumbers(6);
      const ticket = new Lotto(numbers);
      tickets.push(ticket);
    }

    return tickets;
  }
}
