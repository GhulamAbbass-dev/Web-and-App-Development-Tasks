// // operator in js

// /*What is operator in js ?

// In js operator is a special symbol or keywors used for perform operation in  one value or two value(operands);

// Example:


//          a + b : expression : a, b is operand : +symbol is operator 
//         what he do  a+b mean is  a value (+) b value 
// */
 
//         // Now Type of operator in js 
        
// // 1:) Arithmatic operator;
// //  used for mathamical operation
//     // +

//     {let a=10;
// let b=12;
// let exp=a+b;
// console.log(exp);}

// {
// let c=355;
// let d=44;
// let exp=c-d;
// console.log(exp);
// }
// {
//     let a=22;
//     let b=33;
//     let exp=a*b;
//     console.log(exp);
    
// }

// {
//     let a=3;
//     let b=5;
//     let exp= a/b;
//     console.log(exp);
    
// }

// // Modules(Remainder)

// {
//     let a =4;
//     let b= 8;
//     let exp=a%b;
//     console.log(exp);
    
// }
// {
//     let a =10;
//     let b= 7;
//     let exp=a%b;
//     console.log(exp);
    
// }



// // exponentiation


// {
//     let a=4;
//     let b=2;
//     let exp=a**b;
//     console.log(exp);
    
// }

//     // unary OPERATOR;

// {
//   let a =34;
//   console.log(a++);
 
  
  
// }



// // ASSIGMENT operator

// // =
// // let a=12;
// // console.log(a);
// //  let b= 12;
// //  console.log(b);
 

// // let c=8;
// // let d=5;

// // d += 3;

// // console.log(c+d);


// // let v=33;
// // let t=4;

// // v -=3;
// // console.log(v);




// // let n=3;
// // let u=5;
// // u *=3;
// // console.log(u);


// // let o=5;
// // let p=4;

// // p %=5;
// // console.log(p);

// // let m=4;
// // let x=6;
// // x **= 2;
// // console.log(x);

 

// // compersio operator
// // ==,!= === ,!==

// // let e=44;
// // let h=443;
// //  console.log(e==h);

// // console.log(e!=h);
// // console.log( e===h);


// // console.log(h>e);
// // console.log(h<e);
// // console.log(e>=h);
// // console.log(e<=h);

// // // logical operators

// // // AND operator
// // {
// //  let a=3;
// //  let b=44;
// // let condi=a<b;
// // let condi2=b>a;

// // console.log(condi && condi2);

// // }
// // {

// //     let n=44;
// //     let b=33;
// //     let cod= n>b;
// //     let cond2 = b<n;

// //     console.log(cod && cond2);
    
// // }

// // OR LOGICAl OPERATOR
// //  let rr=44;
// //  let tt=455;
// //  let co=rr<tt;
// //  let cc= tt<rr;

// //  console.log(co || cc);



// //  Not logical Operator
// //  let bb=22;
// //  let ccc=12;

// //  let exp=bb>ccc;

// //  console.log(!exp);
 
 

// //  conditioal operator 

// // if ,if else

//     // let ee=11;
//     // if( ee%2 ===0){
//     //     console.log(ee," it is even number");
        
//     // }else{
//     //     console.log(ee," it is odd numner");
        
//     // }

//     // Ternary Operator in js

//     let valu=parseInt(prompt("Enter Your Value"));

//    let resul= valu >=18?"adult":"Chlid";
//    console.log(resul);
   

//    let num=parseInt(prompt("Enter Your Number"));

//    let result=num %2==0 ? "Even Number":"odd Number";
//    document.write(result)





// let nn=parseInt(prompt("Enter  Your Number"));

// let sul= nn < 0 ? "Negative Number" : nn==0 ? "Zero Number": nn >=1 ? "Postive Number":"Invlid Number";
// document.write(sul);



// for( let i=1; i<=10; i++){
//     console.log("Ali");
    
// }
// for( let j=1; j<=10; j++){
//     console.log(j);
    
// }
// for ( let i=0; i<=20; i++){
//     console.log( 0%2 ===0);
    
// }

// let str = "hello";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];   // Add characters from end to start
// }

// console.log("Original:", str);
// console.log("Reversed:", reversed);
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}


 
 