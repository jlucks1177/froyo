// prompts user for froyo flavors and outputs their input into console
const userInput = prompt("Enter froyo flavors seperated by a single comma:");
// console.log(userInput);

// parses the prompt input into a specific array and outputs that array into the console
const flavorArray = userInput.split(",");
// console.log(flavorArray);

// building an object that tracks which flavors have been counted
function countFlavors(flavors) {
  const flavorCounts = {};
  for (const flavor of flavors) {
    if (flavorCounts[flavor]) {
      flavorCounts[flavor] += 1;
    } else {
      flavorCounts[flavor] = 1;
    }
  }
  return flavorCounts;
}
// console.log(countFlavors(flavorArray));

// I wanted to pretty up the output
function displayOrder(counts) {
  console.log("Your Froyo Order:");
  for (const flavor in counts) {
    console.log(`${flavor}`, ":", `${counts[flavor]}`);
  }
}

// The output!
const flavorCounts = countFlavors(flavorArray);
displayOrder(flavorCounts);
