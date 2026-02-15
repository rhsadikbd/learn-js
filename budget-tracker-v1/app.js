// Function to get user input
function getUserInput(promptMessage, isNumber = false) {
  const userInput = prompt(promptMessage);
  return isNumber ? parseFloat(userInput) : userInput;
}

function getExpenses(numberOfExpense) {
  const expenses = [];
  for (let i = 1; i <= numberOfExpense; i++) {
    let expense = getUserInput(`Enter expense ${i}: `, true);
    if (isNaN(expense) || expense < 0) {
      console.log(`Invalid input for expense ${i}, setting it $0`);
      expense = 0;
    }
    expenses.push(expense);
  }
  return expenses;
}

function calculateTotalExpenses(expenses) {
  let totalExpenses = 0;
  for (let index = 0; index < expenses.length; index++) {
    totalExpenses += expenses[index];
  }
  return totalExpenses;
}

function calculateTax(income, taxrate) {
  return income * taxrate;
}
function calculateNetIncome(income, tax) {
  return income - tax;
}
function calculateBalance(netIncome, totalExpenses) {
  return netIncome - totalExpenses;
}
function calculateSavings(balance, savingsRate) {
  return balance * savingsRate;
}

function checkOverSpending(income, totalExpenses) {
  return totalExpenses > income
    ? "Warning! you are spending more than your income"
    : "";
}

function getFinancialStatus(savings) {
  let finalStatus = "";
  if ((savings) => 1000) {
    finalStatus = "Excellent! you are saving well!";
  } else if ((savings) => 500) {
    finalStatus = "Good! you have a decent savings amount.";
  } else if ((savings) => 100) {
    finalStatus = "Needs improvement. consider reducing expense";
  } else {
    finalStatus = "Critical! your savings are too low!";
  }
  return finalStatus;
}

function displayResult(
  userName,
  income,
  totalExpenses,
  tax,
  netIncome,
  balance,
  savings,
  finalStatus,
) {
  console.log("----- Budget Tracker App -----");
  console.log(`User: ${userName}`);
  console.log(`Total Income: $${income}`);
  console.log(`Total Expenses: $${totalExpenses}`);
  console.log(`Tax deducted (10%): $${tax}`);
  console.log(`Net income after tax: $${netIncome}`);
  console.log(`Remaining balance: $${balance}`);
  console.log(`Savings (20% of balance): $${savings}`);
  console.log(finalStatus);
  const overSpendingMessage = checkOverSpending(income, totalExpenses);
  if (overSpendingMessage) {
    console.log(overSpendingMessage);
  }
}

// Main function to the run the budget tracker
function runBudgettracker() {
  const userName = getUserInput("Enter your name: ");
  const income = getUserInput("Enter your total income: ", true);
  const numberOfExpense = getUserInput("How many expense do you have", true);

  if (
    isNaN(income) ||
    isNaN(numberOfExpense) ||
    income <= 0 ||
    numberOfExpense < 0
  ) {
    console.log("Invalid input. please enter valid number");
  } else {
    const expenses = getExpenses(numberOfExpense);
    const totalExpenses = calculateTotalExpenses(expenses);
    const tax = calculateTax(income, 0.1);
    const netIncome = calculateNetIncome(income, tax);
    const balance = calculateBalance(netIncome, totalExpenses);
    const savings = calculateSavings(balance, 0.2);

    let finalStatus = getFinancialStatus(savings);

    displayResult(
      userName,
      income,
      totalExpenses,
      tax,
      netIncome,
      balance,
      savings,
      finalStatus,
    );
  }
}

runBudgettracker();
