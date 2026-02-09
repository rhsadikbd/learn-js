let letter = prompt("Enter a letter: ");

letter = letter.toLowerCase();

// switch (letter) {
//   case "a":
//     console.log("Vowel");
//     break;
//   case "e":
//     console.log("Vowel");
//     break;
//   case "i":
//     console.log("Vowel");
//     break;
//   case "o":
//     console.log("Vowel");
//     break;
//   case "u":
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonent");
// }

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonent");
}
