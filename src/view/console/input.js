import readline from "readline";

import { output } from "./output";

export const input = {
  readLineAsync: async (query) => {
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(query, (input) => {
        rl.close();
        resolve(input);
      });
    });
  },
  prompt: async (message, options) => {
    const { validate, parse } = options;
    let result;

    while (true) {
      try {
        const answer = await input.readLineAsync(message);

        if (validate) {
          validate(answer);
        }

        result = parse ? parse(answer) : answer;
        break;
      } catch (error) {
        output.printError(error);
      }
    }

    return result;
  },
  parseAmount: (input) => {
    return Number(input);
  },
  isValidAmount: (input) => {
    if (isNaN(input)) {
      throw new Error("숫자를 입력해 주세요.");
    }

    if (input < 1000) {
      throw new Error("1000원 이상을 입력해 주세요.");
    }

    return true;
  },
  parseNumbers: (input) => {
    return input.split(",").map((number) => Number(number));
  },
  isValidNumbers: (input) => {
    // if (input.split(",").length < 6) {
    //   throw new Error("6개의 숫자를 입력해주세요.");
    // }
    // const numbers = input.split(",").map((number) => Number(number));

    // 똑같은 로직이 반복된다. 어떻게 처리할까?
    // if (numbers.some((number) => !Number.isInteger(number))) {
    //   throw new Error("1부터 45 사이의 숫자를 입력해주세요.");
    // }
    // if (numbers.some((number) => !Number.isInteger(number))) {
    //   throw new Error("1부터 45 사이의 숫자를 입력해주세요.");
    // }
    // if (
    //   numbers.some(
    //     (number) => number > Lotto.MAX_NUMBER || number < Lotto.MIN_NUMBER
    //   )
    // ) {
    //   throw new RangeError(ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR);
    // }

    // if (numbers.length !== new Set(numbers).size) {
    //   throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE_ERROR);
    // }

    // if (numbers.length !== 6) {
    //   throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_LENGTH_ERROR);
    // }

    return true;
  },
  parseBonusNumber: (input) => {
    return Number(input);
  },
  isValidBonusNumber: (input) => {
    // if (!input) {
    //   throw new Error("보너스 숫자를 입력해주세요.");
    // }
    // if (!Number.isInteger(Number(input))) {
    //   throw new Error("보너스 숫자를 입력해주세요.");
    // }
    // if (Number(input) < 1 || Number(input) > 45) {
    //   throw new Error("1부터 45 사이의 숫자를 입력해주세요.");
    // }
    // return true;

    return true;
  },
};
