import CONFIG from "../constants/config";

export default class LottoKiosk {
  #insertedAmount;

  constructor() {
    this.#insertedAmount = 0;
  }

  insertMoney(amount) {
    this.#insertedAmount = amount;
  }

  issueTickets() {
    return [1, 2, 3];
  }
}
