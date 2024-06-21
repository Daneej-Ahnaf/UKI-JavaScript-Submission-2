//4
//Write a function to get the current date and time in the format YYYY-MM-DD HH:MM:SS.
//(Hint: Use Date object in JavaScript)


function getCurrentDateTime() {
    
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;    

 }


 console.log(getCurrentDateTime());  