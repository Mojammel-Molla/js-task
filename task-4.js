// Sorting Objects
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Honda', model: 'Civic', year: 2020 },
  { make: 'Ford', model: 'Focus', year: 2015 },
];

function sortCarsByYear(cars) {
  return cars.sort((a, b) => a.year - b.year);
}

console.log(sortCarsByYear(cars));
