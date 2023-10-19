//Create a script to calculate gross pay given the variables payRate and hoursWorked.
//If the person works more than 40 hours, pay the overtime hours at 1.5x the regular rate.

let payRate = 12.50;
let hoursWorked = 20;
var grossPay;

if (hoursWorked > 40) {
    let overtimeHours = hoursWorked - 40;
    let overtimePay = overtimeHours * (payRate * 1.5);
    //if overtime pay is given, we can assume that they had 40 hours of regular pay.
    grossPay = ((payRate * 40) + overtimePay).toFixed(2);
}
else {
    grossPay = (payRate * hoursWorked).toFixed(2);
}

console.log("At a pay rate of $" + payRate.toFixed(2) + ", you earned $" + grossPay+
    " after working " + hoursWorked + " hours.");