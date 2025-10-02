// Conditional Statement
// if
// if else
// else if (if else else if)
// Nested if



// if(agar)
// let age = 18;
// if(age === 18){
//     console.log("You are allowed!");
// }


// if else
// let age = 16;
// if (age === 18){
//     console.log("You are allowed!");

// }else {
//     console.log("You are not allowed!");

// }


// else if (multple conditions)
// let marks = 90;
// if(marks >= 30 && marks <=60){
//     console.log("pass");

// }else if(marks>60 && marks <=80){
//     console.log("A");

// }else if(marks >80 && marks <=100){
//     console.log("A+");
// }else {
//     console.log("Invalid Marks");
// }



// nested if

// let user = 'guest' // admin / guest(user)
// let age = 18;
// if (age === 18) {
//     if (user === "guest") {
//         console.log("You can enroll!");

//     } else {
//         console.log("You are not elligible");

//     }
// }else{
//     console.log(`you are not allowed! You age is ${age}`);

// }


// Switch

// same as else if
// works on single or distinct variable
// let day = 8;
// switch (day) {
//     // case -- expression (logic)
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//     console.log("Invalid Day");
        


// }




let marks = 71;
switch(true){
    case (marks>30 && marks<=70):
        console.log("Pass");
        break;
    case (marks >70 && marks<=100):
        console.log("A+");
        break;
    default:
        console.log("Fail");
        
}