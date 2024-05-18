import Lotto from "../../src/domain/Lotto";

import * as ERROR_MESSAGE from "../../src/constants/error";

describe("Lotto", () => {
  it("should throw an error if numbers are not an array of integers", () => {
    const numbers = "1, 2, 3, 4, 5, 6";

    expect(() => new Lotto(numbers)).toThrow(ERROR_MESSAGE.LOTTO_NUMBER_TYPE_ERROR);
  });

  it("should throw an error if any number is not an integer", () => {
    const numbers = [1.01, 1, 2, 3, 4, 5];

    expect(() => new Lotto(numbers)).toThrow(ERROR_MESSAGE.LOTTO_NUMBER_TYPE_ERROR);
  });

  it("should throw an error if any number is out of range", () => {
    const numbers = [1, 2, 3, 4, 5, Lotto.MAX_NUMBER + 1];

    expect(() => new Lotto(numbers)).toThrow(ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR);
  });

  it("should have unique numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 5];

    expect(() => new Lotto(numbers)).toThrow(ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE_ERROR);
  });

  it("should have 6 numbers", () => {
    const numbers = [1, 2, 3, 4, 5];

    expect(() => new Lotto(numbers)).toThrow(ERROR_MESSAGE.LOTTO_NUMBER_LENGTH_ERROR);
  });
});
