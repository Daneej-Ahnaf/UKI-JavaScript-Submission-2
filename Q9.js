//9
//Write a function that takes an array of strings and returns a Map where the keys are the
//unique strings and the values are the number of times each string appears in the array.
//(Use Map Object)


function countOccurrences(arr) {

    let occurrenceMap = new Map();

    for (let str of arr) {

        // Check if the Map already contains the string
        if (occurrenceMap.has(str)) {

            // Increment the count for the existing string
            occurrenceMap.set(str, occurrenceMap.get(str) + 1);
        } 
        else {

            // Add the string to the Map with an initial count of 1
            occurrenceMap.set(str, 1);

        }
    }

    return occurrenceMap;
}

// Example usage
let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(strings));
// Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
 