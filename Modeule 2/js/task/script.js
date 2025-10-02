function toggleLight(ison){
    if(ison){
        console.log("Light is ON ");
    
    }else{
        console.log("Light is OFF ");
        
    }
}
toggleLight(confirm("IF You want to On light Click OK"))

if(confirm==true){
    toggleLight(ison);
}

const ali=function(lockDoor){
    if(lockDoor){
        console.log("The main door is locked ");
      
    }else{
          console.log("The main  is not locked  door");
          
    }

}

ali(confirm("You Wan to Lock the Door Click ok Else Cancel"));

if(confirm==true){
    console.log(ali(lockDoor));
    
}

const main=(temp)=>{
if(temp){
    console.log("AC is set to "+temp+"°C" );
    
}else{
    console.log("AC is not set to:"+temp+"°C" );
    
}
return temp;
}
main(prompt("Enter you Ac Temp"));

// if(prompt===true){
//     console.log(main(temp));
    
// }else{
//         console.log("AC is not set to {main}°C ");
// }



if(i=0,i>10,a++){
    console.log(i);
    if(a=0,a>10,a++){

        console.log("<br> "a);
        
    }
    
}