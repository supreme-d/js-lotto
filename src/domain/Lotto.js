import { getRandomNumber } from "../utils/index";

import * as ERROR_MESSAGE from "../constants/error";

export default class Lotto {
  static MIN_NUMBER = 1;
  static MAX_NUMBER = 45;
  #numbers;

  constructor(numbers) {
    if (!Array.isArray(numbers)) {
      throw new TypeError(ERROR_MESSAGE.LOTTO_NUMBER_TYPE_ERROR);
    }

    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new TypeError(ERROR_MESSAGE.LOTTO_NUMBER_TYPE_ERROR);
    }

    if (
      numbers.some(
        (number) => number > Lotto.MAX_NUMBER || number < Lotto.MIN_NUMBER
      )
    ) {
      throw new RangeError(ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE_ERROR);
    }

    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_LENGTH_ERROR);
    }

    this.#numbers = numbers;
  }

  static getRandomNumbers(size) {
    const numbers = [];

    if (!Number.isInteger(size)) {
      throw new TypeError(ERROR_MESSAGE.RANDOM_NUMBER_TYPE_ERROR);
    }

    if (size <= 0) {
      throw new RangeError(ERROR_MESSAGE.RANDOM_NUMBER_SIZE_RANGE_ERROR);
    }

    while (numbers.length < size) {
      const number = getRandomNumber(this.MIN_NUMBER, this.MAX_NUMBER);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }

  static checkResult(myNumbers, winningNumbers, bonusNumber) {
    const winningNumberSet = new Set(winningNumbers);

    if (!winningNumbers || !bonusNumber) {
      throw new Error(ERROR_MESSAGE.INPUT_INVALID_ERROR);
    }

    if (winningNumberSet.has(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.INPUT_INVALID_ERROR);
    }

    const thisTicketSet = new Set(myNumbers);
    const duplicates = new Set();

    for (const element of thisTicketSet) {
      if (winningNumberSet.has(element)) {
        duplicates.add(element);
      }
    }

    return duplicates.size + 100 * !!thisTicketSet.has(bonusNumber);
  }

  static getPrize(score) {
    const PRIZES = new Map([
      [6, { condition: "6개 일치", prize: 2000000000 }],
      [105, { condition: "5개 일치, 보너스 볼 일치", prize: 30000000 }],
      [5, { condition: "5개 일치", prize: 1500000 }],
      [4, { condition: "4개 일치", prize: 50000 }],
      [3, { condition: "3개 일치", prize: 5000 }],
    ]);

    return PRIZES.get(score);
  }
}
