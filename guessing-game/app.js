let totalWon = 0;
let totalLost = 0;

for (let i = 1; i <= 5; i++) {
  const guessNum = parseInt(prompt(`Round ${i} : Enter a number from 1 to 5`));

  const randomNum = Math.floor(Math.random() * 5 + 1);

  if (guessNum === randomNum) {
    console.log("You have won!");
    totalWon++;
  } else if (isNaN(guessNum)) {
    console.log("That wasn't a valid number!");
  } else {
    console.log(`| Lost | The number was ${randomNum}.`);
    totalLost++;
  }
}

console.log("----- Game Over -----");
console.log(`Total Wins: ${totalWon}`);
console.log(`Total Losses: ${totalLost}`);
