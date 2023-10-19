//use a switch statement to determine and print a department name based on a code.

let deptCode = 19;
let deptName;

switch(deptCode){
    case 1:
        deptName = "Marketing";
        break;
    case 5:
        deptName = "Human Resources";
        break;
    case 10:
        deptName = "Accounting";
        break;
    case 12:
        deptName = "Legal";
        break;
    case 18:
        deptName = "IT";
        break;
    case 20:
        deptName = "Customer Relations";
        break;
    default:
        deptName = "Invalid";
}

console.log("The department is " + deptName + ".");