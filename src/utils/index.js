import {
  RANDOM_NUMBER_RANGE_ERROR,
  RANDOM_NUMBER_TYPE_ERROR,
} from "../constants/error";

export const getRandomNumber = (min, max) => {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new TypeError(RANDOM_NUMBER_TYPE_ERROR);
  }
  if (min > max) {
    throw new Error(RANDOM_NUMBER_RANGE_ERROR);
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};
