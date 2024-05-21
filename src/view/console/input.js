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
    return input;
  },
};
