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
  for (let i = 0; i <= expenses.length; index++) {
    totalExpenses += expenses[index];
  }
  return totalExpenses;
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
    const tax = income * 0.1;
    const netIncome = income - tax;
    const balance = netIncome - totalExpenses;
    const savings = balance * 0.2;

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

    let overSpendingMessage = "";
    if (totalExpenses > income) {
      overSpendingMessage = "Warning! you are spending more than your income";
    }

    console.log("----- Budget Tracker App -----");
    console.log(`User: ${userName}`);
    console.log(`Total Income: $${income}`);
    console.log(`Total Expenses: $${totalExpenses}`);
    console.log(`Tax deducted (10%): $${tax}`);
    console.log(`Net income after tax: $${netIncome}`);
  }
}

runBudgettracker();
