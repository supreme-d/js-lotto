import { ERROR_MESSAGE } from "../constants/message";

export const getRandomNumber = (min, max) => {
  if (!Number.isInteger(min) || !Number.isInteger(min)) {
    throw new TypeError(ERROR_MESSAGE.NOT_AN_INTEGER);
  }

  if (min > max) {
    throw new Error(ERROR_MESSAGE.MIN_GREATER_THAN_MAX);
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};
