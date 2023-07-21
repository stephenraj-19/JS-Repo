function findDaysInMonth(month,year)
{
if(month<=12)
{
    if(month==2)
    {
        if((0==year %4)&&(0!=year%100) || (0==year%400))
        {
        console.log("The month has 29 days.");   
        }
        else{
        console.log("The month has 28 days.")
        }
    }
    else if(month==4 || month==6 || month==9 || month==11)
    {
        console.log("The month has 30 days.")  
    }
    else{
        console.log("The month has 31 days.")
    }
    }
    else {
        console.log("Invalid month")
    }
}
findDaysInMonth(2,2012)