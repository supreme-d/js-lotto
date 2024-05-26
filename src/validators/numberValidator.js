import CONFIG from "../constants/config";
import { ERROR_MESSAGE } from "../constants/message";

const numberValidator = {
  validate(number) {
    this.isInteger(number);
    this.isWithinRange(number, CONFIG.MIN_LOTTO_NUMBER, CONFIG.MAX_LOTTO_NUMBER);
  },
  isInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.NOT_AN_INTEGER);
    }
  },
  isWithinRange(number, minValue, maxValue) {
    if ((number < minValue) | (number > maxValue)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  },
};

export default numberValidator;
