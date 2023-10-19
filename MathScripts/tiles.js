/* You have a room whose dimensions are length x width feet. You are going to tile the room and there are
12 1 foot x 1 foot tiles per box. How many boxes of tiles do you need? You cannot buy a partial box.

You want to buy 10% more tiles than you actually need to handle chips, breakage, and mess-ups. How many boxes will you buy?

SAMPLE NUMBERS
length = 12
width = 10*/

let length = 12, width = 10;

let area = length * width;

let requiredBoxes = area / 12;

let totalPurchasedBoxes = Math.ceil(requiredBoxes * 1.1);

console.log("I will buy " + totalPurchasedBoxes + " boxes.");