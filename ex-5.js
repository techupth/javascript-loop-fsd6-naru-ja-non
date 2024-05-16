// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Start coding here
for (let letter in companyName) {
  let number = Number(letter) + 1;
  console.log(`Number ${number} character is ${companyName[letter]}`);
}
