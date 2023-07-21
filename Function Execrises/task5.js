function checkLeapYear(x){
    if((x % 4==0) && (x % 100!==0) || (x % 400==0))
    {
        console.log(x+" is leap year.");
    }
    else{
        console.log(x+" is not leap year");
    }
}
checkLeapYear(2048);
