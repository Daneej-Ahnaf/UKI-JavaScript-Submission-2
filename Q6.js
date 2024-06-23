//6
//Write a function that takes a date and a number of days as input and returns the new date after adding the specified number of days.

function addDays(date, days) {

    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0];

  }
  
  console.log(addDays("2022-06-15", 10));

0