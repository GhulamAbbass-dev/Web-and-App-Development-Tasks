// Currency Converter

// Create a function expression that converts USD to PKR (or any currency).
// let firs=parseInt(prompt("WELCOME OUR Company \n we provide you solution \n1 convert USDT into PKR \n2 PKR into USDT "))
// if(firs==1){
//     let Amount=parseInt(prompt("Enter your Dollars "));
// let covert = function(a){
//     return a*281.41;


// }
// document.write(covert(Amount));


// } else if( firs ==2){
//     let amount=parseInt(prompt(" Enter Your PKR "));
//     let convet= function(p) {
//         return p*0.0036;
        
//     }
// document.write(convet(amount))
// }






// 2) Arrow function Problems:

// P1: Write an arrow function that doubles the given number

// P2: Convert Celsius to Fahrenheit 

// Formula: F = C * 9/5 + 32

// P3: Check if Number is Positive
let user=parseInt(prompt("Enter Your Celcuis Number"));
if(user>=1){

const form=(c)=>{

   return c* 9/5 + 32;
}
document.write(form(user));
}else{
    alert(" Invlid Number");
}



