// 🏆 Mega Problem 1 ATM Machine Simulation
// Concepts: prompt, switch, loop, break, continue
// User starts with balance = 1000.


// Menu:

//  1 → Check Balance
// 2 → Deposit Money
// 3 → Withdraw Money
// 4 → Exit
// Keep running until user selects exit.


// Use switch to perform each operation.


// Prevent withdrawal if balance is insufficient.

let Ma_pass=8171;
let Name="Abdul Hakeem";
let balace=300000;
let Num= 0o31643616170;



let Ma_pass_2=123;
let Name_2="Ali";
let balace_2="Balance is insufficient";

let pass=parseInt(prompt("Plz Enter Your Verification Number  For Access Your Account"));

if(pass==Ma_pass){
    let menu=parseInt( prompt("WELCOME"+Name+"\n1 Check Balance \n2 Deposit Money \n3 Withdraw Money  \n4 Exit"));
    switch(menu){
        case 1:
            let Check=parseInt(prompt("Enter Your password"));
            if(Check==Ma_pass){
                document.write("Your Blance is:",balace);
            }else{
                document.write("Your data iS not our Record");
            }
            break;
      case 2:
   let sec_case = parseInt(prompt("Plz Select Your Payment Method \n1 EasyPaisa \n2 JazzCash \n3 Bank"));

let methodName = "";

if (sec_case === 1) methodName = "EasyPaisa";
else if (sec_case === 2) methodName = "JazzCash";
else if (sec_case === 3) methodName = "Bank";

if (methodName) {
  let val = prompt(`You selected ${methodName}\nEnter Your Number:`);
  if(val === Num){

    let amount=parseInt(prompt("your number is",val,"Your name is :",Name ));


}} else {
  alert("Invalid selection! Please choose 1, 2, or 3.");
}
}
    
}
else{
    alert("Invlid Password")
}
