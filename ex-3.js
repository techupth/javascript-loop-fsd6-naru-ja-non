// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = Infinity;
for (let studentScores of scores) {
  //   console.log(studentScores);
  if (studentScores < minScore) {
    minScore = studentScores;
  }
}

// minScore = Math.min(...scores);

console.log(minScore);
