export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.#sortNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  #sortNumbers(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }
}
