// Function Composition
function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

const composedFunction = num => addFive(double(square(num)));

console.log(composedFunction(2));
