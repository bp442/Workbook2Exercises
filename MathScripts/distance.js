//How do you find the distance between (x1,y1) and (x2,y2)?
//let x1 = 5, y1 = 10 and x2 = 10, y2 = 20
//use pythagorean theorem

let x1 = 5, y1 = 10, x2 = 10, y2 = 20;

let distance = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));

console.log("The distance between those two points is " + distance.toFixed(2) + " km.");