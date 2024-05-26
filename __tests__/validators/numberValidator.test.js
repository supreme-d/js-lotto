import numberValidator from "../../src/validators/numberValidator";

import CONFIG from "../../src/constants/config";
import { ERROR_MESSAGE } from "../../src/constants/message";

describe("로또 번호 유효성 검사", () => {
  it("입력값이 정수가 아니라면, 오류를 발생시켜야 한다.", () => {
    const input = "";
    expect(() => numberValidator.validate(input)).toThrow(ERROR_MESSAGE.NOT_AN_INTEGER);
  });

  it("입력값이 1에서 45 사이를 벗어난다면, 오류를 발생시켜야 한다.", () => {
    const input = 46;
    expect(() => numberValidator.validate(input, CONFIG.MIN_LOTTO_NUMBER, CONFIG.MAX_LOTTO_NUMBER)).toThrow(
      ERROR_MESSAGE.OUT_OF_RANGE,
    );
  });
});
