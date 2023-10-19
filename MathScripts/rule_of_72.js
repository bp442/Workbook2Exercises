//How long will it take a savings account worth X to double in value given an interest rate of IR?
//sample worth is 500000, sample interest rate is 5%

var currentWorth = 500000;

var interestRate = 5; //Whole number %

var time = 72 / interestRate;

console.log("At a " + interestRate + "% interest rate, your savings account of $" +
    currentWorth.toFixed(2) + " will be worth $" + (currentWorth * 2).toFixed(2) + 
    " in " + time.toFixed(1) + " years.");