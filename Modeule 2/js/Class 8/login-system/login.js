
let choice = parseInt(prompt("  \n1 for Signup and \n2 for Login"));

let user_signup = "ali"; 
let pass = "123";         
let gmail = "ali@gmail.com";

if (choice === 1) {  // Signup
    let user_name = prompt("Enter your user-name ");
    let gmail = prompt("Enter your Gmail");
    let pass = prompt("Enter your password");
    let re_pas = prompt("Confirm your Password");

    if (re_pas === pass && user_name === user_signup) {
        alert("You are successfully signed up");
     
    } else {
        alert("Your password confirmation does not match");
    }
} else if (choice === 2) {  // Login
    let login_user = prompt("Enter your user-name or email");
    let login_pass = prompt("Enter your password");

    if ((login_user === user_signup || login_user === gmail) && login_pass === pass) {
        alert("You have successfully accessed the website");
    } else if (login_user !== user_signup && login_user !== gmail) {
        alert("Username or email is incorrect");
    } else {
        alert("Invalid password");
    }
} else {
    alert("Invalid choice. Please enter 1 for Signup or 2 for Login.");
}