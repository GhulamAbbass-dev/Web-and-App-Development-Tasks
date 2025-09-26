// Conditional Statement Problems
// 1. Check if a Number is Positive, Negative, or Zero   Write a program that takes a number as input and displays whether it's positive, negative, or zero.

// let num=prompt("Enter Your Number ");
// if(num ==0){
//     alert("Number is Zero")
// }else if(num >0 ){
//     alert("postive number")
// }else if(num < 0){
//     alert("Negative Number")
// }

// //  2. Determine the Larger of Two Numbers   Create a program that accepts two numbers and prints which one is larger, or if they are equal.

// let value=prompt("Enter your First Value");
// let value_2=prompt("Enter your Second Value");

// if(value > value_2){
//     document.write(" First Value is Large: " + value + " :than second Value:"+value_2  );
// }else if(value < value_2){
//     document.write(" Second  Value is Large: " + value_2 + ":than First Value:"+value );
// }else if(value == value_2){
//     document.write("Both  Value Is Equal");
// }else{
//       document.write("Invlid Value");
// }



// 3. Even or Odd
//    Write a program that checks if a number entered by the user is even or odd.

// let a=prompt("Enter your Nummber");
// if(a%2 ==0){
//     document.write("This is Even Number:"+a);

// }else{
//     document.write("This is Odd Number:"+a);
// }












// 4. Age Group Identifier

// Write a program that categorizes the user into an age group based on their input:

// Less than 13: "Child"
// 13-19: "Teenager"
// 20-59: "Adult"
// 60 or more: "Senior Citizen"

// let age=prompt("Enter Your Age ");
// if(age <13){
//     document.write("Now You Are Fall in Child Cateriogies ")
// }else if(age >=13 && age <20){
//         document.write("Now You Are Fall in Teenager Cateriogies ")
// }else if(age >=20 && age <60 ){
//         document.write("Now You Are Fall in Adult Cateriogies ")
// }else if(age >=60){
//         document.write("Now You Are Fall in Senior Citizen Cateriogies ")
// }



// 5. Employee Bonus Calculator

// Problem Description

// Write a program to calculate an employee’s bonus based on their salary:

// If the salary is less than 50,000, the bonus is 20% of the salary.
// If the salary is between 50,000 and 100,000, the bonus is 10%.
// If the salary is greater than 100,000, there is no bonus.




// let salary=prompt("Enter Your Salary ");

// if(salary <50000){

//     const bonus=salary*0.20;
//     document.write( "Your Salay is"+salary+"So you get the 20%per Bones now your Amount is:",+(salary)+(bonus));
// }else if( salary >=50000 && salary<=100000){
//     const bonus=salary*0.10;
//     document.write("Your salary is " +salary+"So You get the 10%per Bonues Now your Amount is:",+(salary)+(bonus));
// }else if (salary > 100000){
//     document.write("Soory! You're NOT Get The Bonues")
// }else{
//     alert("Invlid Number ");
    
// }




// 6. Nested Condition for Discount

// Problem Description

// Write a program that calculates a discount based on::

// 1: Custom type:

// - Member: Additional discounts based on purchase amount:

// Below 100: 5% discount.
// Between 100 and 500: 10% discount.
// Above 500: 20% discount.
// - Non-member: Discounts based on purchase amount:

// Below 500: 2% discount.
// Above 500: 5% discount.
// 7: Display the discount amount and the final price.


// let purchase=prompt("What your purchace  enter your Name");
// let pur_price=prompt("Enter Your Price of Products");
// let result=confirm("Plz Click OK Get Receipt");


// if( result == true){
//       if (pur_price <500){
//         const discount=pur_price*0.2;
//         document.write("Product Name:"+purchase+"<br> Purchase Amount:"+pur_price+ " <br> Discount:2%OFF  <br> Final Price:",+(pur_price)-(discount) );
//       }else if(pur_price >500){
//         const discount=pur_price*0.5;
//         document.write("Product Name:"+purchase+"<br> Purchase Amount:"+pur_price+"<br> Discount:5%oFF <br> Final Price:"+(pur_price)-(discount));
//       }else{
//         document.write("Productname:"+purchase+"<br> Purchase Amount:" +pur_price+"<br> Discount:non <br> Final Price:"+pur_price);
//       }
// }else if(result == false){
//    alert("We Reaquest YOU Next Time You Pick YOUR Receipt  ");
// }
 

// 8. Rock, Paper, Scissors Game:

// Problem Description:

// Create a Rock, Paper, Scissors game where:

// 1) The user inputs their choice (rock, paper, or scissors).

// 2) The computer randomly generates its choice.

// 3) Determine the winner based on the rules:

// Rock beats Scissors.
// Scissors beats Paper.
// Paper beats Rock.
// let game=parseInt(prompt("\n1 ROCK \n2 Paper \n3 Scissors"));
//  let computer=["Rock","Paper","Scissors"];

//  const computerChoice = computer[Math.floor];

// ???????????? padding









// 9 Traffic Signal Action (Nested Ternary)

// Write a program to suggest an action based on a traffic light color:

// "Red": "Stop"
// "Yellow": "Get ready"
// "Green": "Go"
// Anything else: "Invalid signal"

// let colur=prompt("Enter Your Traffic light Color")
// let resul=colur==="red"?"Stop":colur==="yellow"?"Get Ready": colur==="green"?"Go":"Invlid Signal";

// document.write(resul);












// some task not do 








// 15 Student Performance Evaluation.

// Evaluate a student's performance based on attendance and marks:

// If attendance < 75%: "Poor attendance".
// If marks < 40: "Fail".
// If both conditions are met: "Fail due to both".
// Otherwise: "Pass".


let stu=prompt("Enter Your Name Student!");
let mark=prompt("Enter Your Marks ");
let attendance=prompt("Enter your Attendence");

if(mark<=40 && attendance<=40){
    document.write("STD:Name "+stu+"<br> STD Marks:"+mark+"<br> STD Attendence:"+attendance+"<br> Result: Fail due to both");
}else if(mark>=41 && attendance < 75){
    document.write("STD:Name "+stu+"<br> STD Marks:"+mark+"<br> STD Attendence:"+attendance+"<br> Result: Pass");


}else if(mark>85 && attendance < 85){
    document.write("STD:Name "+stu+"<br> STD Marks:"+mark+"<br> STD Attendence:"+attendance+"<br> Result: Woo BOOM");


}

