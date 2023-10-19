//same as show_major.js in IfScripts, but done with a switch.

let studentName = "Brian";
let studentMajor = "CSCI";
let majorName;
let advisingLocation;

switch (studentMajor){
    case "BIOL":
    majorName = "Biology";
    advisingLocation = "Science Bldg, Room 310";
    break;

    case "CSCI":
    majorName = "Computer Science";
    advisingLocation = "Sheppard Hall, Room 314";
    break;

    case "ENG":
    majorName = "English";
    advisingLocation = "Kerr Hall, Room 201";
    break;

    case "HIST":
    majorName = "History";
    advisingLocation = "Kerr Hall, Room 114";
    break;

    case "MKT":
    majorName = "Marketing";
    advisingLocation = "Westly Hall, Room 310";
    break;

    default:
    majorName = "<unknown>";
    advisingLocation = "<unknown>";
    break;
}

console.log("Student: " + studentName);
console.log("Major: " + studentMajor);
console.log("Advising Location: " + advisingLocation);