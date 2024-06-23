//8
//Suppose you are developing a web application that allows users to set and retrieve their preferences. 
//Use a Map to store user preferences, and write functions to set a preference and get a preference by key.


let userPreferences = new Map();

function setPreference(key, value) {
    
    // Use the set method to store the key-value pair in the Map
    userPreferences.set(key, value);
}

function getPreference(key) {
    
    // Use the get method to retrieve the value associated with the key
    return userPreferences.get(key);
}


setPreference("theme", "dark");
setPreference("fontSize", "16px");

console.log(getPreference("theme")); // Output: dark
console.log(getPreference("fontSize")); // Output: 16px


// Map Object: Used to store key-value pairs.
