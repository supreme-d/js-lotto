import purchaseAmountValidator from "../../src/validators/purchaseAmountValidator";

import CONFIG from "../../src/constants/config";
import { ERROR_MESSAGE } from "../../src/constants/message";

describe("구매 금액 유효성 검사", () => {
  it("입력값이 0보다 작거나 같다면, 오류를 발생시켜야 한다.", () => {
    const input = 0;

    expect(() => purchaseAmountValidator.validate(input)).toThrow(ERROR_MESSAGE.NOT_POSITIVE);
  });

  it("입력값이 정수가 아니라면, 오류를 발생시켜야 한다.", () => {
    const input = "";

    expect(() => purchaseAmountValidator.validate(input)).toThrow(ERROR_MESSAGE.NOT_AN_INTEGER);
  });
});
