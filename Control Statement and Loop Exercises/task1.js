var x=prompt("Enter the X value");
var y=prompt("Enter the y value");
var z=prompt("Enter the z value");
if (x>0 && y>0 && z>0)
{
       alert("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
         alert("The sign is -");
        }
        else if (x>0 && y<0 && z<0)
        {
         alert("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
            alert("The sign is +");
        }
        else
        {
            alert("The sign is -");
        }