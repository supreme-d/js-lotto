import Lotto from "./domain/Lotto";
import LottoMachine from "./domain/LottoMachine";
import { input } from "./view/console/input";
import { output } from "./view/console/output";

const TICKET_PRICE = 1000;

const play = async () => {
  try {
    const amount = await input.prompt("구입금액을 입력해 주세요.", {
      parse: input.parseAmount,
      validate: input.isValidAmount,
    });

    const lottoMachine = new LottoMachine(TICKET_PRICE);
    lottoMachine.insertMoney(amount);

    const ticketNumber = Math.floor(amount / TICKET_PRICE);
    const tickets = lottoMachine.buyTickets(ticketNumber);
    output.printTickets(tickets);

    const winningNumbers = await input.prompt("당첨 번호를 입력해주세요.", {
      parse: input.parseNumbers,
      validate: input.isValidNumbers,
    });
    const bonusNumber = await input.prompt("보너스 번호를 입력해주세요.", {
      parse: input.parseBonusNumber,
      validate: input.isValidBonusNumber,
    });

    const totalResult = {
      3: 0,
      4: 0,
      5: 0,
      105: 0,
      6: 0,
    };

    tickets.forEach((ticket) => {
      const numbers = ticket.getNumbers();
      const result = Lotto.checkResult(numbers, winningNumbers, bonusNumber);
      if (result in totalResult) {
        totalResult[result]++;
      }
    });

    map.forEach((value, key) => {
      console.log(
        `${Lotto.PRIZES[key].condition} (${Lotto.PRIZES[key].prize}원) - ${value}개`
      );
      if (value) {
        total += Lotto.PRIZES[key].prize;
      }
    });

    // 전체 결과 반환
  } catch (error) {
    console.error(error.message);
  }
};

play();

// const TICKET_PRICE = 1000;
// const AMOUNT = 100000;
// const BONUS_NUMBER = 10;
// const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];

// const lottoMachine = new LottoMachine(TICKET_PRICE);
// lottoMachine.insertMoney(AMOUNT);
// const ticketNumber = Math.floor(AMOUNT / TICKET_PRICE);
// const tickets = lottoMachine.buyTickets(ticketNumber);

// let lotto = { 3: 0, 4: 0, 5: 0, 105: 0, 6: 0 };

// const refund = 2000;
// const netAmount = AMOUNT - refund;
// let winPrice = 0;

// let total = 0;

// tickets.forEach((ticket) => {
//   const result = ticket.checkResult(WINNING_NUMBERS, BONUS_NUMBER);

//   if (result) {
//     map.set(result, map.get(result) + 1);
//   }
// });

// console.log(total);
