// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Start coding here
// console.log(companyName.length);
// for (let i = 0; i < companyName.length; i++) {
//   // console.log(companyName[i]);
//   console.log(` Number ${i + 1} character is ${companyName[i]}`);
// }
for (let numbers in companyName) {
  // console.log(numbers);
  console.log(
    ` Number ${Number(numbers) + 1} character is ${companyName[numbers]}`
  );
  //   console.log(` Number ${+numbers + 1} character is ${companyName[numbers]}`);
}
