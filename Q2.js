//2
//You have an array of objects representing employees. Write a function to filter out employees who are older than a given age.

let employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
];

let ageLimit = 30;

function filterEmployees(employees, ageLimit) {
    return employees.filter((employee) => employee.age >= ageLimit);
}

console.log(filterEmployees(employees, ageLimit));
