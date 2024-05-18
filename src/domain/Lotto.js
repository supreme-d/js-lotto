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
}
