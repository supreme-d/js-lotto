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

    return numbers;
  }
}
