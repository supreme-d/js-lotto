import { NUMBER_OF_LOTTO_NUMBERS } from "../src/js/constants";
import { chooseSome } from "../src/js/utils";
import { Lotto } from "../src/js/domain/Lotto";

test.each(Array.from({ length: 20 }))(
  "chooseSome function should choose correct number of elements from the given array",
  () => {
    const chosen = chooseSome(Lotto.ALL_LOTTO_NUMBERS, NUMBER_OF_LOTTO_NUMBERS);
    expect(chosen.length).toEqual(NUMBER_OF_LOTTO_NUMBERS);
    chosen.forEach((number) => {
      expect(Lotto.ALL_LOTTO_NUMBERS.includes(number)).toBe(true);
    });
  }
);
