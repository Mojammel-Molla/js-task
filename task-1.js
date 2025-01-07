// Array Filtering and Mapping

const people = [
  { name: 'John', age: 30, gender: 'male' },
  { name: 'Jane', age: 25, gender: 'female' },
  { name: 'Mike', age: 35, gender: 'male' },
  { name: 'Sara', age: 28, gender: 'female' },
];

function filterAndMap(people) {
  return people
    .filter(person => person.gender !== 'female')
    .map(person => person.name);
}

console.log(filterAndMap(people));
