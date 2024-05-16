// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
// for (let i = 0; i < companyName.length; i++) {
//   console.log(companyName[i]);
//   reversedCompanyName =
//     reversedCompanyName + companyName[companyName.length - 1 - i];
// }

for (let index in companyName) {
  // console.log(companyName[index]);
  reversedCompanyName =
    reversedCompanyName + companyName[companyName.length - 1 - index];
}

console.log(reversedCompanyName);
