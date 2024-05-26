import Lotto from "../../src/domain/Lotto";

describe("로또", () => {
  describe("로또 번호", () => {
    it("오름차순으로 정렬되어 있어야 한다", () => {
      const orderedNumbers = [1, 2, 3, 5, 10, 12];

      const lotto = new Lotto([3, 1, 2, 5, 10, 12]);

      expect(lotto.getNumbers()).toStrictEqual(orderedNumbers);
    });
  });

  describe("당첨 결과 확인", () => {
    it("당첨 번호와 일치하는 로또 번호의 개수와 보너스 번호 포함 여부를 반환해야 한다", () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;

      const lotto = new Lotto([1, 2, 8, 9, 10, 11]);
      const result = lotto.getResult(winningNumbers, bonusNumber);

      expect(result.matchedCount).toBe(2);
      expect(result.hasBonusNumber).toBeFalsy();
    });
  });
});
