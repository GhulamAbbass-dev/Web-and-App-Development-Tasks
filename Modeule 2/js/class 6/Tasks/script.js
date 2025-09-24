// // Task: 1
// // Create variables for each primitive type (string, number, boolean, null, undefined, bigint, symbol). Print typeof each.

// // DATATYPES 
// //  1: string("")

// // expamples

// let a="Ali";
// console.log( typeof a);

// // 2: number=anu number 1234
// // examples
// let num=2;
// console.log( typeof num);

// // 3 Boolen : True or Flase;

// // Example

// let bool=true

// console.log(typeof bool);

// // 4 null = mean not emty occuiepy sapce but not a data;

// // Example

// let nul=null;
// console.log(typeof nul);

// // 5 Underdefined : mean not  data wrong  mean if want a call data but who have not exit in a sequence 

// // Example

// let under=undefined;
// console.log(typeof under);

// // 6 bigint


// let big=BigInt(1323233032032323);

// console.log(typeof big);


// // 7 symbole

// let sym=Symbol("descript");

// console.log(typeof sym);





// Task:2
// Create a non-primitive type (object and array). Show that typeof object and array returns "object".


// object 
// let obg = {
//     name:"ali",
//     f_name:"ahamd", 
//     cast:"balcoh",




// }
// console.log(typeof obg);




// arrry


// let arr=["ali",12,"wahab",33,"rind"];

// console.log(typeof arr);


// Task (Challenge):
// Show mutability difference:

// Create a const array and try adding elements to it.

// const ass=[1,2,3];
// ass.push(0);
// console.log(ass);

// const add=[1,2,3,4,5,6];
// add.push(7);
// console.log(add);


// Create a const string and try changing one character.

// const str=["ali"];
// str.push("as");
// console.log(str);  //  not work   generated a error


// Explain why array works but string does not.

//  becasue arry is mutable  datatye so we   chnage the content from arry but we not declare the varible but another thing string is immutable datatpe  that we not the  add  a data or not decalre a varibale  but one process is able to to  add  a content in string to cretae a new const variabke + .slcce that put a data in ( ) that is work properly 


// Conclusion: Arrays (objects) can be mutated in place. Strings (primitives) cannot be changed; you must create a new one.



// Part 2: Mutable vs Immutable
// Task:
// Make a const object student = {name: "Ali", age: 20}.
// Change the name property to "Sara".
// Try reassigning the entire object to a new object.
// Explain the difference (mutable vs immutable).

// const mai = {
//     name:"ali",
//         age:12,



// };

// mai.name="sara";

// console.log(mai);

// mai={
//     name:"sara",
//     age:12,
// }
// console.log(mai);







// Task:3
// Take a string "Hello". Try modifying str[0] = "J". Print it. Explain why the result doesn’t change.

// let name="Hello";
// name[0]="j"

// console.log(name);


// Explanation:besause we can not  add the avalue instrype tyep data if we want to add a data in string so we cretae a a new varaible then assign the value then add the value




// Part 3: Operators
// Task:
// Write code to show the difference between:
// == vs === (loose vs strict equality).
// Example: "5" == 5 and "5" === 5.

// let varww ="12";
// if(varww==12){
//     console.log(varww);



    // so we will print the value 12 beasue is not a type restied if we want to cretae a strict eaucatio so we add === eaual sign that the  varww==="12" nw he is the type resticed vaule if the user  add the vaule of 12 that not pritn the value i save in string but the user add a number type value this is all sanorio
    





// Task:
// Show the difference between ++a (pre-increment) and a++ (post-increment).


// pre-increamenis like exmpale:

// let n=12;
// console.log(++n);

// the value is 13 i used a pre increemtn mean add 1+in 12 the value is print when start the code 


// post-increament


// same way 

// let nn=11;
// console.log(nn++);
// the vaule si same not add a 1 in over value beause we used post increament  operator the vaule is add next line not first time 



// Part 4: Browser Dialogs (alert, prompt, confirm, warn)
// Task:
// Ask user their name using prompt(), then greet them with alert("Hello, <name>!").
// Task:
// Use confirm() to ask the user: "Do you want to delete this file?".
// If they click OK → Show alert "File deleted".
// If they click Cancel → Show alert "File not deleted".


// let user=prompt("What is your name ");
// if(user!==null){
//     alert(`Hello ${user}`);
// }



// let jj=confirm("Do you want to delete this file?");


// if(jj===true){
//      alert("File deleted");
// }else{
//     alert("File not delete");
// }





// Task (Challenge):
// Create a simple calculator:
// Ask user for two numbers using prompt().
// Ask user which operation (+, -, *, /).
// Perform the calculation and show result in alert().

// let value1=prompt("Enter your First Value");
// let operator=prompt("Enter Your Operator");
// let value2=prompt("Enter your Second value");
// let result;


// if(operator== '+'){
//     result= value1 + value2;
// }else if(operator=='-'){
//    result= value1-value2;
// }else if(operator=='*'){
//      result= value1*value2;
// }else if(operator=='/'){
//     result=  value1/value2;

// }else if(operator=='%'){
//     result=  value1%value2;
// }else{
//     result=  "Invlid Operator";
// }

// alert("Result: " + result);





// Task (warn simulation):
// Since JS doesn’t have console.warn() popup, simulate a warning:
// Use alert("⚠️ Warning: You are about to exit!").

alert("⚠️ Warning: You are about to exit!");





