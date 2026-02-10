function highestScorer(playersInfo) {
  const scores = playersInfo.map((player) => player[1]);
  console.log(scores);
  const hight = Math.max(...scores);
  console.log(hight);
}

const playersInfo = [
  ["Ashraful", 95],
  ["Rofik", 75],
  ["Tamim", 40],
  ["Mushfiq", 155],
  ["Sujon", 10],
];

highestScorer(playersInfo);
