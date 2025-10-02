// P1: Check Even or OddWrite a function checkEvenOdd(num) that prints:

// "Even" if the number is even
// "Odd" if the number is odd

// function number(value){
//     if(value %2 ==0){
//         console.log( value,"This is Even Number");
        
//     }else{
//         console.log(value,"This is Odd Number");
        
//     }
// }

// number(33);


// P2: Calculate Square 

// Create a function square(n) that returns the square of a number.

// function square(n){
//      return n*n
    
// }
// console.log(square(2));


// P3: Print Table of a Number

//   Create a function printTable(n) that prints the multiplication table of the number up to 10. 



// function Table(N){
//     let result=""
//     for(let i=1; i<=10; i++){
//         result += N + " x " + i + " = " + (N * i) + "\n";
//     }
//     return result
// }

// console.log(Table(4));
// function table(n){
//     let result="";
//     for(let i=1; i<=10; i++){
//         result+= n+"x"+i+"="+(n*i)+"\n";
//     }
//     return result
// }
// console.log(table(6));


// P4: Find the Maximum of Two NumbersCreate a function findMax(a, b) that returns the larger of two numbers.

// function finmax(a, b){
//     if(a>b && b<a){
//         console.log(a+"a is larger number from b "+b);
        
//     }else{
//         console.log( b+" is the larger number than a"+a);
        
//     }
    
// }

// finmax(12,11);


// P5:  Check if Number is Positive, Negative, or ZeroWrite a function checkNumber(num) that logs

// "Positive" if the number is greater than 0
// "Negative" if less than 0
// "Zero" if equal to 0



function check(n){
    if(n<0){
        console.log(n+" Number is Negative ");
        
    }else if( n===0){
console.log(n+" NUmber is zero ");


    }else{
        console.log(n+"number is positive");
        
    }
}

 check(1);