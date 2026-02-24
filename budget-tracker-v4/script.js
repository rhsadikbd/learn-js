const noOfExpenses = document.querySelector("#noOfExpenses").value;
const expensesSection = document.querySelector(".expensesSection");
const startBudgeting = document.querySelector("#start_budgeting");
const calculateBudget = document.querySelector("#calculateBudget");
const userNameInput = document.querySelector("#userName");
const incomeInput = document.querySelector("#totalIncome");
startBudgeting.addEventListener("click", getExpenses);
// calculateBudget.addEventListener("click", startCalculateBudget);

function getExpenses() {
  for (let i = 1; i <= noOfExpenses; i++) {
    const labelInput = document.createElement("label");
    labelInput.textContent = `Expense ${i}: `;

    const inputField = document.createElement("input");
    inputField.type = "number";
    inputField.placeholder = "Enter";
    expensesSection.appendChild(labelInput);
    expensesSection.appendChild(inputField);
  }
  document.querySelector("#calculateBudget").style.display = "block";
  document.querySelector("#clearBudget").style.display = "block";
}

// function startCalculateBudget() {
//   let userBudget = {
//     userName: userNameInput.value,
//     income: parseInt(incomeInput.value),
//     expenses: [],
//     numberOfExpenses: noOfExpenses,
//     totalExpenses: 0,
//     tax: 0,
//     netIncome: 0,
//     balance: 0,
//     savings: 0,
//     finalStatus: 0,
//   };
// }
