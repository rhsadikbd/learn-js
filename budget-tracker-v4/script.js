
/* 
 * Budget Tracker Application
 * This application allows users to input their income and expenses, and calculates their budget.
 * It provides a simple interface for users to manage their finances effectively.
 * Author: [Sadik Hasan]
 * Date: [24-02-2026]
 */

/* DOM Elements */
const userName = document.querySelector("#userName");
const totalIncome = document.querySelector("#totalIncome");
const numberOfExpense = document.querySelector("#numberOfExpense").value;
const startBudgetingBtn = document.querySelector("#startBudgeting");
const expensesSection = document.querySelector("#expensesSection");
const calculateBudgetBtn = document.querySelector("#calculateBudget");
const clearBudgetBtn = document.querySelector("#clearBudget");

/* Event Listeners */
startBudgetingBtn.addEventListener("click", getExpenses);

/* Functions */
function getExpenses() {
  // expensesSection.innerHTML = '';
  console.log(this.numberOfExpense);
  // if (this.numberOfExpense < 1 || isNaN(this.numberOfExpense)) {
  //   alert("Please enter a valid number of expense");
  //   return;
  // }

  for (let i = 1; i <= this.numberOfExpense; i++) {
    const labelInput = document.createElement("label");
    labelInput.textContent = `Expense ${i}: `;

    const inputField = document.createElement("input");
    inputField.type = "number";
    inputField.placeholder = "Enter";
    this.expensesSection.appendChild(labelInput);
    this.expensesSection.appendChild(inputField);
  }
  calculateBudgetBtn.style.display = "block";
  clearBudgetBtn.style.display = "block";
}


// function startCalculateBudget(){
//   let userBudget = {
//     userName: document.getElementById('userName').value,
//     income: parseFloat(document.getElementById('totalIncome').value),
//     expenses: [],
//     numberOfExpenses: parseInt(document.getElementById('noOfExpenses').value),
//     totalExpenses: 0,
//     tax: 0,
//     netIncome: 0,
//     balance: 0,
//     savings: 0,
//     finalStatus: 0,
//   }
//    if (!userBudget.userName || income <= 0 || isNaN(income)) {
//     alert("Enter Valid Name or Income");
//     return;
//   }
// }