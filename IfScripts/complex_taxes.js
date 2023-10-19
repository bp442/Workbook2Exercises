//Calculate federal tax based on the values of annual gross income (number)
//and a filing status ("Single" or "Joint")

let payRate = 12.50;
let hoursWorked = 20;
let weeklyGrossPay;
let annualGrossPay;
let taxRate;
let filingStatus = "Single";
let weeklyWitholdings;
let netPay;

if (hoursWorked > 40) {
    let overtimeHours = hoursWorked - 40;
    let overtimePay = overtimeHours * (payRate * 1.5);
    //if overtime pay is given, we can assume that they had 40 hours of regular pay.
    weeklyGrossPay = ((payRate * 40) + overtimePay).toFixed(2);
}
else {
    weeklyGrossPay = (payRate * hoursWorked).toFixed(2);
}

console.log("At a pay rate of $" + payRate.toFixed(2) + ", you earned $" + weeklyGrossPay +
    " after working " + hoursWorked + " hours in the week.");

annualGrossPay = weeklyGrossPay * 52;

if(filingStatus == "Single"){
    if(annualGrossPay < 12000){
        taxRate = 0.05;
    }
    else if(annualGrossPay >= 12000 && annualGrossPay < 25000){
        taxRate = 0.1;
    }
    else if(annualGrossPay >= 25000 && annualGrossPay < 75000){
        taxRate = 0.15;
    }
    else if(annualGrossPay >= 75000){
        taxRate = 0.2;
    }
}
else if(filingStatus == "Joint"){
    if(annualGrossPay < 12000){
        taxRate = 0;
    }
    else if(annualGrossPay >= 12000 && annualGrossPay < 25000){
        taxRate = 0.06;
    }
    else if(annualGrossPay >= 25000 && annualGrossPay < 75000){
        taxRate = 0.11;
    }
    else if(annualGrossPay >= 75000){
        taxRate = 0.2;
    }
}

taxWitholdings = (weeklyGrossPay * taxRate).toFixed(2);

netPay = (weeklyGrossPay - taxWitholdings);

console.log("Your filing status is " + filingStatus + ".");
console.log("Your tax witholdings this period is $" + taxWitholdings);
console.log("Your net pay is $" + netPay);