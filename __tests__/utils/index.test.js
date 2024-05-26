import { getRandomNumber } from "../../src/utils";

import { ERROR_MESSAGE } from "../../src/constants/message";

describe("랜덤 번호 생성", () => {
  it("주어진 범위 내에 있는 임의의 정수 값을 반환해야 한다.", () => {
    const min = 0;
    const max = 9;

    const randomNumber = getRandomNumber(min, max);

    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  it("입력한 최소값이 최대값보다 크다면, 오류를 반환해야 한다.", () => {
    const min = 10;
    const max = 9;

    expect(() => getRandomNumber(min, max)).toThrow(ERROR_MESSAGE.MIN_GREATER_THAN_MAX);
  });

  it("입력한 값 중에 정수가 아닌 값이 있다면, 오류를 반환해야 한다.", () => {
    const min = "abc";
    const max = 9;

    expect(() => getRandomNumber(min, max)).toThrow(ERROR_MESSAGE.NOT_AN_INTEGER);
  });
});
