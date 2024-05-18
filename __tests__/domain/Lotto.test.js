import Lotto from "../../src/domain/Lotto";

import * as ERROR_MESSAGE from "../../src/constants/error";

describe("Lotto", () => {
  describe("constructor", () => {
    it("should throw an error if numbers are not an array of integers", () => {
      const numbers = "1, 2, 3, 4, 5, 6";

      expect(() => new Lotto(numbers)).toThrow(
        ERROR_MESSAGE.LOTTO_NUMBER_TYPE_ERROR
      );
    });

    it("should throw an error if any number is not an integer", () => {
      const numbers = [1.01, 1, 2, 3, 4, 5];

      expect(() => new Lotto(numbers)).toThrow(
        ERROR_MESSAGE.LOTTO_NUMBER_TYPE_ERROR
      );
    });

    it("should throw an error if any number is out of range", () => {
      const numbers = [1, 2, 3, 4, 5, Lotto.MAX_NUMBER + 1];

      expect(() => new Lotto(numbers)).toThrow(
        ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR
      );
    });

    it("should have unique numbers", () => {
      const numbers = [1, 2, 3, 4, 5, 5];

      expect(() => new Lotto(numbers)).toThrow(
        ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE_ERROR
      );
    });

    it("should have 6 numbers", () => {
      const numbers = [1, 2, 3, 4, 5];

      expect(() => new Lotto(numbers)).toThrow(
        ERROR_MESSAGE.LOTTO_NUMBER_LENGTH_ERROR
      );
    });
  });

  describe("getRandomNumbers()", () => {
    it("should throw an error if the input is not an integer", () => {
      const size = "123";

      expect(() => Lotto.getRandomNumbers(size)).toThrow(
        ERROR_MESSAGE.RANDOM_NUMBER_TYPE_ERROR
      );
    });

    it("should throw an error if the input is smaller or equal than 0", () => {
      const size = 0;

      expect(() => Lotto.getRandomNumbers(size)).toThrow(
        ERROR_MESSAGE.RANDOM_NUMBER_SIZE_RANGE_ERROR
      );
    });

    it("should return an array of numbers", () => {
      const size = 6;

      const numbers = Lotto.getRandomNumbers(size);

      expect(numbers.length).toBe(size);
    });
  });

  describe("checkResult()", () => {
    it("should return 5 when ticket has three matching numbers", () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 10;
      const ticket = new Lotto([4, 5, 6, 14, 15, 16]);

      const result = ticket.checkResult(winningNumbers, bonusNumber);

      expect(result).toBe(5);
    });

    it("should return 2 when ticket has give matching numbers including the bonus number", () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 10;
      const ticket = new Lotto([1, 2, 3, 4, 5, 10]);

      const result = ticket.checkResult(winningNumbers, bonusNumber);

      expect(result).toBe(2);
    });

    it("should return -1 when ticket has no matching numbers", () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 10;
      const ticket = new Lotto([11, 12, 13, 14, 15, 16]);

      const result = ticket.checkResult(winningNumbers, bonusNumber);

      expect(result).toBe(-1);
    });

    it("should throw an error if any input is missing", () => {
      const ticket = new Lotto([11, 12, 13, 14, 15, 16]);

      expect(() => ticket.checkResult()).toThrow(
        ERROR_MESSAGE.INPUT_INVALID_ERROR
      );
    });
  });
});
