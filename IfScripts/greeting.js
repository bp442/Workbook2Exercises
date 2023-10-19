//Define a variable that contains the current hour (0-23)
//Display one of the greetings below based on the current hour.

let currentTime = 17;

if(currentTime >= 0 && currentTime < 10){
    console.log("Good morning!");
}
else if(currentTime >= 10 && currentTime < 17){
    console.log("Good day!");
}
else if(currentTime >= 17){
    console.log("Good evening!");
}