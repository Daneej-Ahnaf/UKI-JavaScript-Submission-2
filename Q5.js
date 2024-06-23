//5
//Write a function that takes a birthdate as input and calculates the person's age.

function calculateAge(birthdate) {
    let birthDate = new Date(birthdate);
    let today = new Date();

    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();

    let age = currentYear - birthYear;

    // Adjust if the birth date hasn't occurred yet this year
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    return age;
}

console.log(calculateAge("2001-10-16"));  
