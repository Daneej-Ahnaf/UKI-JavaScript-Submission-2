//7
//Write a function that calculates the number of days between two given dates.
//(Hint: use Math function in JavaScrpt & Date object to write the function)


function dateDifference(date1, date2) {

    
    let startDate = new Date(date1);
    let endDate = new Date(date2);
    
    // Calculate the difference in time (milliseconds)
    let timeDifference = endDate - startDate;
    
    // Convert the time difference from milliseconds to days
    let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    
    // Return the absolute value of the days difference
    //absolute value of a number is its non-negative value. For example, Math.abs(-5) returns 5 and Math.abs(5) returns 5.
    return Math.abs(daysDifference);

}

console.log(dateDifference("2022-06-15", "2023-06-15")); // Output: 365

