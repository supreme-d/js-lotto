import CONFIG from "../constants/config";
import { ERROR_MESSAGE } from "../constants/message";

// TODO: 유틸로 빼면 되지 않나?
const purchaseAmountValidator = {
  validate(amount) {
    this.isPositive(amount);
    this.isInteger(amount);
  },
  isPositive(amount) {
    if (amount < 0) {
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE);
    }
  },
  isInteger(amount) {
    if (!Number.isInteger(amount)) {
      throw new Error(ERROR_MESSAGE.NOT_AN_INTEGER);
    }
  },
};

export default purchaseAmountValidator;
