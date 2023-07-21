function evalNumbers(num1,num2,operation){
    if(operation=="add") {
         console.log("the addition is " + (num1+num2))
    }else if(operation=="sub"){
         console.log("the Subtraction is " + (num1-num2))
     }else if(operation=="multi"){
         console.log("the multiplication is " + (num1*num2))
     }else if(operation=="div"){
         console.log("the division is " + (num1/num2))
     }else if(operation=="mod"){
         console.log("the modulus is " + (num1%num2))
     }
     else{
         console.log("Invalid operation")
     }
 }
 evalNumbers(5,10,"multi")