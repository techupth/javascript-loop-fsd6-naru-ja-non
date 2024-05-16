// Exercise #3: Find a Minimum Score
let studentScores = [100, 20, 3, 1000];
let minScore;
// Start coding here

minScore = Infinity;

for (let score of studentScores) {
  if (score < minScore) {
    minScore = score;
  }
}

console.log(minScore);
