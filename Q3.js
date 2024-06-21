//3
//Given a 2D array representing a list of student names in different classes, write a function to check if there are any duplicate names across all classes.
//(Specifically use JavaScript Set Objects)

let classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
];

function checkDuplicates(classes) {
    let nameSet = new Set();

    for (let classList of classes) {
        for (let name of classList) {
            if (nameSet.has(name)) {
                return true; // Duplicate found
            }
            nameSet.add(name);
        }
    }

    return false; // No duplicates found
}

console.log(checkDuplicates(classes)); // Output: true
