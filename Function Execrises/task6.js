function findGrade(x){
    if(x>=90 && x<=100){
    console.log("S grade")
    }
    else if(x>=80 && x<=90)
    {
        console.log("A grade")
    }
    else if(x>=70 && x<=80)
    {
        console.log("B grade")
    }
    else if(x>=60 && x<=70)
    {
        console.log("C grade")
    }
    else if(x>=50 && x<=60)
    {
        console.log("D grade")
    }
    else if(x>=40 && x<=50)
    {
        console.log("E grade")
    }
    else{
        console.log("Student has failed")
    }
    } 
    findGrade(71)