//display both the smallest of three numbers and then the largest of three numbers.

let a = 17, b = 15, c = 4;
let smallest, largest;
if(a < b){
    if(a < c){
        smallest = a;
    }
}

if(b < a){
    if (b < c){
        smallest = b;
    }
}

if(c < a){
    if(c < b){
        smallest = c;
    }
}

if(a > b){
    if(a > c){
        largest = a;
    }
}

if(b > a){
    if (b > c){
        largest = b;
    }
}

if(c > a){
    if(c > b){
        largest = c;
    }
}

console.log("Out of " + a + " " + b + " " + "and " + c + ", the smallest is " + smallest +
" and the largest is " + largest + ".");
