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

  getResult(winningNumbers, bonusNumber) {
    let matchedCount = 0;
    const thisNumbersSet = new Set(this.#numbers);

    winningNumbers.forEach((winningNumber) => {
      if (thisNumbersSet.has(winningNumber)) {
        matchedCount++;
      }
    });

    return { matchedCount, hasBonusNumber: thisNumbersSet.has(bonusNumber) };
  }
}
