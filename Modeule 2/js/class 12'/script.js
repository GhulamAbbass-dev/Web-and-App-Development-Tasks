let input = prompt("put number and get factorial ")


function factorial(n){

    if(n === 0 || n === 1){
        return 1
    }
    else { 
        return  n * factorial(n - 1)
    }

}

console.log(factorial(input))