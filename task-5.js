// Find and Modify
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Mike', age: 35 },
];

function findAndModify(people, name, newAge) {
  const person = people.find(p => p.name === name);
  if (person) {
    person.age = newAge;
  }
  return people;
}

console.log(findAndModify(people, 'Jane', 26));
