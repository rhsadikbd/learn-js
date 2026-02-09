const income = parseFloat(prompt("Enter your total income: "));
const numOfExpense = parseInt(prompt("How many expense do you have? "));

if (isNaN(income) || isNaN(numOfExpense) || income <= 0 || numOfExpense < 0) {
  console.log("Invalid input. please enter valid numbers");
} else {
  let totalExpense = 0;

  for (let i = 1; i <= numOfExpense; i++) {
    let expense = parseFloat(prompt(`${i}: `));

    if (isNaN(expense) || expense < 0) {
      console.log(`Invalid input for expense ${i}, setting is it $0`);
      expense = 0;
    }
    totalExpense += expense;
  }
}

const tax = income * 0.1;
const netIncome = income - tax;
console.log(`Total Expense ${totalExpense}`);
console.log(`Tax Deduction (10%) ${tax}`);
console.log(`Net income after tax: ${netIncome}`);
console.log(`Remaining Balance:  ${balance}`);
console.log(`Savings (20% of Balance): ${savings}`);
