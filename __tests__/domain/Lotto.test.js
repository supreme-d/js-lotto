import Lotto from "../../src/domain/Lotto";

describe("로또", () => {
  describe("로또 번호", () => {
    it("오름차순으로 정렬되어 있어야 한다", () => {
      const orderedNumbers = [1, 2, 3, 5, 10, 12];

      const lotto = new Lotto([3, 1, 2, 5, 10, 12]);

      expect(lotto.getNumbers()).toStrictEqual(orderedNumbers);
    });
  });
});
