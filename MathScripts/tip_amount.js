//How do you calculate the tip amount of a food bill given the tip percentage?
//Sample tip percentage is 15%

var foodBill = 350;
var tipPercent = .15;

var totalTip = foodBill * tipPercent;

console.log("The tip on a $" + foodBill + " food bill is $" + totalTip.toFixed(2));