//Create a script to determine whether a given year is a leap year in the Gregorian
//calendar. You will need to do a little research to determine what makes a year a
//leap year.

//the year that we are testing
let givenYear = 2024;

let isLeapYear = false;

//if the year is divisible by 4, it COULD be a leap year.
if((givenYear % 4)== 0){

//if the year is an end-of-century year, it needs another check
    if((givenYear % 100 == 0)){

        if(givenYear % 400 == 0){
            //If the year IS an end-of-century year, and IS divisible by 400
            isLeapYear = true;
        }
        else{
            //If the year IS an end-of-century year, but IS NOT divisible by 400
            isLeapYear = false;
        }
    }
    //The year is NOT an end-of-century year, and IS divisible by 4
    else{
        isLeapYear = true;
    }
}
//The year is NOT divisible by 4, it CANNOT be a leap year.
else{
    isLeapYear = false;
}

//Different outputs based on isLeapYear and if it's before or after 2023.
if(isLeapYear == true && givenYear >= 2023){
    console.log("The year " + givenYear + " is a leap year.");
}
else if(isLeapYear == true && givenYear < 2023){
    console.log("The year " + givenYear + " was a leap year.");
}
else if(isLeapYear == false && givenYear >= 2023){
    console.log("The year " + givenYear + " is not a leap year.");
}
else if(isLeapYear == false && givenYear < 2023){
    console.log("The year " + givenYear + " was not a leap year.");
}