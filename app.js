let size = "XXL";
if(size === "XL") {
    console.log("price is Rs 250");
} 
else if(size === "L") {
    console.log("price is Rs 200");
}
else if(size === "M") {
    console.log("price is Rs 50");
}
else {
    console.log("size not available");
}
//Practice qs2
let string = "aeroplane";
if( string[0] ==='a' && string.length > 3) {
    console.log("string is good");
}
else {
    console.log("string is not good");
}
// Practice q3
if(true) {
    console.log("print true value");
}else {
    console.log("print false value");
}
if(0) {
    console.log("print true value");    
}
else {
    console.log("print false value");
}
if("") {
    console.log("string is empty");
} else {
    console.log("string is not empty");
}
let num = 3;
if(num) {
    console.log("number is defined");
}
// Practice q4
// switch statement
let color = "red";
switch(color) {
    case "yellow":
        console.log("Slow down");
        break;
    case "red":
        console.log("Stop");
        break;
        case "green":
            console.log("Go");
            break;
            default:
                console.log("light is broken");

}
//switch practice question 2
let day = 8;
switch(day) {
    case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursady");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunday");
        break;
        default:
            console.log("invalid day");
}


