console.clear();
const expensesSection = document.querySelector(".expensesSection");
const startBudgeting = document.querySelector("#start_budgeting");
const calculateBudget = document.querySelector("#calculateBudget");
startBudgeting.addEventListener("click", getExpenses);
calculateBudget.addEventListener("click", calculateTotalExpenses);

function getExpenses() {
  const noOfExpenses = document.querySelector("#noOfExpenses").value;
  if (noOfExpenses <= 0) {
    alert("Please enter a valid number of expenses.");
    return;
  }

  for (let i = 1; i <= noOfExpenses; i++) {
    const labelInput = document.createElement("label");
    labelInput.textContent = `Expense ${i}: `;

    const inputField = document.createElement("input");
    inputField.type = "number";
    inputField.id = `expense${i}`;
    inputField.placeholder = "Enter";
    expensesSection.appendChild(labelInput);
    expensesSection.appendChild(inputField);
  }
  document.querySelector("#calculateBudget").style.display = "block";
  document.querySelector("#clearBudget").style.display = "block";
}
