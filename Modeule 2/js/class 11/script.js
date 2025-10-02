
// Functions

// Particualar task - with different value -- called (function)

// procedural prog
// Functional Prog
// let name = 'ALice'
// Syntex
// 1) Named function
// Parameters - variable
// argurements  - values
// function greet(name){
//     console.log(`kia hall chal ha ${name}`);
// }

// greet('Alice')

// Hoisting
// sum(3,7) // nhi chaly ga
// function sum(a,b){
    // return a+b;
    // console.log(a+b);
    
// }
// console.log(sum(4,7));
// ---------------------------------------

// 2) Expression Function

// let res = a + b
// const greet = function(name){
//     console.log(`kia hall chal ha ${name}`);
// }
// greet('Alice')


// greet(3,6)
// const greet = function(a,b){
//     // return a+b;
//     console.log(a+b); 
// }
// console.log(greet(3,6));


// 3) Arrow Function (ES+)

// const sum = (a,b) => a+b;
const sum = (a,b) => {
    console.log(a+b); 
}
// console.log(sum(5,4));
sum(5,7)


// name Funcation
function Grade(a,b){
    return a+b;
}
Grade(3,4);

// expersation funcation

const eli=function(a,b){
    return a-b;
}
eli(3,4);


// arrow funcstion

const aa=(a,b)=>{
    console.log(a+b);
    return a+b;
}

aa(12,44)


// name funcation

function name(params) {
    
}


function toggleLight(ison){
    if(ison){
        console.log("Light is ON 💡");
        
    }else{
        console.log("Light is OFF 🌑");
        
    }
}

toggleLight(confirm("enter you "));
if(toggleLight==true){
    toggleLight(true)
}

