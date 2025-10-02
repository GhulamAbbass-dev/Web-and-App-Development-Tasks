// P1: Print all even numbers from 1 to 10.  

// for(i=1;i<=10;i++){
//  console.log(i +=1);

 
 
// }


// P2: Print the multiplication table of Prompted value, this value will be taken by prompt (up to 10 times).  

// let Table=parseInt(prompt("Enter Your Number "));

// for( let i=1;i<=10; i++){
//     document.write(Table,"x"+i+"=",Table*i+"<br>");
// }



// P3: Find and print the sum of numbers from value a to value b , these values will be taken by prompt.
// let value_1=parseInt(prompt("Enter Your Value_1"));
// let value_2 =parseInt(prompt("Enter your Value_2"))
// let exp= value_1+value_2;
// document.write("Value_1:",value_1,"<br> Value_2:",value_2,"<br> Result:",exp);


// P4: Print numbers from 10 down to 1. 


// for(let a=10; a>=1; a--){
//     console.log(a);
    
// }


// P5: Print the square of prompted number.

// let val=parseInt(prompt("Enter Your Value for Get Square Root "));

// console.log("Square Root of :",val+"is",val**2);


// P6: Count and print how many even and odd numbers exist between Prompted value 1 and Prompted value 2. 

// let num1 = parseInt(prompt("Enter starting number:"));
// let num2 = parseInt(prompt("Enter ending number:"));

// let Count = 0;
// let oddCount = 0;


// for (let i = num1; i <= num2; i++) {
 
//     if (i % 2 === 0) {
//         Count++; 
//     } else {
//         oddCount++; 
//     }
// }
// document.write("Even numbers count: " + Count + "<br>");
// document.write("Odd numbers count: " + oddCount);




// : Print a triangle of stars using loops. 


// for(i="*"; i=20;i++){
//     document.write(i);
    
// }


// P9: Print all prime numbers between prompted value 1 and prompted value 2  

// let val=parseInt(prompt("Enter Your First Value_1"));
// let val_2 =parseInt(prompt("Enter Your Second Value_2"));

// if


// P10: Print all Odd numbers from prompted value 1 to prompted value 2 .
// let num1 = parseInt(prompt("Enter starting number:"));
// let num2 = parseInt(prompt("Enter ending number:"));

// // Step 2: Loop from num1 to num2
// for (let i = num1; i <= num2; i++) {
//     // Step 3: Check if number is odd
//     if (i % 2 !== 0) {
        // document.write(i + "<br>"); // Print odd number
//     }
// }



// let num=parseInt(prompt("Enter Your Value_1"));
// let num_2=parseInt(prompt("Enter your Second Value_2"));

// for(let i=num; i<=num_2; i++){
//     if(i % 2 !==0){
//         document.write(i + "<br>"); // Print odd number
//     }
// }






// Note: Keep asking the user to enter the correct password. Stop when they enter "admin123"

let pre_pass=123;
let pre_user="Ali";


let pass=parseInt(prompt("Enter Your Password"));
let user=prompt("Enter Your User_Name");

if( pass === pre_pass && pre_user=== user){
    alert ("successfully Login ");
}else if( pass !== pre_pass){
    alert ("Invlid Password");
}else if( user !== pre_user){
    alert(" User_Name is incorrect");
}else{
    alert("You ARE Not valid ");
}