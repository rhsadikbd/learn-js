function saveBudgetToLocal(userBudget){
  localStorage.setItem("userBudget", JSON.stringify(userBudget));
}
function getBudgetFromLocal(){
  const getBudgetFromLocal = localStorage.getItem("userBudget");
  return getBudgetFromLocal ? JSON.parse(localStorage.getItem("userBudget")) : null;
}
function clearBudgetFromLocal(){
 localStorage.removeItem("userBudget");
  console.log("Budget data cleared from local storage")
}



// Function to get user input
function getUserInput(promptMessage, isNumber = false) {
  const userInput = prompt(promptMessage);
  return isNumber ? parseFloat(userInput) : userInput;
}

function getExpenses(numberOfExpenses) {
  const expenses = [];
  for (let i = 1; i <= numberOfExpenses; i++) {
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

function displayResult(userBudget) {
  console.log("----- Budget Tracker App -----");
  console.log(`User: ${userBudget.userName}`);
  console.log(`Total Income: $${userBudget.income}`);
  console.log(`Total Expenses: $${userBudget.totalExpenses}`);
  console.log(`Tax deducted (10%): $${userBudget.tax}`);
  console.log(`Net income after tax: $${userBudget.netIncome}`);
  console.log(`Remaining balance: $${userBudget.balance}`);
  console.log(`Savings (20% of balance): $${userBudget.savings}`);
  console.log(userBudget.finalStatus);

  const overSpendingMessage = checkOverSpending(userBudget);
  if (overSpendingMessage) {
    console.log(overSpendingMessage);
  }

  console.log("Expense Breakdown: ");
  for (let index = 0; index < userBudget.expenses.length; index++) {
    console.log(`Expense ${index + 1} : $${userBudget.expenses[index]}`);
  }
}
function checkOverSpending(userBudget) {
  return userBudget.totalExpenses > userBudget.income
    ? "Warning! you are spending more than your income"
    : "";
}

function getFinancialStatus(savings) {
  if (savings >= 1000) {
    finalStatus = "Excellent! you are saving well!";
  } else if (savings >= 500) {
    finalStatus = "Good! you have a decent savings amount.";
  } else if (savings >= 100) {
    finalStatus = "Needs improvement. consider reducing expense";
  } else {
    finalStatus = "Critical! your savings are too low!";
  }
  return finalStatus;
}

function calculatedBudget(userBudget) {
  userBudget.expenses = getExpenses(userBudget.numberOfExpenses);
  userBudget.totalExpenses = calculateTotalExpenses(userBudget.expenses);
  userBudget.tax = calculateTax(userBudget.income, 0.1);
  userBudget.netIncome = calculateNetIncome(userBudget.income, userBudget.tax);
  userBudget.balance = calculateBalance(
    userBudget.netIncome,
    userBudget.totalExpenses,
  );
  userBudget.savings = calculateSavings(userBudget.balance, 0.2);

  userBudget.finalStatus = getFinancialStatus(userBudget.savings);
  saveBudgetToLocal(userBudget);
}

// Main function to the run the budget tracker
function runBudgettracker() {
  let userBudget = getBudgetFromLocal();
  if(userBudget){
    console.log("Previous budget data loaded from local storage");
    displayResult(userBudget);
  }else{
    userBudget = {
    userName: "",
    income: 0,
    expenses: [],
    numberOfExpenses: 0,
    totalExpenses: 0,
    tax: 0,
    netIncome: 0,
    balance: 0,
    savings: 0,
    finalStatus: 0,
  };

  userBudget.userName = getUserInput("Enter your name: ");
  userBudget.income = getUserInput("Enter your total income: ", true);
  userBudget.numberOfExpenses = getUserInput(
    "How many expense do you have?",
    true,
  );

  if (
    isNaN(userBudget.income) ||
    isNaN(userBudget.numberOfExpenses) ||
    userBudget.income <= 0 ||
    userBudget.numberOfExpenses < 0
  ) {
    console.log("Invalid input. please enter valid numbers");
  } else {
    calculatedBudget(userBudget);
    displayResult(userBudget);
  }
  }
  
}

runBudgettracker();
