// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
// ** for ..(let valiable of arrey)-> value in valiable is value in array (not index)
for (let index in scores) {
  //   console.log(index);
  scores[index] = scores[index] - 10;
}
console.log(scores);

// for (let i = 0; i < scores.length; i++) {
//   // console.log(scores[i]);
//   scores[i] = scores[i] - 10;
// }
// console.log(scores);
