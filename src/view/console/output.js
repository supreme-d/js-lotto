export const output = {
  printTickets: (tickets) => {
    console.log(`${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => {
      console.log(ticket.getNumbers());
    });
  },
  printError: (error) => {
    console.error(`Error: ${error.message}`);
  },
};
