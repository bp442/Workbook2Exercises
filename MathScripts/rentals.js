/*There are X people going on a tour. Charter vans seat 15 passengers each. How many vans do you need?
Vans cost $250 day to rent (including cost of the driver). How much will it cost to rent the vans? What is 
that cost if you split it per person?

Script example = 38 people.
*/

let numPeople = 38;
let numVans = Math.ceil(numPeople/15);
let totalCost = numVans * 250;
let costEach = totalCost / numPeople;

console.log("We would need " + numVans + " vans to take all " + numPeople + " people. If we split it per person, it would cost $" 
+ costEach.toFixed(2) + " for each person going.");