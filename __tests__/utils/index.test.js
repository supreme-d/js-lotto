import { RANDOM_NUMBER_RANGE_ERROR } from "../../src/constants/error";
import { getRandomNumber } from "../../src/utils";

describe("getRandomNumber()", () => {
  it("should return a random number in a given range", () => {
    const min = 0;
    const max = 9;

    const randomNumber = getRandomNumber(min, max);

    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  it("should throw an error if one of the inputs is not a number", () => {
    const min = "abcd";
    const max = 9;

    expect(() => getRandomNumber(min, max)).toThrow(TypeError);
  });

  it("should throw an error if min value is greater than max value", () => {
    const min = 9;
    const max = 8;

    expect(() => getRandomNumber(min, max)).toThrow(RANDOM_NUMBER_RANGE_ERROR);
  });
});
